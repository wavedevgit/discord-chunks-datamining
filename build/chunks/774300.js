/** Chunk was on 41278 **/
/** chunk id: 774300, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => v,
  F: () => c
});
var a, Chunk308528 = require("./308528.js"),
  Chunk843472 = require("./843472.js"),
  Chunk626584 = require("./626584.js"),
  Chunk734057 = require("./734057.js"),
  Chunk927813 = require("./927813.js"),
  Chunk513391 = require("./513391.js");
let b = +Chunk927813.A.Millis.SECOND + 10;
var c = ((a = {})[a.GROUP_DM = 0] = "GROUP_DM", a[a.USER = 1] = "USER", a[a.CHANNEL = 2] = "CHANNEL", a);
class l extends Chunk513391.A {
  _sendInvite(e, n, t, a, i) {
    _.A.sendInvite(e.id, n, t, a).then(() => i(null, true), () => i(null, false))
  }
  drain(e, n) {
    let {
      location: t,
      inviteAnalyticsMetadata: a
    } = e;
    switch (e.type) {
      case 0:
      case 2:
        this._sendInvite(e.channel, e.inviteKey, t, a, n);
        break;
      case 1:
        i.A.ensurePrivateChannel(e.user.id).then(i => {
          let _ = r.A.getChannel(i);
          null != _ && this._sendInvite(_, e.inviteKey, t, a, n)
        }, () => n(null, false))
    }
  }
  constructor() {
    super(new s.A("InviteQueue"), b)
  }
}
let v = new l