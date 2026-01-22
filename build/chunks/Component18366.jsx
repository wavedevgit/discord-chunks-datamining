/** Chunk was on 20601 **/
/** chunk id: 18366, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js");
let i = [{
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
    children: l,
    containerRef: a,
    faderSize: o,
    faderEdgeThreshold: c
  } = e, d = r.useRef(null), [u, f] = r.useState(0), [m, x] = r.useState(0), [b, h] = r.useState(0), v = r.useCallback(() => {
    null != d.current && (f(d.current.getDistanceFromTop()), x(d.current.getDistanceFromBottom()), h(d.current.getScrollerState().offsetHeight))
  }, []);
  r.useEffect(() => {
    if (v(), null == a.current) return;
    let e = new ResizeObserver(() => {
      v()
    });
    return e.observe(a.current), () => {
      e.disconnect()
    }
  }, [d, a, v]);
  let g = r.useMemo(() => {
    if (0 === u && 0 === m) return {};
    let e = [];
    if (e.push("to bottom"), u > 0) {
      let t = c > 0 ? 1 - Math.min(c, u) / c : 1;
      for (let l = 0; l < i.length; l++) {
        let {
          position: n,
          alpha: r
        } = i[l], s = (n * o).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(t + r * (1 - t), ") ").concat(s, "px"))
      }
    }
    if (m > 0) {
      let t = b - o,
        l = c > 0 ? 1 - Math.min(c, m) / c : 1;
      for (let n = i.length - 1; n >= 0; n--) {
        let {
          position: r,
          alpha: s
        } = i[n], a = (t + (1 - r) * o).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(l + s * (1 - l), ") ").concat(a, "px"))
      }
    }
    return {
      maskImage: "linear-gradient(".concat(e.join(","), ")")
    }
  }, [m, u, c, o, b]);
  return (0, n.jsx)(s.zCo, {
    ref: d,
    style: g,
    className: t,
    onScroll: v,
    children: l
  })
}