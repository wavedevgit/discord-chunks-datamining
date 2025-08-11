/** Chunk was on web.js **/
/** chunk id: 104755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk973616 = require("./973616.js"),
  Chunk981631 = require("./981631.js");
async function s(e) {
  try {
    let t = await r.tn.post({
        url: a.ANM.PLATFORM_APPLICATION,
        body: {
          sku: e
        },
        rejectWithError: false
      }),
      n = 200 === t.status ? t.body.application : null;
    i.Z.dispatch({
      type: "ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS",
      universeId: e,
      application: null != n ? o.ZP.createFromServer(n) : null
    })
  } catch (t) {
    i.Z.dispatch({
      type: "ROBLOX_SUBGAME_APPLICATION_FETCH_FAILURE",
      universeId: e,
      error: t
    })
  }
}