/** Chunk was on web.js **/
/** chunk id: 276006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => i
});
var Chunk128319 = require("./128319.js");

function i(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      isInHoldout: n
    } = r.p.getCurrentConfig({
      location: e
    }, {
      autoTrackExposure: t
    });
  return {
    enabled: !n
  }
}