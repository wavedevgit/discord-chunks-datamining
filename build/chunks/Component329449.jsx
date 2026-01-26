/** Chunk was on 67564 **/
/** chunk id: 329449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./142703.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let j = Chunk64700.memo(function(e) {
    let {
      channelId: t,
      width: n
    } = e, i = (0, o.bG)([d.A], () => d.A.useReducedMotion), s = (0, o.bG)([b.Ay], () => b.Ay.getMostRecentMessageCombo(t), [t]), [u, p] = l.useState(false);
    l.useEffect(() => {
      if (null == s ? true : s.displayed) return;
      p(false), setImmediate(() => {
        p((null != s ? (0, A.RL)(s.combo) : 0) > 0)
      });
      let e = setTimeout(() => {
        p(false), null != s && (0, g.Nu)(s)
      }, 2e3);
      return () => clearTimeout(e)
    }, [s]);
    let h = null != s ? "100%" : "200%",
      f = (0, c.zhh)({
        opacity: +!!u,
        translateY: u ? "0" : h,
        pointerEvents: "none",
        width: n,
        config: i ? a.config.stiff : a.config.slow
      }, "animate-always");
    return null != s && (0, r.jsx)(a.animated.div, {
      className: O.Gi,
      style: f,
      children: (0, r.jsx)(c.Text, {
        className: O.fX,
        variant: "text-sm/bold",
        children: (0, A.RL)(s.combo)
      })
    })
  }),
  v = Chunk64700.memo(function(e) {
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
        className: O.iR,
        variant: "text-sm/bold",
        children: t
      }), (0, r.jsxs)("div", {
        className: O._Z,
        style: {
          color: i
        },
        children: [(0, r.jsx)(c.Text, {
          className: O.On,
          style: {
            color: i
          },
          variant: "text-sm/bold",
          children: _.intl.format(_.t["6bgVlq"], {
            multiplier: n
          })
        }), a && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: s()(O.QA, O.kb),
            style: {
              backgroundColor: i
            }
          }), (0, r.jsx)("div", {
            className: s()(O.QA, O.pG),
            style: {
              backgroundColor: i
            }
          })]
        }), o && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: s()(O.ox, O.kb),
            children: (0, r.jsx)(f.A, {
              width: 24,
              height: 24
            })
          }), (0, r.jsx)("div", {
            className: s()(O.ox, O.pG),
            children: (0, r.jsx)(f.A, {
              width: 24,
              height: 24
            })
          })]
        }), 1 === n && (0, r.jsx)(c.Text, {
          className: O.uN,
          variant: "text-sm/bold",
          children: _.intl.string(_.t.b5Cpof)
        })]
      })]
    })
  }),
  x = Chunk64700.memo(function(e) {
    let {
      channelId: t
    } = e, n = (0, o.bG)([p.default], () => p.default.getId()), i = (0, o.bG)([h.A], () => h.A.isTyping(t, n), [t, n]), s = (0, o.bG)([m.A], () => m.A.isEnabled()), d = (0, o.bG)([b.Ay], () => b.Ay.isComboing(n, t), [t, n]), {
      ref: f,
      width: g = 0
    } = (0, u.Ay)(), [A, _] = l.useState(false), x = (0, y.A)(t), E = s && d && i;
    l.useEffect(() => {
      E && _(true);
      let e = setTimeout(() => _(E), 1e3);
      return () => clearTimeout(e)
    }, [E]);
    let C = (0, c.zhh)({
        opacity: +!!A,
        transform: A ? "translateY(0)" : "translateY(100%)",
        pointerEvents: "none",
        config: a.config.stiff
      }),
      S = l.useMemo(() => null != x ? x : {
        value: 0,
        multiplier: 1
      }, [x]),
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
        width: g
      }), (0, r.jsx)(a.animated.div, {
        ref: f,
        className: O.p_,
        style: C,
        children: (0, r.jsx)(v, {
          value: T,
          multiplier: N
        })
      })]
    })
  })