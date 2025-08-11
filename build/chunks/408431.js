/** Chunk was on web.js **/
/** chunk id: 408431, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r() {
  var e = navigator.userAgentData;
  return null != module && module.brands && Array.isArray(module.brands) ? module.brands.map(function(e) {
    return e.brand + "/" + e.version
  }).join(" ") : navigator.userAgent
}
require.d(exports, {
  Z: () => r
})