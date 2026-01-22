/** Chunk was on web.js **/
/** chunk id: 924905, original params: e (module,exports,re quire) **/
"use strict";
var t = {
  isImage: function(e) {
    return "image" === n(e)[0]
  },
  isJpeg: function(e) {
    var r = n(e);
    return t.isImage(e) && ("jpeg" === r[1] || "pjpeg" === r[1])
  }
};

function n(e) {
  return e.split("/")
}
module.exports = t