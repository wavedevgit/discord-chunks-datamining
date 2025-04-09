/** Chunk was on 97161 **/
n.d(t, {
  Qo: () => g,
  ZP: () => h
});
var o, a = n(200651),
  r = n(192379),
  i = n(120356),
  c = n.n(i),
  l = n(442837),
  s = n(481060),
  _ = n(607070),
  d = n(821982),
  u = n(967538),
  b = n(885302),
  p = n(914677),
  f = n(914242),
  g = ((o = {})[o.NITRO_GEM = 0] = "NITRO_GEM", o[o.NITRO_LOGO = 1] = "NITRO_LOGO", o[o.AVATAR_DECO = 2] = "AVATAR_DECO", o);
let m = e => {
    let {
      avatarDecoAssetId: t,
      avatarDecoAssetDescription: n
    } = e, o = r.useMemo(() => (0, d.Z)(t, s.EFr.SIZE_120, !1), [t]);
    return (0, a.jsx)("div", {
      className: f.avatarDecoContainer,
      children: (0, a.jsx)("div", {
        className: f.avatarDeco,
        children: (0, a.jsx)("img", {
          className: f.avatarDecoImage,
          alt: n,
          src: o
        })
      })
    })
  },
  h = e => {
    let {
      showAnimations: t = !0,
      iconClassName: n,
      staticPercentage: o,
      innerCircleClassName: r,
      progressCircleStrokeSize: i,
      backgroundCircleSize: s,
      percentage: d,
      initialPercentage: g,
      progressCircleVariation: h = 0,
      avatarDecoAssetId: S,
      avatarDecoAssetDescription: x,
      ellipseOpacity: C,
      customAnimationClassName: v,
      circleColor: I,
      circleStroke: O
    } = e, T = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), y = t && !T;
    return (0, a.jsx)("div", {
      className: c()(f.progressCircle, n),
      children: (0, a.jsx)(p.Z, {
        animationClassName: c()(f.activeProgressCircle, {
          [f.activeProgressCircleAnimation]: y,
          [null != v ? v : ""]: y
        }),
        progressCircleStroke: O,
        progressCircleStrokeSize: i,
        percentage: null != o ? o : d,
        initialPercentage: null != o ? o : g,
        progressCircleVariation: h,
        children: (() => {
          switch (h) {
            case 0:
              return (0, a.jsx)(u.Z, {
                className: y ? f.nitroGemAnimation : void 0,
                backgroundColor: c()(f.gemBackgroundFill, r),
                backgroundCircleSize: s
              });
            case 1:
              return (0, a.jsx)(b.Z, {
                circleColor: I,
                ellipseOpacity: C
              });
            case 2:
              if (null != S) return (0, a.jsx)(m, {
                avatarDecoAssetId: S,
                avatarDecoAssetDescription: x
              });
              return null;
            default:
              return null
          }
        })()
      })
    })
  }