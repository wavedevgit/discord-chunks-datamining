/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
let r = n(868667),
  i = (e, t) => {
    let n = r(e, null, !0),
      i = r(t, null, !0),
      o = n.compare(i);
    if (0 === o) return null;
    let a = o > 0,
      s = a ? n : i,
      l = a ? i : n,
      c = !!s.prerelease.length;
    if (l.prerelease.length && !c) return l.patch || l.minor ? s.patch ? "patch" : s.minor ? "minor" : "major" : "major";
    let u = c ? "pre" : "";
    return n.major !== i.major ? u + "major" : n.minor !== i.minor ? u + "minor" : n.patch !== i.patch ? u + "patch" : "prerelease"
  };
e.exports = i