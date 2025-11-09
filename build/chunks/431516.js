/** Chunk was on 29679 **/
/** chunk id: 431516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => s
});
var Chunk399606 = require("./399606.js"),
  Chunk999382 = require("./999382.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function s() {
  let e = (0, Chunk399606.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = (0, Chunk399606.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().mfaLevel);
  return {
    isUserMFAEnabled: (null == module ? true : module.mfaEnabled) === true,
    isModerationMFAEnabled: exports === Chunk981631.BpS.ELEVATED
  }
}