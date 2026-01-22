/** Chunk was on web.js **/
/** chunk id: 419818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
let r = (0, require("./353640.js").v)(e => ({
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