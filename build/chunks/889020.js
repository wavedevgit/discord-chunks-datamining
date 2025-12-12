/** Chunk was on web.js **/
/** chunk id: 889020, original params: e,t,n (module,exports,re quire) **/
let Chunk868667 = require("./868667.js");
module.exports = (e, t) => {
  let n = r(e, null, true),
    i = r(t, null, true),
    o = n.compare(i);
  if (0 === o) return null;
  let a = o > 0,
    s = a ? n : i,
    l = a ? i : n,
    c = !!s.prerelease.length;
  if (l.prerelease.length && !c) return l.patch || l.minor ? s.patch ? "patch" : s.minor ? "minor" : "major" : "major";
  let u = c ? "pre" : "";
  return n.major !== i.major ? u + "major" : n.minor !== i.minor ? u + "minor" : n.patch !== i.patch ? u + "patch" : "prerelease"
}