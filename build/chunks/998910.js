/** Chunk was on web.js **/
var t = "\ud800-\udfff",
  n = "\\u2700-\\u27bf",
  r = "a-z\\xdf-\\xf6\\xf8-\\xff",
  i = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  o = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  a = "['’]",
  s = "[" + o + "]",
  l = "\\d+",
  c = "[" + n + "]",
  u = "[" + r + "]",
  d = "[^" + t + o + l + n + r + i + "]",
  f = "(?:\ud83c[\udde6-\uddff]){2}",
  _ = "[\ud800-\udbff][\udc00-\udfff]",
  p = "[" + i + "]",
  h = "(?:" + u + "|" + d + ")",
  m = "(?:" + p + "|" + d + ")",
  g = "(?:" + a + "(?:d|ll|m|re|s|t|ve))?",
  E = "(?:" + a + "(?:D|LL|M|RE|S|T|VE))?",
  v = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
  b = "[\\ufe0e\\ufe0f]?",
  y = "(?:\\u200d(?:" + ["[^" + t + "]", f, _].join("|") + ")" + b + v + ")*",
  O = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
  I = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
  S = b + v + y,
  T = "(?:" + [c, f, _].join("|") + ")" + S,
  N = RegExp([p + "?" + u + "+" + g + "(?=" + [s, p, "$"].join("|") + ")", m + "+" + E + "(?=" + [s, p + h, "$"].join("|") + ")", p + "?" + h + "+" + g, p + "+" + E, I, O, l, T].join("|"), "g");

function A(e) {
  return e.match(N) || []
}
e.exports = A