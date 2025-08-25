/** Chunk was on web.js **/
/** chunk id: 522558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2024-08_friend_anniversaries",
  label: "Friend Anniversaries",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  defaultConfig: {
    enabled: false,
    enableEmojiCTA: false
  },
  treatments: [{
    id: 1,
    label: "Friend anniversaries enabled with text CTA",
    config: {
      enabled: true,
      enableEmojiCTA: false
    }
  }, {
    id: 2,
    label: "Friend anniversaries enabled with emoji CTA",
    config: {
      enabled: true,
      enableEmojiCTA: true
    }
  }]
})