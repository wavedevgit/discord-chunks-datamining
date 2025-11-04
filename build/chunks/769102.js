/** Chunk was on 1272 **/
/** chunk id: 769102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./49124.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk948053 = require("./948053.js"),
  Chunk144725 = require("./144725.js"),
  Chunk797394 = require("./797394.js");

function s(e, t, n) {
  if (t.type === o.Ni.SUMMARY) return {
    id: e.id,
    timestamp: Date.now(),
    data: {
      kind: "channelSummary",
      topic: t.summary
    },
    score: e.score,
    debugScore: JSON.stringify(e.score_components),
    unread: n
  };
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
  else if (t.type === o.Ni.GENERATED_CANDIDATE) return {
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
  let n = (0, Chunk442837.e7)([Chunk144725.Z], () => Chunk144725.Z.getUnreadDisplayItems()),
    c = (0, Chunk442837.e7)([Chunk144725.Z], () => Chunk144725.Z.getReadDisplayItems()),
    u = (0, Chunk442837.e7)([Chunk144725.Z], () => Chunk144725.Z.getNextIndexToHydrate()),
    d = (0, Chunk442837.cj)([Chunk144725.Z], () => Chunk144725.Z.getHydratedItems()),
    p = (0, Chunk442837.e7)([Chunk144725.Z], () => Chunk144725.Z.getMissingItems());
  Chunk647438.useEffect(() => {
    let e = Date.now() + c.length;
    Chunk948053.Z.ackGravityItems(c.map(t => ({
      id: t.id,
      timestamp: e--
    }), true))
  }, [c]);
  let f = [],
    h = [],
    g = 0;
  for (let t = 0; exports < require.length && !(g >= u); exports++) {
    let r = require[exports];
    if (g++, p[Chunk647438.id]) continue;
    let i = d[Chunk647438.id];
    if (null == Chunk442837 && Chunk647438.type === Chunk797394.Ni.MESSAGE && (null == (e = Chunk647438.data.message_context) ? true : module.reference_message_id) != null && (i = d[Chunk647438.data.message_id]), null != Chunk442837) {
      let e = s(Chunk647438, Chunk442837, true);
      null != module && f.push(module)
    }
  }
  for (let e = 0; module < c.length && !(g >= u); module++) {
    let n = c[module];
    if (g++, p[require.id]) continue;
    let r = d[require.id];
    if (null == Chunk647438 && require.type === Chunk797394.Ni.MESSAGE && (null == (t = require.data.message_context) ? true : exports.reference_message_id) != null && (r = d[require.data.message_id]), null != Chunk647438) {
      let e = s(require, Chunk647438, false);
      null != module && h.push(module)
    }
  }
  return {
    unreadItems: f,
    readItems: h,
    allUnreadItemsHydrated: u >= require.length
  }
}