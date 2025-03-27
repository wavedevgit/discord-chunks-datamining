/** Chunk was on 87791 **/
n.d(t, {
  Z: () => b
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
  p = [{
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
  f = 1 / 300,
  h = (0, o.animated)(c.Z),
  m = (0, o.animated)(u.Z),
  _ = (0, o.animated)(a.OgN),
  b = i.memo(function(e) {
    let {
      themeOverride: t,
      hovered: n,
      isContentDismissed: o,
      boxColors: c = {
        dark: d,
        light: p
      }
    } = e, u = (0, s.ZP)(), [b, g] = function(e) {
      let [t, n] = i.useState(!1), [r, o] = i.useState(Math.floor(7 * Math.random())), l = i.useRef(r);
      return i.useEffect(() => {
        l.current = r
      }), i.useEffect(() => {
        if (e) return;
        let t = Math.random() <= f;
        if (n(t), !t) {
          let e;
          do e = Math.floor(7 * Math.random()); while (e === l.current);
          o(e)
        }
      }, [e]), [t, r]
    }(n), E = (0, a.q_F)({
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
    }), v = o ? g : 0, O = (0, l.wj)(null != t ? t : u) ? c.dark[v] : c.light[v];
    return !n && o ? (0, r.jsx)(_, {}) : o && b ? (0, r.jsx)(m, {
      isDark: (0, l.wj)(u),
      style: E
    }) : (0, r.jsx)(h, {
      boxColor: O.box,
      ribbonColor: O.ribbon,
      style: E
    })
  })