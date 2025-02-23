/** Chunk was on 93886 (1d5eb829541a42b4.js) **/
n.d(t, {
  Qo: () => p,
  ZP: () => _
});
var r, a = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  s = n(442837),
  c = n(481060),
  d = n(607070),
  u = n(821982),
  m = n(967538),
  h = n(885302),
  x = n(914677),
  f = n(647508),
  p = ((r = {})[r.NITRO_GEM = 0] = "NITRO_GEM", r[r.NITRO_LOGO = 1] = "NITRO_LOGO", r[r.AVATAR_DECO = 2] = "AVATAR_DECO", r);
let b = e => {
    let {
      avatarDecoAssetId: t,
      avatarDecoAssetDescription: n
    } = e, r = i.useMemo(() => (0, u.Z)(t, c.EFr.SIZE_120, !1), [t]);
    return (0, a.jsx)("div", {
      className: f.avatarDecoContainer,
      children: (0, a.jsx)("div", {
        className: f.avatarDeco,
        children: (0, a.jsx)("img", {
          className: f.avatarDecoImage,
          alt: n,
          src: r
        })
      })
    })
  },
  _ = e => {
    let {
      showAnimations: t = !0,
      iconClassName: n,
      staticPercentage: r,
      innerCircleClassName: i,
      progressCircleStrokeSize: l,
      backgroundCircleSize: c,
      percentage: u,
      initialPercentage: p,
      progressCircleVariation: _ = 0,
      avatarDecoAssetId: g,
      avatarDecoAssetDescription: v,
      ellipseOpacity: j,
      customAnimationClassName: C,
      circleColor: y,
      circleStroke: O
    } = e, N = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), T = t && !N;
    return (0, a.jsx)("div", {
      className: o()(f.progressCircle, n),
      children: (0, a.jsx)(x.Z, {
        animationClassName: o()(f.activeProgressCircle, {
          [f.activeProgressCircleAnimation]: T,
          [null != C ? C : ""]: T
        }),
        progressCircleStroke: O,
        progressCircleStrokeSize: l,
        percentage: null != r ? r : u,
        initialPercentage: null != r ? r : p,
        progressCircleVariation: _,
        children: (() => {
          switch (_) {
            case 0:
              return (0, a.jsx)(m.Z, {
                className: T ? f.nitroGemAnimation : void 0,
                backgroundColor: o()(f.gemBackgroundFill, i),
                backgroundCircleSize: c
              });
            case 1:
              return (0, a.jsx)(h.Z, {
                circleColor: y,
                ellipseOpacity: j
              });
            case 2:
              if (null != g) return (0, a.jsx)(b, {
                avatarDecoAssetId: g,
                avatarDecoAssetDescription: v
              });
              return null;
            default:
              return null
          }
        })()
      })
    })
  }