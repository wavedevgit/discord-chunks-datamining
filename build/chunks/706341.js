/** Chunk was on web.js **/
/** chunk id: 706341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./321073.js"), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  Chunk73153 = require("./73153.js"),
  Chunk378939 = require("./378939.js"),
  Chunk843472 = require("./843472.js"),
  Chunk334738 = require("./334738.js"),
  Chunk187508 = require("./187508.js"),
  Chunk976860 = require("./976860.js"),
  Chunk222823 = require("./222823.js"),
  Chunk661191 = require("./661191.js"),
  Chunk932883 = require("./932883.jsx"),
  Chunk320697 = require("./320697.js"),
  Chunk849077 = require("./849077.js"),
  Chunk652215 = require("./652215.js");

function m(e, t, n) {
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
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = y(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let b = 5,
  O = 1500;

function v(e) {
  return a.A.fetchRecentMentions({
    before: e,
    limit: h.Ue3,
    roles: l.Ay.roleFilter,
    everyone: l.Ay.everyoneFilter,
    feature: _.j5
  })
}
let A = (0, Chunk735438.throttle)(S, O);

function I(e) {
  let t = p.A.getChannelInfoMap(),
    n = [];
  for (let i of e) {
    var r;
    if ((null == (r = t[i]) ? true : r.loadState) === _.Ve.LOADED) continue;
    let e = u.Ay.lastMessageId(i),
      a = null != e && d.default.age(e) > _.V$;
    if (n.length >= b || a) break;
    let o = s.A.fetchMessages({
      channelId: i,
      limit: _.EM,
      feature: _.j5
    });
    false !== o && null != o && n.push(o)
  }
  return n
}
async function S(e) {
  let {
    preload: t = false
  } = e, n = E(e, ["preload"]), r = Date.now(), a = p.A.getNotifyingChannelIds();
  if (null == a) return;
  let s = t ? [] : I(a),
    o = l.Ay.getMentions(),
    c = null != o && o.length > 0 ? o[o.length - 1].id : null,
    u = false;
  if (!l.Ay.hasMore && l.Ay.hasLoadedEver || l.Ay.loading || (s.push(v(c)), u = true), 0 === s.length) return void i.h.dispatch({
    type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
    preload: t,
    hasMoreToLoad: false
  });
  try {
    var d;
    await Promise.all(s);
    let e = {
      timeToLoad: Date.now() - r,
      loadingTrigger: null != (d = n.loadingTrigger) ? d : _.VA.UNKNOWN,
      viewId: n.viewId,
      channelsFetched: s.length - !!u,
      mentionsFetched: u
    };
    t && (0, f.P3)(e), i.h.dispatch({
      type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
      preload: t,
      analyticsPayload: e,
      hasMoreToLoad: true
    })
  } catch (e) {
    i.h.dispatch({
      type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE"
    })
  }
}
let T = {
  loadMoreInbox() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : true,
      [t = {}] = [e],
      {
        preload: n = false
      } = t,
      r = E(t, ["preload"]);
    if (!p.A.canLoadMore({
        preload: n
      })) returnfalse;
    i.h.dispatch({
      type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START",
      preload: n
    }), A(g({
      preload: n
    }, r))
  },
  inboxItemClick: function(e) {
    let {
      message: t,
      channel: n,
      isUnread: r,
      isSidebar: a,
      viewId: l,
      track: u = true,
      autoTriggeredOnInboxOpen: d = false
    } = e;
    i.h.dispatch({
      type: "NOTIFICATIONS_INBOX_ITEM_CLICK",
      messageId: t.id,
      channelId: n.id,
      isUnread: r
    }), u && (0, f.Ml)({
      interactionType: f.X8.CLICK,
      message: t,
      viewId: l
    }), r && o.ack(t.channel_id, {
      section: h.JJy.INBOX,
      object: h.ZSU.ACK_MESSAGE_VIEWED,
      objectType: h.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
    }, true, true, t.id), s.A.trackJump(n.id, t.id, _.XU);
    let p = a ? h.gNP : n.guild_id,
      m = h.BVt.CHANNEL(p, n.id, t.id);
    d && a ? (0, c.bG)(m) : (0, c.pX)(m)
  }
}