/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
var r = n(608282),
  i = function() {
    var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : ""
  }();

function o(e) {
  return !!i && i in e
}
e.exports = o