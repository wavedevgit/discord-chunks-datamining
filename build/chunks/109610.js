/** Chunk was on web.js **/
/** chunk id: 109610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./997841.js"), require("./388685.js");
var Chunk87051 = require("./87051.js"),
  Chunk147913 = require("./147913.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk9156 = require("./9156.js"),
  Chunk70956 = require("./70956.js"),
  Chunk630388 = require("./630388.js"),
  Chunk621600 = require("./621600.js"),
  Chunk113449 = require("./113449.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = +Chunk70956.Z.Millis.DAY;
class m extends Chunk147913.Z {
  checkGuilds() {
    Chunk9156.ZP.useNewNotifications && Chunk430824.Z.getGuildsArray().forEach(e => {
      if (null == e.joinedAt || Date.now() - e.joinedAt.getTime() > h || s.ZP.getMessageNotifications(e.id) === f.bL.ALL_MESSAGES) return;
      for (let t of Object.values(s.ZP.getChannelOverrides(e.id)))
        if (null != t.message_notifications && t.message_notifications !== f.bL.NULL || null != t.flags && (0, c.EB)(t.flags, _.ic.UNREADS_ALL_MESSAGES | _.ic.UNREADS_ONLY_MENTIONS)) return;
      let t = Object.values(o.Z.getMutableBasicGuildChannelsForGuild(e.id)).filter(e => e.type === f.d4z.GUILD_ANNOUNCEMENT);
      if (0 === t.length) return;
      let n = {};
      for (let r of t) n[r.id] = {
        flags: (0, d.pq)(s.ZP.getChannelIdFlags(e.id, r.id), _.ic.UNREADS_ALL_MESSAGES)
      };
      r.Z.updateChannelOverrideSettingsBulk(e.id, n, u.ZB.AnnouncementAutoEnable)
    })
  }
  constructor(...e) {
    super(...e), p(this, "actions", {
      GUILD_CREATE: () => this.checkGuilds(),
      POST_CONNECTION_OPEN: () => this.checkGuilds()
    })
  }
}
let g = new m