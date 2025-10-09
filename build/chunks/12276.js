/** Chunk was on 64982 **/
/** chunk id: 12276, original params: e (module,exports,require) **/
var t = "\ud800-\udfff",
  n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  r = "\ud83c[\udffb-\udfff]",
  i = "[^" + t + "]",
  l = "(?:\ud83c[\udde6-\uddff]){2}",
  a = "[\ud800-\udbff][\udc00-\udfff]",
  s = "(?:" + n + "|" + r + ")?",
  o = "[\\ufe0e\\ufe0f]?",
  c = "(?:\\u200d(?:" + [i, l, a].join("|") + ")" + o + s + ")*",
  d = RegExp(r + "(?=" + r + ")|" + ("(?:" + [i + n + "?", n, l, a, "[" + t + "]"].join("|")) + ")" + (o + s + c), "g");
module.exports = function(e) {
  return e.match(d) || []
}