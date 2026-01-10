/** Chunk was on 92524 **/
/** chunk id: 91176, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk749210 = require("./749210.js");
let a = {
  async setCommunicationDisabledDuration(e, t, n, l, a, o) {
    let u = null != n ? i()().add(n, "s").toISOString() : null;
    await r.Z.setCommunicationDisabledUntil({
      guildId: e,
      userId: t,
      communicationDisabledUntilTimestamp: u,
      duration: n,
      reason: l,
      location: a,
      moderatorReportId: o
    })
  }
}