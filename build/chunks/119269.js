/** Chunk was on 99277 **/
n.d(t, {
  Qo: () => m,
  ZP: () => b
});
var r, i = n(200651),
  o = n(192379),
  l = n(120356),
  a = n.n(l),
  s = n(442837),
  c = n(481060),
  u = n(607070),
  d = n(821982),
  _ = n(967538),
  p = n(885302),
  E = n(914677),
  f = n(600314),
  m = ((r = {})[r.NITRO_GEM = 0] = "NITRO_GEM", r[r.NITRO_LOGO = 1] = "NITRO_LOGO", r[r.AVATAR_DECO = 2] = "AVATAR_DECO", r);
let h = e => {
    let {
      avatarDecoAssetId: t,
      avatarDecoAssetDescription: n
    } = e, r = o.useMemo(() => (0, d.Z)(t, c.EFr.SIZE_120, !1), [t]);
    return (0, i.jsx)("div", {
      className: f.avatarDecoContainer,
      children: (0, i.jsx)("div", {
        className: f.avatarDeco,
        children: (0, i.jsx)("img", {
          className: f.avatarDecoImage,
          alt: n,
          src: r
        })
      })
    })
  },
  b = e => {
    let {
      showAnimations: t = !0,
      iconClassName: n,
      staticPercentage: r,
      innerCircleClassName: o,
      progressCircleStrokeSize: l,
      backgroundCircleSize: c,
      percentage: d,
      initialPercentage: m,
      progressCircleVariation: b = 0,
      avatarDecoAssetId: g,
      avatarDecoAssetDescription: O,
      ellipseOpacity: N,
      customAnimationClassName: I,
      circleColor: C,
      circleStroke: T
    } = e, S = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), y = t && !S;
    return (0, i.jsx)("div", {
      className: a()(f.progressCircle, n),
      children: (0, i.jsx)(E.Z, {
        animationClassName: a()(f.activeProgressCircle, {
          [f.activeProgressCircleAnimation]: y,
          [null != I ? I : ""]: y
        }),
        progressCircleStroke: T,
        progressCircleStrokeSize: l,
        percentage: null != r ? r : d,
        initialPercentage: null != r ? r : m,
        progressCircleVariation: b,
        children: (() => {
          switch (b) {
            case 0:
              return (0, i.jsx)(_.Z, {
                className: y ? f.nitroGemAnimation : void 0,
                backgroundColor: a()(f.gemBackgroundFill, o),
                backgroundCircleSize: c
              });
            case 1:
              return (0, i.jsx)(p.Z, {
                circleColor: C,
                ellipseOpacity: N
              });
            case 2:
              if (null != g) return (0, i.jsx)(h, {
                avatarDecoAssetId: g,
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