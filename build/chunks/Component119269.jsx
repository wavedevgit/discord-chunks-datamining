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
  Chunk544074 = require("./544074.js"),
  h = function(e) {
    return e[e.NITRO_GEM = 0] = "NITRO_GEM", e[e.NITRO_LOGO = 1] = "NITRO_LOGO", e[e.AVATAR_DECO = 2] = "AVATAR_DECO", e
  }({});
let m = e => {
    let {
      avatarDecoAssetId: t,
      avatarDecoAssetDescription: n
    } = e, a = i.useMemo(() => (0, u.Z)(t, l.EFr.SIZE_120, false), [t]);
    return (0, r.jsx)("div", {
      className: p.avatarDecoContainer,
      children: (0, r.jsx)("div", {
        className: p.avatarDeco,
        children: (0, r.jsx)("img", {
          className: p.avatarDecoImage,
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
      circleColor: I,
      circleStroke: T
    } = e, S = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), A = t && !S, C = () => {
      switch (E) {
        case 0:
          return (0, r.jsx)(d.Z, {
            className: A ? p.nitroGemAnimation : true,
            backgroundColor: o()(p.gemBackgroundFill, a),
            backgroundCircleSize: u
          });
        case 1:
          return (0, r.jsx)(f.Z, {
            circleColor: I,
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
      className: o()(p.progressCircle, n),
      children: (0, r.jsx)(_.Z, {
        animationClassName: o()(p.activeProgressCircle, {
          [p.activeProgressCircleAnimation]: A,
          [null != v ? v : ""]: A
        }),
        progressCircleStroke: T,
        progressCircleStrokeSize: l,
        percentage: null != i ? i : h,
        initialPercentage: null != i ? i : g,
        progressCircleVariation: E,
        children: C()
      })
    })
  }