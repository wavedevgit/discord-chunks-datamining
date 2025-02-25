/** Chunk was on web.js **/
var t = "\ud800-\udfff",
  n = "[" + t + "]",
  r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  i = "\ud83c[\udffb-\udfff]",
  o = "[^" + t + "]",
  a = "(?:\ud83c[\udde6-\uddff]){2}",
  s = "[\ud800-\udbff][\udc00-\udfff]",
  l = "(?:" + r + "|" + i + ")?",
  c = "[\\ufe0e\\ufe0f]?",
  u = "(?:\\u200d(?:" + [o, a, s].join("|") + ")" + c + l + ")*",
  d = c + l + u,
  f = RegExp(i + "(?=" + i + ")|" + ("(?:" + [o + r + "?", r, a, s, n].join("|")) + ")" + d, "g");

function p(e) {
  return e.match(f) || []
}
e.exports = p