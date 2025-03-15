/** Chunk was on 96275 **/
r.d(t, {
  Z: () => j
});
var n = r(200651),
  a = r(192379),
  l = r(442837),
  i = r(481060),
  c = r(616780),
  o = r(40851),
  u = r(300284),
  s = r(484459),
  b = r(314897),
  f = r(271383),
  p = r(430824),
  d = r(496675),
  O = r(594174),
  y = r(981631),
  g = r(388032),
  P = r(585068);

function j(e) {
  let {
    guildId: t,
    userId: j,
    analyticsLocation: w,
    analyticsLocations: h,
    context: v,
    icon: N
  } = e, m = p.Z.getGuild(t), Z = b.default.getId(), _ = (0, l.e7)([O.default], () => O.default.getUser(j)), C = (0, l.e7)([f.ZP], () => f.ZP.isGuestOrLurker(t, j), [t, j]);
  (0, l.e7)([d.Z], () => d.Z.getGuildVersion(t), [t]);
  let k = a.useMemo(() => ({
    [t]: [j]
  }), [t, j]);
  (0, c.$)(k);
  let x = v === y.IlC.POPOUT,
    A = (0, u.Z)({
      guild: m,
      analyticsLocation: w
    }),
    D = (0, o.Aq)();
  if (null == m || x) return null;
  let E = Z === j && (d.Z.can(y.Plq.CHANGE_NICKNAME, m) || d.Z.can(y.Plq.MANAGE_NICKNAMES, m)),
    I = Z === j,
    S = d.Z.canManageUser(y.Plq.MANAGE_NICKNAMES, j, m);
  if (!(E || S || I) || null == _ || C) return null;
  let M = m.hasFeature(y.oNc.HUB) ? g.NW.string(g.t["+MWrWl"]) : g.NW.string(g.t["PKQB/P"]),
    W = I ? M : g.NW.string(g.t.dilOFx);
  return (0, n.jsx)(i.sNh, {
    id: "change-nickname",
    label: (0, n.jsx)("div", {
      className: P.labelWrapper,
      children: (0, n.jsx)("span", {
        className: P.label,
        children: W
      })
    }),
    icon: N,
    action: () => {
      I ? ((0, s.Z)(_.id, _.getAvatarURL(t, 80), {
        guildId: t
      }), A(), D.dispatch(y.CkL.POPOUT_CLOSE), (0, i.pTH)()) : (0, i.ZDy)(async () => {
        let {
          default: e
        } = await r.e("17712").then(r.bind(r, 620021));
        return r => {
          var a, l;
          return (0, n.jsx)(e, (a = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[t] = n
              })
            }
            return e
          }({}, r), l = l = {
            guildId: t,
            user: _,
            analyticsSource: w,
            analyticsLocations: h
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e))
          }), a))
        }
      })
    }
  })
}