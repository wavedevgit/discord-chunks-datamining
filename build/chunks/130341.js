/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  UT: () => _,
  _4: () => f,
  cm: () => b,
  e: () => j,
  eg: () => v,
  lJ: () => x,
  rY: () => N,
  uo: () => O
}), n(653041), n(47120), n(566702);
var r = n(192379),
  i = n(658722),
  s = n.n(i),
  a = n(442837),
  l = n(271383),
  o = n(594174),
  c = n(626135),
  d = n(823379),
  u = n(892880),
  m = n(51144),
  p = n(480608),
  g = n(203377),
  h = n(981631);
let f = 50,
  b = 1e3;

function x(e, t) {
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
        name: null !== (r = s.nick) && void 0 !== r ? r : m.ZP.getName(n),
        userTag: m.ZP.getUserTag(n),
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

function j(e, t, n) {
  let i = r.useRef(n);
  return r.useEffect(() => {
    i.current = n
  }), r.useEffect(() => {
    (0, p.H)(e, t).catch(i.current)
  }, [e, t]), x(e, r.useCallback(e => e.roles.includes(t), [t]))
}

function N(e, t) {
  let n = r.useRef(!1);
  r.useEffect(() => {
    u.Z.requestMembers(e, t, 200), "" === t || n.current || (c.default.track(h.rMx.SEARCH_STARTED, {
      search_type: "Role Members"
    }), n.current = !0)
  }, [e, t])
}

function v(e, t) {
  let n = e.trim().toLowerCase();
  return t.id === n || s()(n, t.name.toLowerCase()) || s()(n, t.userTag.toLowerCase())
}

function _(e) {
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
      (0, d.vE)(e)
  }
}

function O(e, t) {
  return "" === t || e.name.toLowerCase().includes(t.toLowerCase())
}