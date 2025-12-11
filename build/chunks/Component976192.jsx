/** Chunk was on 87154 **/
/** chunk id: 976192, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk267999 = require("./267999.js");

function P(e) {
  let {
    guildId: t,
    userId: P,
    analyticsLocation: v,
    analyticsLocations: h,
    context: w,
    icon: E
  } = e, Z = p.Z.getGuild(t), m = b.default.getId(), D = (0, l.e7)([d.default], () => d.default.getUser(P)), S = (0, l.e7)([O.ZP], () => O.ZP.isGuestOrLurker(t, P), [t, P]);
  (0, l.e7)([f.Z], () => f.Z.getGuildVersion(t), [t]);
  let C = i.useMemo(() => ({
    [t]: [P]
  }), [t, P]);
  (0, c.$)(C, "useChangeIdentityItem");
  let N = w === y.IlC.POPOUT,
    I = (0, u.Z)({
      guild: Z,
      analyticsLocations: h
    }),
    G = (0, a.Aq)();
  if (null == Z || N) return null;
  let k = m === P && (f.Z.can(y.Plq.CHANGE_NICKNAME, Z) || f.Z.can(y.Plq.MANAGE_NICKNAMES, Z)),
    M = m === P,
    _ = f.Z.canManageUser(y.Plq.MANAGE_NICKNAMES, P, Z);
  if (!(k || _ || M) || null == D || S) return null;
  let x = Z.features.has(y.GuildFeatures.HUB) ? g.intl.string(g.t["+MWrWt"]) : g.intl.string(g.t["PKQB/H"]),
    U = M ? x : g.intl.string(g.t.dilOF6);
  return (0, n.jsx)(o.sNh, {
    id: "change-nickname",
    label: (0, n.jsx)("div", {
      className: j.labelWrapper,
      children: (0, n.jsx)("span", {
        className: j.label,
        children: U
      })
    }),
    icon: E,
    action: () => {
      M ? ((0, s.Z)(D.id, D.getAvatarURL(t, 80), {
        guildId: t
      }), I(), G.dispatch(y.CkL.POPOUT_CLOSE), (0, o.pTH)()) : (0, o.ZDy)(async () => {
        let {
          default: e
        } = await r.e("56698").then(r.bind(r, 82035));
        return r => {
          var i, l;
          return (0, n.jsx)(e, (i = function(e) {
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
          }({}, r), l = l = {
            guildId: t,
            user: D,
            analyticsSource: v,
            analyticsLocations: h
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    }
  })
}