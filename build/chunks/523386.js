/** Chunk was on 47841 **/
/** chunk id: 523386, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
async function s(e) {
  i.h.dispatch({
    type: "DISCOVER_CHECKLIST_FETCH_START",
    guildId: e
  });
  try {
    let t = await r.Bo.get({
      url: l.Rsh.GUILD_DISCOVERY_REQUIREMENTS(e),
      oldFormErrors: true,
      rejectWithError: true
    });
    i.h.dispatch({
      type: "DISCOVER_CHECKLIST_FETCH_SUCCESS",
      guildId: e,
      checklist: t.body
    })
  } catch (t) {
    i.h.dispatch({
      type: "DISCOVER_CHECKLIST_FETCH_FAILURE",
      guildId: e
    })
  }
}