/** Chunk was on web.js **/
/** chunk id: 948154, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./539854.js"), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk570140 = require("./570140.js"),
  Chunk235820 = require("./235820.js"),
  Chunk904245 = require("./904245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk455199 = require("./455199.js"),
  Chunk703656 = require("./703656.js"),
  Chunk306680 = require("./306680.js"),
  Chunk709054 = require("./709054.js"),
  Chunk804932 = require("./804932.jsx"),
  Chunk787879 = require("./787879.js"),
  Chunk982183 = require("./982183.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let y = 5,
  O = 1500;

function v(e) {
  return a.Z.fetchRecentMentions({
    before: e,
    limit: m.DJj,
    roles: l.ZP.roleFilter,
    everyone: l.ZP.everyoneFilter,
    feature: _.Lr
  })
}
let S = (0, Chunk392711.throttle)(T, O);

function I(e) {
  let t = p.Z.getChannelInfoMap(),
    n = [];
  for (let i of e) {
    var r;
    if ((null == (r = t[i]) ? true : r.loadState) === _.a7.LOADED) continue;
    let e = u.ZP.lastMessageId(i),
      a = null != e && d.default.age(e) > _.ib;
    if (n.length >= y || a) break;
    let s = o.Z.fetchMessages({
      channelId: i,
      limit: _.AQ,
      feature: _.Lr
    });
    false !== s && null != s && n.push(s)
  }
  return n
}
async function T(e) {
  var t, {
      preload: n = false
    } = e,
    r = E(e, ["preload"]);
  let a = Date.now(),
    o = p.Z.getNotifyingChannelIds();
  if (null == o) return;
  let s = n ? [] : I(o),
    c = l.ZP.getMentions(),
    u = null != c && c.length > 0 ? c[c.length - 1].id : null,
    d = false;
  if (!l.ZP.hasMore && l.ZP.hasLoadedEver || l.ZP.loading || (s.push(v(u)), d = true), 0 === s.length) return void i.Z.dispatch({
    type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
    preload: n,
    hasMoreToLoad: false
  });
  try {
    await Promise.all(s);
    let e = {
      timeToLoad: Date.now() - a,
      loadingTrigger: null != (t = r.loadingTrigger) ? t : _.X.UNKNOWN,
      viewId: r.viewId,
      channelsFetched: s.length - !!d,
      mentionsFetched: d
    };
    n && (0, f.CP)(e), i.Z.dispatch({
      type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
      preload: n,
      analyticsPayload: e,
      hasMoreToLoad: true
    })
  } catch (e) {
    i.Z.dispatch({
      type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE"
    })
  }
}
let A = {
  loadMoreInbox() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    var {
      preload: t = false
    } = module, n = E(module, ["preload"]);
    if (!Chunk787879.Z.canLoadMore({
        preload: exports
      })) returnfalse;
    Chunk570140.Z.dispatch({
      type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START",
      preload: exports
    }), S(g({
      preload: exports
    }, require))
  },
  inboxItemClick: function(e) {
    let {
      message: t,
      channel: n,
      isUnread: r,
      isSidebar: a,
      viewId: l,
      track: u = true
    } = e;
    i.Z.dispatch({
      type: "NOTIFICATIONS_INBOX_ITEM_CLICK",
      messageId: t.id,
      channelId: n.id,
      isUnread: r
    }), u && (0, f.Qz)({
      interactionType: f.s_.CLICK,
      message: t,
      viewId: l
    }), r && s.ack(t.channel_id, {
      section: m.jXE.INBOX,
      object: m.qAy.ACK_MESSAGE_VIEWED,
      objectType: m.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
    }, true, true, t.id), o.Z.trackJump(n.id, t.id, _.JP);
    let d = a ? m.STv : n.guild_id;
    (0, c.uL)(m.Z5c.CHANNEL(d, n.id, t.id))
  }
}