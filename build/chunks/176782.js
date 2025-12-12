/** Chunk was on web.js **/
/** chunk id: 176782, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk391110 = require("./391110.js"),
  Chunk424373 = require("./424373.js");
let s = {
    subtitle: {
      onlyShowOnHover: false
    },
    description: {
      onlyShowOnHover: true,
      className: Chunk424373.cardDescription
    },
    descriptionCta: {
      onlyShowOnHover: true
    }
  },
  l = e => {
    let t = !(0, r.e7)([i.Z], () => i.Z.useReducedMotion),
      n = {
        [o.zW.DEFAULT]: s,
        [o.zW.REWARD]: {
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
            className: t ? a.nitroGradientBorderHover : true
          }
        },
        [o.zW.PROMOTION_REDEMPTION]: {
          cardContainer: {
            className: a.nitroGradientBorderHover
          },
          perkImage: {
            disableHoverAnimation: true,
            className: a.promotionRedemptionImage
          }
        },
        [o.zW.NITRO_GRADIENT_HOVER_BORDER]: {
          cardContainer: {
            className: a.nitroGradientBorderHover
          }
        }
      };
    return null != e ? n[e] : n[o.zW.DEFAULT]
  }