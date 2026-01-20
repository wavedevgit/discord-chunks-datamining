/** Chunk was on web.js **/
/** chunk id: 823385, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => el
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

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let R = "seenQSTutorial",
  D = 5,
  x = 7,
  L = 3,
  j = 100,
  M = [Chunk212819.h8.USER, Chunk212819.h8.GROUP_DM, Chunk212819.h8.TEXT_CHANNEL, Chunk212819.h8.GUILD, Chunk212819.h8.APPLICATION, Chunk212819.h8.LINK, Chunk212819.h8.IN_APP_NAVIGATION],
  k = 0,
  U = false,
  G = false,
  Z = null,
  F = [],
  B = null,
  V = 0,
  H = [],
  Y = [],
  W = null;

function K() {
  G = y.Z.getGuildCount() >= 3 || o().size(m.Z.getMutablePrivateChannels()) >= 20, H = []
}

function z(e) {
  let t = [];
  return g.Z.getRecentlyEditedDrafts(g.d.ChannelMessage).forEach(n => {
    let {
      channelId: r
    } = n;
    if (e(r)) return;
    let i = q(r);
    if (null != i) {
      let e = {
        record: i,
        channelId: r
      };
      t.push(e)
    }
  }), t
}

function q(e) {
  let t = (0, d.Z)(e);
  return null == t || null != Z && Z !== t.type ? null : t
}

function Q() {
  var e, t;
  let n = null != (e = I.Z.getGuildId()) ? e : true,
    r = null != (t = S.Z.getChannelId()) ? t : true;
  switch (Z) {
    case u.h8.USER: {
      let e = h.default.getId();
      return C.ZP.getRecentlyTalked(r, 100).filter(t => {
        let {
          record: n
        } = t;
        return n.id !== e
      })
    }
    case u.h8.APPLICATION:
      return C.ZP.queryApplications({
        query: "",
        limit: 100,
        fuzzy: true
      });
    case u.h8.GUILD:
      return C.ZP.queryGuilds({
        query: "",
        limit: 100,
        fuzzy: true
      });
    case u.h8.TEXT_CHANNEL:
      return C.ZP.queryChannels({
        query: "",
        guildId: I.Z.getGuildId(),
        limit: 100,
        fuzzy: true,
        allowEmptyQueries: true
      });
    case u.h8.VOICE_CHANNEL:
      return C.ZP.queryChannels({
        query: "",
        guildId: I.Z.getGuildId(),
        limit: 100,
        fuzzy: true,
        filter: () => true,
        type: E.Zb,
        allowEmptyQueries: true
      })
  }
  let i = [],
    a = new Set,
    o = z(e => e === r || Y.includes(e) || a.has(e));
  if (o.length > 0)
    for (let e of (i.push((0, u.o6)(P.intl.string(P.t["4B63jZ"]))), o)) a.add(e.channelId), i.push(e.record);
  let s = v.ZP.getMentionChannelIds().filter(e => e !== r && !Y.includes(e) && !a.has(e)).map(e => q(e)).filter(A.lm).reverse();
  if (s.length > 0)
    for (let e of (i.push((0, u.o6)(P.intl.string(P.t["61Df13"]))), s)) a.add(e.record.id), i.push(e);
  if (null != n) {
    let e = E.ZP.getSelectableChannelIds(n).filter(e => {
      let t = m.Z.getChannel(e);
      return !(null == t || e === r || Y.includes(e) || a.has(e) || T.ZP.isChannelMuted(t.guild_id, e) || null != t.parent_id && T.ZP.isChannelMuted(t.guild_id, t.parent_id)) && (0, f.d)(t)
    }).map(e => q(e)).filter(e => e);
    Object.values(p.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach(t => {
      for (let n in t) {
        let t = q(n);
        null == t || a.has(t.record.id) || Y.includes(n) || e.push(t)
      }
    }), e.length > 0 && (i.push((0, u.o6)(P.intl.string(P.t.ieCAhD))), i = i.concat(e))
  }
  let l = Math.min((i.length > 0 ? L : x) + 1, Y.length),
    c = [];
  for (let e = 1; e < l; e += 1) {
    let t = q(Y[e]);
    null != t && (t.type !== u.h8.TEXT_CHANNEL && t.type !== u.h8.VOICE_CHANNEL || O.Z.can(N.Plq.VIEW_CHANNEL, t.record)) && (c.push(t), a.add(t.record.id))
  }
  return c.length > 0 && (i = [(0, u.o6)(P.intl.string(P.t["80lOZ1"])), ...c, ...i]), i
}

function X(e, t) {
  switch (Z) {
    case u.h8.USER: {
      let t = y.Z.getGuild(I.Z.getGuildId());
      e.unshift((0, u.o6)(null != t ? P.intl.formatToPlainString(P.t.FREzQs, {
        name: t.name
      }) : P.intl.string(P.t.XFYW1o))), F = e;
      break
    }
    case u.h8.TEXT_CHANNEL:
      e.unshift((0, u.o6)(P.intl.string(P.t.W26k4V))), F = e;
      break;
    case u.h8.VOICE_CHANNEL:
      e.unshift((0, u.o6)(P.intl.string(P.t.zUoI5C))), F = e;
      break;
    case u.h8.GUILD:
      e.unshift((0, u.o6)(P.intl.string(P.t.olADPs))), F = e;
      break;
    case u.h8.APPLICATION:
      e.unshift((0, u.o6)(P.intl.string(P.t.VwK1ld))), F = e;
      break;
    default:
      F = e
  }
  if (t !== B) B = t, V = Math.max(t.length, V), k = (0, u.gJ)(u.a8.DOWN, false, F);
  else {
    let e = F[k];
    null != e && e.type === u.h8.HEADER && (k = (0, u.gJ)(u.a8.DOWN, k, F))
  }
  es.emitChange()
}

function J(e) {
  var t;
  let {
    query: n,
    queryMode: i
  } = e, a = n.trim(), o = null != (t = I.Z.getGuildId()) ? t : true, s = new Set(["user:".concat(h.default.getId())]);
  null != o && s.add("guild:".concat(o)), W = Date.now(), r = null != r ? r : new u.ZP(et, M, null != i ? j : D, {
    frecencyBoosters: true,
    blacklist: s,
    allowSnowflake: true
  }, j), B = null, V = a.length, Z = i, r.search(a)
}

function $(e) {
  let {
    channelId: t
  } = e;
  if (null == t) returnfalse;
  (Y = Y.filter(e => e !== t)).unshift(t), Y.length > x + 1 && (Y.length = x + 1)
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
  ee(e = "" === (t = t.trim()).trim() ? Q() : e, H) || (H = e, X(e, t))
}

function en() {
  B = null, V = 0, H = [], null != r && (r.destroy(), r = null)
}

function er(e) {
  var t, n;
  let {
    query: i,
    queryMode: a
  } = e, o = i.trim();
  if (null == r) returnfalse;
  if (Z !== a) {
    r.setResultTypes(null != a ? [a] : M), r.setLimit(null != a ? j : D);
    let e = null != (t = I.Z.getGuildId()) ? t : true;
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
  if ((Z = a) === u.h8.USER) {
    let e = null != (n = I.Z.getGuildId()) ? n : null;
    r.search(o, e)
  } else r.search(o, true)
}

function ei(e) {
  k = e.selectedIndex
}

function ea() {
  if (U) returnfalse;
  U = true, l.K.set(R, true)
}
class eo extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(p.Z, h.default, m.Z, g.Z, E.ZP, b.ZP, y.Z, O.Z, v.ZP, S.Z, I.Z, _.Z, T.ZP), this.syncWith([_.Z], () => true), U = l.K.get(R) || false, Y = null != (t = null == e ? true : e.channelHistory) ? t : []
  }
  getState() {
    return {
      channelHistory: Y
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
    return G && n
  }
  getFrequentGuilds() {
    return null != r ? r.queryGuilds("", 100) : null
  }
  getFrequentGuildsLength() {
    return null != r ? r.queryGuilds("", 100).length : 0
  }
  getChannelHistory() {
    return Y
  }
  getLastShowTimestamp() {
    return W
  }
  getProps() {
    return {
      theme: _.Z.theme,
      query: null != r ? r.query : "",
      queryMode: Z,
      results: F,
      selectedIndex: k,
      seenTutorial: U,
      maxQueryLength: V
    }
  }
}
w(eo, "displayName", "QuickSwitcherStore"), w(eo, "persistKey", "QuickSwitcherStore");
let es = new eo(Chunk570140.Z, {
    CONNECTION_OPEN: K,
    CONNECTION_OPEN_SUPPLEMENTAL: K,
    QUICKSWITCHER_SHOW: J,
    SHOW_ACTION_SHEET_QUICK_SWITCHER: J,
    QUICKSWITCHER_HIDE: en,
    OVERLAY_SET_INPUT_LOCKED: en,
    HIDE_ACTION_SHEET_QUICK_SWITCHER: en,
    QUICKSWITCHER_SEARCH: er,
    QUICKSWITCHER_SELECT: ei,
    QUICKSWITCHER_SWITCH_TO: ea,
    CHANNEL_SELECT: $
  }),
  el = es