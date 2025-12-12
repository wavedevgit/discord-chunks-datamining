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

function o(e, t, n) {
  if (t.type === s.Ni.MESSAGE) return t.message.id === t.message.channel_id && null != t.threadChannel ? {
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
  if (t.type === s.Ni.ACTIVITY || t.type === s.Ni.CUSTOM_STATUS) return {
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
  if (t.type === s.Ni.GUILD_EVENT) return {
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
  if (t.type === s.Ni.RECOMMENDED_GUILDS) return {
    id: e.id,
    timestamp: Date.now(),
    data: {
      kind: "recommendedGuilds"
    },
    score: e.score,
    debugScore: JSON.stringify(e.score_components),
    unread: n
  };
  if (t.type === s.Ni.GENERATED_CANDIDATE) return {
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
  Chunk473749.useEffect(() => {
    let e = Date.now() + c.length;
    Chunk948053.Z.ackGravityItems(c.map(t => ({
      id: t.id,
      timestamp: e--
    }), true))
  }, [c]);
  let f = [],
    g = [],
    h = 0;
  for (let t = 0; exports < require.length && !(h >= u); exports++) {
    let r = require[exports];
    if (h++, p[Chunk473749.id]) continue;
    let i = d[Chunk473749.id];
    if (null == Chunk442837 && Chunk473749.type === Chunk797394.Ni.MESSAGE && (null == (e = Chunk473749.data.message_context) ? true : module.reference_message_id) != null && (i = d[Chunk473749.data.message_id]), null != Chunk442837) {
      let e = o(Chunk473749, Chunk442837, true);
      null != module && f.push(module)
    }
  }
  for (let e = 0; module < c.length && !(h >= u); module++) {
    let n = c[module];
    if (h++, p[require.id]) continue;
    let r = d[require.id];
    if (null == Chunk473749 && require.type === Chunk797394.Ni.MESSAGE && (null == (t = require.data.message_context) ? true : exports.reference_message_id) != null && (r = d[require.data.message_id]), null != Chunk473749) {
      let e = o(require, Chunk473749, false);
      null != module && g.push(module)
    }
  }
  return {
    unreadItems: f,
    readItems: g,
    allUnreadItemsHydrated: u >= require.length
  }
}