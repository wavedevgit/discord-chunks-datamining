/** Chunk was on 10409 **/
n.d(t, {
  Z: () => a
}), n(47120), n(653041);
var r = n(200651),
  o = n(192379),
  s = n(481060);
let l = [{
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
    faderSize: i,
    faderEdgeThreshold: c
  } = e, u = o.useRef(null), [d, m] = o.useState(0), [h, x] = o.useState(0), [p, f] = o.useState(0), N = o.useCallback(() => {
    null != u.current && (m(u.current.getDistanceFromTop()), x(u.current.getDistanceFromBottom()), f(u.current.getScrollerState().offsetHeight))
  }, []);
  o.useEffect(() => {
    if (N(), null == a.current) return;
    let e = new ResizeObserver(() => {
      N()
    });
    return e.observe(a.current), () => {
      e.disconnect()
    }
  }, [u, a, N]);
  let v = o.useMemo(() => {
    if (0 === d && 0 === h) return {};
    let e = [];
    if (e.push("to bottom"), d > 0) {
      let t = c > 0 ? 1 - Math.min(c, d) / c : 1;
      for (let n = 0; n < l.length; n++) {
        let {
          position: r,
          alpha: o
        } = l[n], s = (r * i).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(t + o * (1 - t), ") ").concat(s, "px"))
      }
    }
    if (h > 0) {
      let t = p - i,
        n = c > 0 ? 1 - Math.min(c, h) / c : 1;
      for (let r = l.length - 1; r >= 0; r--) {
        let {
          position: o,
          alpha: s
        } = l[r], a = (t + (1 - o) * i).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(n + s * (1 - n), ") ").concat(a, "px"))
      }
    }
    return {
      maskImage: "linear-gradient(".concat(e.join(","), ")")
    }
  }, [h, d, c, i, p]);
  return (0, r.jsx)(s.xVE, {
    ref: u,
    style: v,
    className: t,
    onScroll: N,
    children: n
  })
}