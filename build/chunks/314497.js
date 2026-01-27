/** Chunk was on web.js **/
/** chunk id: 314497, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk532622 = require("./532622.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk977997 = require("./977997.js"),
  Chunk69555 = require("./69555.js"),
  Chunk140547 = require("./140547.js"),
  Chunk242919 = require("./242919.js"),
  Chunk846218 = require("./846218.js"),
  Chunk708455 = require("./708455.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class h extends Chunk439372.A {
  constructor(...e) {
    super(...e), _(this, "previousVoiceChannelId", true), _(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
      LOGOUT: () => this.handleLogout()
    }), _(this, "handlePostConnectionOpen", () => {
      (0, l.jI)()
    }), _(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t,
        guildId: n
      } = e, {
        enableHangStatus: r,
        setDefaultStatus: a
      } = (0, c.ko)({
        guildId: null != n ? n : p.dJq,
        location: "HangStatusManager"
      });
      if (null == n && null == t) {
        this.handleDisconnectFromVoiceChannel(), this.previousVoiceChannelId = t;
        return
      }
      if (!r || t === this.previousVoiceChannelId || (this.previousVoiceChannelId = t, null == n || null == t)) return;
      let s = o.A.getChannel(t);
      if (null == s || s.type !== p.rbe.GUILD_VOICE || !(0, i.qC)(s, true) || null != u.A.getCurrentHangStatus()) return;
      let _ = u.A.getCurrentDefaultStatus();
      if (null != _) {
        if (_.status === f.Kk.CUSTOM && null != _.customHangStatus) {
          let {
            status: e,
            emoji: t
          } = _.customHangStatus;
          if (null != t && !(0, d.n)(t, s)) {
            a && (0, l.Iq)(f.Kk.CHILLING);
            return
          }(0, l.hS)(e, t)
        } else if (null != _.status) return void(0, l.Iq)(_.status);
        return
      }
      a && (0, l.Iq)(f.Kk.CHILLING)
    }), _(this, "handleGuildMemberUpdate", e => {
      let {
        user: t,
        guildId: n
      } = e;
      if (t.id !== a.default.getId()) return;
      let r = s.A.getCurrentClientVoiceChannelId(n);
      if (null == r || null == u.A.getCurrentHangStatus()) return;
      let c = o.A.getChannel(r);
      (0, i.qC)(c, true) || (0, l.eK)()
    }), _(this, "handleDisconnectFromVoiceChannel", () => {
      (0, l.eK)()
    }), _(this, "handleLogout", () => {
      this.handleDisconnectFromVoiceChannel()
    })
  }
}
let m = new h