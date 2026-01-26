/** Chunk was on 39048 **/
/** chunk id: 194362, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  a: () => l
});
var Chunk104798 = require("./104798.js"),
  Chunk652215 = require("./652215.js");
async function l(e) {
  let t = r.A.generateNonce();
  try {
    let n = await r.A.createHandoffToken(t);
    return i.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, n, e)
  } catch (t) {
    return "//".concat(window.GLOBAL_ENV.DEVELOPERS_ENDPOINT, "/").concat(e)
  }
}