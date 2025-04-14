/** Chunk was on 71018 **/
var t = "\ud800-\udfff",
  n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  r = "\ud83c[\udffb-\udfff]",
  i = "[^" + t + "]",
  s = "(?:\ud83c[\udde6-\uddff]){2}",
  l = "[\ud800-\udbff][\udc00-\udfff]",
  a = "(?:" + n + "|" + r + ")?",
  o = "[\\ufe0e\\ufe0f]?",
  c = "(?:\\u200d(?:" + [i, s, l].join("|") + ")" + o + a + ")*",
  d = RegExp(r + "(?=" + r + ")|" + ("(?:" + [i + n + "?", n, s, l, "[" + t + "]"].join("|")) + ")" + (o + a + c), "g");
e.exports = function(e) {
  return e.match(d) || []
}