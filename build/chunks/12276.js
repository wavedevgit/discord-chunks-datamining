/** Chunk was on 74278 **/
var r = "\ud800-\udfff",
  e = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  u = "\ud83c[\udffb-\udfff]",
  n = "[^" + r + "]",
  o = "(?:\ud83c[\udde6-\uddff]){2}",
  f = "[\ud800-\udbff][\udc00-\udfff]",
  i = "(?:" + e + "|" + u + ")?",
  a = "[\\ufe0e\\ufe0f]?",
  s = "(?:\\u200d(?:" + [n, o, f].join("|") + ")" + a + i + ")*",
  d = RegExp(u + "(?=" + u + ")|" + ("(?:" + [n + e + "?", e, o, f, "[" + r + "]"].join("|")) + ")" + (a + i + s), "g");
t.exports = function(t) {
  return t.match(d) || []
}