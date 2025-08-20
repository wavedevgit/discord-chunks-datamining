/** Chunk was on web.js **/
/** chunk id: 378441, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk131951 = require("./131951.js"),
  Chunk420439 = require("./420439.js");

function o() {
  return (0, Chunk442837.cj)([Chunk131951.Z, Chunk420439.Z], () => ({
    activeVoice: Chunk131951.Z.getActiveVoiceFilter(),
    mostRecentlyRequestedVoiceId: Chunk131951.Z.getMostRecentlyRequestedVoiceFilter(),
    lastInitAttemptMayHaveCrashed: Chunk420439.Z.getLastInitAttemptMayHaveCrashed()
  }))
}