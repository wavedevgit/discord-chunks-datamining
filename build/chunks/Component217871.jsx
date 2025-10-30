/** Chunk was on 13873 **/
/** chunk id: 217871, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./358797.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk607070 = require("./607070.js"),
  Chunk44315 = require("./44315.js"),
  Chunk314897 = require("./314897.js"),
  Chunk111583 = require("./111583.js"),
  Chunk889901 = require("./889901.jsx"),
  Chunk64078 = require("./64078.js"),
  Chunk351780 = require("./351780.js"),
  Chunk843693 = require("./843693.js"),
  Chunk641033 = require("./641033.js"),
  Chunk989830 = require("./989830.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk436083 = require("./436083.js");
let x = Chunk647438.memo(function(e) {
    let {
      channelId: t,
      width: n
    } = e, l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), a = (0, s.e7)([_.ZP], () => _.ZP.getMostRecentMessageCombo(t), [t]), [u, p] = i.useState(false);
    i.useEffect(() => {
      if (null == a ? true : a.displayed) return;
      p(false), setImmediate(() => {
        p((null != a ? (0, y.Eo)(a.combo) : 0) > 0)
      });
      let e = setTimeout(() => {
        p(false), null != a && (0, g.ew)(a)
      }, 2e3);
      return () => clearTimeout(e)
    }, [a]);
    let f = null != a ? "100%" : "200%",
      h = (0, c.q_F)({
        opacity: +!!u,
        translateY: u ? "0" : f,
        pointerEvents: "none",
        width: n,
        config: l ? o.config.stiff : o.config.slow
      }, "animate-always");
    return null != a && (0, r.jsx)(o.animated.div, {
      className: O.messageComboScore,
      style: h,
      children: (0, r.jsx)(c.Text, {
        className: O.comboScore,
        variant: "text-sm/bold",
        children: (0, y.Eo)(a.combo)
      })
    })
  }),
  E = Chunk647438.memo(function(e) {
    let {
      value: t,
      multiplier: n
    } = e, {
      color: l,
      square: o,
      flair: s
    } = i.useMemo(() => (0, y.yz)(n), [n]), u = (0, p.Lq)(l);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Text, {
        className: O.comboValue,
        variant: "text-sm/bold",
        children: t
      }), (0, r.jsxs)("div", {
        className: O.comboNameplate,
        style: {
          color: u
        },
        children: [(0, r.jsx)(c.Text, {
          className: O.comboMultiplier,
          style: {
            color: u
          },
          variant: "text-sm/bold",
          children: v.intl.format(v.t["6bgVlq"], {
            multiplier: n
          })
        }), o && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(O.comboSquare, O.left),
            style: {
              backgroundColor: u
            }
          }), (0, r.jsx)("div", {
            className: a()(O.comboSquare, O.right),
            style: {
              backgroundColor: u
            }
          })]
        }), s && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(O.confettiIcon, O.left),
            children: (0, r.jsx)(m.Z, {
              width: 24,
              height: 24
            })
          }), (0, r.jsx)("div", {
            className: a()(O.confettiIcon, O.right),
            children: (0, r.jsx)(m.Z, {
              width: 24,
              height: 24
            })
          })]
        }), 1 === n && (0, r.jsx)(c.Text, {
          className: O.tip,
          variant: "text-sm/bold",
          children: v.intl.string(v.t.b5Cpof)
        })]
      })]
    })
  }),
  j = Chunk647438.memo(function(e) {
    let {
      channelId: t
    } = e, n = (0, s.e7)([f.default], () => f.default.getId()), l = (0, s.e7)([h.Z], () => h.Z.isTyping(t, n), [t, n]), a = (0, s.e7)([b.Z], () => b.Z.isEnabled()), d = (0, s.e7)([_.ZP], () => _.ZP.isComboing(n, t), [t, n]), {
      ref: p,
      width: m = 0
    } = (0, u.ZP)(), [g, y] = i.useState(false), v = (0, C.Z)(t), j = a && d && l;
    i.useEffect(() => {
      j && y(true);
      let e = setTimeout(() => y(j), 1e3);
      return () => clearTimeout(e)
    }, [j]);
    let S = (0, c.q_F)({
        opacity: +!!g,
        transform: g ? "translateY(0)" : "translateY(100%)",
        pointerEvents: "none",
        config: o.config.stiff
      }),
      P = i.useMemo(() => null != v ? v : {
        value: 0,
        multiplier: 1
      }, [v]),
      I = i.useRef(P);
    i.useEffect(() => {
      (P.multiplier > 1 || P.value > 0) && (I.current = P)
    }, [P]);
    let {
      multiplier: Z,
      value: T
    } = i.useMemo(() => ({
      value: j ? P.value : I.current.value,
      multiplier: j ? P.multiplier : I.current.multiplier
    }), [j, P, I]);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(x, {
        channelId: t,
        width: m
      }), (0, r.jsx)(o.animated.div, {
        ref: p,
        className: O.combo,
        style: S,
        children: (0, r.jsx)(E, {
          value: T,
          multiplier: Z
        })
      })]
    })
  })