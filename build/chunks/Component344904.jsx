/** Chunk was on web.js **/
/** chunk id: 344904, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => g,
  BN: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk920064 = require("./920064.js"),
  Chunk251360 = require("./251360.jsx"),
  Chunk468052 = require("./468052.jsx"),
  Chunk769411 = require("./769411.jsx"),
  Chunk242142 = require("./242142.js"),
  h = function(e) {
    return e[e.NITRO_GEM = 0] = "NITRO_GEM", e[e.NITRO_LOGO = 1] = "NITRO_LOGO", e[e.AVATAR_DECO = 2] = "AVATAR_DECO", e
  }({});
let m = e => {
    let {
      avatarDecoAssetId: t,
      avatarDecoAssetDescription: n
    } = e, a = i.useMemo(() => (0, u.A)(t, l._3J.SIZE_120, false), [t]);
    return (0, r.jsx)("div", {
      className: _.Q7,
      children: (0, r.jsx)("div", {
        className: _.Nk,
        children: (0, r.jsx)("img", {
          className: _.CH,
          alt: n,
          src: a
        })
      })
    })
  },
  g = e => {
    let {
      showAnimations: t = true,
      iconClassName: n,
      staticPercentage: i,
      innerCircleClassName: a,
      progressCircleStrokeSize: l,
      backgroundCircleSize: u,
      percentage: h,
      initialPercentage: g,
      progressCircleVariation: E = 0,
      avatarDecoAssetId: b,
      avatarDecoAssetDescription: y,
      ellipseOpacity: O,
      customAnimationClassName: A,
      circleColor: v,
      circleStroke: S
    } = e, I = (0, o.bG)([c.A], () => c.A.useReducedMotion), T = t && !I, C = () => {
      switch (E) {
        case 0:
          return (0, r.jsx)(d.A, {
            className: T ? _.Ow : true,
            backgroundColor: s()(_.vH, a),
            backgroundCircleSize: u
          });
        case 1:
          return (0, r.jsx)(f.A, {
            circleColor: v,
            ellipseOpacity: O
          });
        case 2:
          if (null != b) return (0, r.jsx)(m, {
            avatarDecoAssetId: b,
            avatarDecoAssetDescription: y
          });
          return null;
        default:
          return null
      }
    };
    return (0, r.jsx)("div", {
      className: s()(_.G3, n),
      children: (0, r.jsx)(p.A, {
        animationClassName: s()(_._0, {
          [_.uJ]: T,
          [null != A ? A : ""]: T
        }),
        progressCircleStroke: S,
        progressCircleStrokeSize: l,
        percentage: null != i ? i : h,
        initialPercentage: null != i ? i : g,
        progressCircleVariation: E,
        children: C()
      })
    })
  }