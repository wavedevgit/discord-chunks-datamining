/** Chunk was on 88146 **/
/** chunk id: 130341, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  UT: () => C,
  _4: () => p,
  cm: () => S,
  e: () => h,
  eg: () => y,
  lJ: () => I,
  rY: () => v,
  uo: () => O
}), require("./539854.js"), require("./388685.js"), require("./781311.js");
var Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
  Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk892880 = require("./892880.js"),
  Chunk51144 = require("./51144.js"),
  Chunk480608 = require("./480608.js"),
  Chunk203377 = require("./203377.js"),
  Chunk981631 = require("./981631.js");
let p = 50,
  S = 1e3;

function I(e, t) {
  let n = (0, s.Wu)([i.ZP], () => {
      let n = i.ZP.getMembers(e);
      return null == t ? n : n.filter(t)
    }, [e, t]),
    l = (0, s.cj)([u.default], () => n.reduce((e, t) => {
      let n = u.default.getUser(t.userId);
      return null == n || (e[t.userId] = n), e
    }, {}), [n]);
  return r.useMemo(() => {
    let t = [];
    for (let o of n) {
      var r;
      let n = l[o.userId];
      null != n && t.push({
        name: null != (r = o.nick) ? r : m.ZP.getName(n),
        userTag: m.ZP.getUserTag(n),
        id: o.userId,
        avatarSource: n.getAvatarSource(e),
        avatarURL: n.getAvatarURL(e, 80),
        bot: n.bot,
        verifiedBot: n.isVerifiedBot(),
        roles: o.roles,
        key: o.userId,
        user: n
      })
    }
    return t
  }, [n, l, e])
}

function h(e, t, n) {
  let l = r.useRef(n);
  return r.useEffect(() => {
    l.current = n
  }), r.useEffect(() => {
    (0, f.H)(e, t).catch(l.current)
  }, [e, t]), I(e, r.useCallback(e => e.roles.includes(t), [t]))
}

function v(e, t) {
  let n = r.useRef(false);
  r.useEffect(() => {
    d.Z.requestMembers(e, t, 200), "" === t || n.current || (a.default.track(b.rMx.SEARCH_STARTED, {
      search_type: "Role Members"
    }), n.current = true)
  }, [e, t])
}

function y(e, t) {
  let n = e.trim().toLowerCase();
  return t.id === n || o()(n, t.name.toLowerCase()) || o()(n, t.userTag.toLowerCase())
}

function C(e) {
  switch (e) {
    case g.ZI.MEMBERS:
      return "Members";
    case g.ZI.PERMISSIONS:
      return "Permissions";
    case g.ZI.DISPLAY:
      return "Role Settings";
    case g.ZI.VERIFICATIONS:
      return "Connections";
    default:
      (0, c.vE)(e)
  }
}

function O(e, t) {
  return "" === t || e.name.toLowerCase().includes(t.toLowerCase())
}