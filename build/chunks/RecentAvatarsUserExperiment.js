/** Chunk was on web.js **/
/** chunk id: 373230, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-01_recent_avatars",
  label: "Recent Avatars",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Allow users to select from recently uploaded avatars",
    config: {
      enabled: true
    }
  }, {
    id: 2,
    label: "Allow users to select from recently uploaded avatars. These users have always had access to the higher limit regardless of subscription status.",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    enabled: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}