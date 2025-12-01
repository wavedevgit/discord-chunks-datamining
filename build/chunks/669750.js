/** Chunk was on web.js **/
/** chunk id: 669750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk362721 = require("./362721.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk979651 = require("./979651.js"),
  Chunk906605 = require("./906605.js"),
  Chunk574176 = require("./574176.js"),
  Chunk106301 = require("./106301.js"),
  Chunk866071 = require("./866071.js"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m extends Chunk147913.Z {
  constructor(...e) {
    super(...e), _(this, "previousVoiceChannelId", true), _(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
      LOGOUT: () => this.handleLogout()
    }), _(this, "handlePostConnectionOpen", () => {
      (0, l.UP)()
    }), _(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t,
        guildId: n
      } = e, {
        enableHangStatus: r,
        setDefaultStatus: a
      } = (0, c.gx)({
        guildId: null != n ? n : p.lds,
        location: "HangStatusManager"
      });
      if (null == n && null == t) {
        this.handleDisconnectFromVoiceChannel(), this.previousVoiceChannelId = t;
        return
      }
      if (!r || t === this.previousVoiceChannelId || (this.previousVoiceChannelId = t, null == n || null == t)) return;
      let s = o.Z.getChannel(t);
      if (null == s || s.type !== p.d4z.GUILD_VOICE || !(0, i.wQ)(s, true) || null != u.Z.getCurrentHangStatus()) return;
      let _ = u.Z.getCurrentDefaultStatus();
      if (null != _) {
        if (_.status === f.tN.CUSTOM && null != _.customHangStatus) {
          let {
            status: e,
            emoji: t
          } = _.customHangStatus;
          if (null != t && !(0, d.K)(t, s)) {
            a && (0, l.Zx)(f.tN.CHILLING);
            return
          }(0, l._s)(e, t)
        } else if (null != _.status) return void(0, l.Zx)(_.status);
        return
      }
      a && (0, l.Zx)(f.tN.CHILLING)
    }), _(this, "handleGuildMemberUpdate", e => {
      let {
        user: t,
        guildId: n
      } = e;
      if (t.id !== a.default.getId()) return;
      let r = s.Z.getCurrentClientVoiceChannelId(n);
      if (null == r || null == u.Z.getCurrentHangStatus()) return;
      let c = o.Z.getChannel(r);
      (0, i.wQ)(c, true) || (0, l.Sc)()
    }), _(this, "handleDisconnectFromVoiceChannel", () => {
      (0, l.Sc)()
    }), _(this, "handleLogout", () => {
      this.handleDisconnectFromVoiceChannel()
    })
  }
}
let h = new m