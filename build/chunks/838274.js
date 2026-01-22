/** Chunk was on web.js **/
/** chunk id: 838274, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk73153 = require("./73153.js");

function a(e) {
  let {
    connectedEmbeddedActivity: t
  } = e, n = null == t ? true : t.applicationId;
  r.useEffect(() => {
    null != t && null != n && i.h.dispatch({
      type: "EMBEDDED_ACTIVITY_OPEN",
      location: t.location,
      applicationId: n
    })
  }, [n, t])
}