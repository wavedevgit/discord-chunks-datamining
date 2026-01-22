/** Chunk was on web.js **/
/** chunk id: 835658, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  var t = true,
    n = true,
    r = false;
  if ("function" == typeof e) {
    try {
      e.call("f", function(e, n, r) {
        "object" != typeof r && (t = false)
      }), e.call([null], function() {
        "use strict";
        n = "string" == typeof this
      }, "x")
    } catch (e) {
      r = true
    }
    return !r && t && n
  }
  returnfalse
}