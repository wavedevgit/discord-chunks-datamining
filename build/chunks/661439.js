/** Chunk was on web.js **/
/** chunk id: 661439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk90165 = require("./90165.js"),
  Chunk927813 = require("./927813.js"),
  Chunk652215 = require("./652215.js");
let l = 6 * Chunk927813.A.Millis.HOUR;
async function c() {
  let e = a.A.lastFetched;
  if (!(null != e && Date.now() - e < l)) try {
    let e = await r.Bo.get({
      url: o.Rsh.USER_ACTIVITY_STATISTICS,
      oldFormErrors: true,
      rejectWithError: false
    });
    i.h.dispatch({
      type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: e.body
    })
  } catch (e) {
    return e
  }
}