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
  let e = r.Z.getConnectedFrame();
  if (null != e) return {
    frame: e,
    channel: true,
    guild: true
  };
  let t = (0, s.Z)();
  if (null == t) throw new o.Z({
    errorCode: c.lTL.INVALID_CHANNEL
  }, "Invalid channel");
  let n = l.Z.getGuild(t.getGuildId());
  if (null == n) throw new o.Z({
    errorCode: c.lTL.INVALID_CHANNEL
  }, "Invalid guild ".concat(t.getGuildId()));
  if (!(0, i.b)(a.Z, n, t)) throw new o.Z({
    errorCode: c.lTL.INVALID_PERMISSIONS
  }, "No invite permissions for ".concat(t.id));
  return {
    frame: true,
    channel: t,
    guild: n
  }
}