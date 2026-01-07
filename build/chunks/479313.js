/** Chunk was on web.js **/
/** chunk id: 479313, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $l: () => R,
  G1: () => O,
  JR: () => T,
  U$: () => C,
  ZP: () => w,
  e7: () => S,
  wv: () => I,
  yK: () => v
}), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk399606 = require("./399606.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk902840 = require("./902840.js"),
  Chunk38618 = require("./38618.js"),
  Chunk592125 = require("./592125.js"),
  Chunk70956 = require("./70956.js"),
  Chunk765104 = require("./765104.js"),
  Chunk981631 = require("./981631.js");
let h = 75,
  g = 50,
  E = 30 * Chunk70956.Z.Millis.SECOND,
  b = null;
async function y(e, t) {
  let n, r;
  if (!_.Z.shouldFetch(e, t)) return;
  let i = Date.now();
  l.Z.dispatch({
    type: "REQUEST_CHANNEL_SUMMARY",
    channelId: e,
    summaryId: t,
    requestedAt: i
  });
  try {
    let n = await s.tn.get({
      url: m.Z5c.CHANNEL_SUMMARY(e, t),
      rejectWithError: false
    });
    r = null == n ? true : n.body
  } catch (e) {
    n = new c.Hx(e)
  }
  l.Z.dispatch({
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
  if (!_.Z.shouldFetch(e)) return;
  let o = Date.now();
  l.Z.dispatch({
    type: "REQUEST_CHANNEL_SUMMARIES",
    channelId: e,
    requestedAt: o
  });
  try {
    i = await s.tn.get({
      url: m.Z5c.CHANNEL_SUMMARIES(e),
      rejectWithError: false
    })
  } catch (e) {
    r = new c.Hx(e)
  }
  let u = (null == i || null == (t = i.body) ? true : t.summaries) instanceof Array ? i.body.summaries : null != (n = null == i ? true : i.body) ? n : [];
  u = a().takeRight(u, h), l.Z.dispatch({
    type: "RECEIVE_CHANNEL_SUMMARIES",
    channelId: e,
    summaries: u,
    error: null != r ? r : true,
    requestedAt: o,
    receivedAt: Date.now()
  })
}

function v(e, t) {
  l.Z.dispatch({
    type: "SET_HIGHLIGHTED_SUMMARY",
    channelId: e,
    summaryId: null != t ? t : null
  })
}

function S() {
  l.Z.dispatch({
    type: "TOGGLE_TOPICS_BAR"
  })
}

function I(e, t) {
  null != e && null != t && y(e, t), l.Z.dispatch({
    type: "SET_SELECTED_SUMMARY",
    channelId: e,
    summaryId: null != t ? t : null
  })
}

function T(e, t) {
  l.Z.dispatch({
    type: "UPDATE_VISIBLE_MESSAGES",
    topVisibleMessage: null != e ? e : null,
    bottomVisibleMessage: null != t ? t : null
  })
}

function C(e, t) {
  l.Z.dispatch({
    type: "SET_SUMMARY_FEEDBACK",
    summary: e,
    rating: t
  })
}
async function A() {
  var e;
  let t, n;
  if (!_.Z.shouldFetchChannelAffinities()) return Promise.resolve(null);
  let r = Date.now();
  l.Z.dispatch({
    type: "REQUEST_CHANNEL_AFFINITIES",
    requestedAt: r
  });
  try {
    n = await s.tn.get({
      url: "/users/@me/affinities/channels",
      rejectWithError: false
    })
  } catch (e) {
    t = new c.Hx(e)
  }
  let i = null == n || null == (e = n.body) ? true : e.channel_affinities;
  l.Z.dispatch({
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
  if (0 === (e = e.concat(_.Z.defaultChannelIds({
      withQuickSwitcher: r,
      withChannelAffinities: i
    })).filter(e => {
      let t = f.Z.getChannel(e);
      return (0, u.Lp)(t, false, true)
    }).filter(e => {
      let t = Date.now(),
        n = _.Z.status(e);
      if (null == n ? true : n.fetching) returnfalse;
      let r = null == n ? true : n.lastReceivedAt;
      return null == r || t - r > E
    }).slice(0, g)).length) return Promise.resolve(null);
  l.Z.dispatch({
    type: "REQUEST_CHANNEL_SUMMARIES_BULK",
    channelIds: e,
    requestedAt: a
  });
  try {
    n = await s.tn.post({
      url: m.Z5c.USER_SUMMARIES,
      body: {
        channel_ids: e
      },
      rejectWithError: false
    })
  } catch (e) {
    t = new c.Hx(e)
  }
  let o = null == n ? true : n.body.summaries;
  l.Z.dispatch({
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

function P() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
    t = (0, o.e7)([d.Z], () => d.Z.isConnected()),
    n = r.useMemo(() => e.join(","), [e]);
  r.useEffect(() => {
    t && e();
    async function e() {
      try {
        await A()
      } catch (e) {}
      await N(n.split(","))
    }
  }, [n, t])
}
async function R(e) {
  try {
    await s.tn.del({
      url: m.Z5c.CHANNEL_SUMMARY(e.channelId, e.id),
      rejectWithError: false
    }), l.Z.dispatch({
      type: "DELETE_SUMMARY",
      summary: e
    })
  } catch (e) {
    throw new c.Hx(e)
  }
}
let w = {
  setSummaryFeedback: C,
  updateVisibleMessages: T,
  setSelectedSummary: I,
  setHighlightedSummary: v,
  fetchSummaries: O,
  fetchSummariesBulk: N,
  useChannelSummaries: function(e) {
    let {
      channelIds: t = []
    } = e;
    return P(t), (0, o.Wu)([_.Z], () => _.Z.topSummaries(), [])
  },
  deleteSummary: R
}