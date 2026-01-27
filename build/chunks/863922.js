/** Chunk was on web.js **/
/** chunk id: 863922, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $T: () => O,
  Ay: () => P,
  C6: () => v,
  C7: () => T,
  O$: () => R,
  Oz: () => A,
  sK: () => I,
  s_: () => S
}), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk417597 = require("./417597.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk432371 = require("./432371.js"),
  Chunk142120 = require("./142120.js"),
  Chunk734057 = require("./734057.js"),
  Chunk927813 = require("./927813.js"),
  Chunk513272 = require("./513272.js"),
  Chunk652215 = require("./652215.js");
let m = 75,
  g = 50,
  E = 30 * Chunk927813.A.Millis.SECOND,
  y = null;
async function b(e, t) {
  let n, r;
  if (!_.A.shouldFetch(e, t)) return;
  let i = Date.now();
  l.h.dispatch({
    type: "REQUEST_CHANNEL_SUMMARY",
    channelId: e,
    summaryId: t,
    requestedAt: i
  });
  try {
    let n = await s.Bo.get({
      url: h.BVt.CHANNEL_SUMMARY(e, t),
      rejectWithError: false
    });
    r = null == n ? true : n.body
  } catch (e) {
    n = new c.LG(e)
  }
  l.h.dispatch({
    type: "RECEIVE_CHANNEL_SUMMARY",
    channelId: e,
    summary: r,
    error: n,
    requestedAt: i,
    receivedAt: Date.now()
  })
}
async function O(e) {
  var t, n;
  let r, i;
  if (!_.A.shouldFetch(e)) return;
  let o = Date.now();
  l.h.dispatch({
    type: "REQUEST_CHANNEL_SUMMARIES",
    channelId: e,
    requestedAt: o
  });
  try {
    i = await s.Bo.get({
      url: h.BVt.CHANNEL_SUMMARIES(e),
      rejectWithError: false
    })
  } catch (e) {
    r = new c.LG(e)
  }
  let u = (null == i || null == (n = i.body) ? true : n.summaries) instanceof Array ? i.body.summaries : null != (t = null == i ? true : i.body) ? t : [];
  u = a().takeRight(u, m), l.h.dispatch({
    type: "RECEIVE_CHANNEL_SUMMARIES",
    channelId: e,
    summaries: u,
    error: null != r ? r : true,
    requestedAt: o,
    receivedAt: Date.now()
  })
}

function v(e, t) {
  l.h.dispatch({
    type: "SET_HIGHLIGHTED_SUMMARY",
    channelId: e,
    summaryId: null != t ? t : null
  })
}

function A() {
  l.h.dispatch({
    type: "TOGGLE_TOPICS_BAR"
  })
}

function I(e, t) {
  null != e && null != t && b(e, t), l.h.dispatch({
    type: "SET_SELECTED_SUMMARY",
    channelId: e,
    summaryId: null != t ? t : null
  })
}

function S(e, t) {
  l.h.dispatch({
    type: "UPDATE_VISIBLE_MESSAGES",
    topVisibleMessage: null != e ? e : null,
    bottomVisibleMessage: null != t ? t : null
  })
}

function T(e, t) {
  l.h.dispatch({
    type: "SET_SUMMARY_FEEDBACK",
    summary: e,
    rating: t
  })
}
async function C() {
  var e;
  let t, n;
  if (!_.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
  let r = Date.now();
  l.h.dispatch({
    type: "REQUEST_CHANNEL_AFFINITIES",
    requestedAt: r
  });
  try {
    n = await s.Bo.get({
      url: "/users/@me/affinities/channels",
      rejectWithError: false
    })
  } catch (e) {
    t = new c.LG(e)
  }
  let i = null == n || null == (e = n.body) ? true : e.channel_affinities;
  l.h.dispatch({
    type: "RECEIVE_CHANNEL_AFFINITIES",
    affinities: i,
    error: null != t ? t : true,
    requestedAt: r,
    receivedAt: Date.now()
  })
}
async function N(e) {
  let t, n, {
    useQuickSwitcher: r = true,
    useChannelAffinities: i = true
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  e = null != e ? e : [];
  let a = Date.now();
  if (0 === (e = e.concat(_.A.defaultChannelIds({
      withQuickSwitcher: r,
      withChannelAffinities: i
    })).filter(e => {
      let t = f.A.getChannel(e);
      return (0, u.pk)(t, false, true)
    }).filter(e => {
      let t = Date.now(),
        n = _.A.status(e);
      if (null == n ? true : n.fetching) returnfalse;
      let r = null == n ? true : n.lastReceivedAt;
      return null == r || t - r > E
    }).slice(0, g)).length) return Promise.resolve(null);
  l.h.dispatch({
    type: "REQUEST_CHANNEL_SUMMARIES_BULK",
    channelIds: e,
    requestedAt: a
  });
  try {
    n = await s.Bo.post({
      url: h.BVt.USER_SUMMARIES,
      body: {
        channel_ids: e
      },
      rejectWithError: false
    })
  } catch (e) {
    t = new c.LG(e)
  }
  let o = null == n ? true : n.body.summaries;
  l.h.dispatch({
    type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
    requestedAt: a,
    receivedAt: Date.now(),
    summaries: o,
    requestArgs: {
      channelIds: e
    },
    error: t
  })
}

function w() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
    t = (0, o.bG)([d.A], () => d.A.isConnected()),
    n = r.useMemo(() => e.join(","), [e]);
  r.useEffect(() => {
    t && e();
    async function e() {
      try {
        await C()
      } catch (e) {}
      await N(n.split(","))
    }
  }, [n, t])
}
async function R(e) {
  try {
    await s.Bo.del({
      url: h.BVt.CHANNEL_SUMMARY(e.channelId, e.id),
      rejectWithError: false
    }), l.h.dispatch({
      type: "DELETE_SUMMARY",
      summary: e
    })
  } catch (e) {
    throw new c.LG(e)
  }
}
let P = {
  setSummaryFeedback: T,
  updateVisibleMessages: S,
  setSelectedSummary: I,
  setHighlightedSummary: v,
  fetchSummaries: O,
  fetchSummariesBulk: N,
  useChannelSummaries: function(e) {
    let {
      channelIds: t = []
    } = e;
    return w(t), (0, o.yK)([_.A], () => _.A.topSummaries(), [])
  },
  deleteSummary: R
}