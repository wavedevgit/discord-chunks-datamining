/** Chunk was on web.js **/
/** chunk id: 630446, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  yC: () => i
});
let r = (0, require("./600975.js").C)({
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