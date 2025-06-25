/** Chunk was on 42758 **/
n.d(t, {
  Z: () => c
}), n(388685);
var i, r = n(255367),
  s = n(73800),
  a = n(796075),
  o = n(695469),
  l = n(481060);
let u = null != (i = window.ResizeObserver) ? i : a.d,
  d = () => {
    let e = s.useRef(null),
      [t, n] = s.useState(0),
      i = s.useMemo(() => new u(e => {
        let [t] = e;
        return n(t.contentRect.height)
      }), []);
    return s.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]), {
      ref: e,
      height: t
    }
  };

function c(e) {
  let {
    show: t,
    children: n,
    top: i = 0,
    bottom: s = 0
  } = e, {
    ref: a,
    height: u
  } = d(), c = (0, l.q_F)({
    from: {
      height: 0,
      paddingBottom: "0px",
      marginTop: "0px"
    },
    to: {
      height: t ? u : 0,
      paddingBottom: t ? "".concat(s, "px") : "0px",
      marginTop: t ? "".concat(i, "px") : "0px"
    },
    config: {
      tension: 170,
      friction: 26
    }
  }), m = (0, l.q_F)({
    from: {
      opacity: 0
    },
    to: {
      opacity: +!!t
    },
    config: {
      duration: 200,
      easing: t ? e => e ** 4 : e => e * (2 - e)
    }
  });
  return (0, r.jsx)(o.animated.div, {
    style: {
      overflow: "hidden",
      height: c.height,
      paddingBottom: c.paddingBottom,
      marginTop: c.marginTop
    },
    children: (0, r.jsx)(o.animated.div, {
      style: {
        opacity: m.opacity
      },
      ref: a,
      children: n
    })
  })
}