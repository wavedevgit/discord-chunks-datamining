/** Chunk was on 74329 **/
n.d(t, {
  Z: () => h
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(642128),
  l = n(780384),
  a = n(481060),
  s = n(410030),
  c = n(965645),
  u = n(362061);
let d = [{
    box: "#FFD89E",
    ribbon: "#FF7476"
  }, {
    box: "#17B5E2",
    ribbon: "#FFFFFF"
  }, {
    box: "#EED169",
    ribbon: "#51A1EB"
  }, {
    box: "#509C65",
    ribbon: "#FFC96E"
  }, {
    box: "#E4578A",
    ribbon: "#BEC4FF"
  }, {
    box: "#AFE0FC",
    ribbon: "#FF9356"
  }, {
    box: "#DB6D6D",
    ribbon: "#67DA9C"
  }],
  _ = [{
    box: "#EABB75",
    ribbon: "#E4595C"
  }, {
    box: "#2D7AA5",
    ribbon: "#64C7C2"
  }, {
    box: "#ECBF21",
    ribbon: "#51A1EB"
  }, {
    box: "#439359",
    ribbon: "#D5A24C"
  }, {
    box: "#FC90C4",
    ribbon: "#777FCE"
  }, {
    box: "#549DC6",
    ribbon: "#FF9356"
  }, {
    box: "#DB6F6F",
    ribbon: "#81C29F"
  }],
  p = 1 / 300,
  E = (0, o.animated)(c.Z),
  f = (0, o.animated)(u.Z),
  m = (0, o.animated)(a.OgN),
  h = i.memo(function(e) {
    let {
      themeOverride: t,
      hovered: n,
      isContentDismissed: o,
      boxColors: c = {
        dark: d,
        light: _
      }
    } = e, u = (0, s.ZP)(), [h, b] = function(e) {
      let [t, n] = i.useState(!1), [r, o] = i.useState(Math.floor(7 * Math.random())), l = i.useRef(r);
      return i.useEffect(() => {
        l.current = r
      }), i.useEffect(() => {
        if (e) return;
        let t = Math.random() <= p;
        if (n(t), !t) {
          let e;
          do e = Math.floor(7 * Math.random()); while (e === l.current);
          o(e)
        }
      }, [e]), [t, r]
    }(n), g = (0, a.q_F)({
      reverse: !n,
      reset: !0,
      from: {
        scale: 1
      },
      to: {
        scale: 1.14
      },
      config: {
        tension: 800,
        friction: 24
      }
    }), O = o ? b : 0, N = (0, l.wj)(null != t ? t : u) ? c.dark[O] : c.light[O];
    return !n && o ? (0, r.jsx)(m, {}) : o && h ? (0, r.jsx)(f, {
      isDark: (0, l.wj)(u),
      style: g
    }) : (0, r.jsx)(E, {
      boxColor: N.box,
      ribbonColor: N.ribbon,
      style: g
    })
  })