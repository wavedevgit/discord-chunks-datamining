/** Chunk was on 70675 **/
n.d(t, {
  Z: () => h
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
  f = n(430824),
  Z = n(496675),
  b = n(594174),
  p = n(981631),
  O = n(388032),
  m = n(992718);

function h(e) {
  let {
    guildId: t,
    userId: h,
    analyticsLocation: N,
    analyticsLocations: j,
    context: P,
    icon: v
  } = e, x = f.Z.getGuild(t), y = d.default.getId(), E = (0, i.e7)([b.default], () => b.default.getUser(h)), C = (0, i.e7)([g.ZP], () => g.ZP.isGuestOrLurker(t, h), [t, h]);
  (0, i.e7)([Z.Z], () => Z.Z.getGuildVersion(t), [t]);
  let _ = r.useMemo(() => ({
    [t]: [h]
  }), [t, h]);
  (0, o.$)(_);
  let S = P === p.IlC.POPOUT,
    I = (0, s.Z)({
      guild: x,
      analyticsLocation: N
    }),
    T = (0, u.Aq)();
  if (null == x || S) return null;
  let W = y === h && (Z.Z.can(p.Plq.CHANGE_NICKNAME, x) || Z.Z.can(p.Plq.MANAGE_NICKNAMES, x)),
    w = y === h,
    U = Z.Z.canManageUser(p.Plq.MANAGE_NICKNAMES, h, x);
  if (!(W || U || w) || null == E || C) return null;
  let k = x.hasFeature(p.oNc.HUB) ? O.NW.string(O.t["+MWrWl"]) : O.NW.string(O.t["PKQB/P"]),
    A = w ? k : O.NW.string(O.t.dilOFx);
  return (0, l.jsx)(a.sNh, {
    id: "change-nickname",
    label: (0, l.jsx)("div", {
      className: m.labelWrapper,
      children: (0, l.jsx)("span", {
        className: m.label,
        children: A
      })
    }),
    icon: v,
    action: () => {
      w ? ((0, c.Z)(E.id, E.getAvatarURL(t, 80), {
        guildId: t
      }), I(), T.dispatch(p.CkL.POPOUT_CLOSE), (0, a.pTH)()) : (0, a.ZDy)(async () => {
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
            analyticsSource: N,
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