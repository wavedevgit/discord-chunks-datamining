/** Chunk was on web.js **/
/** chunk id: 803038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mc: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  id: "2025-05_client_theme_color_picker",
  kind: "user",
  label: "Client Theme Color Picker",
  defaultConfig: {
    enabled: false,
    v2EditorEnabled: false,
    mobileRenderingEnabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enables setting client theme color picker",
    config: {
      enabled: true,
      v2EditorEnabled: false,
      mobileRenderingEnabled: false
    }
  }, {
    id: 2,
    label: "Enables the V2 custom theme editor and mobile rendering",
    config: {
      enabled: true,
      v2EditorEnabled: true,
      mobileRenderingEnabled: true
    }
  }, {
    id: 3,
    label: "Same as 2 but for people who were previously in treatment 1",
    config: {
      enabled: true,
      v2EditorEnabled: true,
      mobileRenderingEnabled: true
    }
  }]
})