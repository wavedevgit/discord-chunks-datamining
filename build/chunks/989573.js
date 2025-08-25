/** Chunk was on web.js **/
/** chunk id: 989573, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk399606 = require("./399606.js"),
  Chunk594174 = require("./594174.js");

function o(e) {
  return (0, r.e7)([i.default], () => {
    var t;
    return null != e && e.isDM() && 1 === e.recipients.length && (null == (t = i.default.getUser(e.recipients[0])) ? true : t.bot) === true
  })
}