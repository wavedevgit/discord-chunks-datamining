/** Chunk was on web.js **/
/** chunk id: 149770, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk287734 = require("./287734.js"),
  Chunk147913 = require("./147913.js"),
  Chunk703656 = require("./703656.js"),
  Chunk769654 = require("./769654.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p extends Chunk147913.Z {
  handleGuildCreate(e) {
    let {
      guild: t
    } = e, n = c.Z.getChannelId(d.ME), r = c.Z.getVoiceChannelId();
    t.id === n && (0, s.X)(t.id), t.id === r && false !== t.unavailable && null == r && i.default.selectVoiceChannel((0, c.C)(t.id))
  }
  handleChannelCreate(e) {
    let {
      channel: t
    } = e;
    if (t.type !== d.d4z.GROUP_DM) return;
    let n = t.originChannelId,
      r = c.Z.getChannelId(d.kod);
    null == u.Z.getGuildId() && null != n && n === r && (0, o.uL)(d.Z5c.CHANNEL(d.ME, t.id)), null != n && n === c.Z.getVoiceChannelId() && i.default.selectVoiceChannel(t.id, l.Z.isVideoEnabled())
  }
  handleLogout() {
    r.Z.dispatch({
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