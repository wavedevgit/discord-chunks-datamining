/** Chunk was on 11868 **/
/** chunk id: 361213, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk981631 = require("./981631.js");

function i(e, t) {
  let n = window.GLOBAL_ENV.CDN_HOST,
    i = window.GLOBAL_ENV.API_ENDPOINT;
  return null != n ? "https://".concat(n, "/app-assets/").concat(e, "/store/").concat(t, ".mp4") : "".concat(location.protocol).concat(i).concat(r.ANM.STORE_ASSET(e, t, "mp4"))
}