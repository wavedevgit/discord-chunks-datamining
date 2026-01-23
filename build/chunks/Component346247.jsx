/** Chunk was on 84841 **/
/** chunk id: 346247, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
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

function y(e) {
  let {
    guildId: t,
    userId: y,
    analyticsLocation: j,
    analyticsLocations: C,
    context: E,
    icon: m
  } = e, x = g.A.getGuild(t), M = o.default.getId(), N = (0, r.bG)([b.default], () => b.default.getUser(y)), G = (0, r.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, y), [t, y]);
  (0, r.bG)([p.A], () => p.A.getGuildVersion(t), [t]);
  let P = i.useMemo(() => ({
    [t]: [y]
  }), [t, y]);
  (0, d.E)(P, "useChangeIdentityItem");
  let I = E === f.BRT.POPOUT,
    v = (0, c.A)({
      guild: x,
      analyticsLocations: C
    }),
    U = (0, s.aL)();
  if (null == x || I) return null;
  let _ = M === y && (p.A.can(f.xBc.CHANGE_NICKNAME, x) || p.A.can(f.xBc.MANAGE_NICKNAMES, x)),
    S = M === y,
    T = p.A.canManageUser(f.xBc.MANAGE_NICKNAMES, y, x);
  if (!(_ || T || S) || null == N || G) return null;
  let R = x.features.has(f.GuildFeatures.HUB) ? h.intl.string(h.t["+MWrWt"]) : h.intl.string(h.t["PKQB/H"]),
    D = S ? R : h.intl.string(h.t.dilOF6);
  return (0, l.jsx)(a.Drp, {
    id: "change-nickname",
    label: (0, l.jsx)("div", {
      className: O.ei,
      children: (0, l.jsx)("span", {
        className: O.Pf,
        children: D
      })
    }),
    icon: m,
    action: () => {
      S ? ((0, u.A)(N.id, N.getAvatarURL(t, 80), {
        guildId: t
      }), v(), U.dispatch(f.jej.POPOUT_CLOSE), (0, a.s7G)()) : (0, a.mMO)(async () => {
        let {
          default: e
        } = await n.e("48635").then(n.bind(n, 752118));
        return n => {
          var i, r;
          return (0, l.jsx)(e, (i = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = l
              })
            }
            return e
          }({}, n), r = r = {
            guildId: t,
            user: N,
            analyticsSource: j,
            analyticsLocations: C
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e))
          }), i))
        }
      })
    }
  })
}