/** Chunk was on 91584 **/
/** chunk id: 556924, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk946258 = require("./946258.js"),
  Chunk102736 = require("./102736.js"),
  Chunk780661 = require("./780661.js"),
  Chunk398448 = require("./398448.js");
module.exports = function(t) {
  var e = a(t, function(t) {
    var e = t.getSelection(),
      r = e.getStartOffset(),
      i = e.getStartKey(),
      a = t.getCurrentContent().getBlockForKey(i).getText().slice(r);
    return o(t, n.getForward(a).length || 1)
  }, "forward");
  return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range")
}