/** Chunk was on web.js **/
/** chunk id: 861345, original params: e,t,n (module,exports,re quire) **/
let Chunk864886 = require("./864886.js"),
  Chunk46666 = require("./46666.js"),
  {
    ANY: a
  } = Chunk46666,
  Chunk74509 = require("./74509.js"),
  Chunk4144 = require("./4144.js"),
  Chunk800670 = require("./800670.js"),
  Chunk596641 = require("./596641.js"),
  Chunk738018 = require("./738018.js"),
  Chunk569671 = require("./569671.js");
module.exports = (e, t, n, f) => {
  let p, _, h, m, g;
  switch (e = new r(e, f), t = new o(t, f), n) {
    case ">":
      p = l, _ = u, h = c, m = ">", g = ">=";
      break;
    case "<":
      p = c, _ = d, h = l, m = "<", g = "<=";
      break;
    default:
      throw TypeError('Must provide a hilo val of "<" or ">"')
  }
  if (s(e, t, f)) returnfalse;
  for (let n = 0; n < t.set.length; ++n) {
    let r = t.set[n],
      o = null,
      s = null;
    if (r.forEach(e => {
        e.semver === a && (e = new i(">=0.0.0")), o = o || e, s = s || e, p(e.semver, o.semver, f) ? o = e : h(e.semver, s.semver, f) && (s = e)
      }), o.operator === m || o.operator === g || (!s.operator || s.operator === m) && _(e, s.semver) || s.operator === g && h(e, s.semver)) returnfalse
  }
  returntrue
}