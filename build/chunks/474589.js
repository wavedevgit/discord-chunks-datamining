/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
e.exports = function(e) {
  var t = !0,
    n = !0,
    r = !1;
  if ("function" == typeof e) {
    try {
      e.call("f", function(e, n, r) {
        "object" != typeof r && (t = !1)
      }), e.call([null], function() {
        "use strict";
        n = "string" == typeof this
      }, "x")
    } catch (e) {
      r = !0
    }
    return !r && t && n
  }
  return !1
}