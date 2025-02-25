/** Chunk was on 50751 **/
n.d(t, {
  Z: () => m
}), n(47120), n(411104);
var i = n(200651),
  r = n(192379),
  o = n(120356),
  l = n.n(o),
  s = n(348327),
  a = n.n(s),
  u = n(642128),
  c = n(481060),
  d = n(667142),
  p = n(333031),
  h = n(127254);
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
  } = e, [o, s] = r.useState(0), [m, g] = r.useState(0), [O, v] = r.useState(0), y = r.useRef(0), [E, b] = r.useState(0), {
    timeToLiveMs: x,
    reappearTimeMs: j
  } = d.ZP.useState(e => ({
    timeToLiveMs: e.timeToLiveMs,
    reappearTimeMs: e.reappearTimeMs
  }), a()), S = {
    timeToLiveMs: x,
    reappearTimeMs: j
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
      s(Date.now()), b(e => e + 1)
    },
    Z = o > 0 && m - o < 1e3,
    N = (0, c.Yzy)(O > 0 && O < m && m - O < x, {
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
    [w, _] = r.useState(!1);
  if (r.useEffect(() => {
      E > 10 && _(!0)
    }, [E]), w) throw Error("ClickZoneDebugWidget crashed, too many clicks");
  return t && !n ? null : (0, i.jsx)(i.Fragment, {
    children: N((e, t) => t && (0, i.jsx)(u.animated.div, {
      style: e,
      className: h.clickZoneDebugContainer,
      children: (0, i.jsx)(p.Z, {
        className: l()(h.clickZone, Z && h.clickBackground),
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