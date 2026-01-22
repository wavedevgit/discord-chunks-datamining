/** Chunk was on 47841 **/
/** chunk id: 12773, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  return r.Bo.get({
    url: l.Rsh.GUILD_TOP_READ_CHANNELS(e),
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t;
    i.h.dispatch({
      type: "GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS",
      guildId: e,
      topChannelIds: n
    })
  })
}