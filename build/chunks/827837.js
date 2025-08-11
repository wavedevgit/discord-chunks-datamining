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
  let e = Chunk230307.Z.lastFetched;
  if (!(null != module && Date.now() - module < l)) try {
    let e = await Chunk544891.tn.get({
      url: Chunk981631.ANM.USER_ACTIVITY_STATISTICS,
      oldFormErrors: true,
      rejectWithError: false
    });
    Chunk570140.Z.dispatch({
      type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: module.body
    })
  } catch (e) {
    return module
  }
}