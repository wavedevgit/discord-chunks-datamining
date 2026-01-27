/** Chunk was on 3911 **/
/** chunk id: 425587, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => r
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
let r = {
  fetchTeams() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return i.Bo.get({
      url: s.Rsh.TEAMS,
      query: {
        include_payout_account_status: e
      },
      rejectWithError: false
    })
  }
}