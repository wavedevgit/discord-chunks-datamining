/** Chunk was on web.js **/
/** chunk id: 816108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => s
}), require("./388685.js");
var Chunk839469 = require("./839469.js"),
  Chunk726985 = require("./726985.js");
let a = [Chunk726985.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, Chunk726985.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2, Chunk726985.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2, Chunk726985.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2],
  o = [Chunk726985.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, Chunk726985.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2],
  s = () => {
    let {
      hasSearchResults: e,
      searchResults: t
    } = (0, Chunk839469.E)();
    return module ? {
      hideGuildOptions: ![...exports].some(e => a.includes(e)),
      hideGlobalOption: ![...exports].some(e => o.includes(e))
    } : {
      hideGuildOptions: false,
      hideGlobalOption: false
    }
  }