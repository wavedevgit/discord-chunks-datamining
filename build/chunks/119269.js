/** Chunk was on 93886 **/
n.d(t, {
  Qo: () => f,
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
  p = n(914677),
  x = n(600314),
  f = ((r = {})[r.NITRO_GEM = 0] = "NITRO_GEM", r[r.NITRO_LOGO = 1] = "NITRO_LOGO", r[r.AVATAR_DECO = 2] = "AVATAR_DECO", r);
let b = e => {
    let {
      avatarDecoAssetId: t,
      avatarDecoAssetDescription: n
    } = e, r = i.useMemo(() => (0, u.Z)(t, c.EFr.SIZE_120, !1), [t]);
    return (0, a.jsx)("div", {
      className: x.avatarDecoContainer,
      children: (0, a.jsx)("div", {
        className: x.avatarDeco,
        children: (0, a.jsx)("img", {
          className: x.avatarDecoImage,
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
      initialPercentage: f,
      progressCircleVariation: _ = 0,
      avatarDecoAssetId: g,
      avatarDecoAssetDescription: v,
      ellipseOpacity: j,
      customAnimationClassName: y,
      circleColor: C,
      circleStroke: N
    } = e, T = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), O = t && !T;
    return (0, a.jsx)("div", {
      className: o()(x.progressCircle, n),
      children: (0, a.jsx)(p.Z, {
        animationClassName: o()(x.activeProgressCircle, {
          [x.activeProgressCircleAnimation]: O,
          [null != y ? y : ""]: O
        }),
        progressCircleStroke: N,
        progressCircleStrokeSize: l,
        percentage: null != r ? r : u,
        initialPercentage: null != r ? r : f,
        progressCircleVariation: _,
        children: (() => {
          switch (_) {
            case 0:
              return (0, a.jsx)(m.Z, {
                className: O ? x.nitroGemAnimation : void 0,
                backgroundColor: o()(x.gemBackgroundFill, i),
                backgroundCircleSize: c
              });
            case 1:
              return (0, a.jsx)(h.Z, {
                circleColor: C,
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