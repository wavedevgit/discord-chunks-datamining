/** Chunk was on web.js **/
/** chunk id: 208126, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
async function o(e) {
  let {
    body: t
  } = await r.tn.get({
    url: a.ANM.ACTIVITIES_DISCORD_CONFIG(e),
    rejectWithError: false
  });
  i.Z.dispatch({
    type: "ACTIVITIES_DISCORD_CONFIG_FETCH_SUCCESS",
    experimentName: e,
    config: t
  })
}