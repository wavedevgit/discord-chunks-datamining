/** Chunk was on 5606 **/
/** chunk id: 344904, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => h,
  BN: () => f
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk920064 = require("./920064.js"),
  Chunk251360 = require("./251360.jsx"),
  Chunk468052 = require("./468052.jsx"),
  Chunk769411 = require("./769411.jsx"),
  Chunk242142 = require("./242142.js"),
  f = ((r = {})[r.NITRO_GEM = 0] = "NITRO_GEM", r[r.NITRO_LOGO = 1] = "NITRO_LOGO", r[r.AVATAR_DECO = 2] = "AVATAR_DECO", r);
let b = e => {
    let {
      avatarDecoAssetId: t,
      avatarDecoAssetDescription: n
    } = e, r = l.useMemo(() => (0, u.A)(t, c._3J.SIZE_120, false), [t]);
    return (0, i.jsx)("div", {
      className: g.Q7,
      children: (0, i.jsx)("div", {
        className: g.Nk,
        children: (0, i.jsx)("img", {
          className: g.CH,
          alt: n,
          src: r
        })
      })
    })
  },
  h = e => {
    let {
      showAnimations: t = true,
      iconClassName: n,
      staticPercentage: r,
      innerCircleClassName: l,
      progressCircleStrokeSize: s,
      backgroundCircleSize: c,
      percentage: u,
      initialPercentage: f,
      progressCircleVariation: h = 0,
      avatarDecoAssetId: A,
      avatarDecoAssetDescription: E,
      ellipseOpacity: x,
      customAnimationClassName: O,
      circleColor: C,
      circleStroke: y
    } = e, j = (0, o.bG)([d.A], () => d.A.useReducedMotion), T = t && !j;
    return (0, i.jsx)("div", {
      className: a()(g.G3, n),
      children: (0, i.jsx)(m.A, {
        animationClassName: a()(g._0, {
          [g.uJ]: T,
          [null != O ? O : ""]: T
        }),
        progressCircleStroke: y,
        progressCircleStrokeSize: s,
        percentage: null != r ? r : u,
        initialPercentage: null != r ? r : f,
        progressCircleVariation: h,
        children: (() => {
          switch (h) {
            case 0:
              return (0, i.jsx)(p.A, {
                className: T ? g.Ow : true,
                backgroundColor: a()(g.vH, l),
                backgroundCircleSize: c
              });
            case 1:
              return (0, i.jsx)(_.A, {
                circleColor: C,
                ellipseOpacity: x
              });
            case 2:
              if (null != A) return (0, i.jsx)(b, {
                avatarDecoAssetId: A,
                avatarDecoAssetDescription: E
              });
              return null;
            default:
              return null
          }
        })()
      })
    })
  }