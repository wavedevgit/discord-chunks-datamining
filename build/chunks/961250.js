/** Chunk was on web.js **/
/** chunk id: 961250, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  t: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk895944 = require("./895944.js"),
  Chunk652215 = require("./652215.js");
async function o() {
  i.h.dispatch({
    type: "PROGRAM_REWARDS_FETCH"
  });
  try {
    var e;
    let t = null != (e = (await r.Bo.get({
      url: s.Rsh.PROGRAM_REWARDS,
      rejectWithError: true
    })).body.rewards) ? e : [];
    i.h.dispatch({
      type: "PROGRAM_REWARDS_FETCH_SUCCESS",
      programRewards: t
    })
  } catch (e) {
    i.h.dispatch({
      type: "PROGRAM_REWARDS_FETCH_FAILURE"
    })
  }
}
async function l() {
  a.A.shouldFetch() && await o()
}