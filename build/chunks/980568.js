/** Chunk was on 87646 **/
/** chunk id: 980568, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk570140 = require("./570140.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
let l = {
  dismissForApplicationId(e) {
    i.Z.dispatch({
      type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
      key: e,
      value: true
    }), s.default.track(r.rMx.CLOSE_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: e,
      acknowledged: true
    })
  }
}