/** Chunk was on web.js **/
/** chunk id: 556924, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk946258 = require("./946258.js"),
  Chunk102736 = require("./102736.js"),
  Chunk780661 = require("./780661.js"),
  Chunk398448 = require("./398448.js");
module.exports = function(e) {
  var t = o(e, function(e) {
    var t = e.getSelection(),
      n = t.getStartOffset(),
      i = t.getStartKey(),
      o = e.getCurrentContent().getBlockForKey(i).getText().slice(n);
    return a(e, r.getForward(o).length || 1)
  }, "forward");
  return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range")
}