/** Chunk was on web.js **/
/** chunk id: 975970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-03_desktop_communication_notifications",
  label: "Desktop Communication Notifications",
  defaultConfig: {
    enabled: false,
    includeImages: false,
    includeStickers: false
  },
  treatments: [{
    id: 1,
    label: "Enable communication notifications",
    config: {
      enabled: true,
      includeImages: false,
      includeStickers: false
    }
  }, {
    id: 2,
    label: "Also embed (SFW) images in notification content",
    config: {
      enabled: true,
      includeImages: true,
      includeStickers: false
    }
  }, {
    id: 3,
    label: "Also embed stickers in notification content",
    config: {
      enabled: true,
      includeImages: true,
      includeStickers: true
    }
  }]
})