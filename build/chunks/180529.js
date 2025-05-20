/** Chunk was on 42758 **/
n.d(t, {
  Z: () => u
}), n(388685);
var i = n(255367),
  s = n(73800),
  a = n(230986),
  r = n(849146),
  o = n(481060);
let l = () => {
  let e = s.useRef(null),
    [t, n] = s.useState(0),
    i = s.useMemo(() => new r.Z(e => {
      let [t] = e;
      return n(t.contentRect.height)
    }), []);
  return s.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]), {
    ref: e,
    height: t
  }
};

function u(e) {
  let {
    show: t,
    children: n,
    top: s = 0,
    bottom: r = 0
  } = e, {
    ref: u,
    height: d
  } = l(), c = (0, o.q_F)({
    from: {
      height: 0,
      paddingBottom: "0px",
      marginTop: "0px"
    },
    to: {
      height: t ? d : 0,
      paddingBottom: t ? "".concat(r, "px") : "0px",
      marginTop: t ? "".concat(s, "px") : "0px"
    },
    config: {
      tension: 170,
      friction: 26
    }
  }), g = (0, o.q_F)({
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
  return (0, i.jsx)(a.animated.div, {
    style: {
      overflow: "hidden",
      height: c.height,
      paddingBottom: c.paddingBottom,
      marginTop: c.marginTop
    },
    children: (0, i.jsx)(a.animated.div, {
      style: {
        opacity: g.opacity
      },
      ref: u,
      children: n
    })
  })
}