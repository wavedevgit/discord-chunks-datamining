/** Chunk was on web.js **/
/** chunk id: 593595, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => i
});
var Chunk128319 = require("./128319.js");

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: i
  } = r.p.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return {
    enabled: !i
  }
}