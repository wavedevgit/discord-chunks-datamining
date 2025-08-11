/** Chunk was on 75708 **/
/** chunk id: 404615, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk391110 = require("./391110.js"),
  Chunk758114 = require("./758114.js");
let l = {
    subtitle: {
      onlyShowOnHover: false
    },
    description: {
      onlyShowOnHover: true,
      className: Chunk758114.cardDescription
    },
    descriptionCta: {
      onlyShowOnHover: true
    }
  },
  o = e => {
    let t = (0, i.e7)([r.Z], () => r.Z.useReducedMotion),
      n = {
        [s.zW.DEFAULT]: l,
        [s.zW.REWARD]: {
          subtitle: {
            onlyShowOnHover: true,
            textVariant: "text-sm/semibold"
          },
          description: {
            onlyShowOnHover: true,
            className: a.cardDescriptionTenureReward
          },
          descriptionCta: {
            onlyShowOnHover: false,
            hideOnHoverComponent: true,
            className: a.descriptionCTATenureReward
          },
          cardContainer: {
            className: t ? true : a.nitroGradientBorderHover
          }
        },
        [s.zW.NITRO_GRADIENT_HOVER_BORDER]: {
          cardContainer: {
            className: a.nitroGradientBorderHover
          }
        }
      };
    return null != e ? n[e] : n[s.zW.DEFAULT]
  }