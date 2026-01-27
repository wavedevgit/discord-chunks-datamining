/** Chunk was on web.js **/
/** chunk id: 586874, original params: e (module,exports,re quire) **/
var t = "\\ud800-\\udfff",
  n = "[" + t + "]",
  r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  i = "\\ud83c[\\udffb-\\udfff]",
  a = "[^" + t + "]",
  o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  s = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  l = "(?:" + r + "|" + i + ")?",
  c = "[\\ufe0e\\ufe0f]?",
  u = "(?:\\u200d(?:" + [a, o, s].join("|") + ")" + c + l + ")*",
  d = c + l + u,
  f = RegExp(i + "(?=" + i + ")|" + ("(?:" + [a + r + "?", r, o, s, n].join("|")) + ")" + d, "g");
module.exports = function(e) {
  return e.match(f) || []
}