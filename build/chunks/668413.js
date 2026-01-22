/** Chunk was on web.js **/
/** chunk id: 668413, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./341789.js").getPunctuation(),
  i = "['‘’]",
  a = "\\s|(?![_])" + r,
  s = RegExp("^(?:" + a + ")*(?:" + i + "|(?!" + a + ").)*(?:(?!" + a + ").)"),
  o = RegExp("(?:(?!" + a + ").)(?:" + i + "|(?!" + a + ").)*(?:" + a + ")*$");

function l(e, t) {
  var n = t ? o.exec(e) : s.exec(e);
  return n ? n[0] : e
}
module.exports = {
  getBackward: function(e) {
    return l(e, true)
  },
  getForward: function(e) {
    return l(e, false)
  }
}