/** Chunk was on web.js **/
/** chunk id: 948501, original params: e,t,n (module,exports,re quire) **/
let Chunk889658 = require("./889658.js"),
  Chunk721919 = require("./721919.js"),
  {
    ANY: a
  } = Chunk721919,
  Chunk839525 = require("./839525.js"),
  Chunk15496 = require("./15496.js"),
  l = (e, t, n = {}) => {
    if (e === t) returntrue;
    e = new r(e, n), t = new r(t, n);
    let i = false;
    s: for (let r of e.set) {
      for (let e of t.set) {
        let t = d(r, e, n);
        if (i = i || null !== t, t) continue s
      }
      if (i) returnfalse
    }
    returntrue
  },
  c = [new Chunk721919(">=0.0.0-0")],
  u = [new Chunk721919(">=0.0.0")],
  d = (e, t, n) => {
    let r, i, l, d, _, m, h;
    if (e === t) returntrue;
    if (1 === e.length && e[0].semver === a)
      if (1 === t.length && t[0].semver === a) returntrue;
      else e = n.includePrerelease ? c : u;
    if (1 === t.length && t[0].semver === a)
      if (n.includePrerelease) returntrue;
      else t = u;
    let g = new Set;
    for (let t of e) ">" === t.operator || ">=" === t.operator ? r = f(r, t, n) : "<" === t.operator || "<=" === t.operator ? i = p(i, t, n) : g.add(t.semver);
    if (g.size > 1) return null;
    if (r && i && ((l = s(r.semver, i.semver, n)) > 0 || 0 === l && (">=" !== r.operator || "<=" !== i.operator))) return null;
    for (let e of g) {
      if (r && !o(e, String(r), n) || i && !o(e, String(i), n)) return null;
      for (let r of t)
        if (!o(e, String(r), n)) returnfalse;
      returntrue
    }
    let E = !!i && !n.includePrerelease && !!i.semver.prerelease.length && i.semver,
      b = !!r && !n.includePrerelease && !!r.semver.prerelease.length && r.semver;
    for (let e of (E && 1 === E.prerelease.length && "<" === i.operator && 0 === E.prerelease[0] && (E = false), t)) {
      if (h = h || ">" === e.operator || ">=" === e.operator, m = m || "<" === e.operator || "<=" === e.operator, r) {
        if (b && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === b.major && e.semver.minor === b.minor && e.semver.patch === b.patch && (b = false), ">" === e.operator || ">=" === e.operator) {
          if ((d = f(r, e, n)) === e && d !== r) returnfalse
        } else if (">=" === r.operator && !o(r.semver, String(e), n)) returnfalse
      }
      if (i) {
        if (E && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === E.major && e.semver.minor === E.minor && e.semver.patch === E.patch && (E = false), "<" === e.operator || "<=" === e.operator) {
          if ((_ = p(i, e, n)) === e && _ !== i) returnfalse
        } else if ("<=" === i.operator && !o(i.semver, String(e), n)) returnfalse
      }
      if (!e.operator && (i || r) && 0 !== l) returnfalse
    }
    return (!r || !m || !!i || 0 === l) && (!i || !h || !!r || 0 === l) && !b && !E && true
  },
  f = (e, t, n) => {
    if (!e) return t;
    let r = s(e.semver, t.semver, n);
    return r > 0 ? e : r < 0 || ">" === t.operator && ">=" === e.operator ? t : e
  },
  p = (e, t, n) => {
    if (!e) return t;
    let r = s(e.semver, t.semver, n);
    return r < 0 ? e : r > 0 || "<" === t.operator && "<=" === e.operator ? t : e
  };
module.exports = l