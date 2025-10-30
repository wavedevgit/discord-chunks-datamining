/** Chunk was on 11324 **/
/** chunk id: 451893, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js");
let s = [{
  position: 0,
  alpha: 0
}, {
  position: .19,
  alpha: .262
}, {
  position: .34,
  alpha: .459
}, {
  position: .47,
  alpha: .618
}, {
  position: .57,
  alpha: .722
}, {
  position: .65,
  alpha: .806
}, {
  position: .73,
  alpha: .874
}, {
  position: .8,
  alpha: .925
}, {
  position: .86,
  alpha: .958
}, {
  position: .91,
  alpha: .979
}, {
  position: .95,
  alpha: .992
}, {
  position: .98,
  alpha: .998
}, {
  position: 1,
  alpha: 1
}];

function a(e) {
  let {
    className: t,
    children: n,
    containerRef: a,
    faderSize: o,
    faderEdgeThreshold: c
  } = e, u = l.useRef(null), [d, m] = l.useState(0), [f, h] = l.useState(0), [x, g] = l.useState(0), p = l.useCallback(() => {
    null != u.current && (m(u.current.getDistanceFromTop()), h(u.current.getDistanceFromBottom()), g(u.current.getScrollerState().offsetHeight))
  }, []);
  l.useEffect(() => {
    if (p(), null == a.current) return;
    let e = new ResizeObserver(() => {
      p()
    });
    return e.observe(a.current), () => {
      e.disconnect()
    }
  }, [u, a, p]);
  let v = l.useMemo(() => {
    if (0 === d && 0 === f) return {};
    let e = [];
    if (e.push("to bottom"), d > 0) {
      let t = c > 0 ? 1 - Math.min(c, d) / c : 1;
      for (let n = 0; n < s.length; n++) {
        let {
          position: r,
          alpha: l
        } = s[n], i = (r * o).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(t + l * (1 - t), ") ").concat(i, "px"))
      }
    }
    if (f > 0) {
      let t = x - o,
        n = c > 0 ? 1 - Math.min(c, f) / c : 1;
      for (let r = s.length - 1; r >= 0; r--) {
        let {
          position: l,
          alpha: i
        } = s[r], a = (t + (1 - l) * o).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(n + i * (1 - n), ") ").concat(a, "px"))
      }
    }
    return {
      maskImage: "linear-gradient(".concat(e.join(","), ")")
    }
  }, [f, d, c, o, x]);
  return (0, r.jsx)(i.xVE, {
    ref: u,
    style: v,
    className: t,
    onScroll: p,
    children: n
  })
}