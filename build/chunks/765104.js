/** Chunk was on web.js **/
/** chunk id: 765104, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o;
require.d(exports, {
  Z: () => V
}), require("./472816.js"), require("./794429.js"), require("./642613.js"), require("./388685.js"), require("./539854.js"), require("./583741.js");
var s, Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk902840 = require("./902840.js"),
  Chunk212819 = require("./212819.js"),
  Chunk353926 = require("./353926.js"),
  Chunk823385 = require("./823385.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk418088 = require("./418088.js"),
  Chunk814249 = require("./814249.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = {},
  D = {},
  w = {},
  x = [],
  L = {},
  M = {
    status: "ok",
    lastRequest: null,
    lastResponse: null
  },
  k = [],
  j = [],
  U = 75,
  G = 25;

function B() {
  k = Chunk823385.Z.getProps().results.filter(e => e.type === _.h8.TEXT_CHANNEL && 0 === e.record.type).map(e => e.record.id)
}
class Z extends(s = Chunk442837.ZP.PersistedStore) {
  getState() {
    return {
      shouldShowTopicsBar: r
    }
  }
  initialize(e) {
    var t;
    r = null == (t = null == e ? true : e.shouldShowTopicsBar) || t, this.waitFor(m.Z, p.Z, g.Z, h.Z, E.ZP, b.Z, y.ZP, O.default), this.syncWith([h.Z], B)
  }
  allSummaries() {
    return P
  }
  topSummaries() {
    return Object.values(P).flat().filter(e => e.people.length > 1 && I.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * v.Z.Millis.HOUR).sort((e, t) => I.default.extractTimestamp(t.endId) - I.default.extractTimestamp(e.endId))
  }
  summaries(e) {
    var t;
    return null != (t = P[e]) ? t : j
  }
  shouldShowTopicsBar() {
    return r
  }
  findSummary(e, t) {
    var n;
    return null != (n = this.summaries(e).find(e => e.id === t)) ? n : null
  }
  selectedSummary(e) {
    return null != o && o.channelId === e && null != o.summaryId ? this.findSummary(e, null == o ? true : o.summaryId) : null
  }
  summaryFeedback(e) {
    return null == e ? null : w[e.id]
  }
  isFetching(e, t) {
    var n, r;
    return null != t ? (null == (r = D[e]) ? true : r.summaryId) === t : (null == (n = D[e]) ? true : n.fetching) === true
  }
  status(e) {
    return D[e]
  }
  shouldFetch(e, t) {
    var n, r;
    let i = D[e],
      a = m.Z.getChannel(e);
    if (!(0, f.Lp)(a)) returnfalse;
    if (null != t) {
      let e = null != (n = null == i ? true : i.summaryIdLastRequestedAt) ? n : 0,
        r = Date.now() - e;
      return t !== (null == i ? true : i.summaryId) || r > S.cS
    }
    let o = null != (r = null == i ? true : i.lastReceivedAt) ? r : 0;
    return !(null == i ? true : i.fetching) && 0 === o
  }
  channelAffinities() {
    return x
  }
  channelAffinitiesById() {
    return L
  }
  channelAffinitiesStatus() {
    return M
  }
  shouldFetchChannelAffinities() {
    return !("fetching" === M.status || null != M.lastResponse && Date.now() - M.lastResponse < 30 * Chunk70956.Z.Millis.SECOND)
  }
  defaultChannelIds(e) {
    let {
      withQuickSwitcher: t,
      withChannelAffinities: n,
      withUnreads: r,
      numChannels: i = G
    } = e, a = [];
    return t && (a = a.concat(k)), n && (a = a.concat(x.map(e => e.channel_id))), r && (a = a.filter(e => {
      let t = m.Z.getChannel(e);
      return null != t && !y.ZP.isChannelMuted(t.guild_id, e) && E.ZP.hasUnread(e)
    })), (a = a.filter(e => {
      let t = m.Z.getChannel(e);
      return (0, f.Lp)(t, false, false)
    })).slice(0, i)
  }
  visibleSummaryIndex() {
    return a
  }
}

function F(e, t, n, r) {
  let i = null == t || t < n;
  return !(null == e || e > r) && !i
}
A(Z, "persistKey", "SummaryStore");
let V = new Z(Chunk570140.Z, {
  CONNECTION_OPEN: () => false,
  CHANNEL_SELECT(e) {
    let {
      channelId: t
    } = e;
    (null == o ? true : o.channelId) !== t && (o = null)
  },
  TOGGLE_TOPICS_BAR() {
    r = !r
  },
  RECEIVE_CHANNEL_SUMMARY(e) {
    var t, n;
    let {
      summary: r,
      channelId: i,
      error: a,
      receivedAt: o
    } = e;
    if (null != r && Object.keys(r).length > 0) {
      let e = (0, T.b)(r, i),
        n = [...null != (t = P[i]) ? t : []],
        a = n.findIndex(t => t.id === (null == e ? true : e.id));
      a > false ? n[a] = e : n.push(e), P[i] = n
    }
    let s = R(C({}, null != (n = D[i]) ? n : {
      fetching: false
    }), {
      summaryId: true,
      summaryIdLastReceivedAt: o,
      summaryIdError: a
    });
    D[i] = s
  },
  REQUEST_CHANNEL_SUMMARY(e) {
    var t;
    let {
      channelId: n,
      summaryId: r,
      requestedAt: i
    } = e;
    D[n] = R(C({}, null != (t = D[n]) ? t : {
      fetching: false
    }), {
      summaryId: r,
      summaryIdLastRequestedAt: i
    })
  },
  RECEIVE_CHANNEL_SUMMARIES(e) {
    let {
      summaries: t,
      channelId: n,
      error: r,
      receivedAt: i
    } = e, a = t.filter(e => Object.keys(e).length > 0).map(e => (0, T.b)(e, n));
    if (null != o && o.channelId === n && !a.some(e => e.id === (null == o ? true : o.summaryId))) {
      var s;
      let e = (null != (s = P[n]) ? s : []).find(e => e.id === (null == o ? true : o.summaryId));
      null != e && a.push(e)
    }
    P[n] = (0, l.sortBy)(a, e => I.default.extractTimestamp(e.startId)).reverse();
    let c = R(C({}, D[n]), {
      fetching: false,
      error: true,
      lastReceivedAt: i
    });
    null != r && (c.error = r), D[n] = c
  },
  REQUEST_CHANNEL_SUMMARIES(e) {
    var t;
    D[e.channelId] = R(C({}, null != (t = D[e.channelId]) ? t : {}), {
      fetching: true,
      lastRequestedAt: e.requestedAt
    })
  },
  SET_HIGHLIGHTED_SUMMARY(e) {
    var t;
    if (null == i && null == e.channelId || e.channelId === (null == i ? true : i.channelId) && e.summaryId === (null == i ? true : i.summaryId)) returnfalse;
    if (null != (i = null != e.channelId ? {
        channelId: e.channelId,
        summaryId: null != (t = e.summaryId) ? t : null
      } : null) && i.channelId === e.channelId && null != i.summaryId) {
      let e = P[i.channelId];
      a = null == e ? true : e.findIndex(e => e.id === (null == i ? true : i.summaryId))
    }
  },
  UPDATE_VISIBLE_MESSAGES(e) {
    let t = b.Z.getChannelId();
    if (null != t)
      if (null != i && i.channelId === t && null != i.summaryId) {
        let e = P[i.channelId];
        a = null == e ? true : e.findIndex(e => e.id === (null == i ? true : i.summaryId))
      } else {
        var n;
        a = null == (n = P[t]) ? true : n.findIndex(t => F(e.topVisibleMessage, e.bottomVisibleMessage, t.startId, t.endId))
      }
  },
  SET_SELECTED_SUMMARY(e) {
    var t;
    let n = e.channelId;
    return null == n ? null : (n !== (null == o ? true : o.channelId) || e.summaryId !== (null == o ? true : o.summaryId)) && void(o = {
      channelId: n,
      summaryId: null != (t = e.summaryId) ? t : null
    })
  },
  SET_SUMMARY_FEEDBACK(e) {
    let {
      summary: t,
      rating: n
    } = e;
    null != n ? w[t.id] = n : delete w[t.id]
  },
  REQUEST_CHANNEL_AFFINITIES() {
    M = R(C({}, M), {
      status: "fetching",
      lastRequest: Date.now()
    })
  },
  RECEIVE_CHANNEL_AFFINITIES(e) {
    var t;
    let {
      affinities: n,
      error: r
    } = e;
    if (null != r) {
      x = [], L = {}, M = R(C({}, M), {
        status: "error",
        lastResponse: Date.now()
      });
      return
    }
    x = null != n ? n : [], L = null != (t = null == n ? true : n.reduce((e, t) => (e[t.channel_id] = t.affinity, e), {})) ? t : {}, M = R(C({}, M), {
      status: "ok",
      lastResponse: Date.now()
    })
  },
  REQUEST_CHANNEL_SUMMARIES_BULK(e) {
    let {
      channelIds: t,
      requestedAt: n
    } = e, r = t.reduce((e, t) => {
      var r;
      let i = null != (r = D[t]) ? r : {};
      return e[t] = R(C({}, i), {
        fetching: true,
        lastRequestedAt: n,
        error: true
      }), e
    }, {});
    D = C({}, D, r)
  },
  RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
    let {
      summaries: t,
      receivedAt: n,
      error: r,
      requestArgs: {
        channelIds: i
      }
    } = e, a = c().toPairs(t).reduce((e, t) => {
      let [n, r] = t, i = c().chain(r.map(e => (0, T.b)(e, n))).sortBy(e => I.default.extractTimestamp(e.startId)).takeRight(U).reverse().filter(e => Object.keys(e).length > 0).value();
      return e[n] = i, e
    }, {}), o = i.reduce((e, t) => {
      var i;
      let o = null != (i = D[t]) ? i : {},
        s = a[t];
      return null != s && (e.summariesByChannel[t] = s), e.summaryFetchStatusByChannel[t] = R(C({}, o), {
        fetching: false,
        error: r,
        lastReceivedAt: n
      }), e
    }, {
      summariesByChannel: {},
      summaryFetchStatusByChannel: {}
    });
    P = C({}, P, o.summariesByChannel), D = C({}, D, o.summaryFetchStatusByChannel)
  },
  CONVERSATION_SUMMARY_UPDATE(e) {
    var t, n, r;
    let {
      channel_id: i,
      summaries: a,
      guild_id: o
    } = e, s = Date.now(), l = c().chain(a).sortBy(e => I.default.extractTimestamp(e.start_id)).filter(e => Object.keys(e).length > 0).map(e => (0, T.b)(e, i)).reverse().value(), u = null != (n = P[i]) ? n : [], d = c().chain(l).concat(u).sortBy(e => I.default.extractTimestamp(e.startId)).takeRight(U).uniqBy("id").reverse().value();
    P[i] = d, D[i] = R(C({}, D[i]), {
      error: true,
      fetching: null != (r = null == (t = D[i]) ? true : t.fetching) && r,
      lastReceivedAt: s
    })
  },
  CLEAR_CONVERSATION_SUMMARIES() {
    P = {}, D = {}
  },
  DELETE_SUMMARY(e) {
    var t;
    let n = e.summary.channelId,
      r = (null != (t = P[n]) ? t : []).indexOf(e.summary);
    false !== r && P[n].splice(r, 1)
  }
})