/** Chunk was on web.js **/
/** chunk id: 175894, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk570140 = require("./570140.js");

function o(e) {
  let {
    connectedEmbeddedActivity: t
  } = e, n = null == t ? true : t.applicationId;
  r.useEffect(() => {
    null != t && null != n && i.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_OPEN",
      location: t.location,
      applicationId: n
    })
  }, [n, t])
}