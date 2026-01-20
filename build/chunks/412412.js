/** Chunk was on web.js **/
/** chunk id: 412412, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => i
});
var Chunk751823 = require("./751823.js");

function i(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      isInHoldout: n
    } = r.L.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: t
    });
  return {
    enabled: !n
  }
}