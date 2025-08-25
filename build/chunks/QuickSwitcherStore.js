/** Chunk was on web.js **/
/** chunk id: 823385, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => el
}), require("./539854.js"), require("./388685.js"), require("./583741.js"), require("./290780.js"), require("./35282.js"), require("./781311.js");
var i, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk212819 = require("./212819.js"),
  Chunk938078 = require("./938078.js"),
  Chunk220444 = require("./220444.js"),
  Chunk745488 = require("./745488.js"),
  Chunk601070 = require("./601070.js"),
  Chunk210887 = require("./210887.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk580005 = require("./580005.js"),
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
  Chunk411198 = require("./411198.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let L = "seenQSTutorial",
  j = 5,
  k = 100,
  M = [Chunk212819.h8.USER, Chunk212819.h8.GROUP_DM, Chunk212819.h8.TEXT_CHANNEL, Chunk212819.h8.GUILD, Chunk212819.h8.APPLICATION, Chunk212819.h8.LINK, Chunk212819.h8.IN_APP_NAVIGATION],
  U = 0,
  G = false,
  B = false,
  Z = null,
  F = [],
  V = null,
  H = 0,
  Y = [],
  W = [];

function K() {
  B = Chunk430824.Z.getGuildCount() >= 3 || a().size(Chunk592125.Z.getMutablePrivateChannels()) >= 20, Y = []
}

function z(e) {
  let t = [];
  return E.Z.getRecentlyEditedDrafts(E.d.ChannelMessage).forEach(n => {
    let {
      channelId: r
    } = n;
    if (e(r)) return;
    let i = q(r);
    null != i && t.push(i)
  }), t
}

function q(e) {
  let t = (0, d.Z)(e);
  return null == t || null != Z && Z !== t.type ? null : t
}

function X() {
  var e, t;
  let n = null != (e = Chunk914010.Z.getGuildId()) ? module : true,
    r = null != (t = Chunk944486.Z.getChannelId()) ? exports : true;
  switch (Z) {
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
  for (let e = 1; module < W.length; e += 1) {
    let t = q(W[module]);
    null != exports && (exports.type !== Chunk212819.h8.TEXT_CHANNEL && exports.type !== Chunk212819.h8.VOICE_CHANNEL || Chunk496675.Z.can(Chunk981631.Plq.VIEW_CHANNEL, exports.record)) && Chunk392711.push(exports)
  }
  Chunk392711.length > 0 && i.push((0, Chunk212819.o6)(Chunk388032.intl.string(Chunk388032.t["80lOZ2"])), ...Chunk392711);
  let s = z(e => e === r || W.includes(e));
  Chunk442837.length > 0 && i.push((0, Chunk212819.o6)(Chunk388032.intl.string(Chunk388032.t["4B63jY"])), ...Chunk442837);
  let l = Chunk306680.ZP.getMentionChannelIds().filter(e => e !== r && !W.includes(e)).map(e => q(e)).filter(Chunk823379.lm).reverse();
  if (Chunk433517.length > 0 && (i.push((0, Chunk212819.o6)(Chunk388032.intl.string(Chunk388032.t["61Df19"]))), i = i.concat(Chunk433517)), null != require) {
    let e = Chunk984933.ZP.getSelectableChannelIds(require).filter(e => {
      let t = g.Z.getChannel(e);
      return !(null == t || e === r || W.includes(e) || C.ZP.isChannelMuted(t.guild_id, e) || null != t.parent_id && C.ZP.isChannelMuted(t.guild_id, t.parent_id)) && (0, f.d)(t)
    }).map(e => q(e)).filter(e => e);
    Object.values(Chunk601070.Z.getActiveJoinedUnreadThreadsForGuild(require)).forEach(t => {
      for (let n in t) {
        let t = q(n);
        null != t && e.push(t)
      }
    }), module.length > 0 && (i.push((0, Chunk212819.o6)(Chunk388032.intl.string(Chunk388032.t.ieCAhI))), i = i.concat(module))
  }
  return a()(i).uniqBy(e => e.record.id).value()
}

function Q(e, t) {
  switch (Z) {
    case u.h8.USER: {
      let t = v.Z.getGuild(A.Z.getGuildId());
      e.unshift((0, u.o6)(null != t ? D.intl.formatToPlainString(D.t.FREzQk, {
        name: t.name
      }) : D.intl.string(D.t.XFYW1t))), F = e;
      break
    }
    case u.h8.TEXT_CHANNEL:
      e.unshift((0, u.o6)(D.intl.string(D.t.W26k4e))), F = e;
      break;
    case u.h8.VOICE_CHANNEL:
      e.unshift((0, u.o6)(D.intl.string(D.t.zUoI5O))), F = e;
      break;
    case u.h8.GUILD:
      e.unshift((0, u.o6)(D.intl.string(D.t.olADPj))), F = e;
      break;
    case u.h8.APPLICATION:
      e.unshift((0, u.o6)(D.intl.string(D.t.VwK1lZ))), F = e;
      break;
    default:
      F = e
  }
  if (t !== V) V = t, H = Math.max(t.length, H), U = (0, u.gJ)(u.a8.DOWN, false, F);
  else {
    let e = F[U];
    null != e && e.type === u.h8.HEADER && (U = (0, u.gJ)(u.a8.DOWN, U, F))
  }
  es.emitChange()
}

function J(e) {
  var t;
  let {
    query: n,
    queryMode: i
  } = e, o = null != (t = A.Z.getGuildId()) ? t : true, a = new Set(["user:".concat(m.default.getId())]);
  null != o && a.add("guild:".concat(o)), r = null != r ? r : new u.ZP(et, M, null != i ? k : j, {
    frecencyBoosters: true,
    blacklist: a
  }), V = null, H = n.length, Z = i, r.search(n)
}

function $(e) {
  let {
    channelId: t
  } = e;
  if (null == t) returnfalse;
  (W = W.filter(e => e !== t)).unshift(t), W.length > 4 && (W.length = 4)
}

function ee(e, t) {
  if (e.length !== t.length) returnfalse;
  for (let n = 0; n < e.length; n++) {
    let r = e[n],
      i = t[n];
    if (r.record.id !== i.record.id) returnfalse
  }
  returntrue
}

function et(e, t) {
  ee(e = "" === (t = t.trim()).trim() ? X() : e, Y) || (Y = e, Q(e, t))
}

function en() {
  V = null, H = 0, Y = [], null != r && (r.destroy(), r = null)
}

function er(e) {
  var t, n;
  let {
    query: i,
    queryMode: o
  } = e;
  if (null == r) returnfalse;
  if (Z !== o) {
    r.setResultTypes(null != o ? [o] : M), r.setLimit(null != o ? k : j);
    let e = null != (t = A.Z.getGuildId()) ? t : true;
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
  if ((Z = o) === u.h8.USER) {
    let e = null != (n = A.Z.getGuildId()) ? n : null;
    r.search(i, e);
    return
  }
  let {
    enabled: a,
    type: s
  } = (0, _.$)({
    location: "QuickSwitcher"
  });
  if (!a) return void r.search(i, true);
  switch (s) {
    case _.N.ALL_GUILDS:
      let l = v.Z.getGuildIds();
      r.search(i, l.length > 0 ? [...l] : true);
      break;
    case _.N.SELECTED_GUILD:
      let c = A.Z.getGuildId();
      r.search(i, null != c ? c : true);
      break;
    case _.N.FRECENCY_GUILDS:
      let d = [];
      b.Z.getFrequentlyWithoutFetchingLatest().forEach(e => {
        (0, P.lM)(e) && d.push(e.id)
      }), r.search(i, d.length > 0 ? d : true)
  }
}

function ei(e) {
  U = e.selectedIndex
}

function eo() {
  if (G) returnfalse;
  G = true, Chunk433517.K.set(L, true)
}
class ea extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(O.ZP, v.Z, g.Z), this.syncWith([h.Z], () => true), G = l.K.get(L) || false, W = null != (t = null == e ? true : e.channelHistory) ? t : []
  }
  getState() {
    return {
      channelHistory: W
    }
  }
  isOpen() {
    return null != r
  }
  getResultTotals(e) {
    return null == r ? 0 : null == e ? r.results.reduce((e, t) => t.type !== u.h8.HEADER ? e + 1 : e, 0) : r.results.reduce((t, n) => n.type === e ? t + 1 : t, 0)
  }
  channelNoticePredicate(e, t) {
    let n = Date.now() - t >= w.Hqc;
    return B && n
  }
  getFrequentGuilds() {
    return null != r ? r.queryGuilds("", 100) : null
  }
  getFrequentGuildsLength() {
    return null != r ? r.queryGuilds("", 100).length : 0
  }
  getChannelHistory() {
    return W
  }
  getProps() {
    return {
      theme: Chunk210887.Z.theme,
      query: null != r ? r.query : "",
      queryMode: Z,
      results: F,
      selectedIndex: U,
      seenTutorial: G,
      maxQueryLength: H
    }
  }
}
x(ea, "displayName", "QuickSwitcherStore"), x(ea, "persistKey", "QuickSwitcherStore");
let es = new ea(Chunk570140.Z, {
    CONNECTION_OPEN: K,
    CONNECTION_OPEN_SUPPLEMENTAL: K,
    QUICKSWITCHER_SHOW: J,
    SHOW_ACTION_SHEET_QUICK_SWITCHER: J,
    QUICKSWITCHER_HIDE: en,
    OVERLAY_SET_INPUT_LOCKED: en,
    HIDE_ACTION_SHEET_QUICK_SWITCHER: en,
    QUICKSWITCHER_SEARCH: er,
    QUICKSWITCHER_SELECT: ei,
    QUICKSWITCHER_SWITCH_TO: eo,
    CHANNEL_SELECT: $
  }),
  el = es