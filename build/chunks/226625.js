/** Chunk was on 20447 **/
n.d(t, {
  Z: () => h
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  o = n(392711),
  l = n.n(o),
  c = n(642128),
  d = n(442837),
  u = n(481060),
  m = n(607070),
  g = n(994868);
let p = {
  mass: 10,
  tension: 550,
  friction: 140
};

function h(e) {
  let {
    className: t,
    pageMultiplier: n
  } = e, s = (0, d.e7)([m.Z], () => m.Z.useReducedMotion), [o, h] = i.useState({
    x: 0,
    y: 0
  }), f = i.useMemo(() => l().throttle(e => {
    if (!s) h({
      x: (window.innerWidth - e.pageX * n) / 90,
      y: (window.innerHeight - e.pageY * n) / 90
    })
  }, 20), [n, s]);
  i.useEffect(() => (window.addEventListener("mousemove", f), () => window.removeEventListener("mousemove", f)), [f]);
  let [N, b] = (0, u.q_F)(() => ({
    x: 0,
    y: 0,
    config: p
  }));
  return i.useEffect(() => {
    b({
      x: o.x,
      y: o.y
    })
  }, [o.x, o.y, b]), (0, r.jsx)(c.animated.div, {
    style: {
      transform: (0, c.to)([N.x, N.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)"))
    },
    className: a()(g.background, t)
  })
}