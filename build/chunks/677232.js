/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => C
}), r(47120);
var n = r(200651),
  l = r(192379),
  i = r(642128),
  o = r(780384),
  a = r(481060),
  s = r(410030),
  c = r(965645),
  u = r(362061);
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
  b = (0, i.animated)(c.Z),
  h = (0, i.animated)(u.Z),
  m = (0, i.animated)(a.OgN),
  C = l.memo(function(e) {
    let {
      themeOverride: t,
      hovered: r,
      isContentDismissed: i,
      boxColors: c = {
        dark: d,
        light: p
      }
    } = e, u = (0, s.ZP)(), [C, g] = function(e) {
      let [t, r] = l.useState(!1), [n, i] = l.useState(Math.floor(7 * Math.random())), o = l.useRef(n);
      return l.useEffect(() => {
        o.current = n
      }), l.useEffect(() => {
        if (e) return;
        let t = Math.random() <= f;
        if (r(t), !t) {
          let e;
          do e = Math.floor(7 * Math.random()); while (e === o.current);
          i(e)
        }
      }, [e]), [t, n]
    }(r), v = (0, a.q_F)({
      reverse: !r,
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
    }), x = i ? g : 0, j = (0, o.wj)(null != t ? t : u) ? c.dark[x] : c.light[x];
    return !r && i ? (0, n.jsx)(m, {}) : i && C ? (0, n.jsx)(h, {
      isDark: (0, o.wj)(u),
      style: v
    }) : (0, n.jsx)(b, {
      boxColor: j.box,
      ribbonColor: j.ribbon,
      style: v
    })
  })