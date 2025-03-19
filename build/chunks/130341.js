/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  UT: () => N,
  _4: () => p,
  cm: () => h,
  e: () => b,
  eg: () => x,
  lJ: () => C,
  rY: () => v,
  uo: () => j
}), n(653041), n(47120), n(566702);
var r = n(192379),
  i = n(658722),
  s = n.n(i),
  a = n(442837),
  l = n(271383),
  o = n(594174),
  c = n(626135),
  A = n(823379),
  d = n(892880),
  u = n(51144),
  g = n(480608),
  f = n(203377),
  m = n(981631);
let p = 50,
  h = 1e3;

function C(e, t) {
  let n = (0, a.Wu)([l.ZP], () => {
      let n = l.ZP.getMembers(e);
      return null == t ? n : n.filter(t)
    }, [e, t]),
    i = (0, a.cj)([o.default], () => n.reduce((e, t) => {
      let n = o.default.getUser(t.userId);
      return null == n || (e[t.userId] = n), e
    }, {}), [n]);
  return r.useMemo(() => {
    let t = [];
    for (let s of n) {
      var r;
      let n = i[s.userId];
      null != n && t.push({
        name: null !== (r = s.nick) && void 0 !== r ? r : u.ZP.getName(n),
        userTag: u.ZP.getUserTag(n),
        id: s.userId,
        avatarSource: n.getAvatarSource(e),
        avatarURL: n.getAvatarURL(e, 80),
        bot: n.bot,
        verifiedBot: n.isVerifiedBot(),
        roles: s.roles,
        key: s.userId,
        user: n
      })
    }
    return t
  }, [n, i, e])
}

function b(e, t, n) {
  let i = r.useRef(n);
  return r.useEffect(() => {
    i.current = n
  }), r.useEffect(() => {
    (0, g.H)(e, t).catch(i.current)
  }, [e, t]), C(e, r.useCallback(e => e.roles.includes(t), [t]))
}

function v(e, t) {
  let n = r.useRef(!1);
  r.useEffect(() => {
    d.Z.requestMembers(e, t, 200), "" === t || n.current || (c.default.track(m.rMx.SEARCH_STARTED, {
      search_type: "Role Members"
    }), n.current = !0)
  }, [e, t])
}

function x(e, t) {
  let n = e.trim().toLowerCase();
  return t.id === n || s()(n, t.name.toLowerCase()) || s()(n, t.userTag.toLowerCase())
}

function N(e) {
  switch (e) {
    case f.ZI.MEMBERS:
      return "Members";
    case f.ZI.PERMISSIONS:
      return "Permissions";
    case f.ZI.DISPLAY:
      return "Role Settings";
    case f.ZI.VERIFICATIONS:
      return "Connections";
    default:
      (0, A.vE)(e)
  }
}

function j(e, t) {
  return "" === t || e.name.toLowerCase().includes(t.toLowerCase())
}