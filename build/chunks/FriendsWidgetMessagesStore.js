/** Chunk was on 57010 **/
/** chunk id: 91868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w,
  Y: () => y
}), require("./321073.js"), require("./896048.js");
var r, i, l, Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk174768 = require("./174768.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk222823 = require("./222823.js"),
  Chunk645959 = require("./645959.js"),
  Chunk661191 = require("./661191.js"),
  Chunk914853 = require("./914853.js"),
  Chunk956753 = require("./956753.js"),
  Chunk648427 = require("./648427.js"),
  Chunk316541 = require("./316541.js"),
  Chunk672396 = require("./672396.js"),
  y = ((i = {}).ACTIVE_NOW = "ACTIVE_NOW", i.DMS = "DMS", i.RECENT_TEXT = "RECENT_TEXT", i);
let v = new Chunk713402.J(function(e) {
    let t = [];
    return e.isInActiveNow && t.push("ACTIVE_NOW"), e.isInDmsList && t.push("DMS"), e.isInRecentTextList && t.push("RECENT_TEXT"), t
  }, function(e) {
    return e.sortKey
  }),
  _ = null,
  O = new Set;

function m(e) {
  return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(13, "0")
}

function M(e) {
  let t = function(e) {
    let t = c.A.getChannel(e);
    if (null == t) return null;
    let n = t.isPrivate(),
      r = !n && (0, d.ke)(t.type);
    if (!n && !r) return null;
    let i = E.A.hasActiveNowChannelId({
        kind: E.u.Text,
        channelId: e
      }),
      l = r && (o.A.getChannelHistory().includes(e) || S.A.getTextChannelHistory().includes(e)),
      s = h.Ay.hasUnread(e) || h.Ay.getMentionCount(e) > 0,
      a = null != t.lastMessageId ? g.default.extractTimestamp(t.lastMessageId) : 0,
      u = (() => {
        var t, r;
        if (n) return "DM\0".concat(m(a), "\0").concat(e);
        if (i) {
          let n;
          return r = null != (t = E.A.getScoreForChannelId(e)) ? t : 0, n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * r))), "AN\0".concat(String(0x2540be3ff - n).padStart(10, "0"), "\0").concat(e)
        }
        return "GT\0".concat(s ? "0" : "1", "\0").concat(m(a), "\0").concat(e)
      })();
    return {
      id: e,
      channelId: e,
      isInActiveNow: i,
      isInDmsList: n,
      isInRecentTextList: l,
      hasUnread: s,
      lastActivityAtMs: a,
      sortKey: u
    }
  }(e);
  return null == t ? v.delete(e) : v.set(e, t)
}

function T() {
  let e = E.A.getActiveNowChannelIds({
      kind: E.u.Text
    }),
    t = new Set(e),
    n = false;
  for (let t of e) n = M(t) || n;
  for (let e of [...v.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = M(e.channelId) || n);
  return O = t, n
}

function N() {
  v.clear(), O = new Set;
  let e = false;
  for (let t of f.A.getPrivateChannelIds()) e = M(t) || e;
  for (let t of o.A.getChannelHistory()) e = M(t) || e;
  for (let t of S.A.getTextChannelHistory()) e = M(t) || e;
  let t = E.A.getActiveNowChannelIds({
    kind: E.u.Text
  });
  for (let n of (O = new Set(t), t)) e = M(n) || e;
  return e
}
class C extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A, E.A, o.A, h.Ay, f.A, S.A), N()
  }
  getRows(e) {
    return [v.values(e), v.version]
  }
  getChannel(e) {
    return v.get(e)
  }
}(l = "displayName") in C ? Object.defineProperty(C, l, {
  value: "FriendsWidgetMessagesStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : C[l] = "FriendsWidgetMessagesStore";
let D = e => (0, A.R)(e, "FriendsWidgetMessagesStore"),
  w = new C(Chunk73153.h, __OVERLAY__ || !Chunk672396.OX && !Chunk672396.ed ? {} : {
    OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: D(function(e) {
      return e.tab === I.x.MESSAGES && M(e.targetId)
    }),
    CHANNEL_SELECT: D(function(e) {
      var t;
      let n = null != (t = e.channelId) ? t : null,
        r = _;
      _ = n;
      let i = false;
      null != r && (i = M(r) || i), null != n && (i = M(n) || i);
      let l = T();
      return i || l
    }),
    MESSAGE_CREATE: D(function(e) {
      if (e.optimistic) returnfalse;
      let t = M(e.channelId),
        n = T();
      return t || n
    }),
    MESSAGE_ACK: D(function(e) {
      return M(e.channelId)
    }),
    TYPING_START: D(function(e) {
      var t = e.channelId;
      let n = new Set(E.A.getActiveNowChannelIds({
          kind: E.u.Text
        })),
        r = false;
      for (let e of (r = M(t) || r, n)) O.has(e) || (r = M(e) || r);
      for (let e of O) n.has(e) || (r = M(e) || r);
      return O = n, r
    }),
    RTC_CONNECTION_STATE: D(function() {
      return T()
    }),
    VOICE_CHANNEL_SELECT: D(function() {
      return T()
    }),
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: D(T),
    USER_GUILD_SETTINGS_GUILD_UPDATE: D(T),
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: D(T),
    OVERLAY_INITIALIZE: D(N),
    POST_CONNECTION_OPEN: D(N),
    CACHE_LOADED: D(N),
    CACHE_LOADED_LAZY: D(N),
    LOGOUT: D(function() {
      let e = v.size() > 0;
      return v.clear(), _ = null, O = new Set, e
    })
  })