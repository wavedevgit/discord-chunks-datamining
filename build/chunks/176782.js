/** Chunk was on web.js **/
/** chunk id: 176782, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk391110 = require("./391110.js"),
  Chunk309253 = require("./309253.js");
let s = {
    subtitle: {
      onlyShowOnHover: false
    },
    description: {
      onlyShowOnHover: true,
      className: Chunk309253.cardDescription
    },
    descriptionCta: {
      onlyShowOnHover: true
    }
  },
  l = e => {
    let t = !(0, r.e7)([i.Z], () => i.Z.useReducedMotion),
      n = {
        [a.zW.DEFAULT]: s,
        [a.zW.REWARD]: {
          subtitle: {
            onlyShowOnHover: true,
            textVariant: "text-sm/semibold"
          },
          description: {
            onlyShowOnHover: true,
            className: o.cardDescriptionTenureReward
          },
          descriptionCta: {
            onlyShowOnHover: false,
            hideOnHoverComponent: true,
            className: o.descriptionCTATenureReward
          },
          cardContainer: {
            className: t ? o.nitroGradientBorderHover : true
          }
        },
        [a.zW.PROMOTION_REDEMPTION]: {
          cardContainer: {
            className: o.nitroGradientBorderHover
          },
          perkImage: {
            disableHoverAnimation: true,
            className: o.promotionRedemptionImage
          }
        },
        [a.zW.NITRO_GRADIENT_HOVER_BORDER]: {
          cardContainer: {
            className: o.nitroGradientBorderHover
          }
        }
      };
    return null != e ? n[e] : n[a.zW.DEFAULT]
  }