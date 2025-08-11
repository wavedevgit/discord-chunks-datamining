/** Chunk was on 1272 **/
/** chunk id: 600027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => u
});
var Chunk591472 = require("./591472.js"),
  Chunk159300 = require("./159300.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk996106 = require("./996106.js"),
  Chunk561205 = require("./561205.js"),
  Chunk981631 = require("./981631.js");

function u() {
  let e = Chunk591472.Z.getConnectedFrame();
  if (null != module) return {
    frame: module,
    channel: true,
    guild: true
  };
  let t = (0, Chunk561205.Z)();
  if (null == exports) throw new Chunk996106.Z({
    errorCode: Chunk981631.lTL.INVALID_CHANNEL
  }, "Invalid channel");
  let n = Chunk430824.Z.getGuild(exports.getGuildId());
  if (null == require) throw new Chunk996106.Z({
    errorCode: Chunk981631.lTL.INVALID_CHANNEL
  }, "Invalid guild ".concat(exports.getGuildId()));
  if (!(0, Chunk159300.b)(Chunk496675.Z, require, exports)) throw new Chunk996106.Z({
    errorCode: Chunk981631.lTL.INVALID_PERMISSIONS
  }, "No invite permissions for ".concat(exports.id));
  return {
    frame: true,
    channel: exports,
    guild: require
  }
}