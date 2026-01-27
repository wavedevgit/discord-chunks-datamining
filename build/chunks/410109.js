/** Chunk was on web.js **/
/** chunk id: 410109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => o
});
var Chunk110259 = require("./110259.js"),
  Chunk499785 = require("./499785.js"),
  Chunk652215 = require("./652215.js");
let o = async function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = {
      registration_id: e
    };
  return (await i.A.post({
    url: a.Rsh.USER_WARP_LICENSE,
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