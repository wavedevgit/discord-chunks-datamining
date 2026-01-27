/** Chunk was on web.js **/
/** chunk id: 649813, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk956793 = require("./956793.js"),
  Chunk439372 = require("./439372.js"),
  Chunk976860 = require("./976860.js"),
  Chunk345942 = require("./345942.js"),
  Chunk430452 = require("./430452.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk652215 = require("./652215.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p extends Chunk439372.A {
  handleGuildCreate(e) {
    let {
      guild: t
    } = e, n = c.A.getChannelId(d.ME), r = c.A.getVoiceChannelId();
    t.id === n && (0, s.u)(t.id), t.id === r && false !== t.unavailable && null == r && i.default.selectVoiceChannel((0, c.c)(t.id))
  }
  handleChannelCreate(e) {
    let {
      channel: t
    } = e;
    if (t.type !== d.rbe.GROUP_DM) return;
    let n = t.originChannelId,
      r = c.A.getChannelId(d.eGj);
    null == u.A.getGuildId() && null != n && n === r && (0, o.pX)(d.BVt.CHANNEL(d.ME, t.id)), null != n && n === c.A.getVoiceChannelId() && i.default.selectVoiceChannel(t.id, l.A.isVideoEnabled())
  }
  handleLogout() {
    r.h.dispatch({
      type: "VOICE_CHANNEL_SELECT",
      channelId: null,
      guildId: null,
      video: false,
      currentVoiceChannelId: null,
      joinVoiceId: null
    })
  }
  constructor(...e) {
    super(...e), f(this, "actions", {
      GUILD_CREATE: this.handleGuildCreate,
      CHANNEL_CREATE: this.handleChannelCreate,
      LOGOUT: this.handleLogout
    })
  }
}
let _ = new p