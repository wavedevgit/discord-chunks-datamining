/** Chunk was on web.js **/
/** chunk id: 823385, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => eo
}), require("./539854.js"), require("./388685.js"), require("./583741.js"), require("./290780.js"), require("./781311.js"), require("./35282.js");
var i, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
let D = "seenQSTutorial",
  w = 5,
  L = 100,
  x = [Chunk212819.h8.USER, Chunk212819.h8.GROUP_DM, Chunk212819.h8.TEXT_CHANNEL, Chunk212819.h8.GUILD, Chunk212819.h8.APPLICATION, Chunk212819.h8.LINK, Chunk212819.h8.IN_APP_NAVIGATION],
  M = 0,
  k = false,
  j = false,
  U = null,
  G = [],
  B = null,
  Z = 0,
  F = [],
  V = [],
  H = null;

function Y() {
  j = Chunk430824.Z.getGuildCount() >= 3 || o().size(Chunk592125.Z.getMutablePrivateChannels()) >= 20, F = []
}

function W(e) {
  let t = [];
  return g.Z.getRecentlyEditedDrafts(g.d.ChannelMessage).forEach(n => {
    let {
      channelId: r
    } = n;
    if (e(r)) return;
    let i = K(r);
    if (null != i) {
      let e = {
        record: i,
        channelId: r
      };
      t.push(e)
    }
  }), t
}

function K(e) {
  let t = (0, d.Z)(e);
  return null == t || null != U && U !== t.type ? null : t
}

function z() {
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
    a = new Set,
    o = [];
  for (let e = 1; module < V.length; e += 1) {
    let t = K(V[module]);
    null != exports && (exports.type !== Chunk212819.h8.TEXT_CHANNEL && exports.type !== Chunk212819.h8.VOICE_CHANNEL || Chunk496675.Z.can(Chunk981631.Plq.VIEW_CHANNEL, exports.record)) && (o.push(exports), Chunk392711.add(exports.record.id))
  }
  o.length > 0 && i.push((0, Chunk212819.o6)(Chunk388032.intl.string(Chunk388032.t["80lOZ1"])), ...o);
  let s = W(e => e === r || V.includes(e) || a.has(e));
  if (Chunk442837.length > 0)
    for (let e of (i.push((0, Chunk212819.o6)(Chunk388032.intl.string(Chunk388032.t["4B63jZ"]))), Chunk442837)) Chunk392711.add(module.channelId), i.push(module.record);
  let l = Chunk306680.ZP.getMentionChannelIds().filter(e => e !== r && !V.includes(e) && !a.has(e)).map(e => K(e)).filter(Chunk823379.lm).reverse();
  if (Chunk433517.length > 0)
    for (let e of (i.push((0, Chunk212819.o6)(Chunk388032.intl.string(Chunk388032.t["61Df13"]))), Chunk433517)) Chunk392711.add(module.record.id), i.push(module);
  if (null != require) {
    let e = Chunk984933.ZP.getSelectableChannelIds(require).filter(e => {
      let t = m.Z.getChannel(e);
      return !(null == t || e === r || V.includes(e) || a.has(e) || S.ZP.isChannelMuted(t.guild_id, e) || null != t.parent_id && S.ZP.isChannelMuted(t.guild_id, t.parent_id)) && (0, f.d)(t)
    }).map(e => K(e)).filter(e => e);
    Object.values(Chunk601070.Z.getActiveJoinedUnreadThreadsForGuild(require)).forEach(t => {
      for (let n in t) {
        let t = K(n);
        null == t || a.has(t.record.id) || e.push(t)
      }
    }), module.length > 0 && (i.push((0, Chunk212819.o6)(Chunk388032.intl.string(Chunk388032.t.ieCAhD))), i = i.concat(module))
  }
  return i
}

function q(e, t) {
  switch (U) {
    case u.h8.USER: {
      let t = y.Z.getGuild(T.Z.getGuildId());
      e.unshift((0, u.o6)(null != t ? R.intl.formatToPlainString(R.t.FREzQs, {
        name: t.name
      }) : R.intl.string(R.t.XFYW1o))), G = e;
      break
    }
    case u.h8.TEXT_CHANNEL:
      e.unshift((0, u.o6)(R.intl.string(R.t.W26k4V))), G = e;
      break;
    case u.h8.VOICE_CHANNEL:
      e.unshift((0, u.o6)(R.intl.string(R.t.zUoI5C))), G = e;
      break;
    case u.h8.GUILD:
      e.unshift((0, u.o6)(R.intl.string(R.t.olADPs))), G = e;
      break;
    case u.h8.APPLICATION:
      e.unshift((0, u.o6)(R.intl.string(R.t.VwK1ld))), G = e;
      break;
    default:
      G = e
  }
  if (t !== B) B = t, Z = Math.max(t.length, Z), M = (0, u.gJ)(u.a8.DOWN, false, G);
  else {
    let e = G[M];
    null != e && e.type === u.h8.HEADER && (M = (0, u.gJ)(u.a8.DOWN, M, G))
  }
  ea.emitChange()
}

function X(e) {
  var t;
  let {
    query: n,
    queryMode: i
  } = e, a = n.trim(), o = null != (t = T.Z.getGuildId()) ? t : true, s = new Set(["user:".concat(h.default.getId())]);
  null != o && s.add("guild:".concat(o)), H = Date.now(), r = null != r ? r : new u.ZP($, x, null != i ? L : w, {
    frecencyBoosters: true,
    blacklist: s,
    allowSnowflake: true
  }, L), B = null, Z = a.length, U = i, r.search(a)
}

function Q(e) {
  let {
    channelId: t
  } = e;
  if (null == t) returnfalse;
  (V = V.filter(e => e !== t)).unshift(t), V.length > 4 && (V.length = 4)
}

function J(e, t) {
  if (e.length !== t.length) returnfalse;
  for (let n = 0; n < e.length; n++) {
    let r = e[n],
      i = t[n];
    if (r.record.id !== i.record.id) returnfalse
  }
  returntrue
}

function $(e, t) {
  J(e = "" === (t = t.trim()).trim() ? z() : e, F) || (F = e, q(e, t))
}

function ee() {
  B = null, Z = 0, F = [], null != r && (r.destroy(), r = null)
}

function et(e) {
  var t, n;
  let {
    query: i,
    queryMode: a
  } = e, o = i.trim();
  if (null == r) returnfalse;
  if (U !== a) {
    r.setResultTypes(null != a ? [a] : x), r.setLimit(null != a ? L : w);
    let e = null != (t = T.Z.getGuildId()) ? t : true;
    a === u.h8.USER && null != e ? r.setOptions({
      userFilters: {
        guild: e,
        friends: true
      }
    }, true) : a === u.h8.VOICE_CHANNEL ? r.setOptions({
      voiceChannelGuildFilter: null
    }, true) : r.setOptions({
      userFilters: null,
      voiceChannelGuildFilter: true
    }, true)
  }
  if ((U = a) === u.h8.USER) {
    let e = null != (n = T.Z.getGuildId()) ? n : null;
    r.search(o, e)
  } else r.search(o, true)
}

function en(e) {
  M = e.selectedIndex
}

function er() {
  if (k) returnfalse;
  k = true, Chunk433517.K.set(D, true)
}
class ei extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(_.Z, h.default, m.Z, g.Z, E.ZP, b.ZP, y.Z, O.Z, v.ZP, I.Z, T.Z, p.Z, S.ZP), this.syncWith([p.Z], () => true), k = l.K.get(D) || false, V = null != (t = null == e ? true : e.channelHistory) ? t : []
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
    return j && n
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
  getLastShowTimestamp() {
    return H
  }
  getProps() {
    return {
      theme: Chunk210887.Z.theme,
      query: null != r ? r.query : "",
      queryMode: U,
      results: G,
      selectedIndex: M,
      seenTutorial: k,
      maxQueryLength: Z
    }
  }
}
P(ei, "displayName", "QuickSwitcherStore"), P(ei, "persistKey", "QuickSwitcherStore");
let ea = new ei(Chunk570140.Z, {
    CONNECTION_OPEN: Y,
    CONNECTION_OPEN_SUPPLEMENTAL: Y,
    QUICKSWITCHER_SHOW: X,
    SHOW_ACTION_SHEET_QUICK_SWITCHER: X,
    QUICKSWITCHER_HIDE: ee,
    OVERLAY_SET_INPUT_LOCKED: ee,
    HIDE_ACTION_SHEET_QUICK_SWITCHER: ee,
    QUICKSWITCHER_SEARCH: et,
    QUICKSWITCHER_SELECT: en,
    QUICKSWITCHER_SWITCH_TO: er,
    CHANNEL_SELECT: Q
  }),
  eo = ea