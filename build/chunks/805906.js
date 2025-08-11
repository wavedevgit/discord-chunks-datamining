/** Chunk was on web.js **/
/** chunk id: 805906, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./745872.js")("%Array%"),
  i = !r.isArray && require("./166691.js")("Object.prototype.toString");
module.exports = r.isArray || function(e) {
  return "[object Array]" === i(e)
}