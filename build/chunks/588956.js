/** Chunk was on web.js **/
/** chunk id: 588956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk468208 = require("./468208.js"),
  Chunk981631 = require("./981631.js");
async function s() {
  i.Z.dispatch({
    type: "PROGRAM_REWARDS_FETCH"
  });
  try {
    var e;
    let t = null != (e = (await r.tn.get({
      url: o.ANM.PROGRAM_REWARDS,
      rejectWithError: true
    })).body.rewards) ? e : [];
    i.Z.dispatch({
      type: "PROGRAM_REWARDS_FETCH_SUCCESS",
      programRewards: t
    })
  } catch (e) {
    i.Z.dispatch({
      type: "PROGRAM_REWARDS_FETCH_FAILURE"
    })
  }
}
async function l() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  a.Z.shouldFetch(e) && await s()
}