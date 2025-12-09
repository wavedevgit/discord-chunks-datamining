/** Chunk was on 34740 **/
/** chunk id: 201469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => a,
  m2: () => l
});
var Chunk833845 = require("./833845.js"),
  Chunk643632 = require("./643632.js");

function l(e) {
  return {
    isLive: (0, r.Z)(e),
    isModerator: (0, i.Z)(e, true).moderator
  }
}

function a(e) {
  let t = (0, r.Z)(e),
    n = (0, i.Z)(e, true).moderator;
  return !t && n ? 1 : 0
}