/** Chunk was on 76233 **/
/** chunk id: 91176, original params: t,n,l (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk749210 = require("./749210.js");
let o = {
  async setCommunicationDisabledDuration(t, n, l, a, o, s) {
    let u = null != l ? i()().add(l, "s").toISOString() : null;
    await e.Z.setCommunicationDisabledUntil({
      guildId: t,
      userId: n,
      communicationDisabledUntilTimestamp: u,
      duration: l,
      reason: a,
      location: o,
      moderatorReportId: s
    })
  }
}