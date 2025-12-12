/** Chunk was on 384 **/
/** chunk id: 323502, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  return r.tn.get({
    url: l.ANM.GUILD_TOP_READ_CHANNELS(e),
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t;
    i.Z.dispatch({
      type: "GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS",
      guildId: e,
      topChannelIds: n
    })
  })
}