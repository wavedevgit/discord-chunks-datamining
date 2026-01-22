/** Chunk was on web.js **/
/** chunk id: 425587, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
let a = {
  fetchTeams() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return r.Bo.get({
      url: i.Rsh.TEAMS,
      query: {
        include_payout_account_status: e
      },
      rejectWithError: false
    })
  }
}