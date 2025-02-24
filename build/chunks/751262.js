/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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