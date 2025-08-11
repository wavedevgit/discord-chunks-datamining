/** Chunk was on web.js **/
/** chunk id: 494573, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-07_search_mobile_xdm_channel_filters",
  label: "Search Mobile XDM Channel Filters",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  let {
    location: t
  } = e, {
    enabled: n
  } = r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: false
  });
  return n
}