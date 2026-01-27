/** Chunk was on web.js **/
/** chunk id: 451731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l2: () => s,
  mz: () => c,
  uV: () => l
}), require("./638769.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk463347 = require("./463347.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  (0, a.tZ)(e) || (i.h.dispatch({
    type: "TOP_EMOJIS_FETCH",
    guildId: e
  }), r.Bo.get({
    url: o.Rsh.TOP_EMOJIS_FOR_GUILD(e),
    oldFormErrors: true,
    rejectWithError: true
  }).then(t => i.h.dispatch({
    type: "TOP_EMOJIS_FETCH_SUCCESS",
    guildId: e,
    topEmojisMetadata: t.body.items.map(e => ({
      emojiId: e.emoji_id,
      rank: e.emoji_rank
    })).sort((e, t) => e.rank - t.rank)
  }), () => i.h.dispatch({
    type: "TOP_EMOJIS_FETCH_FAILURE",
    guildId: e
  })))
}

function l(e, t) {
  i.h.dispatch({
    type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED"
  }), null != e && null != t && i.h.dispatch({
    type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
    guildId: e,
    emojiId: t
  })
}

function c(e, t) {
  null != e && null != t && i.h.dispatch({
    type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED",
    guildId: e,
    emojiId: t
  })
}