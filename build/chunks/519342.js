/** Chunk was on 71567 **/
var t = "\ud800-\udfff",
  n = "\\u2700-\\u27bf",
  r = "a-z\\xdf-\\xf6\\xf8-\\xff",
  i = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  s = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  a = "['’]",
  l = "[" + s + "]",
  o = "[" + r + "]",
  c = "[^" + t + s + "\\d+" + n + r + i + "]",
  d = "(?:\ud83c[\udde6-\uddff]){2}",
  u = "[\ud800-\udbff][\udc00-\udfff]",
  m = "[" + i + "]",
  p = "(?:" + o + "|" + c + ")",
  g = "(?:" + m + "|" + c + ")",
  h = "(?:" + a + "(?:d|ll|m|re|s|t|ve))?",
  f = "(?:" + a + "(?:D|LL|M|RE|S|T|VE))?",
  b = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
  x = "[\\ufe0e\\ufe0f]?",
  j = "(?:\\u200d(?:" + ["[^" + t + "]", d, u].join("|") + ")" + x + b + ")*",
  N = "(?:" + ["[" + n + "]", d, u].join("|") + ")" + (x + b + j),
  v = RegExp([m + "?" + o + "+" + h + "(?=" + [l, m, "$"].join("|") + ")", g + "+" + f + "(?=" + [l, m + p, "$"].join("|") + ")", m + "?" + p + "+" + h, m + "+" + f, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", N].join("|"), "g");
e.exports = function(e) {
  return e.match(v) || []
}