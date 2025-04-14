/** Chunk was on 81954 **/
n.d(t, {
  Z: () => s
}), n(388685), n(539854);
var l = n(200651),
  a = n(192379),
  r = n(481060);
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

function s(e) {
  let {
    className: t,
    children: n,
    containerRef: s,
    faderSize: o,
    faderEdgeThreshold: c
  } = e, d = a.useRef(null), [u, m] = a.useState(0), [f, h] = a.useState(0), [p, x] = a.useState(0), _ = a.useCallback(() => {
    null != d.current && (m(d.current.getDistanceFromTop()), h(d.current.getDistanceFromBottom()), x(d.current.getScrollerState().offsetHeight))
  }, []);
  a.useEffect(() => {
    if (_(), null == s.current) return;
    let e = new ResizeObserver(() => {
      _()
    });
    return e.observe(s.current), () => {
      e.disconnect()
    }
  }, [d, s, _]);
  let g = a.useMemo(() => {
    if (0 === u && 0 === f) return {};
    let e = [];
    if (e.push("to bottom"), u > 0) {
      let t = c > 0 ? 1 - Math.min(c, u) / c : 1;
      for (let n = 0; n < i.length; n++) {
        let {
          position: l,
          alpha: a
        } = i[n], r = (l * o).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(t + a * (1 - t), ") ").concat(r, "px"))
      }
    }
    if (f > 0) {
      let t = p - o,
        n = c > 0 ? 1 - Math.min(c, f) / c : 1;
      for (let l = i.length - 1; l >= 0; l--) {
        let {
          position: a,
          alpha: r
        } = i[l], s = (t + (1 - a) * o).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(n + r * (1 - n), ") ").concat(s, "px"))
      }
    }
    return {
      maskImage: "linear-gradient(".concat(e.join(","), ")")
    }
  }, [f, u, c, o, p]);
  return (0, l.jsx)(r.xVE, {
    ref: d,
    style: g,
    className: t,
    onScroll: _,
    children: n
  })
}