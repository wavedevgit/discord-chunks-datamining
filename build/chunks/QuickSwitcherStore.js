/** Chunk was on web.js **/
/** chunk id: 823385, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => eo
}), require("./539854.js"), require("./388685.js"), require("./583741.js"), require("./290780.js"), require("./35282.js"), require("./781311.js");
var i, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk212819 = require("./212819.js"),
  Chunk938078 = require("./938078.js"),
  Chunk220444 = require("./220444.js"),
  Chunk601070 = require("./601070.js"),
  Chunk210887 = require("./210887.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk984933 = require("./984933.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk9156 = require("./9156.js"),
  Chunk483360 = require("./483360.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let w = "seenQSTutorial",
  D = 5,
  x = 100,
  L = [Chunk212819.h8.USER, Chunk212819.h8.GROUP_DM, Chunk212819.h8.TEXT_CHANNEL, Chunk212819.h8.GUILD, Chunk212819.h8.APPLICATION, Chunk212819.h8.LINK, Chunk212819.h8.IN_APP_NAVIGATION],
  j = 0,
  M = false,
  k = false,
  U = null,
  G = [],
  B = null,
  Z = 0,
  F = [],
  V = [];

function H() {
  k = Chunk430824.Z.getGuildCount() >= 3 || a().size(Chunk592125.Z.getMutablePrivateChannels()) >= 20, F = []
}

function Y(e) {
  let t = [];
  return g.Z.getRecentlyEditedDrafts(g.d.ChannelMessage).forEach(n => {
    let {
      channelId: r
    } = n;
    if (e(r)) return;
    let i = W(r);
    null != i && t.push(i)
  }), t
}

function W(e) {
  let t = (0, d.Z)(e);
  return null == t || null != U && U !== t.type ? null : t
}

function K() {
  var e, t;
  let n = null != (e = Chunk914010.Z.getGuildId()) ? module : true,
    r = null != (t = Chunk944486.Z.getChannelId()) ? exports : true;
  switch (U) {
    case Chunk212819.h8.USER: {
      let e = Chunk314897.default.getId();
      return Chunk483360.ZP.getRecentlyTalked(r, 100).filter(t => {
        let {
          record: n
        } = t;
        return n.id !== e
      })
    }
    case Chunk212819.h8.APPLICATION:
      return Chunk483360.ZP.queryApplications({
        query: "",
        limit: 100,
        fuzzy: true
      });
    case Chunk212819.h8.GUILD:
      return Chunk483360.ZP.queryGuilds({
        query: "",
        limit: 100,
        fuzzy: true
      });
    case Chunk212819.h8.TEXT_CHANNEL:
      return Chunk483360.ZP.queryChannels({
        query: "",
        guildId: Chunk914010.Z.getGuildId(),
        limit: 100,
        fuzzy: true,
        allowEmptyQueries: true
      });
    case Chunk212819.h8.VOICE_CHANNEL:
      return Chunk483360.ZP.queryChannels({
        query: "",
        guildId: Chunk914010.Z.getGuildId(),
        limit: 100,
        fuzzy: true,
        filter: () => true,
        type: Chunk984933.Zb,
        allowEmptyQueries: true
      })
  }
  let i = [],
    o = [];
  for (let e = 1; module < V.length; e += 1) {
    let t = W(V[module]);
    null != exports && (exports.type !== Chunk212819.h8.TEXT_CHANNEL && exports.type !== Chunk212819.h8.VOICE_CHANNEL || Chunk496675.Z.can(Chunk981631.Plq.VIEW_CHANNEL, exports.record)) && Chunk392711.push(exports)
  }
  Chunk392711.length > 0 && i.push((0, Chunk212819.o6)(Chunk388032.intl.string(Chunk388032.t["80lOZ2"])), ...Chunk392711);
  let s = Y(e => e === r || V.includes(e));
  Chunk442837.length > 0 && i.push((0, Chunk212819.o6)(Chunk388032.intl.string(Chunk388032.t["4B63jY"])), ...Chunk442837);
  let l = Chunk306680.ZP.getMentionChannelIds().filter(e => e !== r && !V.includes(e)).map(e => W(e)).filter(Chunk823379.lm).reverse();
  if (Chunk433517.length > 0 && (i.push((0, Chunk212819.o6)(Chunk388032.intl.string(Chunk388032.t["61Df19"]))), i = i.concat(Chunk433517)), null != require) {
    let e = Chunk984933.ZP.getSelectableChannelIds(require).filter(e => {
      let t = m.Z.getChannel(e);
      return !(null == t || e === r || V.includes(e) || S.ZP.isChannelMuted(t.guild_id, e) || null != t.parent_id && S.ZP.isChannelMuted(t.guild_id, t.parent_id)) && (0, f.d)(t)
    }).map(e => W(e)).filter(e => e);
    Object.values(Chunk601070.Z.getActiveJoinedUnreadThreadsForGuild(require)).forEach(t => {
      for (let n in t) {
        let t = W(n);
        null != t && e.push(t)
      }
    }), module.length > 0 && (i.push((0, Chunk212819.o6)(Chunk388032.intl.string(Chunk388032.t.ieCAhI))), i = i.concat(module))
  }
  return a()(i).uniqBy(e => e.record.id).value()
}

function z(e, t) {
  switch (U) {
    case u.h8.USER: {
      let t = y.Z.getGuild(T.Z.getGuildId());
      e.unshift((0, u.o6)(null != t ? R.intl.formatToPlainString(R.t.FREzQk, {
        name: t.name
      }) : R.intl.string(R.t.XFYW1t))), G = e;
      break
    }
    case u.h8.TEXT_CHANNEL:
      e.unshift((0, u.o6)(R.intl.string(R.t.W26k4e))), G = e;
      break;
    case u.h8.VOICE_CHANNEL:
      e.unshift((0, u.o6)(R.intl.string(R.t.zUoI5O))), G = e;
      break;
    case u.h8.GUILD:
      e.unshift((0, u.o6)(R.intl.string(R.t.olADPj))), G = e;
      break;
    case u.h8.APPLICATION:
      e.unshift((0, u.o6)(R.intl.string(R.t.VwK1lZ))), G = e;
      break;
    default:
      G = e
  }
  if (t !== B) B = t, Z = Math.max(t.length, Z), j = (0, u.gJ)(u.a8.DOWN, false, G);
  else {
    let e = G[j];
    null != e && e.type === u.h8.HEADER && (j = (0, u.gJ)(u.a8.DOWN, j, G))
  }
  ei.emitChange()
}

function q(e) {
  var t;
  let {
    query: n,
    queryMode: i
  } = e, o = null != (t = T.Z.getGuildId()) ? t : true, a = new Set(["user:".concat(h.default.getId())]);
  null != o && a.add("guild:".concat(o)), r = null != r ? r : new u.ZP(J, L, null != i ? x : D, {
    frecencyBoosters: true,
    blacklist: a
  }), B = null, Z = n.length, U = i, r.search(n)
}

function X(e) {
  let {
    channelId: t
  } = e;
  if (null == t) returnfalse;
  (V = V.filter(e => e !== t)).unshift(t), V.length > 4 && (V.length = 4)
}

function Q(e, t) {
  if (e.length !== t.length) returnfalse;
  for (let n = 0; n < e.length; n++) {
    let r = e[n],
      i = t[n];
    if (r.record.id !== i.record.id) returnfalse
  }
  returntrue
}

function J(e, t) {
  Q(e = "" === (t = t.trim()).trim() ? K() : e, F) || (F = e, z(e, t))
}

function $() {
  B = null, Z = 0, F = [], null != r && (r.destroy(), r = null)
}

function ee(e) {
  var t, n;
  let {
    query: i,
    queryMode: o
  } = e;
  if (null == r) returnfalse;
  if (U !== o) {
    r.setResultTypes(null != o ? [o] : L), r.setLimit(null != o ? x : D);
    let e = null != (t = T.Z.getGuildId()) ? t : true;
    o === u.h8.USER && null != e ? r.setOptions({
      userFilters: {
        guild: e,
        friends: true
      }
    }, true) : o === u.h8.VOICE_CHANNEL ? r.setOptions({
      voiceChannelGuildFilter: null
    }, true) : r.setOptions({
      userFilters: null,
      voiceChannelGuildFilter: true
    }, true)
  }
  if ((U = o) === u.h8.USER) {
    let e = null != (n = T.Z.getGuildId()) ? n : null;
    r.search(i, e)
  } else r.search(i, true)
}

function et(e) {
  j = e.selectedIndex
}

function en() {
  if (M) returnfalse;
  M = true, Chunk433517.K.set(w, true)
}
class er extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(b.ZP, y.Z, m.Z), this.syncWith([p.Z], () => true), M = l.K.get(w) || false, V = null != (t = null == e ? true : e.channelHistory) ? t : []
  }
  getState() {
    return {
      channelHistory: V
    }
  }
  isOpen() {
    return null != r
  }
  getResultTotals(e) {
    return null == r ? 0 : null == e ? r.results.reduce((e, t) => t.type !== u.h8.HEADER ? e + 1 : e, 0) : r.results.reduce((t, n) => n.type === e ? t + 1 : t, 0)
  }
  channelNoticePredicate(e, t) {
    let n = Date.now() - t >= N.Hqc;
    return k && n
  }
  getFrequentGuilds() {
    return null != r ? r.queryGuilds("", 100) : null
  }
  getFrequentGuildsLength() {
    return null != r ? r.queryGuilds("", 100).length : 0
  }
  getChannelHistory() {
    return V
  }
  getProps() {
    return {
      theme: Chunk210887.Z.theme,
      query: null != r ? r.query : "",
      queryMode: U,
      results: G,
      selectedIndex: j,
      seenTutorial: M,
      maxQueryLength: Z
    }
  }
}
P(er, "displayName", "QuickSwitcherStore"), P(er, "persistKey", "QuickSwitcherStore");
let ei = new er(Chunk570140.Z, {
    CONNECTION_OPEN: H,
    CONNECTION_OPEN_SUPPLEMENTAL: H,
    QUICKSWITCHER_SHOW: q,
    SHOW_ACTION_SHEET_QUICK_SWITCHER: q,
    QUICKSWITCHER_HIDE: $,
    OVERLAY_SET_INPUT_LOCKED: $,
    HIDE_ACTION_SHEET_QUICK_SWITCHER: $,
    QUICKSWITCHER_SEARCH: ee,
    QUICKSWITCHER_SELECT: et,
    QUICKSWITCHER_SWITCH_TO: en,
    CHANNEL_SELECT: X
  }),
  eo = ei