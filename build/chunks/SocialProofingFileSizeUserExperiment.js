/** Chunk was on web.js **/
/** chunk id: 161010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2023-10_social_proofing_file_size",
  label: "Social Proofing File Size",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Should show nitro upsell for large files",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  return r.getCurrentConfig({
    location: e
  }).enabled
}