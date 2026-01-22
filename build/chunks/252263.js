/** Chunk was on web.js **/
/** chunk id: 252263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => i
});
var Chunk73153 = require("./73153.js");

function i(e) {
  let {
    channelId: t,
    enabled: n
  } = e;
  r.h.dispatch({
    type: "SET_THREADS_ALSO_SEND_TO_CHANNEL",
    channelId: t,
    enabled: n
  })
}