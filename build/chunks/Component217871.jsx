/** Chunk was on 81985 **/
/** chunk id: 217871, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./358797.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
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
  Chunk869121 = require("./869121.js");
let x = Chunk473749.memo(function(e) {
    let {
      channelId: t,
      width: n
    } = e, l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), a = (0, s.e7)([b.ZP], () => b.ZP.getMostRecentMessageCombo(t), [t]), [u, p] = i.useState(false);
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
      className: j.messageComboScore,
      style: h,
      children: (0, r.jsx)(c.Text, {
        className: j.comboScore,
        variant: "text-sm/bold",
        children: (0, y.Eo)(a.combo)
      })
    })
  }),
  C = Chunk473749.memo(function(e) {
    let {
      value: t,
      multiplier: n
    } = e, {
      color: l,
      square: o,
      flair: s
    } = i.useMemo(() => (0, y.yz)(n), [n]);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Text, {
        className: j.comboValue,
        variant: "text-sm/bold",
        children: t
      }), (0, r.jsxs)("div", {
        className: j.comboNameplate,
        style: {
          color: l
        },
        children: [(0, r.jsx)(c.Text, {
          className: j.comboMultiplier,
          style: {
            color: l
          },
          variant: "text-sm/bold",
          children: O.intl.format(O.t["6bgVlq"], {
            multiplier: n
          })
        }), o && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(j.comboSquare, j.left),
            style: {
              backgroundColor: l
            }
          }), (0, r.jsx)("div", {
            className: a()(j.comboSquare, j.right),
            style: {
              backgroundColor: l
            }
          })]
        }), s && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(j.confettiIcon, j.left),
            children: (0, r.jsx)(h.Z, {
              width: 24,
              height: 24
            })
          }), (0, r.jsx)("div", {
            className: a()(j.confettiIcon, j.right),
            children: (0, r.jsx)(h.Z, {
              width: 24,
              height: 24
            })
          })]
        }), 1 === n && (0, r.jsx)(c.Text, {
          className: j.tip,
          variant: "text-sm/bold",
          children: O.intl.string(O.t.b5Cpof)
        })]
      })]
    })
  }),
  E = Chunk473749.memo(function(e) {
    let {
      channelId: t
    } = e, n = (0, s.e7)([p.default], () => p.default.getId()), l = (0, s.e7)([f.Z], () => f.Z.isTyping(t, n), [t, n]), a = (0, s.e7)([m.Z], () => m.Z.isEnabled()), d = (0, s.e7)([b.ZP], () => b.ZP.isComboing(n, t), [t, n]), {
      ref: h,
      width: g = 0
    } = (0, u.ZP)(), [y, O] = i.useState(false), E = (0, v.Z)(t), S = a && d && l;
    i.useEffect(() => {
      S && O(true);
      let e = setTimeout(() => O(S), 1e3);
      return () => clearTimeout(e)
    }, [S]);
    let _ = (0, c.q_F)({
        opacity: +!!y,
        transform: y ? "translateY(0)" : "translateY(100%)",
        pointerEvents: "none",
        config: o.config.stiff
      }),
      I = i.useMemo(() => null != E ? E : {
        value: 0,
        multiplier: 1
      }, [E]),
      P = i.useRef(I);
    i.useEffect(() => {
      (I.multiplier > 1 || I.value > 0) && (P.current = I)
    }, [I]);
    let {
      multiplier: Z,
      value: N
    } = i.useMemo(() => ({
      value: S ? I.value : P.current.value,
      multiplier: S ? I.multiplier : P.current.multiplier
    }), [S, I, P]);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(x, {
        channelId: t,
        width: g
      }), (0, r.jsx)(o.animated.div, {
        ref: h,
        className: j.combo,
        style: _,
        children: (0, r.jsx)(C, {
          value: N,
          multiplier: Z
        })
      })]
    })
  })