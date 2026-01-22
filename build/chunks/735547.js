/** Chunk was on 28136 **/
/** chunk id: 735547, original params: e,t,n (module,exports,require) **/
let I;
require.d(exports, {
  Ay: () => R,
  Be: () => U,
  Gv: () => c,
  OK: () => f,
  Uo: () => V,
  Us: () => g,
  oW: () => p
}), require("./321073.js"), require("./896048.js");
var i, Chunk933958 = require("./933958.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk222823 = require("./222823.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk645959 = require("./645959.js"),
  Chunk248465 = require("./248465.js"),
  Chunk652215 = require("./652215.js"),
  Chunk172799 = require("./172799.js"),
  Chunk985018 = require("./985018.jsx");

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      I = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (I = I.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), I.forEach(function(t) {
      var I;
      I = n[t], t in e ? Object.defineProperty(e, t, {
        value: I,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = I
    })
  }
  return e
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(e);
      n.push.apply(n, I)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
I = require("./558213.js");
var f = ((i = {}).GROUP_DM = "GROUP_DM", i.DM = "DM", i.FRIEND = "FRIEND", i.CHANNEL = "CHANNEL", i);
let d = (e, t) => null != e && _.Ay.isMember(e, t),
  m = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: n,
      omitGuildId: I,
      shownUserIds: i,
      rows: l,
      counts: _,
      includeGroupDms: O,
      limit: N
    } = e, S = 0;
    for (let e of a.A.getPrivateChannelIds()) {
      if (null != n && n > 0 && l.length >= n || null != N && S >= N) break;
      let a = r.A.getChannel(e);
      if (null == a || !a.isPrivate()) continue;
      if (O && a.type === s.rbe.GROUP_DM) {
        l.push({
          type: "GROUP_DM",
          item: a,
          isSuggested: false
        }), _.numGroupDms++, S++;
        continue
      }
      if (null == u.Ay.lastMessageId(a.id)) continue;
      let o = a.getRecipientId();
      if (null != o && !t.has(o) && !i.has(o)) {
        let e = T.default.getUser(o);
        if (null == e || e.bot || d(I, e.id)) continue;
        i.add(e.id), l.push({
          type: "DM",
          item: e,
          isSuggested: false
        }), _.numDms++, S++
      }
    }
  };

function g(e) {
  let {
    query: t,
    inviteTargetType: n,
    omitUserIds: I,
    suggestedUserIds: i,
    suggestedChannelIds: l,
    maxRowsWithoutQuery: _,
    omitGuildId: a
  } = e, s = new Set, o = [], f = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numGuildMembers: 0,
    numChannels: 0
  };
  if ("" === t) {
    let e = {
      omitUserIds: I,
      maxRowsWithoutQuery: _,
      omitGuildId: a,
      shownUserIds: s,
      rows: o,
      counts: f
    };
    n === S.yV.EMBEDDED_APPLICATION && (m(P(E({}, e), {
      includeGroupDms: false,
      limit: 1
    })), (e => {
      let {
        suggestedChannelIds: t,
        maxRowsWithoutQuery: n,
        rows: I,
        counts: i
      } = e;
      if (null != t)
        for (let e of t) {
          if (null != n && n > 0 && I.length >= n) break;
          let t = r.A.getChannel(e);
          null != t && (I.push({
            type: "CHANNEL",
            item: t,
            isSuggested: true
          }), i.numChannels++)
        }
    })(P(E({}, e), {
      suggestedChannelIds: l
    }))), (e => {
      let {
        omitUserIds: t,
        suggestedUserIds: n,
        maxRowsWithoutQuery: I,
        omitGuildId: i,
        shownUserIds: l,
        rows: r,
        counts: _
      } = e;
      if (null != n)
        for (let e of n) {
          if (null != I && I > 0 && r.length >= I) break;
          if (t.has(e) || l.has(e)) continue;
          let n = T.default.getUser(e);
          !(null == n || d(i, n.id)) && (l.add(n.id), r.push({
            type: "FRIEND",
            item: n,
            isSuggested: true
          }), _.numFriends++)
        }
    })(P(E({}, e), {
      suggestedUserIds: i
    })), m(P(E({}, e), {
      includeGroupDms: true
    })), (e => {
      let {
        omitUserIds: t,
        maxRowsWithoutQuery: n,
        omitGuildId: I,
        shownUserIds: i,
        rows: l,
        counts: r
      } = e;
      for (let e of O.A.getFriendIDs()) {
        if (null != n && n > 0 && l.length >= n) break;
        if (t.has(e) || i.has(e)) continue;
        let _ = T.default.getUser(e);
        !(null == _ || d(I, _.id)) && (l.push({
          type: "FRIEND",
          item: _,
          isSuggested: false
        }), r.numFriends++)
      }
    })(e)
  } else {
    let e = {
      query: t,
      rows: o,
      counts: f
    };
    n === S.yV.EMBEDDED_APPLICATION && (e => {
      let {
        query: t,
        rows: n,
        counts: I,
        inviteTargetType: i
      } = e;
      i === S.yV.EMBEDDED_APPLICATION && N.Ay.queryChannels({
        query: t,
        limit: 3,
        guildId: true
      }).forEach(e => {
        let {
          record: t,
          score: i
        } = e;
        n.push({
          type: "CHANNEL",
          item: t,
          isSuggested: false,
          score: i
        }), I.numChannels++
      })
    })(P(E({}, e), {
      inviteTargetType: n
    })), (e => {
      let {
        query: t,
        rows: n,
        counts: I,
        omitUserIds: i,
        shownUserIds: l,
        suggestedUserIds: r
      } = e;
      if (null == r) return;
      let _ = [];
      for (let e of r) {
        if (i.has(e) || l.has(e)) continue;
        let t = T.default.getUser(e);
        null != t && _.push(t)
      }
      N.Ay.queryMemberList({
        query: t,
        members: _,
        limit: 10
      }).forEach(e => {
        let {
          record: t,
          score: i
        } = e;
        l.add(t.id), n.push({
          type: "FRIEND",
          item: t,
          isSuggested: true,
          score: i
        }), I.numFriends++
      })
    })(P(E({}, e), {
      omitUserIds: I,
      shownUserIds: s,
      suggestedUserIds: i
    })), (e => {
      let {
        query: t,
        omitUserIds: n,
        shownUserIds: I,
        rows: i,
        counts: l
      } = e;
      N.Ay.queryDMUsers({
        query: t,
        limit: 50
      }).forEach(e => {
        let {
          record: t,
          score: _
        } = e;
        if (n.has(t.id) || I.has(t.id)) return;
        let O = r.A.getDMFromUserId(t.id);
        null == O || null != u.Ay.lastMessageId(O) && (I.add(t.id), i.push({
          type: "DM",
          item: t,
          isSuggested: false,
          score: _
        }), l.numDms++)
      })
    })(P(E({}, e), {
      omitUserIds: I,
      shownUserIds: s
    })), (e => {
      let {
        query: t,
        rows: n,
        counts: I
      } = e;
      N.Ay.queryGroupDMs({
        query: t,
        limit: 50,
        fuzzy: false
      }).forEach(e => {
        let {
          record: t,
          score: i
        } = e;
        n.push({
          type: "GROUP_DM",
          item: t,
          isSuggested: false,
          score: i
        }), I.numGroupDms++
      })
    })(e), (e => {
      let {
        query: t,
        rows: n,
        counts: I,
        omitUserIds: i,
        shownUserIds: l
      } = e;
      N.Ay.queryFriends({
        query: t,
        limit: 500,
        _fuzzy: false
      }).forEach(e => {
        let {
          record: t,
          score: r
        } = e;
        i.has(t.id) || !l.has(t.id) && (l.add(t.id), n.push({
          type: "FRIEND",
          item: t,
          isSuggested: false,
          score: r
        }), I.numFriends++)
      })
    })(P(E({}, e), {
      omitUserIds: I,
      shownUserIds: s
    }))
  }
  return {
    rows: o,
    counts: f
  }
}

function c(e, t) {
  let [n, I] = [
    [],
    []
  ];
  for (let i of e) switch (i.type) {
    case "FRIEND":
    case "DM":
      d(t, i.item.id) ? n.push(i) : I.push(i);
      break;
    case "CHANNEL":
    case "GROUP_DM":
      I.push(i)
  }
  return [n, I]
}

function p(e, t) {
  for (let n of a.A.getPrivateChannelIds()) {
    let I = r.A.getChannel(n);
    if (null == I || !I.isDM() || null == u.Ay.lastMessageId(I.id)) continue;
    let i = I.getRecipientId();
    if (null != i && !e.has(i)) {
      let e = T.default.getUser(i);
      if (null == e || e.bot || d(t, e.id)) continue;
      return e
    }
  }
  return null
}

function V(e) {
  let {
    channel: t,
    inviteTargetType: n,
    applicationId: I
  } = e;
  if (n === S.yV.EMBEDDED_APPLICATION && null != t) {
    for (let e of l.Ay.getEmbeddedActivitiesForChannel(t.id))
      if (e.applicationId === I) return new Set(e.userIds)
  }
  return new Set
}
let D = "minutes",
  y = "hours",
  A = "days",
  h = "never",
  M = {
    [I.INVITE_OPTIONS_30_MINUTES.value]: {
      value: 30,
      type: D
    },
    [I.INVITE_OPTIONS_1_HOUR.value]: {
      value: 1,
      type: y
    },
    [I.INVITE_OPTIONS_6_HOURS.value]: {
      value: 6,
      type: y
    },
    [I.INVITE_OPTIONS_12_HOURS.value]: {
      value: 12,
      type: y
    },
    [I.INVITE_OPTIONS_1_DAY.value]: {
      value: 1,
      type: A
    },
    [I.INVITE_OPTIONS_7_DAYS.value]: {
      value: 7,
      type: A
    },
    [I.INVITE_OPTIONS_14_DAYS.value]: {
      value: 14,
      type: A
    },
    [I.INVITE_OPTIONS_30_DAYS.value]: {
      value: 30,
      type: A
    },
    [I.INVITE_OPTIONS_60_DAYS.value]: {
      value: 60,
      type: A
    },
    [I.INVITE_OPTIONS_FOREVER.value]: {
      value: 0,
      type: h
    }
  };

function U(e, t) {
  let n = parseInt(t, 10),
    I = 0 === n,
    i = M[e].value;
  switch (M[e].type) {
    case D:
      if (I) return o.intl.string(o.t["/WbTXD"]);
      return o.intl.formatToPlainString(o.t.eDRWJK, {
        numUses: n
      });
    case y:
      if (I) return o.intl.formatToPlainString(o.t.ZVdJMy, {
        numHours: i
      });
      return o.intl.formatToPlainString(o.t.NgZgAB, {
        numHours: i,
        numUses: n
      });
    case A:
      if (I) return o.intl.formatToPlainString(o.t.T96qss, {
        numDays: i
      });
      return o.intl.formatToPlainString(o.t.TfuB9B, {
        numDays: i,
        numUses: n
      });
    case h:
      if (I) return o.intl.string(o.t.QrHBnC);
      return o.intl.formatToPlainString(o.t.yJnTxI, {
        numUses: n
      });
    default:
      return ""
  }
}
let v = [I.INVITE_OPTIONS_14_DAYS, I.INVITE_OPTIONS_30_DAYS, I.INVITE_OPTIONS_60_DAYS],
  R = {
    getMaxAgeOptionByValue: function(e) {
      return [...I.MAX_AGE_OPTIONS, ...v].find(t => t.value === e) || null
    },
    getMaxAgeOptions: function(e) {
      return I.MAX_AGE_OPTIONS.filter(t => {
        var n, I;
        return !v.includes(t) || (null == e || null == (I = e.includeExperimentalValues) || null == (n = I.includes) ? true : n.call(I, t.value))
      })
    },
    getMaxUsesOptions: I.MAX_USES_OPTIONS,
    INVITE_OPTIONS_FOREVER: I.INVITE_OPTIONS_FOREVER,
    INVITE_OPTIONS_1_DAY: I.INVITE_OPTIONS_1_DAY,
    INVITE_OPTIONS_7_DAYS: I.INVITE_OPTIONS_7_DAYS,
    INVITE_OPTIONS_14_DAYS: I.INVITE_OPTIONS_14_DAYS,
    INVITE_OPTIONS_30_DAYS: I.INVITE_OPTIONS_30_DAYS,
    INVITE_OPTIONS_60_DAYS: I.INVITE_OPTIONS_60_DAYS,
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