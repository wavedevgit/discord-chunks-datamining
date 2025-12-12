/** Chunk was on web.js **/
/** chunk id: 270237, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk661111 = require("./661111.js");

function a(e) {
  r.useEffect(() => {
    if (null != e) return i.Z.lockChangeLog(e), () => {
      i.Z.unlockChangeLog(e)
    }
  }, [e])
}