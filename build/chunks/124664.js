/** Chunk was on web.js **/
/** chunk id: 124664, original params: e,t,n (module,exports,re quire) **/
let Chunk40231 = require("./40231.js"),
  Chunk868667 = require("./868667.js"),
  {
    safeRe: a,
    t: o
  } = require("./646664.js");
module.exports = (e, t) => {
  if (e instanceof r) return e;
  if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
  let n = null;
  if ((t = t || {}).rtl) {
    let r, i = t.includePrerelease ? a[o.COERCERTLFULL] : a[o.COERCERTL];
    for (;
      (r = i.exec(e)) && (!n || n.index + n[0].length !== e.length);) n && r.index + r[0].length === n.index + n[0].length || (n = r), i.lastIndex = r.index + r[1].length + r[2].length;
    i.lastIndex = false
  } else n = e.match(t.includePrerelease ? a[o.COERCEFULL] : a[o.COERCE]);
  if (null === n) return null;
  let s = n[2],
    l = n[3] || "0",
    c = n[4] || "0",
    u = t.includePrerelease && n[5] ? `-${n[5]}` : "",
    d = t.includePrerelease && n[6] ? `+${n[6]}` : "";
  return i(`${s}.${l}.${c}${u}${d}`, t)
}