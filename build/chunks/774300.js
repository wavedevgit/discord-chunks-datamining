/** Chunk was on 92779 **/
/** chunk id: 774300, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u,
  F: () => p
});
var r, Chunk308528 = require("./308528.js"),
  Chunk843472 = require("./843472.js"),
  Chunk626584 = require("./626584.js"),
  Chunk734057 = require("./734057.js"),
  Chunk927813 = require("./927813.js"),
  Chunk513391 = require("./513391.js");
let d = +Chunk927813.A.Millis.SECOND + 10;
var p = ((r = {})[r.GROUP_DM = 0] = "GROUP_DM", r[r.USER = 1] = "USER", r[r.CHANNEL = 2] = "CHANNEL", r);
class b extends Chunk513391.A {
  _sendInvite(e, t, n, r, o) {
    s.A.sendInvite(e.id, t, n, r).then(() => o(null, true), () => o(null, false))
  }
  drain(e, t) {
    let {
      location: n,
      inviteAnalyticsMetadata: r
    } = e;
    switch (e.type) {
      case 0:
      case 2:
        this._sendInvite(e.channel, e.inviteKey, n, r, t);
        break;
      case 1:
        o.A.ensurePrivateChannel(e.user.id).then(o => {
          let s = a.A.getChannel(o);
          null != s && this._sendInvite(s, e.inviteKey, n, r, t)
        }, () => t(null, false))
    }
  }
  constructor() {
    super(new i.A("InviteQueue"), d)
  }
}
let u = new b