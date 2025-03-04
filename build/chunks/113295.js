/** Chunk was on web.js **/
let r = n(40231),
  i = n(721919),
  {
    ANY: o
  } = i,
  a = n(889658),
  s = n(839525),
  l = n(393808),
  c = n(690217),
  u = n(689478),
  d = n(725616),
  f = (e, t, n, f) => {
    let _, p, h, g, m;
    switch (e = new r(e, f), t = new a(t, f), n) {
      case ">":
        _ = l, p = u, h = c, g = ">", m = ">=";
        break;
      case "<":
        _ = c, p = d, h = l, g = "<", m = "<=";
        break;
      default:
        throw TypeError('Must provide a hilo val of "<" or ">"')
    }
    if (s(e, t, f)) return !1;
    for (let n = 0; n < t.set.length; ++n) {
      let r = t.set[n],
        a = null,
        s = null;
      if (r.forEach(e => {
          e.semver === o && (e = new i(">=0.0.0")), a = a || e, s = s || e, _(e.semver, a.semver, f) ? a = e : h(e.semver, s.semver, f) && (s = e)
        }), a.operator === g || a.operator === m || (!s.operator || s.operator === g) && p(e, s.semver) || s.operator === m && h(e, s.semver)) return !1
    }
    return !0
  };
e.exports = f