/** Chunk was on 29679 **/
/** chunk id: 432774, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  k: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
async function a(e) {
  i.Z.dispatch({
    type: "DISCOVER_CHECKLIST_FETCH_START",
    guildId: e
  });
  try {
    let t = await r.tn.get({
      url: l.ANM.GUILD_DISCOVERY_REQUIREMENTS(e),
      oldFormErrors: true,
      rejectWithError: true
    });
    i.Z.dispatch({
      type: "DISCOVER_CHECKLIST_FETCH_SUCCESS",
      guildId: e,
      checklist: t.body
    })
  } catch (t) {
    i.Z.dispatch({
      type: "DISCOVER_CHECKLIST_FETCH_FAILURE",
      guildId: e
    })
  }
}