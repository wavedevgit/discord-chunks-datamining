/** Chunk was on web.js **/
/** chunk id: 878549, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => i
});
var Chunk961350 = require("./961350.js");

function i(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.default,
    n = t.getId(),
    i = t.getSessionId();
  return e.userId === n && (null == e.sessionId || true === e.sessionId || e.sessionId === i)
}