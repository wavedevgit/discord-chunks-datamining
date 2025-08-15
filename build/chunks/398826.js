/** Chunk was on 30202 **/
/** chunk id: 398826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l,
  h: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk809206 = require("./809206.js"),
  Chunk981631 = require("./981631.js");

function l() {
  return Chunk570140.Z.dispatch({
    type: "LOAD_DATA_HARVEST_TYPE_START"
  }), Chunk544891.tn.get({
    url: Chunk981631.ANM.USER_HARVEST,
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    r.Z.dispatch({
      type: "UPDATE_DATA_HARVEST_TYPE",
      harvestType: e.body
    })
  }).catch(e => {
    r.Z.dispatch({
      type: "LOAD_DATA_HARVEST_TYPE_FAILURE",
      error: e
    })
  })
}

function o(e) {
  return (0, s.V3)(e).then(e => (null != e && null != e.body && r.Z.dispatch({
    type: "UPDATE_DATA_HARVEST_TYPE",
    harvestType: e.body
  }), e))
}