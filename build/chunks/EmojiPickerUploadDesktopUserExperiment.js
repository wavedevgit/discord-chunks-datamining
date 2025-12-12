/** Chunk was on web.js **/
/** chunk id: 392552, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => i,
  Z: () => a
});
var Chunk818083 = require("./818083.js"),
  i = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.WITH_TOP_LIST = 1] = "WITH_TOP_LIST", e[e.WITHOUT_TOP_LIST = 2] = "WITHOUT_TOP_LIST", e
  }({});
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2024-02_emoji_picker_upload_desktop",
  label: "Desktop: Consistently show the Emoji Picker Upload button at the start of emoji lists",
  defaultConfig: {
    enabled: false,
    treatment: 0
  },
  treatments: [{
    id: 1,
    label: "With Top Emojis showing the Upload button",
    config: {
      enabled: true,
      treatment: 1
    }
  }, {
    id: 2,
    label: "Without Top Emojis showing the Upload button",
    config: {
      enabled: true,
      treatment: 2
    }
  }]
})