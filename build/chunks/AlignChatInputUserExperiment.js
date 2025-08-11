/** Chunk was on web.js **/
/** chunk id: 338390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s,
  i: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk171393 = require("./171393.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-05_align_chat_input",
  label: "bottom-aligned chat input",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  defaultConfig: {
    alignChatInput: false
  },
  treatments: [{
    id: 1,
    label: "bottom-aligned chat input",
    config: {
      alignChatInput: true
    }
  }]
});

function s(e) {
  let t = (0, i.Z)("go_back_to_regular_input");
  return a.useExperiment({
    location: e
  }, {
    disable: t,
    autoTrackExposure: true
  }).alignChatInput
}