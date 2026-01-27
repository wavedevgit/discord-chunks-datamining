/** Chunk was on web.js **/
/** chunk id: 481014, original params: e,t,n (module,exports,re quire) **/
let Chunk532618 = require("./532618.js");
module.exports = (e, t) => {
  let n = r(e, null, true),
    i = r(t, null, true),
    a = n.compare(i);
  if (0 === a) return null;
  let o = a > 0,
    s = o ? n : i,
    l = o ? i : n,
    c = !!s.prerelease.length;
  if (l.prerelease.length && !c) return l.patch || l.minor ? s.patch ? "patch" : s.minor ? "minor" : "major" : "major";
  let u = c ? "pre" : "";
  return n.major !== i.major ? u + "major" : n.minor !== i.minor ? u + "minor" : n.patch !== i.patch ? u + "patch" : "prerelease"
}