/** Chunk was on web.js **/
/** chunk id: 303351, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./896048.js");
var Chunk987281 = require("./987281.js"),
  Chunk531525 = require("./531525.js");
let a = [Chunk531525.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, Chunk531525.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2, Chunk531525.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2, Chunk531525.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2],
  s = [Chunk531525.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, Chunk531525.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2],
  o = () => {
    let e = r.a.useField("hasSearchResults"),
      t = r.a.useField("searchResults");
    return e ? {
      hideGuildOptions: ![...t].some(e => a.includes(e)),
      hideGlobalOption: ![...t].some(e => s.includes(e))
    } : {
      hideGuildOptions: false,
      hideGlobalOption: false
    }
  }