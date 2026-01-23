/** Chunk was on 94390 **/
/** chunk id: 262577, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk686956 = require("./686956.js");
let o = {
  async setCommunicationDisabledDuration(t, e, n, l, o, r) {
    let u = null != n ? a()().add(n, "s").toISOString() : null;
    await i.A.setCommunicationDisabledUntil({
      guildId: t,
      userId: e,
      communicationDisabledUntilTimestamp: u,
      duration: n,
      reason: l,
      location: o,
      moderatorReportId: r
    })
  }
}