/** Chunk was on 97445 **/
/** chunk id: 976192, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk616780 = require("./616780.js"),
  Chunk40851 = require("./40851.jsx"),
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
  } = e, Z = f.Z.getGuild(t), _ = b.default.getId(), C = (0, a.e7)([O.default], () => O.default.getUser(j)), m = (0, a.e7)([p.ZP], () => p.ZP.isGuestOrLurker(t, j), [t, j]);
  (0, a.e7)([d.Z], () => d.Z.getGuildVersion(t), [t]);
  let A = l.useMemo(() => ({
    [t]: [j]
  }), [t, j]);
  (0, c.$)(A);
  let k = N === P.IlC.POPOUT,
    E = (0, s.Z)({
      guild: Z,
      analyticsLocation: h
    }),
    x = (0, o.Aq)();
  if (null == Z || k) return null;
  let M = _ === j && (d.Z.can(P.Plq.CHANGE_NICKNAME, Z) || d.Z.can(P.Plq.MANAGE_NICKNAMES, Z)),
    S = _ === j,
    D = d.Z.canManageUser(P.Plq.MANAGE_NICKNAMES, j, Z);
  if (!(M || D || S) || null == C || m) return null;
  let G = Z.features.has(P.oNc.HUB) ? g.intl.string(g.t["+MWrWl"]) : g.intl.string(g.t["PKQB/P"]),
    I = S ? G : g.intl.string(g.t.dilOFx);
  return (0, n.jsx)(i.sNh, {
    id: "change-nickname",
    label: (0, n.jsx)("div", {
      className: y.labelWrapper,
      children: (0, n.jsx)("span", {
        className: y.label,
        children: I
      })
    }),
    icon: v,
    action: () => {
      S ? ((0, u.Z)(C.id, C.getAvatarURL(t, 80), {
        guildId: t
      }), E(), x.dispatch(P.CkL.POPOUT_CLOSE), (0, i.pTH)()) : (0, i.ZDy)(async () => {
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
            user: C,
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