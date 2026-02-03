/** Chunk was on web.js **/
/** chunk id: 513272, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o;
require.d(exports, {
  A: () => H
}), require("./864466.js"), require("./443073.js"), require("./638769.js"), require("./896048.js"), require("./321073.js"), require("./264879.js");
var s, Chunk735438 = require("./735438.js"),
  c = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk432371 = require("./432371.js"),
  Chunk629357 = require("./629357.js"),
  Chunk49463 = require("./49463.js"),
  Chunk174768 = require("./174768.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk241843 = require("./241843.js"),
  Chunk521732 = require("./521732.js");

function T(e, t, n) {
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
      T(e, t, n[t])
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

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = {},
  P = {},
  D = {},
  L = [],
  x = {},
  M = {
    status: "ok",
    lastRequest: null,
    lastResponse: null
  },
  j = [],
  k = [],
  U = 75,
  G = 25;

function F() {
  j = h.A.getProps().results.filter(e => e.type === p.rD.TEXT_CHANNEL && 0 === e.record.type).map(e => e.record.id)
}
class V extends(s = Chunk311907.Ay.PersistedStore) {
  getState() {
    return {
      shouldShowTopicsBar: r
    }
  }
  initialize(e) {
    var t;
    r = null == (t = null == e ? true : e.shouldShowTopicsBar) || t, this.waitFor(m.A, _.A, g.A, h.A, E.Ay, y.A, b.Ay, O.default), this.syncWith([h.A], F)
  }
  allSummaries() {
    return R
  }
  topSummaries() {
    return Object.values(R).flat().filter(e => e.people.length > 1 && A.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * v.A.Millis.HOUR).sort((e, t) => A.default.extractTimestamp(t.endId) - A.default.extractTimestamp(e.endId))
  }
  summaries(e) {
    var t;
    return null != (t = R[e]) ? t : k
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
    return null == e ? null : D[e.id]
  }
  isFetching(e, t) {
    var n, r;
    return null != t ? (null == (r = P[e]) ? true : r.summaryId) === t : (null == (n = P[e]) ? true : n.fetching) === true
  }
  status(e) {
    return P[e]
  }
  shouldFetch(e, t) {
    var n, r;
    let i = P[e],
      a = m.A.getChannel(e);
    if (!(0, f.pk)(a)) returnfalse;
    if (null != t) {
      let e = null != (r = null == i ? true : i.summaryIdLastRequestedAt) ? r : 0,
        n = Date.now() - e;
      return t !== (null == i ? true : i.summaryId) || n > S.hf
    }
    let o = null != (n = null == i ? true : i.lastReceivedAt) ? n : 0;
    return !(null == i ? true : i.fetching) && 0 === o
  }
  channelAffinities() {
    return L
  }
  channelAffinitiesById() {
    return x
  }
  channelAffinitiesStatus() {
    return M
  }
  shouldFetchChannelAffinities() {
    return !("fetching" === M.status || null != M.lastResponse && Date.now() - M.lastResponse < 30 * v.A.Millis.SECOND)
  }
  defaultChannelIds(e) {
    let {
      withQuickSwitcher: t,
      withChannelAffinities: n,
      withUnreads: r,
      numChannels: i = G
    } = e, a = [];
    return t && (a = a.concat(j)), n && (a = a.concat(L.map(e => e.channel_id))), r && (a = a.filter(e => {
      let t = m.A.getChannel(e);
      return null != t && !b.Ay.isChannelMuted(t.guild_id, e) && E.Ay.hasUnread(e)
    })), (a = a.filter(e => {
      let t = m.A.getChannel(e);
      return (0, f.pk)(t, false, false)
    })).slice(0, i)
  }
  visibleSummaryIndex() {
    return a
  }
}

function B(e, t, n, r) {
  let i = null == t || t < n;
  return !(null == e || e > r) && !i
}
T(V, "persistKey", "SummaryStore");
let H = new V(Chunk73153.h, {
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
      let e = (0, I.Ur)(r, i),
        t = [...null != (n = R[i]) ? n : []],
        a = t.findIndex(t => t.id === (null == e ? true : e.id));
      a > false ? t[a] = e : t.push(e), R[i] = t
    }
    let s = w(C({}, null != (t = P[i]) ? t : {
      fetching: false
    }), {
      summaryId: true,
      summaryIdLastReceivedAt: o,
      summaryIdError: a
    });
    P[i] = s
  },
  REQUEST_CHANNEL_SUMMARY(e) {
    var t;
    let {
      channelId: n,
      summaryId: r,
      requestedAt: i
    } = e;
    P[n] = w(C({}, null != (t = P[n]) ? t : {
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
    } = e, a = t.filter(e => Object.keys(e).length > 0).map(e => (0, I.Ur)(e, n));
    if (null != o && o.channelId === n && !a.some(e => e.id === (null == o ? true : o.summaryId))) {
      var s;
      let e = (null != (s = R[n]) ? s : []).find(e => e.id === (null == o ? true : o.summaryId));
      null != e && a.push(e)
    }
    R[n] = (0, l.sortBy)(a, e => A.default.extractTimestamp(e.startId)).reverse();
    let c = w(C({}, P[n]), {
      fetching: false,
      error: true,
      lastReceivedAt: i
    });
    null != r && (c.error = r), P[n] = c
  },
  REQUEST_CHANNEL_SUMMARIES(e) {
    var t;
    P[e.channelId] = w(C({}, null != (t = P[e.channelId]) ? t : {}), {
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
      let e = R[i.channelId];
      a = null == e ? true : e.findIndex(e => e.id === (null == i ? true : i.summaryId))
    }
  },
  UPDATE_VISIBLE_MESSAGES(e) {
    let t = y.A.getChannelId();
    if (null != t)
      if (null != i && i.channelId === t && null != i.summaryId) {
        let e = R[i.channelId];
        a = null == e ? true : e.findIndex(e => e.id === (null == i ? true : i.summaryId))
      } else {
        var n;
        a = null == (n = R[t]) ? true : n.findIndex(t => B(e.topVisibleMessage, e.bottomVisibleMessage, t.startId, t.endId))
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
    null != n ? D[t.id] = n : delete D[t.id]
  },
  REQUEST_CHANNEL_AFFINITIES() {
    M = w(C({}, M), {
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
      L = [], x = {}, M = w(C({}, M), {
        status: "error",
        lastResponse: Date.now()
      });
      return
    }
    L = null != n ? n : [], x = null != (t = null == n ? true : n.reduce((e, t) => (e[t.channel_id] = t.affinity, e), {})) ? t : {}, M = w(C({}, M), {
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
      let i = null != (r = P[t]) ? r : {};
      return e[t] = w(C({}, i), {
        fetching: true,
        lastRequestedAt: n,
        error: true
      }), e
    }, {});
    P = C({}, P, r)
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
      let [n, r] = t, i = c().chain(r.map(e => (0, I.Ur)(e, n))).sortBy(e => A.default.extractTimestamp(e.startId)).takeRight(U).reverse().filter(e => Object.keys(e).length > 0).value();
      return e[n] = i, e
    }, {}), o = i.reduce((e, t) => {
      var i;
      let o = null != (i = P[t]) ? i : {},
        s = a[t];
      return null != s && (e.summariesByChannel[t] = s), e.summaryFetchStatusByChannel[t] = w(C({}, o), {
        fetching: false,
        error: r,
        lastReceivedAt: n
      }), e
    }, {
      summariesByChannel: {},
      summaryFetchStatusByChannel: {}
    });
    R = C({}, R, o.summariesByChannel), P = C({}, P, o.summaryFetchStatusByChannel)
  },
  CONVERSATION_SUMMARY_UPDATE(e) {
    var t, n, r;
    let {
      channel_id: i,
      summaries: a,
      guild_id: o
    } = e, s = Date.now(), l = c().chain(a).sortBy(e => A.default.extractTimestamp(e.start_id)).filter(e => Object.keys(e).length > 0).map(e => (0, I.Ur)(e, i)).reverse().value(), u = null != (t = R[i]) ? t : [], d = c().chain(l).concat(u).sortBy(e => A.default.extractTimestamp(e.startId)).takeRight(U).uniqBy("id").reverse().value();
    R[i] = d, P[i] = w(C({}, P[i]), {
      error: true,
      fetching: null != (n = null == (r = P[i]) ? true : r.fetching) && n,
      lastReceivedAt: s
    })
  },
  CLEAR_CONVERSATION_SUMMARIES() {
    R = {}, P = {}
  },
  DELETE_SUMMARY(e) {
    var t;
    let n = e.summary.channelId,
      r = (null != (t = R[n]) ? t : []).indexOf(e.summary);
    false !== r && R[n].splice(r, 1)
  }
})