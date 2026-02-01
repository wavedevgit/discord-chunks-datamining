/** Chunk was on 9207 **/
/** chunk id: 104954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => o,
  s: () => a
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk631670 = require("./631670.js"),
  Chunk652215 = require("./652215.js");

function a() {
  return i.h.dispatch({
    type: "LOAD_DATA_HARVEST_TYPE_START"
  }), r.Bo.get({
    url: s.Rsh.USER_HARVEST,
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    i.h.dispatch({
      type: "UPDATE_DATA_HARVEST_TYPE",
      harvestType: e.body
    })
  }).catch(e => {
    i.h.dispatch({
      type: "LOAD_DATA_HARVEST_TYPE_FAILURE",
      error: e
    })
  })
}

function o(e) {
  return (0, l.$I)(e).then(e => (null != e && null != e.body && i.h.dispatch({
    type: "UPDATE_DATA_HARVEST_TYPE",
    harvestType: e.body
  }), e))
}