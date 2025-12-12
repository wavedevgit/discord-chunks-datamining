/** Chunk was on web.js **/
/** chunk id: 669135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => o
});
var Chunk990547 = require("./990547.js"),
  Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js");
let o = async function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = {
      registration_id: e
    };
  return (await i.Z.post({
    url: a.ANM.USER_WARP_LICENSE,
    body: n,
    retries: 3,
    oldFormErrors: true,
    rejectWithError: true,
    trackedActionData: {
      event: r.NetworkActionNames.NITRO_WARP_CREATE_LICENSE,
      properties: {
        is_on_connect: t
      }
    }
  })).body.license_key
}