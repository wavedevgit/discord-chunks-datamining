/** Chunk was on web.js **/
/** chunk id: 827837, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => c
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk230307 = require("./230307.js"),
  Chunk70956 = require("./70956.js"),
  Chunk981631 = require("./981631.js");
let l = 6 * Chunk70956.Z.Millis.HOUR;
async function c() {
  let e = a.Z.lastFetched;
  if (!(null != e && Date.now() - e < l)) try {
    let e = await r.tn.get({
      url: s.ANM.USER_ACTIVITY_STATISTICS,
      oldFormErrors: true,
      rejectWithError: false
    });
    i.Z.dispatch({
      type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: e.body
    })
  } catch (e) {
    return e
  }
}