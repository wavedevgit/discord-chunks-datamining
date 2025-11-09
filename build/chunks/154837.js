/** Chunk was on 29679 **/
/** chunk id: 154837, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => l
});
var Chunk970648 = require("./970648.js"),
  Chunk981631 = require("./981631.js");
async function l(e) {
  let t = r.Z.generateNonce();
  try {
    let n = await r.Z.createHandoffToken(t);
    return i.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, n, e)
  } catch (t) {
    return "//".concat(window.GLOBAL_ENV.DEVELOPERS_ENDPOINT, "/").concat(e)
  }
}