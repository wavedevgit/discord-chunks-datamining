/** Chunk was on web.js **/
/** chunk id: 586739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let a = {
  fetchTeams() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return r.tn.get({
      url: i.ANM.TEAMS,
      query: {
        include_payout_account_status: e
      },
      rejectWithError: false
    })
  }
}