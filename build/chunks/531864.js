/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => m
}), n(47120);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(979554),
  i = n(876917),
  d = n(597688),
  c = n(616066),
  u = n(215023),
  g = n(777644);
let h = {
    x: 160,
    y: 160
  },
  f = [{
    left: 0,
    top: 20,
    rotation: -32,
    size: h,
    skuId: "1212569433839636530"
  }, {
    left: 110,
    top: 48,
    rotation: -24,
    size: h,
    skuId: "1144308439720394944"
  }, {
    left: 230,
    top: 12,
    rotation: 8,
    size: h,
    skuId: "1228251144065777765"
  }, {
    left: 354,
    top: 44,
    rotation: -48,
    size: h,
    skuId: "1262491137394868308"
  }, {
    left: 470,
    top: 52,
    rotation: 12,
    size: h,
    skuId: "1157407831348228141"
  }, {
    left: 600,
    top: 28,
    rotation: -4,
    size: h,
    skuId: "1197344326133502032"
  }, {
    left: 740,
    top: 12,
    rotation: -32,
    size: h,
    skuId: "1232071712695386162"
  }, {
    left: 870,
    top: 40,
    rotation: -20,
    size: h,
    skuId: "1220513977683935373"
  }, {
    left: 1010,
    top: 30,
    rotation: 15,
    size: h,
    skuId: "1144046002110738634"
  }, {
    left: 1140,
    top: 52,
    rotation: -18,
    size: h,
    skuId: "1271174324375519273"
  }, {
    left: 1270,
    top: 32,
    rotation: 25,
    size: h,
    skuId: "1237653964582031400"
  }, {
    left: 1400,
    top: 33,
    rotation: -5,
    size: h,
    skuId: "1217625794382401577"
  }],
  m = e => {
    let {
      peaking: t,
      transitioning: n,
      style: a
    } = e, h = window.innerHeight, [m, p] = l.useState(!1), b = f.map(e => {
      let {
        skuId: t
      } = e;
      return d.Z.getProduct(t)
    });
    return l.useEffect(() => {
      n && setTimeout(() => {
        p(!0)
      }, u.lb)
    }, [n]), (0, r.jsx)("div", {
      style: a,
      className: s()(g.jumbleWrapper, {
        [g.peaking]: t,
        [g.transitioned]: m
      }),
      children: f.map((e, t) => {
        var l, a;
        let {
          top: s,
          left: d,
          rotation: f,
          size: m,
          skuId: p
        } = e, C = null === (l = b[t]) || void 0 === l ? void 0 : l.items[0], _ = null === (a = b[t]) || void 0 === a ? void 0 : a.type, x = _ === o.Z.AVATAR_DECORATION ? 384 : 512;
        return (0, r.jsxs)("div", {
          className: g.asset,
          style: {
            top: n ? -h - x : s,
            left: n ? "".concat(d - 75 - 350 * Math.random()) : d,
            transform: "rotate(".concat(f, "deg)"),
            height: m.y,
            width: m.x,
            transitionDelay: "".concat(Math.random() / 3, "s"),
            transitionDuration: "".concat(u.lb - 200 * Math.random(), "ms")
          },
          children: [null != C && _ === o.Z.AVATAR_DECORATION && (0, r.jsx)(c.R, {
            item: C
          }), null != C && _ === o.Z.PROFILE_EFFECT && (0, r.jsx)(i.Z, {
            profileEffectId: C.id,
            isPurchased: !1,
            isHovering: !0
          })]
        }, p + t)
      })
    })
  }