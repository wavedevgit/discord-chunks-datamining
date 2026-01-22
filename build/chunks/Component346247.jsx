/** Chunk was on 84841 **/
/** chunk id: 346247, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk80682 = require("./80682.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk206835 = require("./206835.js"),
  Chunk576622 = require("./576622.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk284700 = require("./284700.js");

function j(e) {
  let {
    guildId: t,
    userId: j,
    analyticsLocation: m,
    analyticsLocations: y,
    context: C,
    icon: E
  } = e, x = g.A.getGuild(t), N = u.default.getId(), M = (0, r.bG)([b.default], () => b.default.getUser(j)), G = (0, r.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, j), [t, j]);
  (0, r.bG)([p.A], () => p.A.getGuildVersion(t), [t]);
  let I = i.useMemo(() => ({
    [t]: [j]
  }), [t, j]);
  (0, d.E)(I, "useChangeIdentityItem");
  let P = C === h.BRT.POPOUT,
    v = (0, c.A)({
      guild: x,
      analyticsLocations: y
    }),
    U = (0, s.aL)();
  if (null == x || P) return null;
  let S = N === j && (p.A.can(h.xBc.CHANGE_NICKNAME, x) || p.A.can(h.xBc.MANAGE_NICKNAMES, x)),
    _ = N === j,
    T = p.A.canManageUser(h.xBc.MANAGE_NICKNAMES, j, x);
  if (!(S || T || _) || null == M || G) return null;
  let R = x.features.has(h.GuildFeatures.HUB) ? f.intl.string(f.t["+MWrWt"]) : f.intl.string(f.t["PKQB/H"]),
    D = _ ? R : f.intl.string(f.t.dilOF6);
  return (0, n.jsx)(a.Drp, {
    id: "change-nickname",
    label: (0, n.jsx)("div", {
      className: O.ei,
      children: (0, n.jsx)("span", {
        className: O.Pf,
        children: D
      })
    }),
    icon: E,
    action: () => {
      _ ? ((0, o.A)(M.id, M.getAvatarURL(t, 80), {
        guildId: t
      }), v(), U.dispatch(h.jej.POPOUT_CLOSE), (0, a.s7G)()) : (0, a.mMO)(async () => {
        let {
          default: e
        } = await l.e("48635").then(l.bind(l, 752118));
        return l => {
          var i, r;
          return (0, n.jsx)(e, (i = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(l);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                return Object.getOwnPropertyDescriptor(l, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = l[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, l), r = r = {
            guildId: t,
            user: M,
            analyticsSource: m,
            analyticsLocations: y
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var l = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              l.push.apply(l, n)
            }
            return l
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e))
          }), i))
        }
      })
    }
  })
}