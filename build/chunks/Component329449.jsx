/** Chunk was on 97492 **/
/** chunk id: 329449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js"), require("./142703.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
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
let v = Chunk64700.memo(function(e) {
    let {
      channelId: t,
      width: n
    } = e, i = (0, o.bG)([d.A], () => d.A.useReducedMotion), a = (0, o.bG)([m.Ay], () => m.Ay.getMostRecentMessageCombo(t), [t]), [u, f] = l.useState(false);
    l.useEffect(() => {
      if (null == a ? true : a.displayed) return;
      f(false), setImmediate(() => {
        f((null != a ? (0, A.RL)(a.combo) : 0) > 0)
      });
      let e = setTimeout(() => {
        f(false), null != a && (0, b.Nu)(a)
      }, 2e3);
      return () => clearTimeout(e)
    }, [a]);
    let p = null != a ? "100%" : "200%",
      h = (0, c.zhh)({
        opacity: +!!u,
        translateY: u ? "0" : p,
        pointerEvents: "none",
        width: n,
        config: i ? s.config.stiff : s.config.slow
      }, "animate-always");
    return null != a && (0, r.jsx)(s.animated.div, {
      className: j.Gi,
      style: h,
      children: (0, r.jsx)(c.Text, {
        className: j.fX,
        variant: "text-sm/bold",
        children: (0, A.RL)(a.combo)
      })
    })
  }),
  x = Chunk64700.memo(function(e) {
    let {
      value: t,
      multiplier: n
    } = e, {
      color: i,
      square: s,
      flair: o
    } = l.useMemo(() => (0, A.HN)(n), [n]);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Text, {
        className: j.iR,
        variant: "text-sm/bold",
        children: t
      }), (0, r.jsxs)("div", {
        className: j._Z,
        style: {
          color: i
        },
        children: [(0, r.jsx)(c.Text, {
          className: j.On,
          style: {
            color: i
          },
          variant: "text-sm/bold",
          children: O.intl.format(O.t["6bgVlq"], {
            multiplier: n
          })
        }), s && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(j.QA, j.kb),
            style: {
              backgroundColor: i
            }
          }), (0, r.jsx)("div", {
            className: a()(j.QA, j.pG),
            style: {
              backgroundColor: i
            }
          })]
        }), o && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(j.ox, j.kb),
            children: (0, r.jsx)(h.A, {
              width: 24,
              height: 24
            })
          }), (0, r.jsx)("div", {
            className: a()(j.ox, j.pG),
            children: (0, r.jsx)(h.A, {
              width: 24,
              height: 24
            })
          })]
        }), 1 === n && (0, r.jsx)(c.Text, {
          className: j.uN,
          variant: "text-sm/bold",
          children: O.intl.string(O.t.b5Cpof)
        })]
      })]
    })
  }),
  E = Chunk64700.memo(function(e) {
    let {
      channelId: t
    } = e, n = (0, o.bG)([f.default], () => f.default.getId()), i = (0, o.bG)([p.A], () => p.A.isTyping(t, n), [t, n]), a = (0, o.bG)([g.A], () => g.A.isEnabled()), d = (0, o.bG)([m.Ay], () => m.Ay.isComboing(n, t), [t, n]), {
      ref: h,
      width: b = 0
    } = (0, u.Ay)(), [A, O] = l.useState(false), E = (0, y.A)(t), _ = a && d && i;
    l.useEffect(() => {
      _ && O(true);
      let e = setTimeout(() => O(_), 1e3);
      return () => clearTimeout(e)
    }, [_]);
    let C = (0, c.zhh)({
        opacity: +!!A,
        transform: A ? "translateY(0)" : "translateY(100%)",
        pointerEvents: "none",
        config: s.config.stiff
      }),
      S = l.useMemo(() => null != E ? E : {
        value: 0,
        multiplier: 1
      }, [E]),
      I = l.useRef(S);
    l.useEffect(() => {
      (S.multiplier > 1 || S.value > 0) && (I.current = S)
    }, [S]);
    let {
      multiplier: N,
      value: T
    } = l.useMemo(() => ({
      value: _ ? S.value : I.current.value,
      multiplier: _ ? S.multiplier : I.current.multiplier
    }), [_, S, I]);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(v, {
        channelId: t,
        width: b
      }), (0, r.jsx)(s.animated.div, {
        ref: h,
        className: j.p_,
        style: C,
        children: (0, r.jsx)(x, {
          value: T,
          multiplier: N
        })
      })]
    })
  })