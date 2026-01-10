/** Chunk was on 56826 **/
/** chunk id: 378712, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk359119 = require("./359119.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  return i.tn.post({
    url: l.ANM.ADD_SAFETY_WARNING(e),
    body: {
      safety_warning_type: r.pj.LIKELY_ATO
    },
    rejectWithError: false
  })
}