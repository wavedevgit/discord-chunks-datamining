/** Chunk was on 50751 **/
n.d(t, {
  Z: () => m
}), n(47120), n(411104);
var i = n(200651),
  r = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(348327),
  s = n.n(a),
  u = n(642128),
  c = n(481060),
  d = n(667142),
  p = n(333031),
  h = n(305222);
let f = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};

function m(e) {
  let {
    locked: t,
    pinned: n
  } = e, [l, a] = r.useState(0), [m, g] = r.useState(0), [O, v] = r.useState(0), y = r.useRef(0), [E, b] = r.useState(0), {
    timeToLiveMs: j,
    reappearTimeMs: x
  } = d.ZP.useState(e => ({
    timeToLiveMs: e.timeToLiveMs,
    reappearTimeMs: e.reappearTimeMs
  }), s()), S = {
    timeToLiveMs: j,
    reappearTimeMs: x
  }, I = r.useRef(S);
  r.useEffect(() => {
    I.current = S
  }), r.useEffect(() => (y.current = setInterval(() => {
    let e = Date.now();
    g(e), v(t => {
      if (0 === t) return e;
      let n = e - t,
        i = I.current.timeToLiveMs,
        r = i + I.current.reappearTimeMs;
      return n > i ? t + r : t
    })
  }, 100), () => {
    clearInterval(y.current)
  }), []);
  let C = () => {
      a(Date.now()), b(e => e + 1)
    },
    N = l > 0 && m - l < 1e3,
    Z = (0, c.Yzy)(O > 0 && O < m && m - O < j, {
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      },
      config: f
    }),
    [w, P] = r.useState(!1);
  if (r.useEffect(() => {
      E > 10 && P(!0)
    }, [E]), w) throw Error("ClickZoneDebugWidget crashed, too many clicks");
  return t && !n ? null : (0, i.jsx)(i.Fragment, {
    children: Z((e, t) => t && (0, i.jsx)(u.animated.div, {
      style: e,
      className: h.clickZoneDebugContainer,
      children: (0, i.jsx)(p.Z, {
        className: o()(h.clickZone, N && h.clickBackground),
        children: (0, i.jsx)(c.P3F, {
          onClick: C,
          className: h.clickable,
          children: (0, i.jsxs)(c.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            children: ["Click Me (", E, ")"]
          })
        })
      })
    }))
  })
}