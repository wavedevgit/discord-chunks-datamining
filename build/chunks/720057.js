/** Chunk was on web.js **/
/** chunk id: 720057, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk946258 = require("./946258.js"),
  Chunk102736 = require("./102736.js"),
  Chunk533531 = require("./533531.js"),
  Chunk398448 = require("./398448.js");
module.exports = function(e) {
  var t = a(e, function(e) {
    var t = e.getSelection(),
      n = t.getStartOffset();
    if (0 === n) return o(e, 1);
    var i = t.getStartKey(),
      a = e.getCurrentContent().getBlockForKey(i).getText().slice(0, n);
    return o(e, r.getBackward(a).length || 1)
  }, "backward");
  return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range")
}