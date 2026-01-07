/** Chunk was on web.js **/
/** chunk id: 398826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s,
  h: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk809206 = require("./809206.js"),
  Chunk981631 = require("./981631.js");

function s() {
  return i.Z.dispatch({
    type: "LOAD_DATA_HARVEST_TYPE_START"
  }), r.tn.get({
    url: o.ANM.USER_HARVEST,
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    i.Z.dispatch({
      type: "UPDATE_DATA_HARVEST_TYPE",
      harvestType: e.body
    })
  }).catch(e => {
    i.Z.dispatch({
      type: "LOAD_DATA_HARVEST_TYPE_FAILURE",
      error: e
    })
  })
}

function l(e) {
  return (0, a.V3)(e).then(e => (null != e && null != e.body && i.Z.dispatch({
    type: "UPDATE_DATA_HARVEST_TYPE",
    harvestType: e.body
  }), e))
}