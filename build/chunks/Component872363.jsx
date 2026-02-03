/** Chunk was on 61344 **/
/** chunk id: 872363, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
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

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = (0, Chunk23339.xI)(Chunk319060.A.LIVE_INDICATOR_BORDER_RADIUS),
  T = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  N = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  P = {
    opacity: 0
  },
  w = {
    opacity: 1
  },
  R = {
    borderRadius: "".concat(I, "px ").concat(I, "px ").concat(I, "px ").concat(I, "px")
  },
  D = {
    borderRadius: "0px ".concat(I, "px ").concat(I, "px 0px")
  },
  M = {
    mass: 1,
    tension: 500,
    friction: 18,
    clamp: true
  },
  L = e => {
    let t, i, {
        participant: s,
        isUpsellEnabled: o,
        shape: h,
        size: I,
        didTrackUpsellViewed: T,
        setDidTrackUpsellViewed: N,
        className: P,
        premiumIndicator: w,
        quality: R
      } = e,
      {
        analyticsLocations: D
      } = (0, m.Ay)(),
      M = null != (0, v.A)(s);
    try {
      t = (0, y.HB)(R)
    } catch (e) {
      t = false
    }
    try {
      i = (0, y.OI)(R)
    } catch (e) {
      i = false
    }
    let L = t || i,
      {
        location: k
      } = (0, f.p)(),
      U = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
      G = o && !_.Ay.isPremium(U, O.PremiumTypes.TIER_1) && !_.Ay.canStreamQuality(_.Ay.StreamQuality.MID, U),
      F = r.useCallback(() => {
        G && L && (0, p.mMO)(async () => {
          let {
            default: e
          } = await n.e("18630").then(n.bind(n, 826789));
          return t => (0, l.jsx)(e, j(x({}, t), {
            analyticsSource: k
          }))
        })
      }, [G, L, k]);
    if (r.useEffect(() => {
        !T && L && (b.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, {
          type: O.e.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: i,
          location_stack: D
        }), N(true))
      }, [t, i, L, T, N, D]), null == R) return null;
    let H = (0, l.jsx)(d.m, {
      text: M ? C.intl.string(C.t.q8TiVt) : L ? C.intl.string(C.t.IHgpEn) : C.intl.string(C.t.vLb0VW),
      position: "bottom",
      children: (0, l.jsxs)(p.DUT, {
        onClick: F,
        className: a()(S.t5, I, g.u1[h], M ? S.Y5 : S.Lc, {
          [S.vk]: G && L
        }),
        children: [L ? (0, l.jsx)(p.tvc, {
          size: "md",
          color: "currentColor",
          className: S.fY
        }) : null, (0, l.jsx)("span", {
          className: S.UD,
          children: (0, y.ME)(R.maxResolution)
        }), (0, l.jsx)("span", {
          children: (0, y.Bs)(R.maxFrameRate)
        })]
      })
    });
    return (0, l.jsx)(p.LpS, {
      text: H,
      className: a()(P, S.AA, {
        [S.Dc]: L && w
      }),
      color: u.A.unsafe_rawColors.PRIMARY_500.css,
      shape: g.u1[h]
    })
  },
  k = e => {
    let {
      participant: t,
      showQuality: n,
      isUpsellEnabled: i = true,
      size: o,
      className: c,
      premiumIndicator: u
    } = e, [d, h] = r.useState(false), f = (0, y.N5)(t), {
      reducedMotion: m
    } = r.useContext(p.CZY), A = n && null != f, b = (0, p.pnh)(A, {
      enter: {
        from: m.enabled ? P : T,
        to: m.enabled ? w : N
      },
      leave: m.enabled ? P : T,
      config: M
    }, "animate-always"), _ = (0, p.zhh)({
      to: A ? D : R,
      config: M
    }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: r
      } = e;
      return (0, l.jsxs)("div", j(x({
        className: a()(S.dr, n)
      }, r), {
        children: [b((e, n) => n ? (0, l.jsx)(s.animated.div, {
          style: e,
          children: (0, l.jsx)(L, {
            className: S.LZ,
            participant: t,
            size: o,
            shape: p.EGs.ROUND_LEFT,
            isUpsellEnabled: i,
            didTrackUpsellViewed: d,
            setDidTrackUpsellViewed: h,
            premiumIndicator: u,
            quality: f
          })
        }) : null), (0, l.jsx)(s.animated.div, {
          style: _,
          className: S.Ok,
          children: (0, l.jsx)(g.Ay, {
            look: g.gv.RED,
            size: o,
            shape: A ? p.EGs.ROUND_RIGHT : p.EGs.ROUND
          })
        })]
      }))
    })({
      className: c
    })
  }