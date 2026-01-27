/** Chunk was on 43629 **/
/** chunk id: 469679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => s
});
var Chunk945810 = require("./945810.js"),
  Chunk927813 = require("./927813.js");
let s = (0, Chunk945810.mj)({
  name: "2026-01-reply-nudge",
  kind: "user",
  defaultConfig: {
    enabled: false,
    minUserDMAffinity: .6,
    minSinceReceiverMessageMs: 12 * Chunk927813.A.Millis.HOUR,
    minLatestMessageAgeMs: 12 * Chunk927813.A.Millis.HOUR
  },
  variations: {
    1: {
      enabled: true,
      minUserDMAffinity: .6,
      minSinceReceiverMessageMs: 12 * Chunk927813.A.Millis.HOUR,
      minLatestMessageAgeMs: 12 * Chunk927813.A.Millis.HOUR
    },
    2: {
      enabled: true,
      minUserDMAffinity: .7,
      minSinceReceiverMessageMs: 12 * Chunk927813.A.Millis.HOUR,
      minLatestMessageAgeMs: 12 * Chunk927813.A.Millis.HOUR
    },
    3: {
      enabled: true,
      minUserDMAffinity: .6,
      minSinceReceiverMessageMs: 24 * Chunk927813.A.Millis.HOUR,
      minLatestMessageAgeMs: 12 * Chunk927813.A.Millis.HOUR
    },
    4: {
      enabled: true,
      minUserDMAffinity: .7,
      minSinceReceiverMessageMs: 24 * Chunk927813.A.Millis.HOUR,
      minLatestMessageAgeMs: 12 * Chunk927813.A.Millis.HOUR
    },
    5: {
      enabled: true,
      minUserDMAffinity: 0,
      minSinceReceiverMessageMs: 5 * Chunk927813.A.Millis.MINUTE,
      minLatestMessageAgeMs: 5 * Chunk927813.A.Millis.MINUTE
    }
  }
})