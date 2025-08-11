/** Chunk was on web.js **/
/** chunk id: 751262, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  return function(t, n, r) {
    for (var i = false, o = Object(t), a = r(t), s = a.length; s--;) {
      var l = a[e ? s : ++i];
      if (false === n(o[l], l, o)) break
    }
    return t
  }
}