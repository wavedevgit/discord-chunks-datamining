/** Chunk was on web.js **/
/** chunk id: 790642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Io: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-06_content_entry_embed",
  label: "Content Inventory Embed",
  defaultConfig: {
    enabled: true
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
    enabled: t
  } = r.getCurrentConfig({
    location: e
  });
  return t
}