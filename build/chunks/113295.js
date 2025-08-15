/** Chunk was on web.js **/
/** chunk id: 113295, original params: e,t,n (module,exports,re quire) **/
let Chunk40231 = require("./40231.js"),
  Chunk721919 = require("./721919.js"),
  {
    ANY: a
  } = Chunk721919,
  Chunk889658 = require("./889658.js"),
  Chunk839525 = require("./839525.js"),
  Chunk393808 = require("./393808.js"),
  Chunk690217 = require("./690217.js"),
  Chunk689478 = require("./689478.js"),
  Chunk725616 = require("./725616.js");
module.exports = (e, t, n, f) => {
  let _, p, h, m, g;
  switch (e = new r(e, f), t = new o(t, f), n) {
    case ">":
      _ = l, p = u, h = c, m = ">", g = ">=";
      break;
    case "<":
      _ = c, p = d, h = l, m = "<", g = "<=";
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
        e.semver === a && (e = new i(">=0.0.0")), o = o || e, s = s || e, _(e.semver, o.semver, f) ? o = e : h(e.semver, s.semver, f) && (s = e)
      }), o.operator === m || o.operator === g || (!s.operator || s.operator === m) && p(e, s.semver) || s.operator === g && h(e, s.semver)) returnfalse
  }
  returntrue
}