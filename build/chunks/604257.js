/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
function t(e) {
  return function(t, n, r) {
    for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
      var l = a[e ? s : ++i];
      if (!1 === n(o[l], l, o)) break
    }
    return t
  }
}
e.exports = t