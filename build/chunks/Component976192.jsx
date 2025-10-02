/** Chunk was on 97445 **/
/** chunk id: 976192, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk616780 = require("./616780.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk484459 = require("./484459.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk766509 = require("./766509.js");

function j(e) {
  let {
    guildId: t,
    userId: j,
    analyticsLocation: h,
    analyticsLocations: w,
    context: N,
    icon: v
  } = e, C = d.Z.getGuild(t), Z = b.default.getId(), _ = (0, a.e7)([O.default], () => O.default.getUser(j)), m = (0, a.e7)([p.ZP], () => p.ZP.isGuestOrLurker(t, j), [t, j]);
  (0, a.e7)([f.Z], () => f.Z.getGuildVersion(t), [t]);
  let A = l.useMemo(() => ({
    [t]: [j]
  }), [t, j]);
  (0, c.$)(A, "useChangeIdentityItem");
  let k = N === g.IlC.POPOUT,
    E = (0, s.Z)({
      guild: C,
      analyticsLocations: w
    }),
    x = (0, o.Aq)();
  if (null == C || k) return null;
  let I = Z === j && (f.Z.can(g.Plq.CHANGE_NICKNAME, C) || f.Z.can(g.Plq.MANAGE_NICKNAMES, C)),
    M = Z === j,
    S = f.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, j, C);
  if (!(I || S || M) || null == _ || m) return null;
  let D = C.features.has(g.oNc.HUB) ? P.intl.string(P.t["+MWrWl"]) : P.intl.string(P.t["PKQB/P"]),
    G = M ? D : P.intl.string(P.t.dilOFx);
  return (0, n.jsx)(i.sNh, {
    id: "change-nickname",
    label: (0, n.jsx)("div", {
      className: y.labelWrapper,
      children: (0, n.jsx)("span", {
        className: y.label,
        children: G
      })
    }),
    icon: v,
    action: () => {
      M ? ((0, u.Z)(_.id, _.getAvatarURL(t, 80), {
        guildId: t
      }), E(), x.dispatch(g.CkL.POPOUT_CLOSE), (0, i.pTH)()) : (0, i.ZDy)(async () => {
        let {
          default: e
        } = await r.e("17712").then(r.bind(r, 620021));
        return r => {
          var l, a;
          return (0, n.jsx)(e, (l = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, r), a = a = {
            guildId: t,
            user: _,
            analyticsSource: h,
            analyticsLocations: w
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
          }), l))
        }
      })
    }
  })
}