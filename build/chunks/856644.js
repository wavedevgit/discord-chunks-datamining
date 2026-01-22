/** Chunk was on 47841 **/
/** chunk id: 856644, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  EF: () => y,
  K5: () => j,
  L9: () => v,
  SB: () => h,
  Vh: () => A,
  cG: () => O,
  gz: () => x,
  uc: () => p
}), require("./321073.js"), require("./896048.js"), require("./733351.js");
var Chunk64700 = require("./64700.js"),
  Chunk91871 = require("./91871.js"),
  l = require.n(Chunk91871),
  Chunk311907 = require("./311907.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk695184 = require("./695184.js"),
  Chunk427262 = require("./427262.js"),
  Chunk545868 = require("./545868.js"),
  Chunk927573 = require("./927573.js"),
  Chunk652215 = require("./652215.js");
let p = 50,
  x = 1e3;

function h(e, t) {
  let n = (0, s.yK)([a.Ay], () => {
      let n = a.Ay.getMembers(e);
      return null == t ? n : n.filter(t)
    }, [e, t]),
    i = (0, s.cf)([c.default], () => n.reduce((e, t) => {
      let n = c.default.getUser(t.userId);
      return null == n || (e[t.userId] = n), e
    }, {}), [n]);
  return r.useMemo(() => {
    let t = [];
    for (let l of n) {
      var r;
      let n = i[l.userId];
      null != n && t.push({
        name: null != (r = l.nick) ? r : f.Ay.getName(n),
        userTag: f.Ay.getUserTag(n),
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
    (0, g.a)(e, t).catch(i.current)
  }, [e, t]), h(e, r.useCallback(e => e.roles.includes(t), [t]))
}

function O(e, t) {
  let n = r.useRef(false);
  r.useEffect(() => {
    u.A.requestMembers(e, t, 200), "" === t || n.current || (o.default.track(m.HAw.SEARCH_STARTED, {
      search_type: "Role Members"
    }), n.current = true)
  }, [e, t])
}

function y(e, t) {
  let n = e.trim().toLowerCase();
  return t.id === n || l()(n, t.name.toLowerCase()) || l()(n, t.userTag.toLowerCase())
}

function v(e) {
  switch (e) {
    case b.T$.MEMBERS:
      return "Members";
    case b.T$.PERMISSIONS:
      return "Permissions";
    case b.T$.DISPLAY:
      return "Role Settings";
    case b.T$.VERIFICATIONS:
      return "Connections";
    default:
      (0, d.xb)(e)
  }
}

function A(e, t) {
  return "" === t || e.name.toLowerCase().includes(t.toLowerCase())
}