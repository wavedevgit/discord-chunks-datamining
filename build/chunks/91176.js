/** Chunk was on 76233 **/
/** chunk id: 91176, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk749210 = require("./749210.js");
let s = {
  async setCommunicationDisabledDuration(t, n, e, l, s, r) {
    let o = null != e ? a()().add(e, "s").toISOString() : null;
    await i.Z.setCommunicationDisabledUntil({
      guildId: t,
      userId: n,
      communicationDisabledUntilTimestamp: o,
      duration: e,
      reason: l,
      location: s,
      moderatorReportId: r
    })
  }
}