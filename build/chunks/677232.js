/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => m
}), r(47120);
var n = r(200651),
  i = r(192379),
  l = r(642128),
  o = r(780384),
  a = r(481060),
  s = r(410030),
  c = r(965645),
  d = r(362061);
let u = [{
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
  h = (0, l.animated)(c.Z),
  b = (0, l.animated)(d.Z),
  C = (0, l.animated)(a.OgN),
  m = i.memo(function(e) {
    let {
      themeOverride: t,
      hovered: r,
      isContentDismissed: l,
      boxColors: c = {
        dark: u,
        light: p
      }
    } = e, d = (0, s.ZP)(), [m, g] = function(e) {
      let [t, r] = i.useState(!1), [n, l] = i.useState(Math.floor(7 * Math.random())), o = i.useRef(n);
      return i.useEffect(() => {
        o.current = n
      }), i.useEffect(() => {
        if (e) return;
        let t = Math.random() <= f;
        if (r(t), !t) {
          let e;
          do e = Math.floor(7 * Math.random()); while (e === o.current);
          l(e)
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
    }), x = l ? g : 0, _ = (0, o.wj)(null != t ? t : d) ? c.dark[x] : c.light[x];
    return !r && l ? (0, n.jsx)(C, {}) : l && m ? (0, n.jsx)(b, {
      isDark: (0, o.wj)(d),
      style: v
    }) : (0, n.jsx)(h, {
      boxColor: _.box,
      ribbonColor: _.ribbon,
      style: v
    })
  })