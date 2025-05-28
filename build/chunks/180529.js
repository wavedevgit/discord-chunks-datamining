/** Chunk was on 42758 **/
n.d(t, {
  Z: () => u
}), n(388685);
var i = n(255367),
  r = n(73800),
  s = n(240894),
  o = n(849146),
  a = n(481060);
let l = () => {
  let e = r.useRef(null),
    [t, n] = r.useState(0),
    i = r.useMemo(() => new o.Z(e => {
      let [t] = e;
      return n(t.contentRect.height)
    }), []);
  return r.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]), {
    ref: e,
    height: t
  }
};

function u(e) {
  let {
    show: t,
    children: n,
    top: r = 0,
    bottom: o = 0
  } = e, {
    ref: u,
    height: d
  } = l(), c = (0, a.q_F)({
    from: {
      height: 0,
      paddingBottom: "0px",
      marginTop: "0px"
    },
    to: {
      height: t ? d : 0,
      paddingBottom: t ? "".concat(o, "px") : "0px",
      marginTop: t ? "".concat(r, "px") : "0px"
    },
    config: {
      tension: 170,
      friction: 26
    }
  }), g = (0, a.q_F)({
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
  return (0, i.jsx)(s.animated.div, {
    style: {
      overflow: "hidden",
      height: c.height,
      paddingBottom: c.paddingBottom,
      marginTop: c.marginTop
    },
    children: (0, i.jsx)(s.animated.div, {
      style: {
        opacity: g.opacity
      },
      ref: u,
      children: n
    })
  })
}