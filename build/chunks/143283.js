/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
var r = n(54640),
  i = function() {
    var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : ""
  }();

function o(e) {
  return !!i && i in e
}
e.exports = o