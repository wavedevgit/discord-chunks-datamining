/** Chunk was on web.js **/
/** chunk id: 932015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk81825 = require("./81825.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk81825.Z {
  static createFromServer(e) {
    return new o({
      id: e.id,
      guildId: e.guild_id,
      userId: null != e.user ? e.user.id : e.user_id,
      user: e.user,
      ended: e.ended,
      endsAt: null != e.ends_at && "" !== e.ends_at ? new Date(e.ends_at) : null
    })
  }
  constructor(e) {
    super(), i(this, "id", true), i(this, "guildId", true), i(this, "userId", true), i(this, "user", true), i(this, "ended", true), i(this, "endsAt", true), this.id = e.id, this.guildId = e.guildId, this.userId = e.userId, this.user = e.user, this.ended = e.ended, this.endsAt = null != e.endsAt ? e.endsAt : null
  }
}
let a = o