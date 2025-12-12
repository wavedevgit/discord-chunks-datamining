/** Chunk was on web.js **/
/** chunk id: 886067, original params: e,t,n (module,exports,re quire) **/
let Chunk839525 = require("./839525.js"),
  Chunk15496 = require("./15496.js");
module.exports = (e, t, n) => {
  let o = [],
    a = null,
    s = null,
    l = e.sort((e, t) => i(e, t, n));
  for (let e of l) r(e, t, n) ? (s = e, a || (a = e)) : (s && o.push([a, s]), s = null, a = null);
  a && o.push([a, null]);
  let c = [];
  for (let [e, t] of o) e === t ? c.push(e) : t || e !== l[0] ? t ? e === l[0] ? c.push(`<=${t}`) : c.push(`${e} - ${t}`) : c.push(`>=${e}`) : c.push("*");
  let u = c.join(" || "),
    d = "string" == typeof t.raw ? t.raw : String(t);
  return u.length < d.length ? u : t
}