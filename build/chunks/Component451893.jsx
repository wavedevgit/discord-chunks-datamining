/** Chunk was on 77025 **/
/** chunk id: 451893, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  } = e, u = i.useRef(null), [d, m] = i.useState(0), [f, h] = i.useState(0), [x, p] = i.useState(0), g = i.useCallback(() => {
    null != u.current && (m(u.current.getDistanceFromTop()), h(u.current.getDistanceFromBottom()), p(u.current.getScrollerState().offsetHeight))
  }, []);
  i.useEffect(() => {
    if (g(), null == a.current) return;
    let e = new ResizeObserver(() => {
      g()
    });
    return e.observe(a.current), () => {
      e.disconnect()
    }
  }, [u, a, g]);
  let b = i.useMemo(() => {
    if (0 === d && 0 === f) return {};
    let e = [];
    if (e.push("to bottom"), d > 0) {
      let t = c > 0 ? 1 - Math.min(c, d) / c : 1;
      for (let n = 0; n < s.length; n++) {
        let {
          position: r,
          alpha: i
        } = s[n], l = (r * o).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(t + i * (1 - t), ") ").concat(l, "px"))
      }
    }
    if (f > 0) {
      let t = x - o,
        n = c > 0 ? 1 - Math.min(c, f) / c : 1;
      for (let r = s.length - 1; r >= 0; r--) {
        let {
          position: i,
          alpha: l
        } = s[r], a = (t + (1 - i) * o).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(n + l * (1 - n), ") ").concat(a, "px"))
      }
    }
    return {
      maskImage: "linear-gradient(".concat(e.join(","), ")")
    }
  }, [f, d, c, o, x]);
  return (0, r.jsx)(l.xVE, {
    ref: u,
    style: b,
    className: t,
    onScroll: g,
    children: n
  })
}