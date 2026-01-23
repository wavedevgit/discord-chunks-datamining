/** Chunk was on web.js **/
/** chunk id: 785823, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ay: () => H,
  Bk: () => F,
  ER: () => I,
  Oj: () => W,
  ZA: () => r,
  ZD: () => K,
  de: () => S,
  fu: () => U,
  kZ: () => Y,
  o2: () => G
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk856491 = require("./856491.js"),
  Chunk952987 = require("./952987.js"),
  Chunk692942 = require("./692942.js"),
  Chunk889310 = require("./889310.js"),
  Chunk385244 = require("./385244.js"),
  Chunk688064 = require("./688064.js"),
  Chunk649201 = require("./649201.js"),
  Chunk329475 = require("./329475.js"),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js");
require("./287809.js");
var Chunk845625 = require("./845625.js"),
  Chunk615550 = require("./615550.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
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

function v(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  return e.type === E.lAJ.AUTO_MODERATION_ACTION
}

function S(e) {
  var t;
  return null == (t = e.embeds) ? true : t.some(e => {
    let {
      type: t
    } = e;
    return t === E.Auw.AUTO_MODERATION_NOTIFICATION
  })
}

function T(e) {
  return e.type === E.Auw.AUTO_MODERATION_NOTIFICATION
}

function C(e) {
  return e.type === E.Auw.AUTO_MODERATION_MESSAGE
}

function N(e, t) {
  var n, r, i, a, s;
  let [o] = null != (n = e.embeds) ? n : [];
  if (null != o) {
    if (C(o)) return null == o || null == (i = o.fields) || null == (r = i.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) ? true : r.rawValue;
    if (T(o)) return null == o || null == (s = o.fields) || null == (a = s.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) ? true : a.rawValue
  }
}

function R(e) {
  var t, n;
  let [r] = null != (t = e.embeds) ? t : [];
  return null != (n = null == r ? true : r.rawDescription) ? n : ""
}

function w(e) {
  let t = N(e, l.G.DECISION_OUTCOME);
  if (null != t) return t
}

function P(e) {
  let t = N(e, l.G.QUARANTINE_USER);
  if (null != t) return t
}

function D(e) {
  let t = N(e, l.G.QUARANTINE_USER_ACTION);
  if (null != t) return t
}

function x(e) {
  let t = N(e, l.G.BLOCK_PROFILE_UPDATE_TYPE);
  if (null != t) return t
}

function L(e) {
  let t = N(e, l.G.QUARANTINE_EVENT);
  if (null != t) return t
}

function j(e, t, n) {
  switch (t) {
    case d.t.BLOCK_PROFILE_UPDATE:
      return r(e);
    case d.t.QUARANTINE_USER:
      return s(n);
    case d.t.BLOCK_GUEST_JOIN:
      return i()
  }

  function r(e) {
    switch (e) {
      case a.d.NICKNAME_UPDATE:
        return y.intl.string(y.t.t98DPb);
      case a.d.NICKNAME_RESET:
        return y.intl.string(y.t["7u/rlU"]);
      default:
        return
    }
  }

  function i() {
    return y.intl.string(y.t.MrYeyS)
  }

  function s(e) {
    switch (e) {
      case u.c.MESSAGE_SEND:
        return y.intl.string(y.t.PmSMMS);
      case u.c.GUILD_JOIN:
        return y.intl.string(y.t.m9wWzo);
      case u.c.USERNAME_UPDATE:
        return y.intl.string(y.t.KNSkC6);
      case u.c.CLAN_TAG_UPDATE:
        return y.intl.string(y.t.qV4K6j);
      default:
        return
    }
  }
}

function M(e, t) {
  var n;
  return t ? null != (n = null == e ? true : e.name) ? n : y.intl.string(y.t.J90oLW) : y.intl.string(y.t["/YzI63"])
}

function k(e, t, n) {
  let r = N(e, l.G.VOICE_CHANNEL_STATUS_OUTCOME);
  if (null == r) return null;
  let i = "blocked" === r ? y.t.cLQrqz : y.t.bma6cs;
  return y.intl.format(i, {
    channelName: t,
    channelHook: n
  })
}

function U(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : E.FXj,
    r = arguments.length > 3 ? arguments[3] : true,
    i = arguments.length > 4 ? arguments[4] : true,
    a = x(e),
    c = D(e),
    u = L(e),
    d = P(e),
    f = w(e),
    p = N(e, l.G.INTERACTION_CALLBACK_TYPE),
    _ = N(e, l.G.APPLICATION_NAME);
  if (null != d) {
    let e = j(a, c, u);
    if (null != e) return e
  }
  let m = h.A.can(E.xBc.VIEW_CHANNEL, t),
    g = M(t, m),
    b = null != t && m ? n : E.FXj,
    O = k(e, g, n);
  return null != O ? O : null != _ ? p === o.i.MODAL && null != i ? f !== s.z.BLOCKED ? y.intl.format(y.t["4xL9Sk"], {
    applicationName: _,
    interactionUserHook: i,
    integrationOwnerHook: r
  }) : y.intl.format(y.t.S3lNIT, {
    applicationName: _,
    interactionUserHook: i,
    integrationOwnerHook: r
  }) : f !== s.z.BLOCKED ? y.intl.format(y.t.AXQufN, {
    applicationName: _,
    channelName: g,
    channelHook: b,
    integrationOwnerHook: r
  }) : y.intl.format(y.t.s3tjMN, {
    applicationName: _,
    channelName: g,
    channelHook: b,
    integrationOwnerHook: r
  }) : f !== s.z.BLOCKED ? y.intl.format(y.t.IZg0VQ, {
    channelName: g,
    channelHook: b
  }) : y.intl.format(y.t.lOIOSK, {
    channelName: g,
    channelHook: b
  })
}

function G(e) {
  switch (e) {
    case f.d.NICKNAME:
      return y.intl.string(y.t["fkBQa/"]);
    case f.d.USERNAME:
      return y.intl.string(y.t.pJQVnr);
    case f.d.GLOBAL_NAME:
      return y.intl.string(y.t.V9eJ85);
    case f.d.CLAN_TAG:
      return y.intl.string(y.t.Rtum01);
    default:
      return y.intl.string(y.t.pJQVnr)
  }
}

function V(e) {
  return null == e ? null : e
}

function F(e) {
  var t;
  let n = N(e, c.E.NOTIFICATION_TYPE),
    r = N(e, c.E.JOIN_ATTEMPTS),
    i = N(e, c.E.RAID_DATETIME),
    a = N(e, c.E.DMS_SENT),
    s = N(e, c.E.RAID_TYPE),
    o = N(e, c.E.RESOLVED_REASON),
    l = N(e, c.E.DECISION_ID),
    u = N(e, c.E.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
  return {
    notificationType: null != (t = V(n)) ? t : true,
    joinAttempts: null != r ? parseInt(r) : true,
    raidDatetime: null != i ? new Date(i) : true,
    dmsSent: null != a ? parseInt(a) : true,
    raidType: null != s ? s : true,
    resolvedReason: null != o ? o : true,
    decisionId: null != l ? l : true,
    suspiciousMentionActivityUntil: null != u ? new Date(u) : true
  }
}

function B(e) {
  let t = N(e, l.G.CHANNEL_ID),
    n = N(e, l.G.ALERT_ACTIONS_EXECUTION),
    r = (0, m.v)(n);
  return {
    content: R(e),
    ruleName: N(e, l.G.RULE_NAME),
    decisionId: N(e, l.G.DECISION_ID),
    keyword: N(e, l.G.KEYWORD),
    keywordMatchedContent: N(e, l.G.KEYWORD_MATCHED_CONTENT),
    flaggedMessageId: N(e, l.G.FLAGGED_MESSAGE_ID),
    timeoutDuration: N(e, l.G.TIMEOUT_DURATION),
    quarantineType: N(e, l.G.QUARANTINE_USER),
    quarantineAction: N(e, l.G.QUARANTINE_USER_ACTION),
    decisionReason: N(e, l.G.DECISION_REASON),
    applicationName: N(e, l.G.APPLICATION_NAME),
    interactionUserId: N(e, l.G.INTERACTION_USER_ID),
    interactionCallbackType: N(e, l.G.INTERACTION_CALLBACK_TYPE),
    embedChannel: _.A.getChannel(t),
    embedChannelId: t,
    alertActionsExecution: null != r ? r : true
  }
}

function H(e) {
  let t = i.useMemo(() => B(e), [e]),
    n = (0, p.bG)([_.A], () => _.A.getChannel(t.embedChannelId), [t.embedChannelId]);
  return A(O({}, t), {
    embedChannel: n
  })
}

function Y(e) {
  if (null == e) return null;
  let {
    alertActionsExecution: t
  } = B(e);
  return null != t ? t : null
}

function W(e) {
  if (null == e) return y.intl.string(y.t.Gh3A0O);
  switch (e) {
    case g.no.LEGITIMATE_ACTIVITY:
      return y.intl.string(y.t["riQ+HH"]);
    case g.no.DM_SPAM:
      return y.intl.string(y.t.j5V0ij);
    case g.no.JOIN_RAID:
      return y.intl.string(y.t.qhaRbG);
    default:
      return y.intl.string(y.t.GPg6JM)
  }
}

function K(e) {
  return N(e, c.E.ACTION_BY_USER_ID)
}