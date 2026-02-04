/** Chunk was on 88474 **/
/** chunk id: 546140, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk617617 = require("./617617.js"),
  Chunk287809 = require("./287809.js"),
  Chunk840387 = require("./840387.js"),
  Chunk639555 = require("./639555.js");
let s = () => {
  let e = l.default.getCurrentUser(),
    t = (0, r.bG)([i.A], () => {
      var e, t, n;
      return null == (e = null == (n = i.A.settings.privacy) || null == (t = n.inappropriateConversationWarnings) ? true : t.value) || e
    }),
    n = (0, a.Z)(),
    s = (0, o.Rv)({
      location: "useSafetyAlertsSettingOrDefault"
    });
  return !!n && !!s || (n || (null == e ? true : e.isStaff()) === true) && t
}