/** Chunk was on 17534 **/
/** chunk id: 329449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js"), require("./142703.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let j = Chunk64700.memo(function(e) {
    let {
      channelId: t,
      width: n
    } = e, i = (0, o.bG)([d.A], () => d.A.useReducedMotion), s = (0, o.bG)([b.Ay], () => b.Ay.getMostRecentMessageCombo(t), [t]), [u, h] = l.useState(false);
    l.useEffect(() => {
      if (null == s ? true : s.displayed) return;
      h(false), setImmediate(() => {
        h((null != s ? (0, A.RL)(s.combo) : 0) > 0)
      });
      let e = setTimeout(() => {
        h(false), null != s && (0, f.Nu)(s)
      }, 2e3);
      return () => clearTimeout(e)
    }, [s]);
    let p = null != s ? "100%" : "200%",
      g = (0, c.zhh)({
        opacity: +!!u,
        translateY: u ? "0" : p,
        pointerEvents: "none",
        width: n,
        config: i ? a.config.stiff : a.config.slow
      }, "animate-always");
    return null != s && (0, r.jsx)(a.animated.div, {
      className: _.Gi,
      style: g,
      children: (0, r.jsx)(c.Text, {
        className: _.fX,
        variant: "text-sm/bold",
        children: (0, A.RL)(s.combo)
      })
    })
  }),
  x = Chunk64700.memo(function(e) {
    let {
      value: t,
      multiplier: n
    } = e, {
      color: i,
      square: a,
      flair: o
    } = l.useMemo(() => (0, A.HN)(n), [n]);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Text, {
        className: _.iR,
        variant: "text-sm/bold",
        children: t
      }), (0, r.jsxs)("div", {
        className: _._Z,
        style: {
          color: i
        },
        children: [(0, r.jsx)(c.Text, {
          className: _.On,
          style: {
            color: i
          },
          variant: "text-sm/bold",
          children: O.intl.format(O.t["6bgVlq"], {
            multiplier: n
          })
        }), a && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: s()(_.QA, _.kb),
            style: {
              backgroundColor: i
            }
          }), (0, r.jsx)("div", {
            className: s()(_.QA, _.pG),
            style: {
              backgroundColor: i
            }
          })]
        }), o && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: s()(_.ox, _.kb),
            children: (0, r.jsx)(g.A, {
              width: 24,
              height: 24
            })
          }), (0, r.jsx)("div", {
            className: s()(_.ox, _.pG),
            children: (0, r.jsx)(g.A, {
              width: 24,
              height: 24
            })
          })]
        }), 1 === n && (0, r.jsx)(c.Text, {
          className: _.uN,
          variant: "text-sm/bold",
          children: O.intl.string(O.t.b5Cpof)
        })]
      })]
    })
  }),
  v = Chunk64700.memo(function(e) {
    let {
      channelId: t
    } = e, n = (0, o.bG)([h.default], () => h.default.getId()), i = (0, o.bG)([p.A], () => p.A.isTyping(t, n), [t, n]), s = (0, o.bG)([m.A], () => m.A.isEnabled()), d = (0, o.bG)([b.Ay], () => b.Ay.isComboing(n, t), [t, n]), {
      ref: g,
      width: f = 0
    } = (0, u.Ay)(), [A, O] = l.useState(false), v = (0, y.A)(t), E = s && d && i;
    l.useEffect(() => {
      E && O(true);
      let e = setTimeout(() => O(E), 1e3);
      return () => clearTimeout(e)
    }, [E]);
    let C = (0, c.zhh)({
        opacity: +!!A,
        transform: A ? "translateY(0)" : "translateY(100%)",
        pointerEvents: "none",
        config: a.config.stiff
      }),
      S = l.useMemo(() => null != v ? v : {
        value: 0,
        multiplier: 1
      }, [v]),
      I = l.useRef(S);
    l.useEffect(() => {
      (S.multiplier > 1 || S.value > 0) && (I.current = S)
    }, [S]);
    let {
      multiplier: N,
      value: T
    } = l.useMemo(() => ({
      value: E ? S.value : I.current.value,
      multiplier: E ? S.multiplier : I.current.multiplier
    }), [E, S, I]);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(j, {
        channelId: t,
        width: f
      }), (0, r.jsx)(a.animated.div, {
        ref: g,
        className: _.p_,
        style: C,
        children: (0, r.jsx)(x, {
          value: T,
          multiplier: N
        })
      })]
    })
  })