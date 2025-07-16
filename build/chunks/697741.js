/** Chunk was on 49645 **/
n.d(t, {
  $: () => L
});
let i = {
    ational: "ate",
    tional: "tion",
    enci: "ence",
    anci: "ance",
    izer: "ize",
    bli: "ble",
    alli: "al",
    entli: "ent",
    eli: "e",
    ousli: "ous",
    ization: "ize",
    ation: "ate",
    ator: "ate",
    alism: "al",
    iveness: "ive",
    fulness: "ful",
    ousness: "ous",
    aliti: "al",
    iviti: "ive",
    biliti: "ble",
    logi: "log"
  },
  r = {
    icate: "ic",
    ative: "",
    alize: "al",
    iciti: "ic",
    ical: "ic",
    ful: "",
    ness: ""
  },
  o = "[aeiouy]",
  s = "([^aeiou][^aeiouy]*)",
  a = "(" + o + "[aeiou]*)",
  l = RegExp("^" + s + "?" + a + s),
  u = RegExp("^" + s + "?" + a + s + a + "?$"),
  c = RegExp("^" + s + "?(" + a + s + "){2,}"),
  d = RegExp("^" + s + "?" + o),
  f = RegExp("^" + s + o + "[^aeiouwxy]$"),
  v = /ll$/,
  p = /^(.+?)e$/,
  b = /^(.+?)y$/,
  g = /^(.+?(s|t))(ion)$/,
  h = /^(.+?)(ed|ing)$/,
  m = /(at|bl|iz)$/,
  E = /^(.+?)eed$/,
  y = /^.+?[^s]s$/,
  T = /^.+?(ss|i)es$/,
  w = /([^aeiouylsz])\1$/,
  F = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  x = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  P = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function L(e) {
  let t, n = String(e).toLowerCase();
  if (n.length < 3) return n;
  let o = !1;
  return 121 === n.codePointAt(0) && (o = !0, n = "Y" + n.slice(1)), T.test(n) ? n = n.slice(0, -2) : y.test(n) && (n = n.slice(0, -1)), (t = E.exec(n)) ? l.test(t[1]) && (n = n.slice(0, -1)) : (t = h.exec(n)) && d.test(t[1]) && (n = t[1], m.test(n) ? n += "e" : w.test(n) ? n = n.slice(0, -1) : f.test(n) && (n += "e")), (t = b.exec(n)) && d.test(t[1]) && (n = t[1] + "i"), (t = F.exec(n)) && l.test(t[1]) && (n = t[1] + i[t[2]]), (t = x.exec(n)) && l.test(t[1]) && (n = t[1] + r[t[2]]), (t = P.exec(n)) ? c.test(t[1]) && (n = t[1]) : (t = g.exec(n)) && c.test(t[1]) && (n = t[1]), (t = p.exec(n)) && (c.test(t[1]) || u.test(t[1]) && !f.test(t[1])) && (n = t[1]), v.test(n) && c.test(n) && (n = n.slice(0, -1)), o && (n = "y" + n.slice(1)), n
}