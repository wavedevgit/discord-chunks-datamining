/** Chunk was on 21738 **/
/** chunk id: 954843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => u
});
var Chunk91242 = require("./91242.js"),
  Chunk855687 = require("./855687.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk636401 = require("./636401.js"),
  Chunk569475 = require("./569475.js"),
  Chunk652215 = require("./652215.js");

function u() {
  let e = r.A.getConnectedFrame();
  if (null != e) return {
    frame: e,
    channel: true,
    guild: true
  };
  let t = (0, o.A)();
  if (null == t) throw new s.A({
    errorCode: c.Lw6.INVALID_CHANNEL
  }, "Invalid channel");
  let n = l.A.getGuild(t.getGuildId());
  if (null == n) throw new s.A({
    errorCode: c.Lw6.INVALID_CHANNEL
  }, "Invalid guild ".concat(t.getGuildId()));
  if (!(0, i.K)(a.A, n, t)) throw new s.A({
    errorCode: c.Lw6.INVALID_PERMISSIONS
  }, "No invite permissions for ".concat(t.id));
  return {
    frame: true,
    channel: t,
    guild: n
  }
}