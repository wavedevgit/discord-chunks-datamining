/** Chunk was on web.js **/
/** chunk id: 119269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qo: () => h,
  ZP: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk821982 = require("./821982.js"),
  Chunk967538 = require("./967538.jsx"),
  Chunk885302 = require("./885302.jsx"),
  Chunk914677 = require("./914677.jsx"),
  Chunk543130 = require("./543130.js"),
  h = function(e) {
    return e[e.NITRO_GEM = 0] = "NITRO_GEM", e[e.NITRO_LOGO = 1] = "NITRO_LOGO", e[e.AVATAR_DECO = 2] = "AVATAR_DECO", e
  }({});
let m = e => {
    let {
      avatarDecoAssetId: t,
      avatarDecoAssetDescription: n
    } = e, a = i.useMemo(() => (0, u.Z)(t, l.EFr.SIZE_120, false), [t]);
    return (0, r.jsx)("div", {
      className: _.avatarDecoContainer,
      children: (0, r.jsx)("div", {
        className: _.avatarDeco,
        children: (0, r.jsx)("img", {
          className: _.avatarDecoImage,
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
      customAnimationClassName: v,
      circleColor: S,
      circleStroke: I
    } = e, T = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), C = t && !T, A = () => {
      switch (E) {
        case 0:
          return (0, r.jsx)(d.Z, {
            className: C ? _.nitroGemAnimation : true,
            backgroundColor: o()(_.gemBackgroundFill, a),
            backgroundCircleSize: u
          });
        case 1:
          return (0, r.jsx)(f.Z, {
            circleColor: S,
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
      className: o()(_.progressCircle, n),
      children: (0, r.jsx)(p.Z, {
        animationClassName: o()(_.activeProgressCircle, {
          [_.activeProgressCircleAnimation]: C,
          [null != v ? v : ""]: C
        }),
        progressCircleStroke: I,
        progressCircleStrokeSize: l,
        percentage: null != i ? i : h,
        initialPercentage: null != i ? i : g,
        progressCircleVariation: E,
        children: A()
      })
    })
  }