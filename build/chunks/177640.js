/** Chunk was on web.js **/
/** chunk id: 177640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk417597 = require("./417597.js"),
  Chunk287809 = require("./287809.js");

function a(e) {
  return (0, r.bG)([i.default], () => {
    var t;
    return null != e && e.isDM() && 1 === e.recipients.length && (null == (t = i.default.getUser(e.recipients[0])) ? true : t.bot) === true
  })
}