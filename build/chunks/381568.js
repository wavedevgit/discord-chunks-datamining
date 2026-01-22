/** Chunk was on 35511 **/
/** chunk id: 381568, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk349674 = require("./349674.js");
module.exports = function(e, t, n) {
  return n ? r(e.entries(), function(e) {
    return t(e[1], e[0])
  }, true) : e.forEach(t)
}