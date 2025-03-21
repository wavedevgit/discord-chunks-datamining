/** Chunk was on 31942 **/
n.d(t, {
  Z: () => m
});
var r, i = n(442837),
  l = n(570140),
  o = n(673750),
  a = n(786761),
  u = n(592125),
  c = n(375954),
  s = n(709054),
  d = n(539573),
  f = n(825829),
  p = n(981631);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {},
  O = 0,
  g = {},
  T = {},
  h = (e, t) => {
    let n = (0, o.hc)(e),
      r = {
        id: n,
        isBlockedEdit: (0, o.Bz)(e),
        messageData: e,
        errorMessage: (0, d.uF)(e, t)
      };
    _[n] = r, O++
  },
  S = e => _[e],
  b = e => {
    null != _[e] && delete _[e], O++
  };

function C(e) {
  let {
    messageData: t,
    errorResponseBody: n
  } = e;
  return h(t, n), !0
}

function I(e) {
  var t;
  let {
    channelId: n,
    messages: r
  } = e, i = null === (t = u.Z.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
  if (null == i) return !1;
  let l = T[i],
    o = r.reduce((e, t) => {
      var n;
      return t.type === p.uaV.AUTO_MODERATION_ACTION && (null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
        let {
          type: t
        } = e;
        return t === p.hBH.AUTO_MODERATION_NOTIFICATION
      })) ? null == e || -1 === s.default.compare(e, t.id) ? t.id : void 0 : e
    }, l);
  return null != o && T[i] !== o && (T[i] = o, !0)
}
class N extends(r = i.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(c.Z), null != e && (_ = e.automodFailedMessages, g = e.mentionRaidDetectionByGuild)
  }
  getState() {
    return {
      automodFailedMessages: _,
      mentionRaidDetectionByGuild: g,
      lastIncidentAlertMessage: T
    }
  }
  getMessage(e) {
    var t;
    return null == e ? null : null !== (t = S(e)) && void 0 !== t ? t : null
  }
  getMessagesVersion() {
    return O
  }
  getMentionRaidDetected(e) {
    var t;
    return null !== (t = g[e]) && void 0 !== t ? t : null
  }
  getLastIncidentAlertMessage(e) {
    var t;
    return null !== (t = T[e]) && void 0 !== t ? t : null
  }
}
E(N, "displayName", "GuildAutomodMessageStore"), E(N, "persistKey", "GuildAutomodMessages");
let m = new N(l.Z, {
  CONNECTION_OPEN: function(e) {
    return _ = {}, O++, !0
  },
  LOAD_MESSAGES_SUCCESS: I,
  LOCAL_MESSAGES_LOADED: I,
  MESSAGE_CREATE: function(e) {
    let {
      guildId: t,
      message: n
    } = e;
    if (null == t || n.type !== p.uaV.AUTO_MODERATION_ACTION) return !1;
    let r = (0, a.e5)(n);
    return !!(0, f.nY)(r) && !!(0, f.OP)(r) && (T[t] = r.id, !0)
  },
  MESSAGE_SEND_FAILED_AUTOMOD: C,
  MESSAGE_EDIT_FAILED_AUTOMOD: C,
  REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
    let {
      messageId: t
    } = e;
    return b(t), !0
  },
  MESSAGE_END_EDIT: function(e) {
    let {
      response: t
    } = e;
    if ((null == t ? void 0 : t.body) == null || t.body.code === p.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
    let n = t.body.id;
    if (null == n) return !1;
    b(n)
  },
  AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
    let {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: r
    } = e;
    return g[t] = {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: r
    }, !0
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return delete g[t], !0
  }
})