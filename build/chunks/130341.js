/** Chunk was on 9536 **/
/** chunk id: 130341, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  UT: () => C,
  _4: () => p,
  cm: () => h,
  e: () => j,
  eg: () => O,
  lJ: () => x,
  rY: () => v,
  uo: () => y
}), require("./539854.js"), require("./388685.js"), require("./781311.js");
var Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
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
  h = 1e3;

function x(e, t) {
  let n = (0, a.Wu)([s.ZP], () => {
      let n = s.ZP.getMembers(e);
      return null == t ? n : n.filter(t)
    }, [e, t]),
    i = (0, a.cj)([o.default], () => n.reduce((e, t) => {
      let n = o.default.getUser(t.userId);
      return null == n || (e[t.userId] = n), e
    }, {}), [n]);
  return r.useMemo(() => {
    let t = [];
    for (let l of n) {
      var r;
      let n = i[l.userId];
      null != n && t.push({
        name: null != (r = l.nick) ? r : g.ZP.getName(n),
        userTag: g.ZP.getUserTag(n),
        id: l.userId,
        avatarSource: n.getAvatarSource(e),
        avatarURL: n.getAvatarURL(e, 80),
        bot: n.bot,
        verifiedBot: n.isVerifiedBot(),
        roles: l.roles,
        key: l.userId,
        user: n
      })
    }
    return t
  }, [n, i, e])
}

function j(e, t, n) {
  let i = r.useRef(n);
  return r.useEffect(() => {
    i.current = n
  }), r.useEffect(() => {
    (0, f.H)(e, t).catch(i.current)
  }, [e, t]), x(e, r.useCallback(e => e.roles.includes(t), [t]))
}

function v(e, t) {
  let n = r.useRef(false);
  r.useEffect(() => {
    u.Z.requestMembers(e, t, 200), "" === t || n.current || (c.default.track(b.rMx.SEARCH_STARTED, {
      search_type: "Role Members"
    }), n.current = true)
  }, [e, t])
}

function O(e, t) {
  let n = e.trim().toLowerCase();
  return t.id === n || l()(n, t.name.toLowerCase()) || l()(n, t.userTag.toLowerCase())
}

function C(e) {
  switch (e) {
    case m.ZI.MEMBERS:
      return "Members";
    case m.ZI.PERMISSIONS:
      return "Permissions";
    case m.ZI.DISPLAY:
      return "Role Settings";
    case m.ZI.VERIFICATIONS:
      return "Connections";
    default:
      (0, d.vE)(e)
  }
}

function y(e, t) {
  return "" === t || e.name.toLowerCase().includes(t.toLowerCase())
}