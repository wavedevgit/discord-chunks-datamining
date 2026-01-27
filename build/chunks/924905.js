/** Chunk was on 38939 **/
/** chunk id: 924905, original params: t (module,exports,require) **/
"use strict";
var e = {
  isImage: function(t) {
    return "image" === r(t)[0]
  },
  isJpeg: function(t) {
    var n = r(t);
    return e.isImage(t) && ("jpeg" === n[1] || "pjpeg" === n[1])
  }
};

function r(t) {
  return t.split("/")
}
module.exports = e