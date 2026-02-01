/** Chunk was on 61344 **/
/** chunk id: 517092, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./896048.js"), require("./938796.js");
var l, Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk887560 = require("./887560.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk355097 = require("./355097.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = [{
    timeSinceJoin: +Chunk927813.A.Millis.HOUR,
    sends: 1,
    viewTime: +Chunk927813.A.Millis.MINUTE
  }, {
    timeSinceJoin: +Chunk927813.A.Millis.DAY,
    sends: 2,
    viewTime: 2 * Chunk927813.A.Millis.MINUTE
  }, {
    timeSinceJoin: +Chunk927813.A.Millis.WEEK,
    sends: 5,
    viewTime: 5 * Chunk927813.A.Millis.MINUTE
  }, {
    timeSinceJoin: +Chunk927813.A.Millis.DAYS_30,
    sends: 10,
    viewTime: 30 * Chunk927813.A.Millis.MINUTE
  }],
  y = 5 * _[_.length - 1].viewTime,
  v = Chunk927813.A.Millis.WEEK,
  E = {
    channels: {}
  },
  O = new Set,
  C = null,
  x = 0,
  S = 0;

function j() {
  if (null == C || !N(C)) returnfalse;
  let e = T(C);
  if (e.lastActionTime > Date.now() - h.A.Millis.DAY && e.viewDuration > y) returnfalse;
  let t = Date.now();
  e.lastActionTime = t, e.viewDuration += t - x, x = t
}

function I() {
  return 0 !== S && (clearInterval(S), S = 0), d.Ay.useNewNotifications && (S = setInterval(() => {
    j() && R.emitChange()
  }, 15 * h.A.Millis.SECOND)), false
}

function T(e) {
  return e in E.channels || (E.channels[e] = {
    lastActionTime: 0,
    viewDuration: 0,
    numSends: 0
  }), E.channels[e]
}

function N(e) {
  if (!d.Ay.useNewNotifications || O.has(e)) returnfalse;
  let t = o.A.getBasicChannel(e);
  if (null == t || null == t.guild_id || d.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || P(t.guild_id, t.id) || P(t.guild_id, t.parent_id)) returnfalse;
  let n = d.Ay.resolveUnreadSetting(t);
  return d.Ay.getChannelUnreadSetting(t.guild_id, t.id) === g.e.UNSET && n !== g.e.ALL_MESSAGES
}

function P(e, t) {
  if (null == t) returnfalse;
  let n = d.Ay.getChannelOverrides(e)[t];
  return null != n && !!(null != n.message_notifications && n.message_notifications !== m.orn.NULL || null != n.flags && (0, r.br)(n.flags, A.vv.UNREADS_ALL_MESSAGES | A.vv.UNREADS_ONLY_MENTIONS))
}
class w extends(l = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (E.channels = e.channels), this.syncWith([d.Ay], I), this.waitFor(s.default, o.A, c.A, u.A, d.Ay)
  }
  getState() {
    return E
  }
  getLastActionTime(e) {
    var t, n;
    return null != (t = null == (n = E.channels[e]) ? true : n.lastActionTime) ? t : 0
  }
  maybeAutoUpgradeChannel(e) {
    if (!N(e)) returnfalse;
    let t = o.A.getBasicChannel(e);
    return null != t && null != t.guild_id && !! function(e) {
      var t;
      let n = c.A.getGuild(e.guild_id),
        l = null != (t = null == n ? true : n.joinedAt) ? t : new Date,
        r = Math.min(p.default.age(e.id), Date.now() - l.getTime()),
        i = E.channels[e.id];
      if (null == i || i.lastActionTime < Date.now() - v) returnfalse;
      for (let e of _)
        if (r < e.timeSinceJoin && (i.numSends >= e.sends || i.viewDuration >= e.viewTime)) returntrue;
      returnfalse
    }(t) && (delete E.channels[e], O.add(e), (0, f.mA)(t.guild_id, t.id, g.e.ALL_MESSAGES), true)
  }
}
b(w, "displayName", "UnreadSettingNoticeStore2"), b(w, "persistKey", "UnreadSettingNoticeStore2");
let R = new w(Chunk73153.h, {
    CHANNEL_SELECT: function() {
      let e = j();
      return C = u.A.getChannelId(), x = Date.now(), e
    },
    CONNECTION_OPEN: function() {
      C = u.A.getChannelId(), x = Date.now(), I();
      let e = Date.now() - v;
      p.default.forEach(E.channels, (t, n) => {
        let {
          lastActionTime: l
        } = t;
        l < e && delete E.channels[n]
      })
    },
    MESSAGE_CREATE: function(e) {
      var t;
      if (e.optimistic || e.isPushNotification || (null == (t = e.message.author) ? true : t.id) !== s.default.getId() || !N(e.channelId)) returnfalse;
      let n = T(e.channelId);
      n.lastActionTime = Date.now(), n.numSends++
    }
  }),
  D = R