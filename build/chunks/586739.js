/** Chunk was on web.js **/
/** chunk id: 586739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let o = {
  fetchTeams() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return Chunk544891.tn.get({
      url: Chunk981631.ANM.TEAMS,
      query: {
        include_payout_account_status: module
      },
      rejectWithError: false
    })
  }
}