/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => eL,
  o: () => Y
}), n(47120), n(51350), n(411104), n(230036), n(978209);
var r, i = n(392711),
  o = n.n(i),
  a = n(956067),
  s = n(442837),
  l = n(570140),
  c = n(287328),
  u = n(86670),
  d = n(591526),
  f = n(458772),
  p = n(38217),
  _ = n(580552),
  h = n(710845),
  m = n(853856),
  g = n(131704),
  E = n(823379),
  v = n(709054),
  b = n(314897),
  y = n(430824),
  O = n(594174),
  S = n(981631);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function T(e) {
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

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = new h.Z("ChannelStore"),
  R = {},
  P = {},
  w = {},
  D = {},
  x = null,
  L = {},
  M = {},
  k = 0,
  j = {},
  U = {},
  G = new Set,
  B = {},
  Z = 0,
  F = {},
  V = 0,
  H = 0,
  W = !1;
class Y {
  static loadAllMissingChannels() {
    let e = y.Z.getGuildIds().filter(e => !G.has(e));
    return this.loadGuildIds(e)
  }
  static loadGuildFromChannelId(e) {
    var t;
    return null == e ? null : Y.loadGuildIds([null === (t = Q(e)) || void 0 === t ? void 0 : t.guild_id])
  }
  static loadGuildIds(e) {
    let t = e.filter(E.lm);
    if (0 === t.length) return null;
    let n = c.Z.database();
    if (null == n || !t.some(e => !G.has(e))) return null;
    let r = Z;
    return (0, u.gs)("loadChannels", async () => {
      let e = t.map(e => {
          if (G.has(e)) return null;
          if (null != B[e]) return C.fileOnly("Skipping loading ".concat(e, " because a load is pending")), null;
          let t = d.Z.getAsync(n, e).then(t => (C.fileOnly("Lazy loaded channels for ".concat(e, " #:").concat(t.length)), {
            guildId: e,
            channels: t
          }));
          return B[e] = t, {
            guildId: e,
            promise: t
          }
        }).filter(E.lm),
        i = e.map(e => e.promise);
      try {
        let t = await Promise.all(i);
        if (Z !== r) return C.fileOnly("lastResetTime has changed, skipping loads for " + e.map(e => e.guildId)), null;
        let n = t.filter(e => !G.has(e.guildId));
        await l.Z.dispatch({
          type: "LOAD_CHANNELS",
          channels: n
        })
      } catch (t) {
        for (let n of (C.error("Failed to load channels from disk for " + e.map(e => e.guildId), t), e)) delete B[n.guildId];
        throw t
      }
      return null
    })
  }
}

function K(e, t, n) {
  if (null == e || "null" === e || G.has(e) || 0 === t && f.Z.hasGuild(e)) return;
  let r = c.Z.database();
  if (null == r) return;
  C.verbose("hydrating guild (guild: ".concat(e, ", trace: ").concat(n, ")"));
  let i = (0, u.Pv)("ensureGuildLoaded(".concat(e, ")"), () => d.Z.getSync(r, e), "ensureGuildLoaded");
  if (null == i) {
    G.add(e), f.Z.restored(e), C.log("load returned null; early returning (guild: ".concat(e, ", database: ").concat(r, ")"));
    return
  }
  let [o, s] = i;
  for (let n of ((0, p.ZP)(o), 0 !== t && (H += 1), G.add(e), f.Z.restored(e), a.Z.mark("❗", "loaded guild channels (guild: ".concat(e, ")"), s), o)) Object.hasOwn(P, n.id) || et((0, g._H)(n));
  C.verbose("hydration complete (guild: ".concat(e, ", channels: ").concat(o.length, ", guilds_loaded: ").concat(H, ")"))
}

function z(e, t, n) {
  if (!Object.hasOwn(P, e) && !Object.hasOwn(D, e) && !Object.hasOwn(L, e) && !Object.hasOwn(U, e) && 1 === t) {
    let r = f.Z.getBasicChannel(e);
    (null == r ? void 0 : r.guild_id) != null && K(r.guild_id, t, n)
  }
}

function q(e) {
  if (C.fileOnly("Deleting guild channels for ".concat(e)), null != w[e]) {
    for (let t of v.default.keys(w[e])) delete P[t];
    delete w[e]
  }
}

function Q(e) {
  var t, n, r, i;
  return z(e, 0, "getBasicChannel"), null !== (i = null !== (r = null !== (n = null !== (t = P[e]) && void 0 !== t ? t : D[e]) && void 0 !== n ? n : L[e]) && void 0 !== r ? r : U[e]) && void 0 !== i ? i : f.Z.getBasicChannel(e)
}

function X(e) {
  var t, n, r, i;
  return z(e, 1, "getChannel"), null !== (i = null !== (r = null !== (n = null !== (t = P[e]) && void 0 !== t ? t : D[e]) && void 0 !== n ? n : L[e]) && void 0 !== r ? r : U[e]) && void 0 !== i ? i : F[e]
}

function J(e) {
  e.isPrivate() ? (delete F[e.id], $(e)) : e.isThread() ? ee(e) : g.oj.has(e.type) && en(e)
}

function $(e) {
  if (null != e.recipients.find(e => (0, _.Z)(e))) return !1;
  D[e.id] = e, e.type === S.d4z.DM && (M[e.getRecipientId()] = e.id), k += 1
}

function ee(e) {
  let t = P[e.parent_id];
  L[e.id] = e.merge({
    nsfw: (null == t ? void 0 : t.nsfw) === !0,
    parentChannelThreadType: null == t ? void 0 : t.type
  }), e.isScheduledForDeletion() && l.Z.dispatch({
    type: "THREAD_DELETE",
    channel: e
  })
}

function et(e) {
  var t, n;
  let {
    id: r,
    guild_id: i
  } = e;
  P[r] = e, w[i] = null !== (t = w[i]) && void 0 !== t ? t : {}, w[i][r] = e, j[i] = (null !== (n = j[i]) && void 0 !== n ? n : 0) + 1
}

function en(e) {
  et(e)
}

function er(e) {
  if (null == e.guild_id || g.Ec.has(e.type))(0, g.hv)(e.type) && (k += 1);
  else {
    var t;
    j[e.guild_id] = (null !== (t = j[e.guild_id]) && void 0 !== t ? t : 0) + 1
  }
}

function ei(e) {
  let t = w;
  for (let n of (M = {}, P = {}, w = {}, L = {}, j = {}, F = {}, B = {}, Z = Date.now(), x = e.initialPrivateChannels, e.initialPrivateChannels.forEach($), e.guilds)) "partial" === n.dataMode && (o().forEach(t[n.id], et), C.fileOnly("Restoring guild channels for ".concat(n.id, " #:").concat(ex(n.id)))), eo(n);
  eP()
}

function eo(e) {
  if (null != e.channels)
    for (let t of (C.fileOnly("GuildCreate contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), q(e.id), G.add(e.id), f.Z.restored(e.id), e.channels)) et(t);
  if (null != e.channelUpdates) {
    let t = e.channelUpdates;
    for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && f.Z.invalidate(e.id), t.deletes)) ey(P[n]);
    for (let e of t.writes) et(e)
  }
  if (null != e.threads)
    for (let t of e.threads) ee(t)
}

function ea(e) {
  let {
    lazyPrivateChannels: t
  } = e;
  null != x && (D = {}, x.forEach($)), t.forEach($)
}

function es(e) {
  let {
    guilds: t
  } = e, n = w;
  P = {}, w = {}, j = {}, t.forEach(e => {
    if ("unavailable" === e.data_mode) C.fileOnly("Restoring guild channels b/c unavailable in bg sync, for ".concat(e.id, " #:").concat(ex(e.id))), o().forEach(n[e.id], et);
    else if ("partial" === e.data_mode) {
      var t, r;
      C.fileOnly("Restoring guild channels b/c partial in bg sync, for ".concat(e.id, " #:").concat(ex(e.id))), o().forEach(n[e.id], et);
      let i = null !== (r = e.partial_updates.deleted_channel_ids) && void 0 !== r ? r : [];
      i.length > 0 && (K(e.id, 1, "handleBackgroundSync"), i.forEach(e => ey(P[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach(t => et((0, g.q_)(t, e.id)))
    } else C.fileOnly("BG sync contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), q(e.id), G.add(e.id), f.Z.restored(e.id), e.channels.forEach(t => et((0, g.q_)(t, e.id)))
  })
}

function el(e) {
  for (let {
      guildId: t,
      channels: n
    }
    of e.channels)
    for (let e of (C.fileOnly("Lazy loaded guild channels for ".concat(t)), (0, p.ZP)(n), G.add(t), f.Z.restored(t), n)) Object.hasOwn(P, e.id) || et((0, g._H)(e));
  return !1
}

function ec() {
  C.fileOnly("initializeClear()"), M = {}, P = {}, w = {}, j = {}, D = {}, F = {}, L = {}, G = new Set, B = {}, Z = Date.now()
}

function eu(e) {
  var t;
  V = e.guilds.length;
  let {
    privateChannels: n,
    initialGuildChannels: r
  } = e;
  for (let e of [n, r])
    for (let t of e) J((0, p.d7)((0, g._H)(t)));
  let i = null === (t = r[0]) || void 0 === t ? void 0 : t.guild_id;
  null != i && (C.fileOnly("Early cache contained full guild channels for ".concat(i)), G.add(i))
}

function ed(e) {
  for (let t of (V = e.guilds.length, e.channels)) J((0, p.d7)((0, g._H)(t)))
}

function ef(e) {
  for (let [t, n] of(W = !0, e.guildChannels))
    for (let e of (C.fileOnly("Lazy cache contained full guild channels for ".concat(t, " #:").concat(n.length)), G.add(t), n)) J((0, g._H)(e))
}

function ep(e) {
  J(e.channel)
}

function e_(e) {
  if (!g.AW.has(e.channel.type)) return !1;
  let t = X(e.channel.id);
  if (null == t) t = e.channel;
  else {
    var n;
    t = t.merge(A(T({}, e.channel.toJS()), {
      bitrate: null !== (n = e.channel.bitrate) && void 0 !== n ? n : t.bitrate
    }))
  }
  J(t)
}

function eh(e) {
  let {
    channelId: t,
    overwrite: n
  } = e, r = X(t);
  if (null == r) return !1;
  J(r.set("permissionOverwrites", A(T({}, r.permissionOverwrites), {
    [n.id]: n
  })))
}

function em(e) {
  let {
    channelId: t,
    overwriteId: n
  } = e, r = X(t);
  if (null == r) return !1;
  let i = T({}, r.permissionOverwrites);
  delete i[n], J(r.set("permissionOverwrites", i))
}

function eg(e) {
  let t = e.channels.some(e => {
    let t = e,
      n = X(e.id);
    return t.nsfw !== (null == n ? void 0 : n.nsfw) || t.type !== (null == n ? void 0 : n.type)
  });
  for (let t of e.channels) J(t);
  t && Object.values(L).forEach(e => J(e))
}

function eE(e) {
  let {
    threads: t
  } = e;
  t.forEach(e => {
    g.AW.has(e.type) && J(e)
  })
}

function ev(e) {
  let {
    threads: t
  } = e;
  t.forEach(e => {
    g.AW.has(e.type) && J((0, g.q_)(e))
  })
}

function eb(e) {
  if ("basicPermissions" in e || e.type !== S.d4z.DM) return;
  let t = e.getRecipientId();
  M[t] === e.id && delete M[t]
}

function ey(e) {
  if (null == e) return;
  let t = e.guild_id;
  e.id in D && delete D[e.id], e.id in P && delete P[e.id], e.id in L && delete L[e.id], null != t && null != w[t] && e.id in w[t] && delete w[t][e.id], er(e)
}

function eO(e) {
  var t, n;
  let {
    channel: r
  } = e, i = null !== (n = null !== (t = P[r.id]) && void 0 !== t ? t : D[r.id]) && void 0 !== n ? n : L[r.id];
  if (null == i) return !1;
  ey(i), eb(i)
}

function eS(e) {
  eo(e.guild)
}

function eI(e) {
  C.fileOnly("GuildDelete of ".concat(e.guild.id)), q(e.guild.id), G.delete(e.guild.id), f.Z.invalidate(e.guild.id)
}

function eT(e) {
  let t = X(e.channelId),
    n = b.default.getId();
  return null != t && !!t.isPrivate() && (J(t.addRecipient(e.user.id, e.nick, n)), !0)
}

function eN(e) {
  let t = X(e.channelId);
  return null != t && !!t.isPrivate() && (J(t.removeRecipient(e.user.id)), !0)
}

function eA(e) {
  let {
    messages: t
  } = e;
  for (let e of t) null != e.thread && !(e.thread.id in L) && g.AW.has(e.thread.type) && ee((0, g.q_)(e.thread))
}

function eC(e) {
  let {
    messages: t,
    threads: n,
    channels: r
  } = e;
  for (let e of t)
    for (let t of e) eR(t.thread);
  n.forEach(eR), null == r || r.forEach(e => {
    let t = (0, g.q_)(e),
      n = null != X(e.id),
      r = null != F[e.id];
    t.isPrivate() && (!n || r) ? F[t.id] = t : n || J(t)
  })
}

function eR(e) {
  null != e && !(e.id in L) && g.AW.has(e.type) && ee((0, g.q_)(e))
}

function eP() {
  for (let e in U = {}, m.Z.getFavoriteChannels()) {
    let t = m.Z.getCategoryRecord(e);
    null != t && (U[e] = t)
  }
}

function ew() {
  ec()
}
class eD extends(r = s.ZP.Store) {
  initialize() {
    this.waitFor(f.Z, O.default, y.Z, m.Z), this.syncWith([m.Z], eP)
  }
  hasChannel(e) {
    return null != Q(e)
  }
  getBasicChannel(e) {
    if (null != e) return Q(e)
  }
  getChannel(e) {
    if (null != e) return X(e)
  }
  loadAllGuildAndPrivateChannelsFromDisk() {
    for (let e of y.Z.getGuildIds()) K(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
    return T({}, P, D)
  }
  getChannelIds(e) {
    var t, n;
    return (K(e, 0, "getChannelIds"), null == e) ? v.default.keys(D) : v.default.keys(null !== (n = null !== (t = f.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : w[e]) && void 0 !== n ? n : R)
  }
  getMutablePrivateChannels() {
    return D
  }
  getMutableBasicGuildChannelsForGuild(e) {
    var t, n;
    return K(e, 0, "getMutableBasicGuildChannelsForGuild"), null !== (n = null !== (t = f.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : w[e]) && void 0 !== n ? n : R
  }
  getMutableGuildChannelsForGuild(e) {
    var t;
    return K(e, 1, "getMutableGuildChannelsForGuild"), null !== (t = w[e]) && void 0 !== t ? t : R
  }
  getSortedPrivateChannels() {
    return o()(D).values().sort((e, t) => v.default.compare(e.lastMessageId, t.lastMessageId)).reverse().value()
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
    return v.default.keys(M)
  }
  getPrivateChannelsVersion() {
    return k
  }
  getGuildChannelsVersion(e) {
    var t;
    return null !== (t = j[e]) && void 0 !== t ? t : 0
  }
  getAllThreadsForParent(e) {
    return o().values(L).filter(t => t.parent_id === e)
  }
  getInitialOverlayState() {
    return T({}, P, D, L)
  }
  getDebugInfo() {
    return {
      loadedGuildIds: Array.from(G).sort(v.default.compare),
      pendingGuildLoads: Object.keys(B).sort(v.default.compare),
      guildSizes: Object.keys(w).sort(v.default.compare).map(e => "".concat(e, ": ").concat(ex(e)))
    }
  }
}

function ex(e) {
  return null == w[e] ? null : Object.keys(w[e]).length
}
I(eD, "displayName", "ChannelStore");
let eL = new eD(l.Z, {
  BACKGROUND_SYNC: es,
  CACHE_LOADED_LAZY: ef,
  CACHE_LOADED: eu,
  CHANNEL_CREATE: ep,
  CHANNEL_DELETE: eO,
  CHANNEL_RECIPIENT_ADD: eT,
  CHANNEL_RECIPIENT_REMOVE: eN,
  CHANNEL_UPDATES: eg,
  CONNECTION_OPEN_SUPPLEMENTAL: ea,
  CONNECTION_OPEN: ei,
  CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: eh,
  CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: em,
  GUILD_CREATE: eS,
  GUILD_DELETE: eI,
  LOAD_ARCHIVED_THREADS_SUCCESS: ev,
  LOAD_CHANNELS: el,
  LOAD_MESSAGES_AROUND_SUCCESS: eA,
  LOAD_MESSAGES_SUCCESS: eA,
  LOAD_THREADS_SUCCESS: ev,
  LOGOUT: ew,
  OVERLAY_INITIALIZE: ed,
  SEARCH_FINISH: eC,
  MOD_VIEW_SEARCH_FINISH: eC,
  THREAD_CREATE: e_,
  THREAD_DELETE: eO,
  THREAD_LIST_SYNC: eE,
  THREAD_UPDATE: e_
})