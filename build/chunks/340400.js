/** Chunk was on web.js **/
/** chunk id: 340400, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  return function(t, n, r) {
    for (var i = false, a = Object(t), s = r(t), o = s.length; o--;) {
      var l = s[e ? o : ++i];
      if (false === n(a[l], l, a)) break
    }
    return t
  }
}