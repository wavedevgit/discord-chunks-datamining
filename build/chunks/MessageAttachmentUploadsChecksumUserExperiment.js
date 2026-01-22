/** Chunk was on web.js **/
/** chunk id: 87481, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-03_message_attachment_uploads_checksum",
  label: "Validate checksum of message attachment uploads",
  defaultConfig: {
    enabled: false,
    enforced: false,
    largerChunks: false
  },
  treatments: [{
    id: 1,
    label: "Control 2",
    config: {
      enabled: false,
      enforced: false,
      largerChunks: false
    }
  }, {
    id: 2,
    label: "Validate without enforcement",
    config: {
      enabled: true,
      enforced: false,
      largerChunks: false
    }
  }, {
    id: 3,
    label: "Validate without enforcement (larger chunks)",
    config: {
      enabled: true,
      enforced: false,
      largerChunks: true
    }
  }, {
    id: 4,
    label: "Validate with enforcement",
    config: {
      enabled: true,
      enforced: true,
      largerChunks: false
    }
  }]
})