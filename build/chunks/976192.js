/** Chunk was on 70675 **/
n.d(t, {
  Z: () => N
});
var l = n(200651),
  r = n(192379),
  i = n(442837),
  a = n(481060),
  o = n(616780),
  u = n(40851),
  s = n(300284),
  c = n(484459),
  d = n(314897),
  g = n(271383),
  Z = n(430824),
  b = n(496675),
  f = n(594174),
  p = n(981631),
  O = n(388032),
  m = n(992718);

function N(e) {
  let {
    guildId: t,
    userId: N,
    analyticsLocation: h,
    analyticsLocations: j,
    context: P,
    icon: x
  } = e, v = Z.Z.getGuild(t), y = d.default.getId(), E = (0, i.e7)([f.default], () => f.default.getUser(N)), _ = (0, i.e7)([g.ZP], () => g.ZP.isGuestOrLurker(t, N), [t, N]);
  (0, i.e7)([b.Z], () => b.Z.getGuildVersion(t), [t]);
  let C = r.useMemo(() => ({
    [t]: [N]
  }), [t, N]);
  (0, o.$)(C);
  let I = P === p.IlC.POPOUT,
    S = (0, s.Z)({
      guild: v,
      analyticsLocation: h
    }),
    T = (0, u.Aq)();
  if (null == v || I) return null;
  let W = y === N && (b.Z.can(p.Plq.CHANGE_NICKNAME, v) || b.Z.can(p.Plq.MANAGE_NICKNAMES, v)),
    A = y === N,
    U = b.Z.canManageUser(p.Plq.MANAGE_NICKNAMES, N, v);
  if (!(W || U || A) || null == E || _) return null;
  let w = v.hasFeature(p.oNc.HUB) ? O.NW.string(O.t["+MWrWl"]) : O.NW.string(O.t["PKQB/P"]),
    R = A ? w : O.NW.string(O.t.dilOFx);
  return (0, l.jsx)(a.sNh, {
    id: "change-nickname",
    label: (0, l.jsx)("div", {
      className: m.labelWrapper,
      children: (0, l.jsx)("span", {
        className: m.label,
        children: R
      })
    }),
    icon: x,
    action: () => {
      A ? ((0, c.Z)(E.id, E.getAvatarURL(t, 80), {
        guildId: t
      }), S(), T.dispatch(p.CkL.POPOUT_CLOSE), (0, a.pTH)()) : (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("17712").then(n.bind(n, 620021));
        return n => {
          var r, i;
          return (0, l.jsx)(e, (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[t] = l
              })
            }
            return e
          }({}, n), i = i = {
            guildId: t,
            user: E,
            analyticsSource: h,
            analyticsLocations: j
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
          }), r))
        }
      })
    }
  })
}