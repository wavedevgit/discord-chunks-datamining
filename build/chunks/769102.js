/** Chunk was on 1272 **/
/** chunk id: 769102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./49124.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk948053 = require("./948053.js"),
  Chunk144725 = require("./144725.js"),
  Chunk797394 = require("./797394.js");

function s(e, t, n) {
  if (t.type === o.Ni.MESSAGE) return t.message.id === t.message.channel_id && null != t.threadChannel ? {
    id: e.id,
    timestamp: Date.now(),
    channelType: e.data.channel_type,
    data: {
      kind: "forumThread",
      message: t.message,
      threadChannel: t.threadChannel
    },
    score: e.score,
    debugScore: JSON.stringify(e.score_components),
    unread: n
  } : {
    id: e.id,
    timestamp: Date.now(),
    channelType: e.data.channel_type,
    data: {
      kind: "message",
      message: t.message,
      mentioned: e.data.has_mention,
      messageContext: e.data.message_context
    },
    score: e.score,
    debugScore: JSON.stringify(e.score_components),
    unread: n
  };
  if (t.type === o.Ni.ACTIVITY || t.type === o.Ni.CUSTOM_STATUS) return {
    id: e.id,
    timestamp: Date.now(),
    data: {
      kind: "contentInventory",
      content: t.activity
    },
    score: e.score,
    debugScore: JSON.stringify(e.score_components),
    unread: n
  };
  if (t.type === o.Ni.GUILD_EVENT) return {
    id: e.id,
    timestamp: Date.now(),
    data: {
      kind: "guildEvent",
      eventId: t.event_id
    },
    score: e.score,
    debugScore: JSON.stringify(e.score_components),
    unread: n
  };
  if (t.type === o.Ni.RECOMMENDED_GUILDS) return {
    id: e.id,
    timestamp: Date.now(),
    data: {
      kind: "recommendedGuilds"
    },
    score: e.score,
    debugScore: JSON.stringify(e.score_components),
    unread: n
  };
  if (t.type === o.Ni.GENERATED_CANDIDATE) return {
    id: e.id,
    timestamp: Date.now(),
    data: {
      kind: "generatedCandidate",
      item: t.candidate
    },
    score: e.score,
    debugScore: JSON.stringify(e.score_components),
    unread: n
  };
  return null
}

function c() {
  var e, t;
  let n = (0, i.e7)([a.Z], () => a.Z.getUnreadDisplayItems()),
    c = (0, i.e7)([a.Z], () => a.Z.getReadDisplayItems()),
    u = (0, i.e7)([a.Z], () => a.Z.getNextIndexToHydrate()),
    d = (0, i.cj)([a.Z], () => a.Z.getHydratedItems()),
    p = (0, i.e7)([a.Z], () => a.Z.getMissingItems());
  r.useEffect(() => {
    let e = Date.now() + c.length;
    l.Z.ackGravityItems(c.map(t => ({
      id: t.id,
      timestamp: e--
    }), true))
  }, [c]);
  let f = [],
    g = [],
    m = 0;
  for (let t = 0; t < n.length && !(m >= u); t++) {
    let r = n[t];
    if (m++, p[r.id]) continue;
    let i = d[r.id];
    if (null == i && r.type === o.Ni.MESSAGE && (null == (e = r.data.message_context) ? true : e.reference_message_id) != null && (i = d[r.data.message_id]), null != i) {
      let e = s(r, i, true);
      null != e && f.push(e)
    }
  }
  for (let e = 0; e < c.length && !(m >= u); e++) {
    let n = c[e];
    if (m++, p[n.id]) continue;
    let r = d[n.id];
    if (null == r && n.type === o.Ni.MESSAGE && (null == (t = n.data.message_context) ? true : t.reference_message_id) != null && (r = d[n.data.message_id]), null != r) {
      let e = s(n, r, false);
      null != e && g.push(e)
    }
  }
  return {
    unreadItems: f,
    readItems: g,
    allUnreadItemsHydrated: u >= n.length
  }
}