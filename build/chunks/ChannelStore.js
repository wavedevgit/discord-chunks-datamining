/** Chunk was on web.js **/
/** chunk id: 734057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ej,
  D: () => z
}), require("./896048.js"), require("./205816.js"), require("./65821.js"), require("./638769.js"), require("./264879.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk61090 = require("./61090.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk723176 = require("./723176.js"),
  Chunk154049 = require("./154049.js"),
  Chunk531743 = require("./531743.js"),
  Chunk453001 = require("./453001.js"),
  Chunk736400 = require("./736400.js"),
  Chunk311016 = require("./311016.js"),
  Chunk626584 = require("./626584.js"),
  Chunk181079 = require("./181079.js"),
  Chunk95701 = require("./95701.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = new Chunk626584.A("ChannelStore"),
  w = {},
  R = {},
  P = {},
  D = {},
  x = null,
  L = {},
  j = {},
  M = {},
  k = 0,
  U = {},
  G = {},
  V = new Set,
  F = {},
  B = 0,
  H = {},
  Y = 0,
  W = 0,
  K = false;
class z {
  static loadAllMissingChannels() {
    let e = O.A.getGuildIds().filter(e => !V.has(e));
    return this.loadGuildIds(e)
  }
  static loadGuildFromChannelId(e) {
    var t;
    return null == e ? null : z.loadGuildIds([null == (t = Q(e)) ? true : t.guild_id])
  }
  static loadGuildIds(e) {
    let t = e.filter(E.Vq);
    if (0 === t.length) return null;
    let n = c.A.database();
    if (null == n || !t.some(e => !V.has(e))) return null;
    let r = B;
    return (0, u.ES)("loadChannels", async () => {
      let e = t.map(e => {
          if (V.has(e)) return null;
          if (null != F[e]) return N.fileOnly("Skipping loading ".concat(e, " because a load is pending")), null;
          let t = d.A.getAsync(n, e).then(t => (N.fileOnly("Lazy loaded channels for ".concat(e, " #:").concat(t.length)), {
            guildId: e,
            channels: t
          }));
          return F[e] = t, {
            guildId: e,
            promise: t
          }
        }).filter(E.Vq),
        i = e.map(e => e.promise);
      try {
        let t = await Promise.all(i);
        if (B !== r) return N.fileOnly("lastResetTime has changed, skipping loads for " + e.map(e => e.guildId)), null;
        let n = t.filter(e => !V.has(e.guildId));
        await l.h.dispatch({
          type: "LOAD_CHANNELS",
          channels: n
        })
      } catch (t) {
        for (let n of (N.error("Failed to load channels from disk for " + e.map(e => e.guildId), t), e)) delete F[n.guildId];
        throw t
      }
      return null
    })
  }
}

function q(e, t, n) {
  if (null == e || "null" === e || V.has(e) || 0 === t && f.A.hasGuild(e)) return;
  let r = c.A.database();
  if (null == r) return;
  N.verbose("hydrating guild (guild: ".concat(e, ", trace: ").concat(n, ")"));
  let i = (0, u.Ek)("ensureGuildLoaded(".concat(e, ")"), () => d.A.getSync(r, e), "ensureGuildLoaded");
  if (null == i) {
    V.add(e), f.A.restored(e), N.log("load returned null; early returning (guild: ".concat(e, ", database: ").concat(r, ")"));
    return
  }
  let [a, o] = i;
  for (let n of ((0, p.Ay)(a), 0 !== t && (W += 1), V.add(e), f.A.restored(e), s.A.mark("❗", "loaded guild channels (guild: ".concat(e, ")"), o), a)) Object.hasOwn(R, n.id) || en((0, g.oh)(n));
  N.verbose("hydration complete (guild: ".concat(e, ", channels: ").concat(a.length, ", guilds_loaded: ").concat(W, ")"))
}

function Z(e, t, n) {
  if (!Object.hasOwn(R, e) && !Object.hasOwn(D, e) && !Object.hasOwn(L, e) && !Object.hasOwn(G, e) && 1 === t) {
    let r = f.A.getBasicChannel(e);
    (null == r ? true : r.guild_id) != null && q(r.guild_id, t, n)
  }
}

function X(e) {
  if (N.fileOnly("Deleting guild channels for ".concat(e)), null != P[e]) {
    for (let t of y.default.keys(P[e])) delete R[t];
    delete P[e]
  }
  null != j[e] && delete j[e]
}

function Q(e) {
  var t, n, r, i;
  return Z(e, 0, "getBasicChannel"), null != (t = null != (n = null != (r = null != (i = R[e]) ? i : D[e]) ? r : L[e]) ? n : G[e]) ? t : f.A.getBasicChannel(e)
}

function J(e) {
  var t, n, r, i;
  return Z(e, 1, "getChannel"), null != (t = null != (n = null != (r = null != (i = R[e]) ? i : D[e]) ? r : L[e]) ? n : G[e]) ? t : H[e]
}

function $(e) {
  e.isPrivate() ? (delete H[e.id], ee(e)) : e.isThread() ? et(e) : g.uL.has(e.type) && er(e)
}

function ee(e) {
  if (null != e.recipients.find(e => (0, _.A)(e))) returnfalse;
  D[e.id] = e, e.type === A.rbe.DM && (M[e.getRecipientId()] = e.id), k += 1
}

function et(e) {
  let t = R[e.parent_id];
  L[e.id] = e.merge({
    nsfw: (null == t ? true : t.nsfw) === true,
    parentChannelThreadType: null == t ? true : t.type
  }), e.isScheduledForDeletion() && l.h.dispatch({
    type: "THREAD_DELETE",
    channel: e
  })
}

function en(e) {
  var t, n, r, i;
  let {
    id: a,
    guild_id: s
  } = e;
  R[a] = e, P[s] = null != (t = P[s]) ? t : {}, P[s][a] = e, U[s] = (null != (n = U[s]) ? n : 0) + 1, null != e.linkedLobby ? (j[s] = null != (r = j[s]) ? r : {}, j[s][a] = e) : null == (i = j[s]) || delete i[a]
}

function er(e) {
  en(e)
}

function ei(e) {
  if (null == e.guild_id || g.Le.has(e.type))(0, g.Gw)(e.type) && (k += 1);
  else {
    var t;
    U[e.guild_id] = (null != (t = U[e.guild_id]) ? t : 0) + 1
  }
}

function ea(e) {
  let t = P;
  for (let n of (M = {}, R = {}, P = {}, j = {}, L = {}, U = {}, H = {}, F = {}, B = Date.now(), x = e.initialPrivateChannels, e.initialPrivateChannels.forEach(ee), e.guilds)) "partial" === n.dataMode && (a().forEach(t[n.id], en), N.fileOnly("Restoring guild channels for ".concat(n.id, " #:").concat(eL(n.id)))), es(n);
  eP()
}

function es(e) {
  let {
    id: t,
    channels: n,
    threads: r
  } = e;
  switch (n.op) {
    case "full_sync":
      for (let e of (N.fileOnly("ConnectionOpen contained full channels for ".concat(t, " #:").concat(n.items.length)), X(t), V.add(t), f.A.restored(t), n.items)) en(e);
      break;
    case "update":
      for (let e of ((n.writes.length > 0 || n.deletes.length > 0) && f.A.invalidate(t), n.deletes)) ev(R[e]);
      for (let e of n.writes) en(e)
  }
  if (null != r)
    for (let e of r) et(e)
}

function eo(e) {
  let {
    lazyPrivateChannels: t
  } = e;
  null != x && (D = {}, x.forEach(ee)), t.forEach(ee)
}

function el(e) {
  let {
    guilds: t
  } = e, n = P;
  R = {}, P = {}, U = {}, j = {}, t.forEach(e => {
    if ("unavailable" === e.data_mode) N.fileOnly("Restoring guild channels b/c unavailable in bg sync, for ".concat(e.id, " #:").concat(eL(e.id))), a().forEach(n[e.id], en);
    else if ("partial" === e.data_mode) {
      var t, r;
      N.fileOnly("Restoring guild channels b/c partial in bg sync, for ".concat(e.id, " #:").concat(eL(e.id))), a().forEach(n[e.id], en);
      let i = null != (t = e.partial_updates.deleted_channel_ids) ? t : [];
      i.length > 0 && (q(e.id, 1, "handleBackgroundSync"), i.forEach(e => ev(R[e]))), null == (r = e.partial_updates.channels) || r.forEach(t => en((0, g.UE)(t, e.id)))
    } else N.fileOnly("BG sync contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), X(e.id), V.add(e.id), f.A.restored(e.id), e.channels.forEach(t => en((0, g.UE)(t, e.id)))
  })
}

function ec(e) {
  for (let {
      guildId: t,
      channels: n
    }
    of e.channels)
    for (let e of (N.fileOnly("Lazy loaded guild channels for ".concat(t)), (0, p.Ay)(n), V.add(t), f.A.restored(t), n)) Object.hasOwn(R, e.id) || en((0, g.oh)(e));
  returnfalse
}

function eu() {
  N.fileOnly("initializeClear()"), M = {}, R = {}, P = {}, U = {}, j = {}, D = {}, H = {}, L = {}, V = new Set, F = {}, B = Date.now()
}

function ed(e) {
  var t;
  Y = e.guilds.length;
  let {
    privateChannels: n,
    initialGuildChannels: r
  } = e;
  for (let e of [n, r])
    for (let t of e) $((0, p.n2)((0, g.oh)(t)));
  let i = null == (t = r[0]) ? true : t.guild_id;
  null != i && (N.fileOnly("Early cache contained full guild channels for ".concat(i)), V.add(i))
}

function ef(e) {
  for (let t of (Y = e.guilds.length, e.channels)) $((0, p.n2)((0, g.oh)(t)))
}

function ep(e) {
  for (let [t, n] of(K = true, e.guildChannels))
    for (let e of (N.fileOnly("Lazy cache contained full guild channels for ".concat(t, " #:").concat(n.length)), V.add(t), n)) $((0, g.oh)(e))
}

function e_(e) {
  $(e.channel)
}

function eh(e) {
  if (!g.A_.has(e.channel.type)) returnfalse;
  let t = J(e.channel.id);
  if (null == t) t = e.channel;
  else {
    var n;
    t = t.merge(C(S({}, e.channel.toJS()), {
      bitrate: null != (n = e.channel.bitrate) ? n : t.bitrate
    }))
  }
  $(t)
}

function em(e) {
  let {
    channelId: t,
    overwrite: n
  } = e, r = J(t);
  if (null == r) returnfalse;
  $(r.set("permissionOverwrites", C(S({}, r.permissionOverwrites), {
    [n.id]: n
  })))
}

function eg(e) {
  let {
    channelId: t,
    overwriteId: n
  } = e, r = J(t);
  if (null == r) returnfalse;
  let i = S({}, r.permissionOverwrites);
  delete i[n], $(r.set("permissionOverwrites", i))
}

function eE(e) {
  let t = e.channels.some(e => {
    let t = e,
      n = J(e.id);
    return t.nsfw !== (null == n ? true : n.nsfw) || t.type !== (null == n ? true : n.type)
  });
  for (let t of e.channels) $(t);
  t && Object.values(L).forEach(e => $(e))
}

function ey(e) {
  let {
    threads: t
  } = e;
  t.forEach(e => {
    g.A_.has(e.type) && $(e)
  })
}

function eb(e) {
  let {
    threads: t
  } = e;
  t.forEach(e => {
    g.A_.has(e.type) && $((0, g.UE)(e))
  })
}

function eO(e) {
  if ("basicPermissions" in e || e.type !== A.rbe.DM) return;
  let t = e.getRecipientId();
  M[t] === e.id && delete M[t]
}

function ev(e) {
  if (null == e) return;
  let t = e.guild_id;
  e.id in D && delete D[e.id], e.id in R && delete R[e.id], e.id in L && delete L[e.id], null != t && (null != P[t] && e.id in P[t] && delete P[t][e.id], null != j[t] && e.id in j[t] && delete j[t][e.id]), ei(e)
}

function eA(e) {
  var t, n;
  let {
    channel: r
  } = e, i = null != (t = null != (n = R[r.id]) ? n : D[r.id]) ? t : L[r.id];
  if (null == i) returnfalse;
  ev(i), eO(i)
}

function eI(e) {
  es(e.guild)
}

function eS(e) {
  N.fileOnly("GuildDelete of ".concat(e.guild.id)), X(e.guild.id), V.delete(e.guild.id), f.A.invalidate(e.guild.id)
}

function eT(e) {
  let t = J(e.channelId),
    n = b.default.getId();
  return null != t && !!t.isPrivate() && ($(t.addRecipient(e.user.id, e.nick, n)), true)
}

function eC(e) {
  let t = J(e.channelId);
  return null != t && !!t.isPrivate() && ($(t.removeRecipient(e.user.id)), true)
}

function eN(e) {
  let {
    messages: t
  } = e;
  for (let e of t) null != e.thread && !(e.thread.id in L) && g.A_.has(e.thread.type) && et((0, g.UE)(e.thread))
}

function ew(e) {
  let {
    data: t
  } = e;
  t.forEach(e => {
    let {
      messages: t,
      threads: n,
      channels: r
    } = e;
    t.forEach(e => {
      e.forEach(e => {
        eR(e.thread)
      })
    }), n.forEach(eR), r.forEach(e => {
      let t = (0, g.UE)(e),
        n = null != J(e.id),
        r = null != H[e.id];
      t.isPrivate() && (!n || r) ? H[t.id] = t : n || $(t)
    })
  })
}

function eR(e) {
  null != e && !(e.id in L) && g.A_.has(e.type) && et((0, g.UE)(e))
}

function eP() {
  for (let e in G = {}, m.A.getFavoriteChannels()) {
    let t = m.A.getCategoryRecord(e);
    null != t && (G[e] = t)
  }
}

function eD() {
  eu()
}
class ex extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(b.default, f.A, m.A, O.A, v.default), this.syncWith([m.A], eP)
  }
  hasChannel(e) {
    return null != Q(e)
  }
  getBasicChannel(e) {
    if (null != e) return Q(e)
  }
  getChannel(e) {
    if (null != e) return J(e)
  }
  loadAllGuildAndPrivateChannelsFromDisk() {
    for (let e of O.A.getGuildIds()) q(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
    return S({}, R, D)
  }
  getChannelIds(e) {
    var t, n;
    return (q(e, 0, "getChannelIds"), null == e) ? y.default.keys(D) : y.default.keys(null != (t = null != (n = f.A.getGuildBasicChannels(e)) ? n : P[e]) ? t : w)
  }
  getMutablePrivateChannels() {
    return D
  }
  getMutableBasicGuildChannelsForGuild(e) {
    var t, n;
    return q(e, 0, "getMutableBasicGuildChannelsForGuild"), null != (t = null != (n = f.A.getGuildBasicChannels(e)) ? n : P[e]) ? t : w
  }
  getMutableGuildChannelsForGuild(e) {
    var t;
    return q(e, 1, "getMutableGuildChannelsForGuild"), null != (t = P[e]) ? t : w
  }
  getSortedLinkedChannelsForGuild(e) {
    var t;
    return a().values(null != (t = j[e]) ? t : w).sort((e, t) => y.default.compare(e.id, t.id))
  }
  getSortedPrivateChannels() {
    return a()(D).values().sort((e, t) => y.default.compare(e.lastMessageId, t.lastMessageId)).reverse().value()
  }
  getDMFromUserId(e) {
    if (null != e) return M[e]
  }
  getDMChannelFromUserId(e) {
    if (null != e) return this.getChannel(M[e])
  }
  getMutableDMsByUserIds() {
    return M
  }
  getDMUserIds() {
    return y.default.keys(M)
  }
  getPrivateChannelsVersion() {
    return k
  }
  getGuildChannelsVersion(e) {
    var t;
    return null != (t = U[e]) ? t : 0
  }
  getAllThreadsForParent(e) {
    return a().values(L).filter(t => t.parent_id === e)
  }
  getAllThreadsForGuild(e) {
    return a().values(L).filter(t => t.guild_id === e)
  }
  getInitialOverlayState() {
    return S({}, R, D, L)
  }
  getDebugInfo() {
    return {
      loadedGuildIds: Array.from(V).sort(y.default.compare),
      pendingGuildLoads: Object.keys(F).sort(y.default.compare),
      guildSizes: Object.keys(P).sort(y.default.compare).map(e => "".concat(e, ": ").concat(eL(e)))
    }
  }
}

function eL(e) {
  return null == P[e] ? null : Object.keys(P[e]).length
}
I(ex, "displayName", "ChannelStore");
let ej = new ex(Chunk73153.h, {
  BACKGROUND_SYNC: el,
  CACHE_LOADED_LAZY: ep,
  CACHE_LOADED: ed,
  CHANNEL_CREATE: e_,
  CHANNEL_DELETE: eA,
  CHANNEL_RECIPIENT_ADD: eT,
  CHANNEL_RECIPIENT_REMOVE: eC,
  CHANNEL_UPDATES: eE,
  CONNECTION_OPEN_SUPPLEMENTAL: eo,
  CONNECTION_OPEN: ea,
  CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: em,
  CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: eg,
  GUILD_CREATE: eI,
  GUILD_DELETE: eS,
  LOAD_ARCHIVED_THREADS_SUCCESS: eb,
  LOAD_CHANNELS: ec,
  LOAD_MESSAGES_AROUND_SUCCESS: eN,
  LOAD_MESSAGES_SUCCESS: eN,
  LOAD_THREADS_SUCCESS: eb,
  LOGOUT: eD,
  OVERLAY_INITIALIZE: ef,
  SEARCH_MESSAGES_SUCCESS: ew,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: ew,
  THREAD_CREATE: eh,
  THREAD_DELETE: eA,
  THREAD_LIST_SYNC: ey,
  THREAD_UPDATE: eh
})