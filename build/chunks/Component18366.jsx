/** Chunk was on 20601 **/
/** chunk id: 18366, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js");
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
  } = e, u = l.useRef(null), [d, m] = l.useState(0), [f, h] = l.useState(0), [x, g] = l.useState(0), v = l.useCallback(() => {
    null != u.current && (m(u.current.getDistanceFromTop()), h(u.current.getDistanceFromBottom()), g(u.current.getScrollerState().offsetHeight))
  }, []);
  l.useEffect(() => {
    if (v(), null == a.current) return;
    let e = new ResizeObserver(() => {
      v()
    });
    return e.observe(a.current), () => {
      e.disconnect()
    }
  }, [u, a, v]);
  let p = l.useMemo(() => {
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
  return (0, r.jsx)(i.zCo, {
    ref: u,
    style: p,
    className: t,
    onScroll: v,
    children: n
  })
}