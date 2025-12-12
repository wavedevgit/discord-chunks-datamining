/** Chunk was on web.js **/
/** chunk id: 567220, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./207549.js").getPunctuation(),
  i = "['‘’]",
  a = "\\s|(?![_])" + r,
  o = RegExp("^(?:" + a + ")*(?:" + i + "|(?!" + a + ").)*(?:(?!" + a + ").)"),
  s = RegExp("(?:(?!" + a + ").)(?:" + i + "|(?!" + a + ").)*(?:" + a + ")*$");

function l(e, t) {
  var n = t ? s.exec(e) : o.exec(e);
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