/** Chunk was on web.js **/
function t(e, t) {
  if (null == e) return {};
  var n = {};
  for (var r in e)
    if (({}).hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r]
    } return n
}
e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports