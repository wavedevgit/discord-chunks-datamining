/** Chunk was on 75708 **/
/** chunk id: 119269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Qo: () => f,
  ZP: () => x
});
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk821982 = require("./821982.js"),
  Chunk967538 = require("./967538.js"),
  Chunk885302 = require("./885302.js"),
  Chunk914677 = require("./914677.js"),
  Chunk914242 = require("./914242.js"),
  f = ((i = {})[i.NITRO_GEM = 0] = "NITRO_GEM", i[i.NITRO_LOGO = 1] = "NITRO_LOGO", i[i.AVATAR_DECO = 2] = "AVATAR_DECO", i);
let b = e => {
    let {
      avatarDecoAssetId: t,
      avatarDecoAssetDescription: n
    } = e, i = s.useMemo(() => (0, u.Z)(t, c.EFr.SIZE_120, false), [t]);
    return <div className={h.avatarDecoContainer}><div className={h.avatarDeco}><img className={h.avatarDecoImage} alt={n} src={i} /></div></div>
  },
  x = e => {
    let {
      showAnimations: t = true,
      iconClassName: n,
      staticPercentage: i,
      innerCircleClassName: s,
      progressCircleStrokeSize: a,
      backgroundCircleSize: c,
      percentage: u,
      initialPercentage: f,
      progressCircleVariation: x = 0,
      avatarDecoAssetId: _,
      avatarDecoAssetDescription: j,
      ellipseOpacity: E,
      customAnimationClassName: C,
      circleColor: O,
      circleStroke: v
    } = e, S = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), T = t && !S;
    return <div className={l()(h.progressCircle, n)}><g.Z animationClassName={l()(h.activeProgressCircle, {
          [h.activeProgressCircleAnimation]: T,
          [null != C ? C : ""]: T
        })} progressCircleStroke={v} progressCircleStrokeSize={a} percentage={null != i ? i : u} initialPercentage={null != i ? i : f} progressCircleVariation={x}>{(() => {
          switch (x) {
            case 0:
              return (0, r.jsx)(m.Z, {
                className: T ? h.nitroGemAnimation : true,
                backgroundColor: l()(h.gemBackgroundFill, s),
                backgroundCircleSize: c
              });
            case 1:
              return (0, r.jsx)(p.Z, {
                circleColor: O,
                ellipseOpacity: E
              });
            case 2:
              if (null != _) return (0, r.jsx)(b, {
                avatarDecoAssetId: _,
                avatarDecoAssetDescription: j
              });
              return null;
            default:
              return null
          }
        })()}</g.Z></div>
  }