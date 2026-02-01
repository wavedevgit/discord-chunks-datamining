/** Chunk was on 61344 **/
/** chunk id: 329449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js"), require("./142703.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk775602 = require("./775602.js"),
  Chunk961350 = require("./961350.js"),
  Chunk741961 = require("./741961.js"),
  Chunk682174 = require("./682174.jsx"),
  Chunk928830 = require("./928830.js"),
  Chunk3137 = require("./3137.js"),
  Chunk559908 = require("./559908.js"),
  Chunk103640 = require("./103640.js"),
  Chunk924177 = require("./924177.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk733313 = require("./733313.js");
let E = Chunk64700.memo(function(e) {
    let {
      channelId: t,
      width: n
    } = e, i = (0, o.bG)([d.A], () => d.A.useReducedMotion), a = (0, o.bG)([A.Ay], () => A.Ay.getMostRecentMessageCombo(t), [t]), [u, h] = r.useState(false);
    r.useEffect(() => {
      if (null == a ? true : a.displayed) return;
      h(false), setImmediate(() => {
        h((null != a ? (0, b.RL)(a.combo) : 0) > 0)
      });
      let e = setTimeout(() => {
        h(false), null != a && (0, m.Nu)(a)
      }, 2e3);
      return () => clearTimeout(e)
    }, [a]);
    let p = null != a ? "100%" : "200%",
      f = (0, c.zhh)({
        opacity: +!!u,
        translateY: u ? "0" : p,
        pointerEvents: "none",
        width: n,
        config: i ? s.config.stiff : s.config.slow
      }, "animate-always");
    return null != a && (0, l.jsx)(s.animated.div, {
      className: v.Gi,
      style: f,
      children: (0, l.jsx)(c.Text, {
        className: v.fX,
        variant: "text-sm/bold",
        children: (0, b.RL)(a.combo)
      })
    })
  }),
  O = Chunk64700.memo(function(e) {
    let {
      value: t,
      multiplier: n
    } = e, {
      color: i,
      square: s,
      flair: o
    } = r.useMemo(() => (0, b.HN)(n), [n]);
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(c.Text, {
        className: v.iR,
        variant: "text-sm/bold",
        children: t
      }), (0, l.jsxs)("div", {
        className: v._Z,
        style: {
          color: i
        },
        children: [(0, l.jsx)(c.Text, {
          className: v.On,
          style: {
            color: i
          },
          variant: "text-sm/bold",
          children: y.intl.format(y.t["6bgVlq"], {
            multiplier: n
          })
        }), s && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("div", {
            className: a()(v.QA, v.kb),
            style: {
              backgroundColor: i
            }
          }), (0, l.jsx)("div", {
            className: a()(v.QA, v.pG),
            style: {
              backgroundColor: i
            }
          })]
        }), o && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("div", {
            className: a()(v.ox, v.kb),
            children: (0, l.jsx)(f.A, {
              width: 24,
              height: 24
            })
          }), (0, l.jsx)("div", {
            className: a()(v.ox, v.pG),
            children: (0, l.jsx)(f.A, {
              width: 24,
              height: 24
            })
          })]
        }), 1 === n && (0, l.jsx)(c.Text, {
          className: v.uN,
          variant: "text-sm/bold",
          children: y.intl.string(y.t.b5Cpof)
        })]
      })]
    })
  }),
  C = Chunk64700.memo(function(e) {
    let {
      channelId: t
    } = e, n = (0, o.bG)([h.default], () => h.default.getId()), i = (0, o.bG)([p.A], () => p.A.isTyping(t, n), [t, n]), a = (0, o.bG)([g.A], () => g.A.isEnabled()), d = (0, o.bG)([A.Ay], () => A.Ay.isComboing(n, t), [t, n]), {
      ref: f,
      width: m = 0
    } = (0, u.Ay)(), [b, y] = r.useState(false), C = (0, _.A)(t), x = a && d && i;
    r.useEffect(() => {
      x && y(true);
      let e = setTimeout(() => y(x), 1e3);
      return () => clearTimeout(e)
    }, [x]);
    let S = (0, c.zhh)({
        opacity: +!!b,
        transform: b ? "translateY(0)" : "translateY(100%)",
        pointerEvents: "none",
        config: s.config.stiff
      }),
      j = r.useMemo(() => null != C ? C : {
        value: 0,
        multiplier: 1
      }, [C]),
      I = r.useRef(j);
    r.useEffect(() => {
      (j.multiplier > 1 || j.value > 0) && (I.current = j)
    }, [j]);
    let {
      multiplier: T,
      value: N
    } = r.useMemo(() => ({
      value: x ? j.value : I.current.value,
      multiplier: x ? j.multiplier : I.current.multiplier
    }), [x, j, I]);
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(E, {
        channelId: t,
        width: m
      }), (0, l.jsx)(s.animated.div, {
        ref: f,
        className: v.p_,
        style: S,
        children: (0, l.jsx)(O, {
          value: N,
          multiplier: T
        })
      })]
    })
  })