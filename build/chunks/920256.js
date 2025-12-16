/** Chunk was on web.js **/
/** chunk id: 920256, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => i
});
var Chunk570140 = require("./570140.js");

function i(e) {
  let {
    channelId: t,
    enabled: n
  } = e;
  r.Z.dispatch({
    type: "SET_THREADS_ALSO_SEND_TO_CHANNEL",
    channelId: t,
    enabled: n
  })
}