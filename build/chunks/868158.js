/** Chunk was on web.js **/
/** chunk id: 868158, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Eb: () => D,
  Fx: () => j,
  IM: () => x,
  J2: () => F,
  r$: () => w
}), require("./539854.js"), require("./388685.js"), require("./415506.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk287328 = require("./287328.js"),
  Chunk406966 = require("./406966.js"),
  Chunk795513 = require("./795513.js"),
  Chunk591526 = require("./591526.js"),
  Chunk261875 = require("./261875.js"),
  Chunk768433 = require("./768433.js"),
  Chunk710845 = require("./710845.js"),
  Chunk714424 = require("./714424.js"),
  Chunk926491 = require("./926491.js"),
  Chunk131704 = require("./131704.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk411198 = require("./411198.js"),
  Chunk625137 = require("./625137.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let C = new Chunk710845.Z("ReadyPayloadUtils"),
  N = {},
  R = null,
  P = {};

function w(e, t) {
  var n, {
      guilds: r,
      merged_members: i,
      merged_presences: a
    } = e,
    o = T(e, ["guilds", "merged_members", "merged_presences"]);
  let s = k(P, null == a ? true : a.friends),
    l = null != (n = null == r ? true : r.map((e, t) => {
      let n = k(P, null == a ? true : a.guilds[t]),
        r = k(P, null == i ? true : i[t]);
      return S(v({}, e), {
        unavailable: true === e.voice_states,
        presences: n,
        members: r
      })
    })) ? n : [],
    c = L(t, r, e => ({
      id: e.id,
      members: e.members,
      presences: e.presences,
      activity_instances: e.activity_instances,
      voice_states: e.voice_states,
      unavailable: false
    }));
  return null != c && l.push(c), P = {}, S(v({}, o), {
    presences: s,
    guilds: l
  })
}

function D() {
  let e = Chunk287328.Z.database(),
    t = (0, Chunk768433.O)() ? Chunk406966.Z.getCommittedVersions() : Promise.resolve({});
  return Promise.all([exports, (0, Chunk768433.O)() ? Chunk591526.Z.getGuildIds() : Promise.resolve(new Set), null != module ? Chunk795513.Z.okAsync(module) : Promise.resolve(false)]).then(e => {
    let [t, n, r] = e;
    return {
      guildVersions: t,
      guildChannels: n,
      databaseOk: r
    }
  })
}

function x(e, t, n) {
  var r, {
      users: a,
      relationships: s,
      private_channels: l,
      merged_members: c,
      guilds: u
    } = e,
    d = T(e, ["users", "relationships", "private_channels", "merged_members", "guilds"]);
  G(n);
  let f = k(P = o().keyBy(a, e => e.id), s);
  null == l || l.forEach(e => {
    let t = e.recipient_ids;
    null != t && (e.recipients = t.map(e => (i()(null != P[e], "Missing user in compressed ready payload"), P[e]))), delete e.recipient_ids
  });
  let _ = null != (r = null == u ? true : u.map((e, t) => true === e.unavailable ? e : (e.members = k(P, null == c ? true : c[t]), Z(e)))) ? r : [],
    p = L(t, u, e => Z(e));
  return null != p && _.push(p), S(v({}, d), {
    users: a,
    presences: [],
    relationships: f,
    guilds: _,
    private_channels: null != l ? l : []
  })
}

function L(e, t, n) {
  return null == R || R.identifyTime !== e || null != t && t.some(e => e.id === R.guild.id) ? null : n(R.guild)
}

function M(e) {
  let t = p.Z.getGuildEmojis(e);
  return null != t ? Object.values(t) : null
}

function j(e, t) {
  var n;
  let r = E.Z.getGuild(e.id),
    i = F(e, null == r ? true : {
      properties: b.dS(r),
      roles: g.Z.getRolesSnapshot(r.id),
      emojis: M(r.id),
      stickers: null != (n = h.Z.getRawStickersByGuild().get(r.id)) ? n : null
    });
  return R = {
    guild: e,
    identifyTime: t
  }, i
}

function k(e, t) {
  let n = [];
  return null == t || t.forEach(t => {
    if (null == t) return;
    let r = t.user_id;
    null != r && (i()(null != e[r], "Missing user[".concat(r, "] in compressed ready payload")), t.user = e[r]), delete t.user_id, n.push(t)
  }), n
}

function U(e) {
  let t = N[e];
  return delete N[e], t
}

function G(e) {
  null != s.Z.database() && false === e.databaseOk && d.Z.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"), N = {};
  let t = E.Z.getGuildsArray(),
    n = h.Z.getRawStickersByGuild();
  for (let i of t) {
    var r;
    i.id in e.guildVersions && e.guildChannels.has(i.id) && (N[i.id] = {
      properties: b.dS(i),
      roles: g.Z.getRolesSnapshot(i.id),
      emojis: M(i.id),
      stickers: null != (r = n.get(i.id)) ? r : null
    })
  }
}

function B(e, t, n) {
  null != t || (t = []), null != n || (n = []);
  let r = new Set(n);
  for (let {
      id: e
    }
    of t) r.add(e);
  let i = null;
  return null != e && (i = e.filter(e => !r.has(e.id))).push(...t), {
    op: "update",
    writes: t,
    deletes: n,
    items: i
  }
}

function Z(e) {
  var t, n, r, i, a, o, s, l;
  let c = U(e.id);
  if ("partial" !== e.data_mode) return {
    id: e.id,
    dataMode: e.data_mode,
    emojis: {
      op: "full_sync",
      items: e.emojis
    },
    guild_scheduled_events: e.guild_scheduled_events,
    joined_at: e.joined_at,
    lastMessages: e.last_messages,
    member_count: e.member_count,
    members: e.members,
    premium_subscription_count: e.premium_subscription_count,
    properties: e.properties,
    roles: e.roles,
    stage_instances: e.stage_instances,
    stickers: {
      op: "full_sync",
      items: e.stickers
    },
    threads: null != (i = null == (r = e.threads) ? true : r.map(t => (0, m.q_)(t, e.id))) ? i : [],
    threadMessages: V(e.threads),
    channels: {
      op: "full_sync",
      items: e.channels.map(t => (t.guild_id = e.id, (0, m.q_)(t, e.id)))
    },
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription
  };
  if (null == c) throw C.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: ready)")), Error("Guild data was missing from store, but hash was still available.");
  return {
    id: e.id,
    dataMode: e.data_mode,
    channels: {
      op: "update",
      writes: null != (a = null == (t = e.partial_updates.channels) ? true : t.map(t => (0, m.q_)(t, e.id))) ? a : [],
      deletes: null != (o = e.partial_updates.deleted_channel_ids) ? o : []
    },
    channelTimestampUpdates: e.channel_updates,
    emojis: B(c.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
    guild_scheduled_events: e.guild_scheduled_events,
    joined_at: e.joined_at,
    lastMessages: e.last_messages,
    member_count: e.member_count,
    members: e.members,
    premium_subscription_count: e.premium_subscription_count,
    properties: null != (s = e.properties) ? s : null,
    roles: (0, y.EO)(e.id, c.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
    stage_instances: e.stage_instances,
    stickers: B(c.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
    unableToSyncDeletes: e.unable_to_sync_deletes,
    threads: null != (l = null == (n = e.threads) ? true : n.map(t => (0, m.q_)(t, e.id))) ? l : [],
    threadMessages: V(e.threads),
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription
  }
}

function F(e, t) {
  var n, r, i, a, o, s, l, c;
  if (null == t && (t = U(e.id)), "partial" !== e.data_mode) return {
    id: e.id,
    guild_scheduled_events: e.guild_scheduled_events,
    joined_at: e.joined_at,
    lastMessages: e.last_messages,
    member_count: e.member_count,
    members: e.members,
    premium_subscription_count: e.premium_subscription_count,
    properties: e.properties,
    roles: e.roles,
    stage_instances: e.stage_instances,
    threads: null != (a = null == (i = e.threads) ? true : i.map(t => (0, m.q_)(t, e.id))) ? a : [],
    threadMessages: V(e.threads),
    presences: e.presences,
    activity_instances: e.activity_instances,
    voice_states: e.voice_states,
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription,
    emojis: {
      op: "full_sync",
      items: e.emojis
    },
    stickers: {
      op: "full_sync",
      items: e.stickers
    },
    channels: {
      op: "full_sync",
      items: e.channels.map(t => (t.guild_id = e.id, (0, m.q_)(t, e.id)))
    }
  };
  if (null == t) throw C.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: post_ready)")), Error("Guild data was missing from store, but hash was still available.");
  return {
    id: e.id,
    channels: {
      op: "update",
      writes: null != (o = null == (n = e.partial_updates.channels) ? true : n.map(t => (0, m.q_)(t, e.id))) ? o : [],
      deletes: null != (s = e.partial_updates.deleted_channel_ids) ? s : []
    },
    channelTimestampUpdates: e.channel_updates,
    activity_instances: e.activity_instances,
    emojis: B(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
    guild_scheduled_events: e.guild_scheduled_events,
    joined_at: e.joined_at,
    lastMessages: e.last_messages,
    member_count: e.member_count,
    members: e.members,
    premium_subscription_count: e.premium_subscription_count,
    presences: e.presences,
    properties: null != (l = e.properties) ? l : t.properties,
    roles: (0, y.EO)(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
    stage_instances: e.stage_instances,
    stickers: B(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
    unableToSyncDeletes: e.unable_to_sync_deletes,
    threads: null != (c = null == (r = e.threads) ? true : r.map(t => (0, m.q_)(t, e.id))) ? c : [],
    threadMessages: V(e.threads),
    voice_states: e.voice_states,
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription
  }
}

function V(e) {
  let t = [];
  if (null != e)
    for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
  return t
}