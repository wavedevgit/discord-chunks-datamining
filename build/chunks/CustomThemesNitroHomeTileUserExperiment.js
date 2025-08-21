/** Chunk was on web.js **/
/** chunk id: 893712, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  id: "2025-08_custom_themes_nitro_home_tile",
  kind: "user",
  label: "Custom Themes Nitro Home Tile",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Show Custom Themes tile on Nitro Home",
    config: {
      enabled: true
    }
  }]
})