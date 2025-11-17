/** Chunk was on web.js **/
/** chunk id: 150560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
let r = (0, require("./663042.js").U)(e => ({
    utmSourceCurrent: true,
    utmMediumCurrent: true,
    utmCampaignCurrent: true,
    utmContentCurrent: true,
    setUtmCurrentContext: t => {
      let {
        utmSourceCurrent: n,
        utmMediumCurrent: r,
        utmCampaignCurrent: i,
        utmContentCurrent: a
      } = t;
      return e({
        utmSourceCurrent: n,
        utmMediumCurrent: r,
        utmCampaignCurrent: i,
        utmContentCurrent: a
      })
    },
    getUtmCurrentContext: () => r.getState()
  })),
  i = r