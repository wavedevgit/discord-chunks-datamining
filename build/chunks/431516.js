/** Chunk was on 9536 **/
/** chunk id: 431516, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  N: () => s
});
var Chunk399606 = require("./399606.js"),
  Chunk999382 = require("./999382.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function s() {
  let e = (0, r.e7)([l.default], () => l.default.getCurrentUser()),
    t = (0, r.e7)([i.Z], () => i.Z.getProps().mfaLevel);
  return {
    isUserMFAEnabled: (null == e ? true : e.mfaEnabled) === true,
    isModerationMFAEnabled: t === a.BpS.ELEVATED
  }
}