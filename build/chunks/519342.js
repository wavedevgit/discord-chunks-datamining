/** Chunk was on 70018 **/
/** chunk id: 519342, original params: e (module,exports,require) **/
var t = "\ud800-\udfff",
  n = "\\u2700-\\u27bf",
  u = "a-z\\xdf-\\xf6\\xf8-\\xff",
  r = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  i = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  o = "['’]",
  a = "[" + i + "]",
  s = "[" + u + "]",
  d = "[^" + t + i + "\\d+" + n + u + r + "]",
  f = "(?:\ud83c[\udde6-\uddff]){2}",
  l = "[\ud800-\udbff][\udc00-\udfff]",
  c = "[" + r + "]",
  p = "(?:" + s + "|" + d + ")",
  x = "(?:" + c + "|" + d + ")",
  h = "(?:" + o + "(?:d|ll|m|re|s|t|ve))?",
  g = "(?:" + o + "(?:D|LL|M|RE|S|T|VE))?",
  b = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
  v = "[\\ufe0e\\ufe0f]?",
  E = "(?:\\u200d(?:" + ["[^" + t + "]", f, l].join("|") + ")" + v + b + ")*",
  m = "(?:" + ["[" + n + "]", f, l].join("|") + ")" + (v + b + E),
  y = RegExp([c + "?" + s + "+" + h + "(?=" + [a, c, "$"].join("|") + ")", x + "+" + g + "(?=" + [a, c + p, "$"].join("|") + ")", c + "?" + p + "+" + h, c + "+" + g, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+", m].join("|"), "g");
module.exports = function(e) {
  return e.match(y) || []
}