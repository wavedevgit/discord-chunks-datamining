/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Zg: () => l,
  pj: () => a,
  pr: () => s
}), n(230036);
var r = n(544891),
  i = n(570140),
  o = n(981631);

function a(e) {
  i.Z.dispatch({
    type: "TOP_EMOJIS_FETCH",
    guildId: e
  }), r.tn.get({
    url: o.ANM.TOP_EMOJIS_FOR_GUILD(e),
    oldFormErrors: !0,
    rejectWithError: !0
  }).then(t => i.Z.dispatch({
    type: "TOP_EMOJIS_FETCH_SUCCESS",
    guildId: e,
    topEmojisMetadata: t.body.items.map(e => ({
      emojiId: e.emoji_id,
      rank: e.emoji_rank
    })).sort((e, t) => e.rank - t.rank)
  }), () => i.Z.dispatch({
    type: "TOP_EMOJIS_FETCH_FAILURE",
    guildId: e
  }))
}

function s(e, t) {
  i.Z.dispatch({
    type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED"
  }), null != e && null != t && i.Z.dispatch({
    type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
    guildId: e,
    emojiId: t
  })
}

function l(e, t) {
  null != e && null != t && i.Z.dispatch({
    type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED",
    guildId: e,
    emojiId: t
  })
}