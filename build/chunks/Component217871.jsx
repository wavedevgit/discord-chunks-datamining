/** Chunk was on web.js **/
/** chunk id: 217871, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./358797.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
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
  Chunk837265 = require("./837265.js");
let I = 1e3,
  T = 2e3,
  S = Chunk73800.memo(function(e) {
    let {
      channelId: t,
      width: n
    } = e, o = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), a = (0, l.e7)([E.ZP], () => E.ZP.getMostRecentMessageCombo(t), [t]), [u, f] = i.useState(false);
    i.useEffect(() => {
      if (null == a ? true : a.displayed) return;
      f(false), setImmediate(() => {
        f((null != a ? (0, b.Eo)(a.combo) : 0) > 0)
      });
      let e = setTimeout(() => {
        f(false), null != a && (0, m.ew)(a)
      }, T);
      return () => clearTimeout(e)
    }, [a]);
    let _ = null != a ? "100%" : "200%",
      p = (0, c.q_F)({
        opacity: +!!u,
        translateY: u ? "0" : _,
        pointerEvents: "none",
        width: n,
        config: o ? s.config.stiff : s.config.slow
      }, "animate-always");
    return null != a && (0, r.jsx)(s.animated.div, {
      className: v.messageComboScore,
      style: p,
      children: (0, r.jsx)(c.Text, {
        className: v.comboScore,
        variant: "text-sm/bold",
        children: (0, b.Eo)(a.combo)
      })
    })
  }),
  A = Chunk73800.memo(function(e) {
    let {
      value: t,
      multiplier: n
    } = e, {
      color: o,
      square: s,
      flair: l
    } = i.useMemo(() => (0, b.yz)(n), [n]), u = (0, f.Lq)(o);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Text, {
        className: v.comboValue,
        variant: "text-sm/bold",
        children: t
      }), (0, r.jsxs)("div", {
        className: v.comboNameplate,
        style: {
          color: u
        },
        children: [(0, r.jsx)(c.Text, {
          className: v.comboMultiplier,
          style: {
            color: u
          },
          variant: "text-sm/bold",
          children: O.intl.format(O.t["6bgVlp"], {
            multiplier: n
          })
        }), s && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(v.comboSquare, v.left),
            style: {
              backgroundColor: u
            }
          }), (0, r.jsx)("div", {
            className: a()(v.comboSquare, v.right),
            style: {
              backgroundColor: u
            }
          })]
        }), l && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(v.confettiIcon, v.left),
            children: (0, r.jsx)(h.Z, {
              width: 24,
              height: 24
            })
          }), (0, r.jsx)("div", {
            className: a()(v.confettiIcon, v.right),
            children: (0, r.jsx)(h.Z, {
              width: 24,
              height: 24
            })
          })]
        }), 1 === n && (0, r.jsx)(c.Text, {
          className: v.tip,
          variant: "text-sm/bold",
          children: O.intl.string(O.t.b5Cpoa)
        })]
      })]
    })
  }),
  N = Chunk73800.memo(function(e) {
    let {
      channelId: t
    } = e, n = (0, l.e7)([_.default], () => _.default.getId()), o = (0, l.e7)([p.Z], () => p.Z.isTyping(t, n), [t, n]), a = (0, l.e7)([g.Z], () => g.Z.isEnabled()), d = (0, l.e7)([E.ZP], () => E.ZP.isComboing(n, t), [t, n]), {
      ref: f,
      width: h = 0
    } = (0, u.ZP)(), [m, b] = i.useState(false), O = (0, y.Z)(t), T = a && d && o;
    i.useEffect(() => {
      T && b(true);
      let e = setTimeout(() => b(T), I);
      return () => clearTimeout(e)
    }, [T]);
    let N = (0, c.q_F)({
        opacity: +!!m,
        transform: m ? "translateY(0)" : "translateY(100%)",
        pointerEvents: "none",
        config: s.config.stiff
      }),
      C = i.useMemo(() => null != O ? O : {
        value: 0,
        multiplier: 1
      }, [O]),
      R = i.useRef(C);
    i.useEffect(() => {
      (C.multiplier > 1 || C.value > 0) && (R.current = C)
    }, [C]);
    let {
      multiplier: P,
      value: w
    } = i.useMemo(() => ({
      value: T ? C.value : R.current.value,
      multiplier: T ? C.multiplier : R.current.multiplier
    }), [T, C, R]);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(S, {
        channelId: t,
        width: h
      }), (0, r.jsx)(s.animated.div, {
        ref: f,
        className: v.combo,
        style: N,
        children: (0, r.jsx)(A, {
          value: w,
          multiplier: P
        })
      })]
    })
  })