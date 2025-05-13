/** Chunk was on 75450 **/
n.d(t, {
  $: () => j
});
let a = {
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
  i = {
    icate: "ic",
    ative: "",
    alize: "al",
    iciti: "ic",
    ical: "ic",
    ful: "",
    ness: ""
  },
  l = "[aeiouy]",
  r = "([^aeiou][^aeiouy]*)",
  o = "(" + l + "[aeiou]*)",
  s = RegExp("^" + r + "?" + o + r),
  c = RegExp("^" + r + "?" + o + r + o + "?$"),
  d = RegExp("^" + r + "?(" + o + r + "){2,}"),
  u = RegExp("^" + r + "?" + l),
  m = RegExp("^" + r + l + "[^aeiouwxy]$"),
  p = /ll$/,
  g = /^(.+?)e$/,
  _ = /^(.+?)y$/,
  f = /^(.+?(s|t))(ion)$/,
  h = /^(.+?)(ed|ing)$/,
  b = /(at|bl|iz)$/,
  y = /^(.+?)eed$/,
  C = /^.+?[^s]s$/,
  x = /^.+?(ss|i)es$/,
  v = /([^aeiouylsz])\1$/,
  T = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
  O = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  I = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;

function j(e) {
  let t, n = String(e).toLowerCase();
  if (n.length < 3) return n;
  let l = !1;
  return 121 === n.codePointAt(0) && (l = !0, n = "Y" + n.slice(1)), x.test(n) ? n = n.slice(0, -2) : C.test(n) && (n = n.slice(0, -1)), (t = y.exec(n)) ? s.test(t[1]) && (n = n.slice(0, -1)) : (t = h.exec(n)) && u.test(t[1]) && (n = t[1], b.test(n) ? n += "e" : v.test(n) ? n = n.slice(0, -1) : m.test(n) && (n += "e")), (t = _.exec(n)) && u.test(t[1]) && (n = t[1] + "i"), (t = T.exec(n)) && s.test(t[1]) && (n = t[1] + a[t[2]]), (t = O.exec(n)) && s.test(t[1]) && (n = t[1] + i[t[2]]), (t = I.exec(n)) ? d.test(t[1]) && (n = t[1]) : (t = f.exec(n)) && d.test(t[1]) && (n = t[1]), (t = g.exec(n)) && (d.test(t[1]) || c.test(t[1]) && !m.test(t[1])) && (n = t[1]), p.test(n) && d.test(n) && (n = n.slice(0, -1)), l && (n = "y" + n.slice(1)), n
}