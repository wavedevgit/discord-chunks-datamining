/** Chunk was on web.js **/
/** chunk id: 481014, original params: e,t,n (module,exports,re quire) **/
let Chunk532618 = require("./532618.js");
module.exports = (e, t) => {
  let n = r(e, null, true),
    i = r(t, null, true),
    a = n.compare(i);
  if (0 === a) return null;
  let s = a > 0,
    o = s ? n : i,
    l = s ? i : n,
    c = !!o.prerelease.length;
  if (l.prerelease.length && !c) return l.patch || l.minor ? o.patch ? "patch" : o.minor ? "minor" : "major" : "major";
  let u = c ? "pre" : "";
  return n.major !== i.major ? u + "major" : n.minor !== i.minor ? u + "minor" : n.patch !== i.patch ? u + "patch" : "prerelease"
}