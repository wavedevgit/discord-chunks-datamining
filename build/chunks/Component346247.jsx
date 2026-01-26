/** Chunk was on 84841 **/
/** chunk id: 346247, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => O
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
  Chunk985018 = require("./985018.jsx");

function O(e) {
  let {
    guildId: t,
    userId: O,
    analyticsLocation: y,
    analyticsLocations: j,
    context: C,
    icon: E
  } = e, m = g.A.getGuild(t), x = u.default.getId(), M = (0, i.bG)([b.default], () => b.default.getUser(O)), N = (0, i.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, O), [t, O]);
  (0, i.bG)([p.A], () => p.A.getGuildVersion(t), [t]);
  let G = r.useMemo(() => ({
    [t]: [O]
  }), [t, O]);
  (0, o.E)(G, "useChangeIdentityItem");
  let I = C === f.BRT.POPOUT,
    v = (0, c.A)({
      guild: m,
      analyticsLocations: j
    }),
    P = (0, d.aL)();
  if (null == m || I) return null;
  let U = x === O && (p.A.can(f.xBc.CHANGE_NICKNAME, m) || p.A.can(f.xBc.MANAGE_NICKNAMES, m)),
    S = x === O,
    _ = p.A.canManageUser(f.xBc.MANAGE_NICKNAMES, O, m);
  if (!(U || _ || S) || null == M || N) return null;
  let T = m.features.has(f.GuildFeatures.HUB) ? h.intl.string(h.t["+MWrWt"]) : h.intl.string(h.t["PKQB/H"]),
    R = S ? T : h.intl.string(h.t.dilOF6);
  return (0, n.jsx)(a.Drp, {
    id: "change-nickname",
    label: R,
    icon: E,
    action: () => {
      S ? ((0, s.A)(M.id, M.getAvatarURL(t, 80), {
        guildId: t
      }), v(), P.dispatch(f.jej.POPOUT_CLOSE), (0, a.s7G)()) : (0, a.mMO)(async () => {
        let {
          default: e
        } = await l.e("48635").then(l.bind(l, 752118));
        return l => {
          var r, i;
          return (0, n.jsx)(e, (r = function(e) {
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
          }({}, l), i = i = {
            guildId: t,
            user: M,
            analyticsSource: y,
            analyticsLocations: j
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var l = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              l.push.apply(l, n)
            }
            return l
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
          }), r))
        }
      })
    }
  })
}