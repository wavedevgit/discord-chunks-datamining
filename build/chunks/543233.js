/** Chunk was on 60667 **/
/** chunk id: 543233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk322631 = require("./322631.js"),
  Chunk227191 = require("./227191.js");
let a = {
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
  o = e => {
    let t = (0, r.bG)([i.A], () => i.A.useReducedMotion),
      n = {
        [l.PJ.DEFAULT]: a,
        [l.PJ.REWARD]: {
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
            className: t ? true : s.tk
          }
        },
        [l.PJ.PROMOTION_REDEMPTION]: {
          cardContainer: {
            className: s.tk
          },
          perkImage: {
            disableHoverAnimation: true,
            className: s.y8
          }
        },
        [l.PJ.NITRO_GRADIENT_HOVER_BORDER]: {
          cardContainer: {
            className: s.tk
          }
        }
      };
    return null != e ? n[e] : n[l.PJ.DEFAULT]
  }