/** Chunk was on 76346 **/
r.d(t, {
  Qo: () => C,
  ZP: () => j
});
var n, s = r(200651),
  i = r(192379),
  l = r(120356),
  o = r.n(l),
  a = r(442837),
  c = r(481060),
  u = r(607070),
  d = r(821982),
  p = r(967538),
  f = r(885302),
  g = r(914677),
  y = r(914242),
  C = ((n = {})[n.NITRO_GEM = 0] = "NITRO_GEM", n[n.NITRO_LOGO = 1] = "NITRO_LOGO", n[n.AVATAR_DECO = 2] = "AVATAR_DECO", n);
let x = e => {
    let {
      avatarDecoAssetId: t,
      avatarDecoAssetDescription: r
    } = e, n = i.useMemo(() => (0, d.Z)(t, c.EFr.SIZE_120, !1), [t]);
    return (0, s.jsx)("div", {
      className: y.avatarDecoContainer,
      children: (0, s.jsx)("div", {
        className: y.avatarDeco,
        children: (0, s.jsx)("img", {
          className: y.avatarDecoImage,
          alt: r,
          src: n
        })
      })
    })
  },
  j = e => {
    let {
      showAnimations: t = !0,
      iconClassName: r,
      staticPercentage: n,
      innerCircleClassName: i,
      progressCircleStrokeSize: l,
      backgroundCircleSize: c,
      percentage: d,
      initialPercentage: C,
      progressCircleVariation: j = 0,
      avatarDecoAssetId: h,
      avatarDecoAssetDescription: O,
      ellipseOpacity: _,
      customAnimationClassName: m,
      circleColor: b,
      circleStroke: S
    } = e, E = (0, a.e7)([u.Z], () => u.Z.useReducedMotion), v = t && !E;
    return (0, s.jsx)("div", {
      className: o()(y.progressCircle, r),
      children: (0, s.jsx)(g.Z, {
        animationClassName: o()(y.activeProgressCircle, {
          [y.activeProgressCircleAnimation]: v,
          [null != m ? m : ""]: v
        }),
        progressCircleStroke: S,
        progressCircleStrokeSize: l,
        percentage: null != n ? n : d,
        initialPercentage: null != n ? n : C,
        progressCircleVariation: j,
        children: (() => {
          switch (j) {
            case 0:
              return (0, s.jsx)(p.Z, {
                className: v ? y.nitroGemAnimation : void 0,
                backgroundColor: o()(y.gemBackgroundFill, i),
                backgroundCircleSize: c
              });
            case 1:
              return (0, s.jsx)(f.Z, {
                circleColor: b,
                ellipseOpacity: _
              });
            case 2:
              if (null != h) return (0, s.jsx)(x, {
                avatarDecoAssetId: h,
                avatarDecoAssetDescription: O
              });
              return null;
            default:
              return null
          }
        })()
      })
    })
  }