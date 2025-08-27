/** Chunk was on web.js **/
/** chunk id: 87051, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./997841.js");
var Chunk544891 = require("./544891.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk149071 = require("./149071.js"),
  Chunk9156 = require("./9156.js"),
  Chunk630388 = require("./630388.js"),
  Chunk621600 = require("./621600.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk468788 = require("./468788.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");
let h = {
  open(e) {
    a.Z.dispatch({
      type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
      guildId: e
    })
  },
  close() {
    Chunk570140.Z.dispatch({
      type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
    })
  },
  updateGuildNotificationSettings(e, t, n, r) {
    let i = (0, c.GA)(e);
    o.Z.saveUserGuildSettings(e, t), a.Z.dispatch({
      type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
      guildId: e,
      settings: t
    }), (0, c.Wq)(e, t, i, n, r)
  },
  updateGuildAndChannelNotificationSettings(e, t, n, r) {
    let i = u.default.keys(t.channel_overrides),
      s = (0, c.GA)(e),
      l = (0, c.wK)(e, i);
    o.Z.saveUserGuildSettings(e, t), a.Z.dispatch({
      type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
      guildId: e,
      settings: t
    }), (0, c.Wq)(e, t, s, n, r), u.default.keys(t.channel_overrides).forEach(i => {
      let a = l.get(i);
      (0, c.jz)({
        guildId: e,
        channelId: i,
        change: t.channel_overrides[i],
        previous: a,
        label: n,
        location: r
      })
    })
  },
  updateGuildNotificationSettingsBulk(e, t, n) {
    let r = u.default.keys(e),
      i = (0, c.rU)(r);
    o.Z.saveUserGuildSettingsBulk(e), u.default.entries(e).forEach(e => {
      let [r, o] = e, s = i.get(r);
      a.Z.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
        guildId: r,
        settings: o
      }), (0, c.Wq)(r, o, s, t, n)
    })
  },
  updateChannelOverrideSettings(e, t, n, r, s) {
    let l = (0, c.I)(e, t),
      u = {
        channel_overrides: {
          [t]: n
        }
      };
    o.Z.saveUserGuildSettings(e, u), a.Z.dispatch({
      type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
      guildId: e,
      channelId: t,
      settings: n
    }), i.uv.announce(p.intl.string(p.t.MlIsJy)), (0, c.jz)({
      guildId: e,
      channelId: t,
      change: n,
      previous: l,
      label: r,
      location: s
    })
  },
  updateChannelOverrideSettingsBulk(e, t, n, r) {
    let i = u.default.keys(t),
      s = {
        channel_overrides: t
      },
      l = (0, c.wK)(e, i);
    o.Z.saveUserGuildSettings(e, s), a.Z.dispatch({
      type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
      guildId: e,
      overrides: t
    }), u.default.keys(t).forEach(i => (0, c.jz)({
      guildId: e,
      channelId: i,
      change: t[i],
      previous: l.get(i),
      label: n,
      location: r
    }))
  },
  updateAppDMOverrideSettings(e, t, n, r, s) {
    let l = (0, c.I)(e, t),
      u = {
        channel_overrides: {
          [t]: r
        }
      };
    o.Z.saveUserGuildSettings(e, u), a.Z.dispatch({
      type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
      guildId: e,
      channelId: t,
      settings: r
    }), i.uv.announce(p.intl.string(p.t.MlIsJy)), (0, c.jz)({
      updateType: f.I.AUTHORIZED_APP_DM,
      guildId: e,
      channelId: t,
      applicationId: n,
      change: r,
      previous: l,
      label: s
    })
  },
  setForumThreadsCreated(e, t) {
    let n = t ? _.ic.NEW_FORUM_THREADS_ON : _.ic.NEW_FORUM_THREADS_OFF,
      r = t ? _.ic.NEW_FORUM_THREADS_OFF : _.ic.NEW_FORUM_THREADS_ON,
      i = s.ZP.getChannelFlags(e) & ~r | n;
    this.updateChannelOverrideSettings(e.guild_id, e.id, {
      flags: i
    }, c.UE.forumThreadsCreated(t))
  },
  async setAccountFlag(e, t) {
    let n = s.ZP.accountNotificationSettings.flags,
      i = (0, l.mB)(n, e, t);
    await r.tn.patch({
      url: d.ANM.ACCOUNT_NOTIFICATION_SETTINGS,
      body: {
        flags: i
      },
      rejectWithError: false
    }), await a.Z.dispatch({
      type: "NOTIFICATION_SETTINGS_UPDATE",
      settings: {
        flags: i
      }
    })
  }
}