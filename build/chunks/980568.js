/** Chunk was on 95546 **/
/** chunk id: 980568, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk570140 = require("./570140.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
let o = {
  dismissForApplicationId(e) {
    i.Z.dispatch({
      type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
      key: e,
      value: true
    }), r.default.track(l.rMx.CLOSE_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: e,
      acknowledged: true
    })
  }
}