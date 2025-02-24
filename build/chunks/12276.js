/** Chunk was on 71567 **/
var t = "\ud800-\udfff",
  n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  r = "\ud83c[\udffb-\udfff]",
  i = "[^" + t + "]",
  s = "(?:\ud83c[\udde6-\uddff]){2}",
  a = "[\ud800-\udbff][\udc00-\udfff]",
  l = "(?:" + n + "|" + r + ")?",
  o = "[\\ufe0e\\ufe0f]?",
  c = "(?:\\u200d(?:" + [i, s, a].join("|") + ")" + o + l + ")*",
  d = RegExp(r + "(?=" + r + ")|" + ("(?:" + [i + n + "?", n, s, a, "[" + t + "]"].join("|")) + ")" + (o + l + c), "g");
e.exports = function(e) {
  return e.match(d) || []
}