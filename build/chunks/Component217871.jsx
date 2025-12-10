/** Chunk was on 73755 **/
/** chunk id: 217871, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./358797.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk607070 = require("./607070.js"),
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
    } = e, l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), a = (0, s.e7)([b.ZP], () => b.ZP.getMostRecentMessageCombo(t), [t]), [u, p] = r.useState(false);
    r.useEffect(() => {
      if (null == a ? true : a.displayed) return;
      p(false), setImmediate(() => {
        p((null != a ? (0, C.Eo)(a.combo) : 0) > 0)
      });
      let e = setTimeout(() => {
        p(false), null != a && (0, m.ew)(a)
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
      className: v.messageComboScore,
      style: f,
      children: (0, i.jsx)(c.Text, {
        className: v.comboScore,
        variant: "text-sm/bold",
        children: (0, C.Eo)(a.combo)
      })
    })
  }),
  x = Chunk473749.memo(function(e) {
    let {
      value: t,
      multiplier: n
    } = e, {
      color: l,
      square: o,
      flair: s
    } = r.useMemo(() => (0, C.yz)(n), [n]);
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(c.Text, {
        className: v.comboValue,
        variant: "text-sm/bold",
        children: t
      }), (0, i.jsxs)("div", {
        className: v.comboNameplate,
        style: {
          color: l
        },
        children: [(0, i.jsx)(c.Text, {
          className: v.comboMultiplier,
          style: {
            color: l
          },
          variant: "text-sm/bold",
          children: _.intl.format(_.t["6bgVlq"], {
            multiplier: n
          })
        }), o && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("div", {
            className: a()(v.comboSquare, v.left),
            style: {
              backgroundColor: l
            }
          }), (0, i.jsx)("div", {
            className: a()(v.comboSquare, v.right),
            style: {
              backgroundColor: l
            }
          })]
        }), s && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("div", {
            className: a()(v.confettiIcon, v.left),
            children: (0, i.jsx)(f.Z, {
              width: 24,
              height: 24
            })
          }), (0, i.jsx)("div", {
            className: a()(v.confettiIcon, v.right),
            children: (0, i.jsx)(f.Z, {
              width: 24,
              height: 24
            })
          })]
        }), 1 === n && (0, i.jsx)(c.Text, {
          className: v.tip,
          variant: "text-sm/bold",
          children: _.intl.string(_.t.b5Cpof)
        })]
      })]
    })
  }),
  E = Chunk473749.memo(function(e) {
    let {
      channelId: t
    } = e, n = (0, s.e7)([p.default], () => p.default.getId()), l = (0, s.e7)([h.Z], () => h.Z.isTyping(t, n), [t, n]), a = (0, s.e7)([g.Z], () => g.Z.isEnabled()), d = (0, s.e7)([b.ZP], () => b.ZP.isComboing(n, t), [t, n]), {
      ref: f,
      width: m = 0
    } = (0, u.ZP)(), [C, _] = r.useState(false), E = (0, y.Z)(t), j = a && d && l;
    r.useEffect(() => {
      j && _(true);
      let e = setTimeout(() => _(j), 1e3);
      return () => clearTimeout(e)
    }, [j]);
    let S = (0, c.q_F)({
        opacity: +!!C,
        transform: C ? "translateY(0)" : "translateY(100%)",
        pointerEvents: "none",
        config: o.config.stiff
      }),
      P = r.useMemo(() => null != E ? E : {
        value: 0,
        multiplier: 1
      }, [E]),
      I = r.useRef(P);
    r.useEffect(() => {
      (P.multiplier > 1 || P.value > 0) && (I.current = P)
    }, [P]);
    let {
      multiplier: Z,
      value: T
    } = r.useMemo(() => ({
      value: j ? P.value : I.current.value,
      multiplier: j ? P.multiplier : I.current.multiplier
    }), [j, P, I]);
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(O, {
        channelId: t,
        width: m
      }), (0, i.jsx)(o.animated.div, {
        ref: f,
        className: v.combo,
        style: S,
        children: (0, i.jsx)(x, {
          value: T,
          multiplier: Z
        })
      })]
    })
  })