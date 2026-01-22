/** Chunk was on web.js **/
/** chunk id: 543233, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk322631 = require("./322631.js"),
  Chunk227191 = require("./227191.js");
let o = {
    subtitle: {
      onlyShowOnHover: false
    },
    description: {
      onlyShowOnHover: true,
      className: Chunk227191.L_
    },
    descriptionCta: {
      onlyShowOnHover: true
    }
  },
  l = e => {
    let t = !(0, r.bG)([i.A], () => i.A.useReducedMotion),
      n = {
        [a.PJ.DEFAULT]: o,
        [a.PJ.REWARD]: {
          subtitle: {
            onlyShowOnHover: true,
            textVariant: "text-sm/semibold"
          },
          description: {
            onlyShowOnHover: true,
            className: s.p9
          },
          descriptionCta: {
            onlyShowOnHover: false,
            hideOnHoverComponent: true,
            className: s.LV
          },
          cardContainer: {
            className: t ? s.tk : true
          }
        },
        [a.PJ.PROMOTION_REDEMPTION]: {
          cardContainer: {
            className: s.tk
          },
          perkImage: {
            disableHoverAnimation: true,
            className: s.y8
          }
        },
        [a.PJ.NITRO_GRADIENT_HOVER_BORDER]: {
          cardContainer: {
            className: s.tk
          }
        }
      };
    return null != e ? n[e] : n[a.PJ.DEFAULT]
  }