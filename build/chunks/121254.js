/** Chunk was on web.js **/
/** chunk id: 121254, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H3: () => P,
  TI: () => B,
  XD: () => D,
  fq: () => M,
  un: () => x
}), require("./896048.js"), require("./321073.js"), require("./65821.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk723176 = require("./723176.js"),
  Chunk766034 = require("./766034.js"),
  Chunk324827 = require("./324827.js"),
  Chunk531743 = require("./531743.js"),
  Chunk989950 = require("./989950.js"),
  Chunk937724 = require("./937724.js"),
  Chunk626584 = require("./626584.js"),
  Chunk608960 = require("./608960.js"),
  Chunk679382 = require("./679382.js"),
  Chunk95701 = require("./95701.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk860689 = require("./860689.js"),
  Chunk7864 = require("./7864.js");

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

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = T(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let C = new Chunk626584.A("ReadyPayloadUtils"),
  N = {},
  R = null,
  w = {};

function P(e, t) {
  var n;
  let [r, ...i] = [e, t], {
    guilds: a,
    merged_members: s,
    merged_presences: o
  } = r, l = S(r, ["guilds", "merged_members", "merged_presences"]), [c] = i, u = k(w, null == o ? true : o.friends), d = null != (n = null == a ? true : a.map((e, t) => {
    let n = k(w, null == o ? true : o.guilds[t]),
      r = k(w, null == s ? true : s[t]);
    return I(v({}, e), {
      unavailable: true === e.voice_states,
      presences: n,
      members: r
    })
  })) ? n : [], f = L(c, a, e => ({
    id: e.id,
    members: e.members,
    presences: e.presences,
    activity_instances: e.activity_instances,
    voice_states: e.voice_states,
    unavailable: false
  }));
  return null != f && d.push(f), w = {}, I(v({}, l), {
    presences: u,
    guilds: d
  })
}

function D() {
  let e = o.A.database();
  return Promise.all([(0, f.O)() ? l.A.getCommittedVersions() : Promise.resolve({}), (0, f.O)() ? u.A.getGuildIds() : Promise.resolve(new Set), null != e ? c.A.okAsync(e) : Promise.resolve(false)]).then(e => {
    let [t, n, r] = e;
    return {
      guildVersions: t,
      guildChannels: n,
      databaseOk: r
    }
  })
}

function x(e, t, n) {
  var r;
  let [a, ...o] = [e, t, n], {
    users: l,
    relationships: c,
    private_channels: u,
    merged_members: d,
    guilds: f
  } = a, p = S(a, ["users", "relationships", "private_channels", "merged_members", "guilds"]), [_, ...h] = o, [m] = h;
  G(m);
  let g = k(w = s().keyBy(l, e => e.id), c);
  null == u || u.forEach(e => {
    let t = e.recipient_ids;
    null != t && (e.recipients = t.map(e => (i()(null != w[e], "Missing user in compressed ready payload"), w[e]))), delete e.recipient_ids
  });
  let E = null != (r = null == f ? true : f.map((e, t) => true === e.unavailable ? e : (e.members = k(w, null == d ? true : d[t]), F(e)))) ? r : [],
    y = L(_, f, e => F(e));
  return null != y && E.push(y), I(v({}, p), {
    users: l,
    presences: [],
    relationships: g,
    guilds: E,
    private_channels: null != u ? u : []
  })
}

function L(e, t, n) {
  return null == R || R.identifyTime !== e || null != t && t.some(e => e.id === R.guild.id) ? null : n(R.guild)
}

function j(e) {
  let t = _.A.getGuildEmojis(e);
  return null != t ? Object.values(t) : null
}

function M(e, t) {
  var n;
  let r = E.A.getGuild(e.id),
    i = B(e, null == r ? true : {
      properties: y.yN(r),
      roles: g.A.getRolesSnapshot(r.id),
      emojis: j(r.id),
      stickers: null != (n = h.A.getRawStickersByGuild().get(r.id)) ? n : null
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
  null != o.A.database() && false === e.databaseOk && d.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"), N = {};
  let t = E.A.getGuildsArray(),
    n = h.A.getRawStickersByGuild();
  for (let i of t) {
    var r;
    i.id in e.guildVersions && e.guildChannels.has(i.id) && (N[i.id] = {
      properties: y.yN(i),
      roles: g.A.getRolesSnapshot(i.id),
      emojis: j(i.id),
      stickers: null != (r = n.get(i.id)) ? r : null
    })
  }
}

function V(e, t, n) {
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

function F(e) {
  var t, n, r, i, a, s, o, l;
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
    threads: null != (o = null == (l = e.threads) ? true : l.map(t => (0, m.UE)(t, e.id))) ? o : [],
    threadMessages: H(e.threads),
    channels: {
      op: "full_sync",
      items: e.channels.map(t => (t.guild_id = e.id, (0, m.UE)(t, e.id)))
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
      writes: null != (t = null == (a = e.partial_updates.channels) ? true : a.map(t => (0, m.UE)(t, e.id))) ? t : [],
      deletes: null != (n = e.partial_updates.deleted_channel_ids) ? n : []
    },
    channelTimestampUpdates: e.channel_updates,
    emojis: V(c.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
    guild_scheduled_events: e.guild_scheduled_events,
    joined_at: e.joined_at,
    lastMessages: e.last_messages,
    member_count: e.member_count,
    members: e.members,
    premium_subscription_count: e.premium_subscription_count,
    properties: null != (r = e.properties) ? r : null,
    roles: (0, b.ly)(e.id, c.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
    stage_instances: e.stage_instances,
    stickers: V(c.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
    unableToSyncDeletes: e.unable_to_sync_deletes,
    threads: null != (i = null == (s = e.threads) ? true : s.map(t => (0, m.UE)(t, e.id))) ? i : [],
    threadMessages: H(e.threads),
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription
  }
}

function B(e, t) {
  var n, r, i, a, s, o, l, c;
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
    threads: null != (l = null == (c = e.threads) ? true : c.map(t => (0, m.UE)(t, e.id))) ? l : [],
    threadMessages: H(e.threads),
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
      items: e.channels.map(t => (t.guild_id = e.id, (0, m.UE)(t, e.id)))
    }
  };
  if (null == t) throw C.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: post_ready)")), Error("Guild data was missing from store, but hash was still available.");
  return {
    id: e.id,
    channels: {
      op: "update",
      writes: null != (n = null == (s = e.partial_updates.channels) ? true : s.map(t => (0, m.UE)(t, e.id))) ? n : [],
      deletes: null != (r = e.partial_updates.deleted_channel_ids) ? r : []
    },
    channelTimestampUpdates: e.channel_updates,
    activity_instances: e.activity_instances,
    emojis: V(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
    guild_scheduled_events: e.guild_scheduled_events,
    joined_at: e.joined_at,
    lastMessages: e.last_messages,
    member_count: e.member_count,
    members: e.members,
    premium_subscription_count: e.premium_subscription_count,
    presences: e.presences,
    properties: null != (i = e.properties) ? i : t.properties,
    roles: (0, b.ly)(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
    stage_instances: e.stage_instances,
    stickers: V(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
    unableToSyncDeletes: e.unable_to_sync_deletes,
    threads: null != (a = null == (o = e.threads) ? true : o.map(t => (0, m.UE)(t, e.id))) ? a : [],
    threadMessages: H(e.threads),
    voice_states: e.voice_states,
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription
  }
}

function H(e) {
  let t = [];
  if (null != e)
    for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
  return t
}