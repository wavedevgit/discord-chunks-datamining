/** Chunk was on 21738 **/
/** chunk id: 802061, original params: e,t,n (module,exports,require) **/
require("./896048.js"), require("./321073.js"), require("./228524.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk661191 = require("./661191.js"),
  Chunk936649 = require("./936649.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = {};

function h(e, t) {
  let n = p[e];
  return !(null == n || n.has(t)) && (p[e] = new Set(n.add(t)), true)
}
class g extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(a.default, s.A, o.A), p = {}, null != e && c.default.keys(e).forEach(t => {
      let n = e[t];
      null != n && "function" == typeof n[Symbol.iterator] && (p[t] = new Set(n))
    })
  }
  getProgress(e) {
    return p[e]
  }
  hasProgress(e) {
    let t = p[e];
    return null != t && !t.has(u.gj.DISMISSED)
  }
  getState() {
    return p
  }
}
d(g, "displayName", "GuildProgressStore"), d(g, "persistKey", "GuildProgressStore"), new g(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    let e = [];
    c.default.keys(p).forEach(t => {
      p[t].has(u.gj.COMPLETED) && e.push(t)
    }), e.forEach(e => h(e, u.gj.DISMISSED))
  },
  GUILD_PROGRESS_INITIALIZE: function(e) {
    let {
      guildId: t
    } = e;
    null == p[t] && (p[t] = new Set), p[t].has(u.gj.COMPLETED) || p[t].delete(u.gj.DISMISSED)
  },
  GUILD_PROGRESS_COMPLETED_SEEN: function(e) {
    let {
      guildId: t
    } = e;
    if (null == p[t]) returnfalse;
    p[t] = new Set(p[t].add(u.gj.COMPLETED))
  },
  GUILD_PROGRESS_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return h(t, u.gj.DISMISSED)
  },
  GUILD_CREATE: function(e) {
    let {
      guild: {
        id: t,
        member_count: n
      }
    } = e, r = o.A.getGuild(t);
    if (null == r) returnfalse;
    r.ownerId === a.default.getId() && null != p[r.id] && (null != r.icon && p[r.id].add(u.gj.AVATAR), n > 1 && p[r.id].add(u.gj.INVITE))
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    return null != t && null != t.guild_id && null != p[t.guild_id] && h(t.guild_id, u.gj.CHANNEL)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = false;
    for (let e of t) null != e && null != e.guild_id && null != p[e.guild_id] && false !== h(e.guild_id, u.gj.CHANNEL) && (n = true);
    return n
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function(e) {
    let {
      guild: t
    } = e;
    return null != t && null != t.id && null != p[t.id] && null != t.icon && h(t.id, u.gj.AVATAR)
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: r
    } = e, i = s.A.getChannel(n);
    return (null == (t = r.author) ? true : t.id) === a.default.getId() && null != i && null != p[i.guild_id] && h(i.guild_id, u.gj.MESSAGE)
  },
  GUILD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      memberCount: n
    } = e;
    return null != p[t] && n > 1 && h(t, u.gj.INVITE)
  }
})