/** Chunk was on web.js **/
/** chunk id: 381496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let o = () => Chunk544891.tn.get({
  url: Chunk981631.ANM.GUILD_AFFINITIES,
  oldFormErrors: true,
  rejectWithError: false
}).then(e => {
  let {
    body: {
      guild_affinities: t
    }
  } = e;
  i.Z.dispatch({
    type: "LOAD_GUILD_AFFINITIES_SUCCESS",
    guildAffinities: t
  })
}, () => {
  Chunk570140.Z.dispatch({
    type: "LOAD_GUILD_AFFINITIES_FAILURE"
  })
})