/** Chunk was on 88953 **/
n.d(t, {
  Z: () => i
}), n(388685), n(539854);
var r = n(200651),
  l = n(192379),
  o = n(481060);
let a = [{
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

function i(e) {
  let {
    className: t,
    children: n,
    containerRef: i,
    faderSize: s,
    faderEdgeThreshold: c
  } = e, d = l.useRef(null), [u, m] = l.useState(0), [h, f] = l.useState(0), [x, p] = l.useState(0), _ = l.useCallback(() => {
    null != d.current && (m(d.current.getDistanceFromTop()), f(d.current.getDistanceFromBottom()), p(d.current.getScrollerState().offsetHeight))
  }, []);
  l.useEffect(() => {
    if (_(), null == i.current) return;
    let e = new ResizeObserver(() => {
      _()
    });
    return e.observe(i.current), () => {
      e.disconnect()
    }
  }, [d, i, _]);
  let g = l.useMemo(() => {
    if (0 === u && 0 === h) return {};
    let e = [];
    if (e.push("to bottom"), u > 0) {
      let t = c > 0 ? 1 - Math.min(c, u) / c : 1;
      for (let n = 0; n < a.length; n++) {
        let {
          position: r,
          alpha: l
        } = a[n], o = (r * s).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(t + l * (1 - t), ") ").concat(o, "px"))
      }
    }
    if (h > 0) {
      let t = x - s,
        n = c > 0 ? 1 - Math.min(c, h) / c : 1;
      for (let r = a.length - 1; r >= 0; r--) {
        let {
          position: l,
          alpha: o
        } = a[r], i = (t + (1 - l) * s).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(n + o * (1 - n), ") ").concat(i, "px"))
      }
    }
    return {
      maskImage: "linear-gradient(".concat(e.join(","), ")")
    }
  }, [h, u, c, s, x]);
  return (0, r.jsx)(o.xVE, {
    ref: d,
    style: g,
    className: t,
    onScroll: _,
    children: n
  })
}