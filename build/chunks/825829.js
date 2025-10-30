/** Chunk was on web.js **/
/** chunk id: 825829, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FL: () => B,
  Mq: () => j,
  NK: () => V,
  OP: () => S,
  Sw: () => Y,
  ZP: () => F,
  ge: () => H,
  hU: () => U,
  nY: () => I,
  nj: () => W
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk462382 = require("./462382.js"),
  Chunk259346 = require("./259346.js"),
  Chunk436817 = require("./436817.js"),
  Chunk189722 = require("./189722.js"),
  Chunk721355 = require("./721355.js"),
  Chunk999923 = require("./999923.js"),
  Chunk729917 = require("./729917.js"),
  Chunk932019 = require("./932019.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js");
require("./594174.js");
var Chunk313889 = require("./313889.js"),
  Chunk177862 = require("./177862.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  return e.type === g.uaV.AUTO_MODERATION_ACTION
}

function S(e) {
  var t;
  return null == (t = e.embeds) ? true : t.some(e => {
    let {
      type: t
    } = e;
    return t === g.hBH.AUTO_MODERATION_NOTIFICATION
  })
}

function T(e) {
  return e.type === g.hBH.AUTO_MODERATION_NOTIFICATION
}

function A(e) {
  return e.type === g.hBH.AUTO_MODERATION_MESSAGE
}

function C(e, t) {
  var n, r, i, a, o;
  let [s] = null != (n = e.embeds) ? n : [];
  if (null != s) {
    if (A(s)) return null == s || null == (i = s.fields) || null == (r = i.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) ? true : r.rawValue;
    if (T(s)) return null == s || null == (o = s.fields) || null == (a = o.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) ? true : a.rawValue
  }
}

function N(e) {
  var t, n;
  let [r] = null != (t = e.embeds) ? t : [];
  return null != (n = null == r ? true : r.rawDescription) ? n : ""
}

function R(e) {
  let t = C(e, s.G.DECISION_OUTCOME);
  if (null != t) return t
}

function P(e) {
  let t = C(e, s.G.QUARANTINE_USER);
  if (null != t) return t
}

function w(e) {
  let t = C(e, s.G.QUARANTINE_USER_ACTION);
  if (null != t) return t
}

function D(e) {
  let t = C(e, s.G.BLOCK_PROFILE_UPDATE_TYPE);
  if (null != t) return t
}

function L(e) {
  let t = C(e, s.G.QUARANTINE_EVENT);
  if (null != t) return t
}

function x(e, t, n) {
  switch (t) {
    case u.z.BLOCK_PROFILE_UPDATE:
      return r(e);
    case u.z.QUARANTINE_USER:
      return o(n);
    case u.z.BLOCK_GUEST_JOIN:
      return a()
  }

  function r(e) {
    switch (e) {
      case i.J.NICKNAME_UPDATE:
        return E.intl.string(E.t.t98DPb);
      case i.J.NICKNAME_RESET:
        return E.intl.string(E.t["7u/rlU"]);
      default:
        return
    }
  }

  function a() {
    return E.intl.string(E.t.MrYeyS)
  }

  function o(e) {
    switch (e) {
      case c.B.MESSAGE_SEND:
        return E.intl.string(E.t.PmSMMS);
      case c.B.GUILD_JOIN:
        return E.intl.string(E.t.m9wWzo);
      case c.B.USERNAME_UPDATE:
        return E.intl.string(E.t.KNSkC6);
      case c.B.CLAN_TAG_UPDATE:
        return E.intl.string(E.t.qV4K6j);
      default:
        return
    }
  }
}

function M(e, t) {
  var n;
  return t ? null != (n = null == e ? true : e.name) ? n : E.intl.string(E.t.J90oLW) : E.intl.string(E.t["/YzI63"])
}

function k(e, t, n) {
  let r = C(e, s.G.VOICE_CHANNEL_STATUS_OUTCOME);
  if (null == r) return null;
  let i = "blocked" === r ? E.t.cLQrqz : E.t.bma6cs;
  return E.intl.format(i, {
    channelName: t,
    channelHook: n
  })
}

function j(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : g.VqG,
    r = arguments.length > 3 ? arguments[3] : true,
    i = arguments.length > 4 ? arguments[4] : true,
    l = D(e),
    c = w(e),
    u = L(e),
    d = P(e),
    f = R(e),
    _ = C(e, s.G.INTERACTION_CALLBACK_TYPE),
    h = C(e, s.G.APPLICATION_NAME);
  if (null != d) {
    let e = x(l, c, u);
    if (null != e) return e
  }
  let m = p.Z.can(g.Plq.VIEW_CHANNEL, t),
    b = M(t, m),
    y = null != t && m ? n : g.VqG,
    O = k(e, b, n);
  return null != O ? O : null != h ? _ === o.y.MODAL && null != i ? f !== a.P.BLOCKED ? E.intl.format(E.t["4xL9Sk"], {
    applicationName: h,
    interactionUserHook: i,
    integrationOwnerHook: r
  }) : E.intl.format(E.t.S3lNIT, {
    applicationName: h,
    interactionUserHook: i,
    integrationOwnerHook: r
  }) : f !== a.P.BLOCKED ? E.intl.format(E.t.AXQufN, {
    applicationName: h,
    channelName: b,
    channelHook: y,
    integrationOwnerHook: r
  }) : E.intl.format(E.t.s3tjMN, {
    applicationName: h,
    channelName: b,
    channelHook: y,
    integrationOwnerHook: r
  }) : f !== a.P.BLOCKED ? E.intl.format(E.t.IZg0VQ, {
    channelName: b,
    channelHook: y
  }) : E.intl.format(E.t.lOIOSK, {
    channelName: b,
    channelHook: y
  })
}

function U(e) {
  switch (e) {
    case d.i.NICKNAME:
      return E.intl.string(E.t["fkBQa/"]);
    case d.i.USERNAME:
      return E.intl.string(E.t.pJQVnr);
    case d.i.GLOBAL_NAME:
      return E.intl.string(E.t.V9eJ85);
    case d.i.CLAN_TAG:
      return E.intl.string(E.t.Rtum01);
    default:
      return E.intl.string(E.t.pJQVnr)
  }
}

function G(e) {
  return null == e ? null : e
}

function B(e) {
  var t;
  let n = C(e, l.D.NOTIFICATION_TYPE),
    r = C(e, l.D.JOIN_ATTEMPTS),
    i = C(e, l.D.RAID_DATETIME),
    a = C(e, l.D.DMS_SENT),
    o = C(e, l.D.RAID_TYPE),
    s = C(e, l.D.RESOLVED_REASON),
    c = C(e, l.D.DECISION_ID),
    u = C(e, l.D.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
  return {
    notificationType: null != (t = G(n)) ? t : true,
    joinAttempts: null != r ? parseInt(r) : true,
    raidDatetime: null != i ? new Date(i) : true,
    dmsSent: null != a ? parseInt(a) : true,
    raidType: null != o ? o : true,
    resolvedReason: null != s ? s : true,
    decisionId: null != c ? c : true,
    suspiciousMentionActivityUntil: null != u ? new Date(u) : true
  }
}

function Z(e) {
  let t = C(e, s.G.CHANNEL_ID),
    n = C(e, s.G.ALERT_ACTIONS_EXECUTION),
    r = (0, h.t)(n);
  return {
    content: N(e),
    ruleName: C(e, s.G.RULE_NAME),
    decisionId: C(e, s.G.DECISION_ID),
    keyword: C(e, s.G.KEYWORD),
    keywordMatchedContent: C(e, s.G.KEYWORD_MATCHED_CONTENT),
    flaggedMessageId: C(e, s.G.FLAGGED_MESSAGE_ID),
    timeoutDuration: C(e, s.G.TIMEOUT_DURATION),
    quarantineType: C(e, s.G.QUARANTINE_USER),
    quarantineAction: C(e, s.G.QUARANTINE_USER_ACTION),
    decisionReason: C(e, s.G.DECISION_REASON),
    applicationName: C(e, s.G.APPLICATION_NAME),
    interactionUserId: C(e, s.G.INTERACTION_USER_ID),
    interactionCallbackType: C(e, s.G.INTERACTION_CALLBACK_TYPE),
    embedChannel: _.Z.getChannel(t),
    embedChannelId: t,
    alertActionsExecution: null != r ? r : true
  }
}

function F(e) {
  let t = r.useMemo(() => Z(e), [e]),
    n = (0, f.e7)([_.Z], () => _.Z.getChannel(t.embedChannelId), [t.embedChannelId]);
  return v(y({}, t), {
    embedChannel: n
  })
}

function V(e) {
  if (null == e) return null;
  let {
    alertActionsExecution: t
  } = Z(e);
  return null != t ? t : null
}

function H(e) {
  if (null == e) return E.intl.string(E.t.Gh3A0O);
  switch (e) {
    case m.$l.LEGITIMATE_ACTIVITY:
      return E.intl.string(E.t["riQ+HH"]);
    case m.$l.DM_SPAM:
      return E.intl.string(E.t.j5V0ij);
    case m.$l.JOIN_RAID:
      return E.intl.string(E.t.qhaRbG);
    default:
      return E.intl.string(E.t.GPg6JM)
  }
}

function Y(e) {
  return C(e, l.D.ACTION_BY_USER_ID)
}
let W = true