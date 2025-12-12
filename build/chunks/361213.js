/** Chunk was on web.js **/
/** chunk id: 361213, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk981631 = require("./981631.js");

function i(e, t) {
  let n, i = window.GLOBAL_ENV.CDN_HOST,
    a = window.GLOBAL_ENV.API_ENDPOINT;
  return null != i ? "https://".concat(i, "/app-assets/").concat(e, "/store/").concat(t, ".mp4") : "".concat(location.protocol).concat(a).concat(r.ANM.STORE_ASSET(e, t, "mp4"))
}