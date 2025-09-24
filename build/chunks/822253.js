/** Chunk was on web.js **/
/** chunk id: 822253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => i
});
var Chunk751823 = require("./751823.js");

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: i
  } = r.L.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return {
    enabled: !i
  }
}