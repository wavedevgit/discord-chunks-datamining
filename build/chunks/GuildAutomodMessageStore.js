/** Chunk was on web.js **/
/** chunk id: 93474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk884384 = require("./884384.js"),
  Chunk141468 = require("./141468.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk661191 = require("./661191.js"),
  Chunk753738 = require("./753738.js"),
  Chunk785823 = require("./785823.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = {},
  m = 0,
  g = {},
  E = {},
  b = (e, t) => {
    let n = (0, s.cR)(e),
      r = {
        id: n,
        isBlockedEdit: (0, s.Qn)(e),
        messageData: e,
        errorMessage: (0, d.PD)(e, t)
      };
    h[n] = r, m++
  },
  y = e => h[e],
  O = e => {
    null != h[e] && delete h[e], m++
  };

function A(e) {
  return 0 !== Object.keys(h).length && (h = {}, m++, true)
}

function v(e) {
  let {
    messageData: t,
    errorResponseBody: n
  } = e;
  return b(t, n), true
}

function S(e) {
  let {
    messageId: t
  } = e;
  return O(t), true
}

function I(e) {
  let {
    response: t
  } = e;
  if ((null == t ? true : t.body) == null || t.body.code === p.t02.AUTOMOD_MESSAGE_BLOCKED) returnfalse;
  let n = t.body.id;
  if (null == n) returnfalse;
  O(n)
}

function T(e) {
  let {
    guildId: t,
    decisionId: n,
    suspiciousMentionActivityUntil: r
  } = e;
  return g[t] = {
    guildId: t,
    decisionId: n,
    suspiciousMentionActivityUntil: r
  }, true
}

function C(e) {
  let {
    guildId: t
  } = e;
  return delete g[t], true
}

function N(e) {
  let {
    guildId: t,
    message: n
  } = e;
  if (null == t || n.type !== p.lAJ.AUTO_MODERATION_ACTION) returnfalse;
  let r = (0, o.rh)(n);
  return !!(0, f.ER)(r) && !!(0, f.de)(r) && (E[t] = r.id, true)
}

function R(e) {
  var t;
  let {
    channelId: n,
    messages: r
  } = e, i = null == (t = l.A.getChannel(n)) ? true : t.getGuildId();
  if (null == i) returnfalse;
  let a = E[i],
    s = r.reduce((e, t) => {
      var n;
      return t.type === p.lAJ.AUTO_MODERATION_ACTION && (null == (n = t.embeds) ? true : n.some(e => {
        let {
          type: t
        } = e;
        return t === p.Auw.AUTO_MODERATION_NOTIFICATION
      })) ? null == e || false === u.default.compare(e, t.id) ? t.id : true : e
    }, a);
  return null != s && E[i] !== s && (E[i] = s, true)
}
class w extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(l.A, c.A), null != e && (h = e.automodFailedMessages, g = e.mentionRaidDetectionByGuild)
  }
  getState() {
    return {
      automodFailedMessages: h,
      mentionRaidDetectionByGuild: g,
      lastIncidentAlertMessage: E
    }
  }
  getMessage(e) {
    var t;
    return null == e ? null : null != (t = y(e)) ? t : null
  }
  getMessagesVersion() {
    return m
  }
  getMentionRaidDetected(e) {
    var t;
    return null != (t = g[e]) ? t : null
  }
  getLastIncidentAlertMessage(e) {
    var t;
    return null != (t = E[e]) ? t : null
  }
}
_(w, "displayName", "GuildAutomodMessageStore"), _(w, "persistKey", "GuildAutomodMessages");
let P = new w(Chunk73153.h, {
  CONNECTION_OPEN: A,
  LOAD_MESSAGES_SUCCESS: R,
  LOCAL_MESSAGES_LOADED: R,
  MESSAGE_CREATE: N,
  MESSAGE_SEND_FAILED_AUTOMOD: v,
  MESSAGE_EDIT_FAILED_AUTOMOD: v,
  REMOVE_AUTOMOD_MESSAGE_NOTICE: S,
  MESSAGE_END_EDIT: I,
  AUTO_MODERATION_MENTION_RAID_DETECTION: T,
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: C
})