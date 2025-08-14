/** Chunk was on 49049 **/
/** chunk id: 971130, original params: t,e,n (module,exports,require) **/
let I;
require.d(exports, {
  Sz: () => p,
  Vg: () => U,
  ZP: () => b,
  an: () => d,
  bm: () => f,
  rh: () => c
}), require("./539854.js"), require("./388685.js");
var i, Chunk317381 = require("./317381.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk306680 = require("./306680.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55589 = require("./55589.js"),
  Chunk483360 = require("./483360.js"),
  Chunk981631 = require("./981631.js"),
  Chunk245335 = require("./245335.js"),
  Chunk388032 = require("./388032.jsx");

function E(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      I = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (I = I.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), I.forEach(function(e) {
      var I;
      I = n[e], e in t ? Object.defineProperty(t, e, {
        value: I,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = I
    })
  }
  return t
}

function P(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(t);
      n.push.apply(n, I)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}
I = require("./603617.js");
var f = ((i = {}).GROUP_DM = "GROUP_DM", i.DM = "DM", i.FRIEND = "FRIEND", i.CHANNEL = "CHANNEL", i);
let g = (t, e) => null != t && u.ZP.isMember(t, e),
  m = t => {
    let {
      omitUserIds: e,
      maxRowsWithoutQuery: n,
      omitGuildId: I,
      shownUserIds: i,
      rows: r,
      counts: u,
      includeGroupDms: _,
      limit: s
    } = t, S = 0;
    for (let t of a.Z.getPrivateChannelIds()) {
      if (null != n && n > 0 && r.length >= n || null != s && S >= s) break;
      let a = l.Z.getChannel(t);
      if (null == a || !a.isPrivate()) continue;
      if (_ && a.type === N.d4z.GROUP_DM) {
        r.push({
          type: "GROUP_DM",
          item: a,
          isSuggested: false
        }), u.numGroupDms++, S++;
        continue
      }
      if (null == O.ZP.lastMessageId(a.id)) continue;
      let o = a.getRecipientId();
      if (null != o && !e.has(o) && !i.has(o)) {
        let t = T.default.getUser(o);
        if (null == t || t.bot || g(I, t.id)) continue;
        i.add(t.id), r.push({
          type: "DM",
          item: t,
          isSuggested: false
        }), u.numDms++, S++
      }
    }
  };

function d(t) {
  let {
    query: e,
    inviteTargetType: n,
    omitUserIds: I,
    suggestedUserIds: i,
    suggestedChannelIds: r,
    maxRowsWithoutQuery: u,
    omitGuildId: a
  } = t, N = new Set, o = [], f = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numGuildMembers: 0,
    numChannels: 0
  };
  if ("" === e) {
    let t = {
      omitUserIds: I,
      maxRowsWithoutQuery: u,
      omitGuildId: a,
      shownUserIds: N,
      rows: o,
      counts: f
    };
    n === S.Iq.EMBEDDED_APPLICATION && (m(P(E({}, t), {
      includeGroupDms: false,
      limit: 1
    })), (t => {
      let {
        suggestedChannelIds: e,
        maxRowsWithoutQuery: n,
        rows: I,
        counts: i
      } = t;
      if (null != e)
        for (let t of e) {
          if (null != n && n > 0 && I.length >= n) break;
          let e = l.Z.getChannel(t);
          null != e && (I.push({
            type: "CHANNEL",
            item: e,
            isSuggested: true
          }), i.numChannels++)
        }
    })(P(E({}, t), {
      suggestedChannelIds: r
    }))), (t => {
      let {
        omitUserIds: e,
        suggestedUserIds: n,
        maxRowsWithoutQuery: I,
        omitGuildId: i,
        shownUserIds: r,
        rows: l,
        counts: u
      } = t;
      if (null != n)
        for (let t of n) {
          if (null != I && I > 0 && l.length >= I) break;
          if (e.has(t) || r.has(t)) continue;
          let n = T.default.getUser(t);
          !(null == n || g(i, n.id)) && (r.add(n.id), l.push({
            type: "FRIEND",
            item: n,
            isSuggested: true
          }), u.numFriends++)
        }
    })(P(E({}, t), {
      suggestedUserIds: i
    })), m(P(E({}, t), {
      includeGroupDms: true
    })), (t => {
      let {
        omitUserIds: e,
        maxRowsWithoutQuery: n,
        omitGuildId: I,
        shownUserIds: i,
        rows: r,
        counts: l
      } = t;
      for (let t of _.Z.getFriendIDs()) {
        if (null != n && n > 0 && r.length >= n) break;
        if (e.has(t) || i.has(t)) continue;
        let u = T.default.getUser(t);
        !(null == u || g(I, u.id)) && (r.push({
          type: "FRIEND",
          item: u,
          isSuggested: false
        }), l.numFriends++)
      }
    })(t)
  } else {
    let t = {
      query: e,
      rows: o,
      counts: f
    };
    n === S.Iq.EMBEDDED_APPLICATION && (t => {
      let {
        query: e,
        rows: n,
        counts: I,
        inviteTargetType: i
      } = t;
      i === S.Iq.EMBEDDED_APPLICATION && s.ZP.queryChannels({
        query: e,
        limit: 3,
        guildId: true
      }).forEach(t => {
        let {
          record: e,
          score: i
        } = t;
        n.push({
          type: "CHANNEL",
          item: e,
          isSuggested: false,
          score: i
        }), I.numChannels++
      })
    })(P(E({}, t), {
      inviteTargetType: n
    })), (t => {
      let {
        query: e,
        omitUserIds: n,
        shownUserIds: I,
        rows: i,
        counts: r
      } = t;
      s.ZP.queryDMUsers({
        query: e,
        limit: 50
      }).forEach(t => {
        let {
          record: e,
          score: u
        } = t;
        if (n.has(e.id)) return;
        let _ = l.Z.getDMFromUserId(e.id);
        null != _ && null != O.ZP.lastMessageId(_) && (I.add(e.id), i.push({
          type: "DM",
          item: e,
          isSuggested: false,
          score: u
        }), r.numDms++)
      })
    })(P(E({}, t), {
      omitUserIds: I,
      shownUserIds: N
    })), (t => {
      let {
        query: e,
        rows: n,
        counts: I
      } = t;
      s.ZP.queryGroupDMs({
        query: e,
        limit: 50,
        fuzzy: false
      }).forEach(t => {
        let {
          record: e,
          score: i
        } = t;
        n.push({
          type: "GROUP_DM",
          item: e,
          isSuggested: false,
          score: i
        }), I.numGroupDms++
      })
    })(t), (t => {
      let {
        query: e,
        rows: n,
        counts: I,
        omitUserIds: i,
        shownUserIds: r
      } = t;
      s.ZP.queryFriends({
        query: e,
        limit: 500,
        _fuzzy: false
      }).forEach(t => {
        let {
          record: e,
          score: l
        } = t;
        !(i.has(e.id) || r.has(e.id)) && (r.add(e.id), n.push({
          type: "FRIEND",
          item: e,
          isSuggested: false,
          score: l
        }), I.numFriends++)
      })
    })(P(E({}, t), {
      omitUserIds: I,
      shownUserIds: N
    }))
  }
  return {
    rows: o,
    counts: f
  }
}

function c(t, e) {
  for (let n of a.Z.getPrivateChannelIds()) {
    let I = l.Z.getChannel(n);
    if (null == I || !I.isDM() || null == O.ZP.lastMessageId(I.id)) continue;
    let i = I.getRecipientId();
    if (null != i && !t.has(i)) {
      let t = T.default.getUser(i);
      if (null == t || t.bot || g(e, t.id)) continue;
      return t
    }
  }
  return null
}

function p(t) {
  let {
    channel: e,
    inviteTargetType: n,
    applicationId: I
  } = t;
  if (n === S.Iq.EMBEDDED_APPLICATION && null != e) {
    for (let t of r.ZP.getEmbeddedActivitiesForChannel(e.id))
      if (t.applicationId === I) return new Set(t.userIds)
  }
  return new Set
}
let V = "minutes",
  D = "hours",
  M = "days",
  h = "never",
  y = {
    [I.INVITE_OPTIONS_30_MINUTES.value]: {
      value: 30,
      type: V
    },
    [I.INVITE_OPTIONS_1_HOUR.value]: {
      value: 1,
      type: D
    },
    [I.INVITE_OPTIONS_6_HOURS.value]: {
      value: 6,
      type: D
    },
    [I.INVITE_OPTIONS_12_HOURS.value]: {
      value: 12,
      type: D
    },
    [I.INVITE_OPTIONS_1_DAY.value]: {
      value: 1,
      type: M
    },
    [I.INVITE_OPTIONS_7_DAYS.value]: {
      value: 7,
      type: M
    },
    [I.INVITE_OPTIONS_FOREVER.value]: {
      value: 0,
      type: h
    }
  };

function U(t, e) {
  let n = parseInt(e, 10),
    I = 0 === n,
    i = y[t].value;
  switch (y[t].type) {
    case V:
      if (I) return o.intl.string(o.t["/WbTXF"]);
      return o.intl.formatToPlainString(o.t.eDRWJC, {
        numUses: n
      });
    case D:
      if (I) return o.intl.formatToPlainString(o.t.ZVdJMz, {
        numHours: i
      });
      return o.intl.formatToPlainString(o.t.NgZgAA, {
        numHours: i,
        numUses: n
      });
    case M:
      if (I) return o.intl.formatToPlainString(o.t.T96qsr, {
        numDays: i
      });
      return o.intl.formatToPlainString(o.t.TfuB9P, {
        numDays: i,
        numUses: n
      });
    case h:
      if (I) return o.intl.string(o.t.QrHBnJ);
      return o.intl.formatToPlainString(o.t.yJnTxM, {
        numUses: n
      });
    default:
      return ""
  }
}
let b = {
  getMaxAgeOptions: I.MAX_AGE_OPTIONS,
  getMaxUsesOptions: I.MAX_USES_OPTIONS,
  INVITE_OPTIONS_FOREVER: I.INVITE_OPTIONS_FOREVER,
  INVITE_OPTIONS_1_DAY: I.INVITE_OPTIONS_1_DAY,
  INVITE_OPTIONS_7_DAYS: I.INVITE_OPTIONS_7_DAYS,
  INVITE_OPTIONS_12_HOURS: I.INVITE_OPTIONS_12_HOURS,
  INVITE_OPTIONS_6_HOURS: I.INVITE_OPTIONS_6_HOURS,
  INVITE_OPTIONS_8_HOURS: I.INVITE_OPTIONS_8_HOURS,
  INVITE_OPTIONS_1_HOUR: I.INVITE_OPTIONS_1_HOUR,
  INVITE_OPTIONS_30_MINUTES: I.INVITE_OPTIONS_30_MINUTES,
  INVITE_OPTIONS_UNLIMITED: I.INVITE_OPTIONS_UNLIMITED,
  INVITE_OPTIONS_ONCE: I.INVITE_OPTIONS_ONCE,
  INVITE_OPTIONS_5_TIMES: I.INVITE_OPTIONS_5_TIMES,
  INVITE_OPTIONS_10_TIMES: I.INVITE_OPTIONS_10_TIMES,
  INVITE_OPTIONS_25_TIMES: I.INVITE_OPTIONS_25_TIMES,
  INVITE_OPTIONS_50_TIMES: I.INVITE_OPTIONS_50_TIMES,
  INVITE_OPTIONS_100_TIMES: I.INVITE_OPTIONS_100_TIMES
}