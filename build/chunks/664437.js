/** Chunk was on web.js **/
/** chunk id: 664437, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Zg: () => c,
  pj: () => s,
  pr: () => l
}), require("./642613.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893607 = require("./893607.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  (0, o.DH)(e) || (i.Z.dispatch({
    type: "TOP_EMOJIS_FETCH",
    guildId: e
  }), r.tn.get({
    url: a.ANM.TOP_EMOJIS_FOR_GUILD(e),
    oldFormErrors: true,
    rejectWithError: true
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
  })))
}

function l(e, t) {
  i.Z.dispatch({
    type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED"
  }), null != e && null != t && i.Z.dispatch({
    type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
    guildId: e,
    emojiId: t
  })
}

function c(e, t) {
  null != e && null != t && i.Z.dispatch({
    type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED",
    guildId: e,
    emojiId: t
  })
}