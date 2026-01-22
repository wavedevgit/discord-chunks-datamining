/** Chunk was on 94390 **/
/** chunk id: 262577, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk686956 = require("./686956.js");
let r = {
  async setCommunicationDisabledDuration(t, e, n, a, r, o) {
    let u = null != n ? i()().add(n, "s").toISOString() : null;
    await l.A.setCommunicationDisabledUntil({
      guildId: t,
      userId: e,
      communicationDisabledUntilTimestamp: u,
      duration: n,
      reason: a,
      location: r,
      moderatorReportId: o
    })
  }
}