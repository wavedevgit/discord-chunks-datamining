/** Chunk was on 56422 **/
n.d(t, {
  Qo: () => b,
  ZP: () => h
});
var r, i = n(200651),
  l = n(192379),
  s = n(120356),
  a = n.n(s),
  o = n(442837),
  c = n(481060),
  u = n(607070),
  d = n(821982),
  g = n(967538),
  p = n(885302),
  f = n(914677),
  m = n(914242),
  b = ((r = {})[r.NITRO_GEM = 0] = "NITRO_GEM", r[r.NITRO_LOGO = 1] = "NITRO_LOGO", r[r.AVATAR_DECO = 2] = "AVATAR_DECO", r);
let y = e => {
    let {
      avatarDecoAssetId: t,
      avatarDecoAssetDescription: n
    } = e, r = l.useMemo(() => (0, d.Z)(t, c.EFr.SIZE_120, !1), [t]);
    return (0, i.jsx)("div", {
      className: m.avatarDecoContainer,
      children: (0, i.jsx)("div", {
        className: m.avatarDeco,
        children: (0, i.jsx)("img", {
          className: m.avatarDecoImage,
          alt: n,
          src: r
        })
      })
    })
  },
  h = e => {
    let {
      showAnimations: t = !0,
      iconClassName: n,
      staticPercentage: r,
      innerCircleClassName: l,
      progressCircleStrokeSize: s,
      backgroundCircleSize: c,
      percentage: d,
      initialPercentage: b,
      progressCircleVariation: h = 0,
      avatarDecoAssetId: _,
      avatarDecoAssetDescription: S,
      ellipseOpacity: O,
      customAnimationClassName: E,
      circleColor: j,
      circleStroke: I
    } = e, N = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), C = t && !N;
    return (0, i.jsx)("div", {
      className: a()(m.progressCircle, n),
      children: (0, i.jsx)(f.Z, {
        animationClassName: a()(m.activeProgressCircle, {
          [m.activeProgressCircleAnimation]: C,
          [null != E ? E : ""]: C
        }),
        progressCircleStroke: I,
        progressCircleStrokeSize: s,
        percentage: null != r ? r : d,
        initialPercentage: null != r ? r : b,
        progressCircleVariation: h,
        children: (() => {
          switch (h) {
            case 0:
              return (0, i.jsx)(g.Z, {
                className: C ? m.nitroGemAnimation : void 0,
                backgroundColor: a()(m.gemBackgroundFill, l),
                backgroundCircleSize: c
              });
            case 1:
              return (0, i.jsx)(p.Z, {
                circleColor: j,
                ellipseOpacity: O
              });
            case 2:
              if (null != _) return (0, i.jsx)(y, {
                avatarDecoAssetId: _,
                avatarDecoAssetDescription: S
              });
              return null;
            default:
              return null
          }
        })()
      })
    })
  }