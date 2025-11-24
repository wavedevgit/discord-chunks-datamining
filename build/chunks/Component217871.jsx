/** Chunk was on 34740 **/
/** chunk id: 217871, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./358797.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk790519 = require("./790519.js"),
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
  Chunk23586 = require("./23586.js");
let O = Chunk473749.memo(function(e) {
    let {
      channelId: t,
      width: n
    } = e, l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), a = (0, s.e7)([y.ZP], () => y.ZP.getMostRecentMessageCombo(t), [t]), [u, p] = r.useState(false);
    r.useEffect(() => {
      if (null == a ? true : a.displayed) return;
      p(false), setImmediate(() => {
        p((null != a ? (0, C.Eo)(a.combo) : 0) > 0)
      });
      let e = setTimeout(() => {
        p(false), null != a && (0, g.ew)(a)
      }, 2e3);
      return () => clearTimeout(e)
    }, [a]);
    let h = null != a ? "100%" : "200%",
      f = (0, c.q_F)({
        opacity: +!!u,
        translateY: u ? "0" : h,
        pointerEvents: "none",
        width: n,
        config: l ? o.config.stiff : o.config.slow
      }, "animate-always");
    return null != a && (0, i.jsx)(o.animated.div, {
      className: x.messageComboScore,
      style: f,
      children: (0, i.jsx)(c.Text, {
        className: x.comboScore,
        variant: "text-sm/bold",
        children: (0, C.Eo)(a.combo)
      })
    })
  }),
  j = Chunk473749.memo(function(e) {
    let {
      value: t,
      multiplier: n
    } = e, {
      color: l,
      square: o,
      flair: s
    } = r.useMemo(() => (0, C.yz)(n), [n]), u = (0, p.Lq)(l);
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(c.Text, {
        className: x.comboValue,
        variant: "text-sm/bold",
        children: t
      }), (0, i.jsxs)("div", {
        className: x.comboNameplate,
        style: {
          color: u
        },
        children: [(0, i.jsx)(c.Text, {
          className: x.comboMultiplier,
          style: {
            color: u
          },
          variant: "text-sm/bold",
          children: _.intl.format(_.t["6bgVlq"], {
            multiplier: n
          })
        }), o && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("div", {
            className: a()(x.comboSquare, x.left),
            style: {
              backgroundColor: u
            }
          }), (0, i.jsx)("div", {
            className: a()(x.comboSquare, x.right),
            style: {
              backgroundColor: u
            }
          })]
        }), s && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("div", {
            className: a()(x.confettiIcon, x.left),
            children: (0, i.jsx)(m.Z, {
              width: 24,
              height: 24
            })
          }), (0, i.jsx)("div", {
            className: a()(x.confettiIcon, x.right),
            children: (0, i.jsx)(m.Z, {
              width: 24,
              height: 24
            })
          })]
        }), 1 === n && (0, i.jsx)(c.Text, {
          className: x.tip,
          variant: "text-sm/bold",
          children: _.intl.string(_.t.b5Cpof)
        })]
      })]
    })
  }),
  E = Chunk473749.memo(function(e) {
    let {
      channelId: t
    } = e, n = (0, s.e7)([h.default], () => h.default.getId()), l = (0, s.e7)([f.Z], () => f.Z.isTyping(t, n), [t, n]), a = (0, s.e7)([b.Z], () => b.Z.isEnabled()), d = (0, s.e7)([y.ZP], () => y.ZP.isComboing(n, t), [t, n]), {
      ref: p,
      width: m = 0
    } = (0, u.ZP)(), [g, C] = r.useState(false), _ = (0, v.Z)(t), E = a && d && l;
    r.useEffect(() => {
      E && C(true);
      let e = setTimeout(() => C(E), 1e3);
      return () => clearTimeout(e)
    }, [E]);
    let S = (0, c.q_F)({
        opacity: +!!g,
        transform: g ? "translateY(0)" : "translateY(100%)",
        pointerEvents: "none",
        config: o.config.stiff
      }),
      P = r.useMemo(() => null != _ ? _ : {
        value: 0,
        multiplier: 1
      }, [_]),
      I = r.useRef(P);
    r.useEffect(() => {
      (P.multiplier > 1 || P.value > 0) && (I.current = P)
    }, [P]);
    let {
      multiplier: Z,
      value: T
    } = r.useMemo(() => ({
      value: E ? P.value : I.current.value,
      multiplier: E ? P.multiplier : I.current.multiplier
    }), [E, P, I]);
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(O, {
        channelId: t,
        width: m
      }), (0, i.jsx)(o.animated.div, {
        ref: p,
        className: x.combo,
        style: S,
        children: (0, i.jsx)(j, {
          value: T,
          multiplier: Z
        })
      })]
    })
  })