/** Chunk was on 33213 **/
/** chunk id: 422525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk434404 = require("./434404.js"),
  Chunk956324 = require("./956324.js"),
  Chunk640678 = require("./640678.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let t = (0, u.Aq)(),
    n = (0, c.Z)(e);
  if (__OVERLAY__ || !n) return null;
  let p = n => {
    a.Z.open(e.id, n), t.dispatch(d.CkL.POPOUT_CLOSE), (0, r.pTH)()
  };
  return (0, i.jsx)(r.sNh, {
    id: "guild-settings",
    label: b.intl.string(b.t["154/bL"]),
    action: () => p(),
    children: (0, o.t)(e).map(t => {
      let {
        section: n,
        label: a
      } = t;
      if (null == a) return null;
      switch (n) {
        case d.pNK.DELETE:
          return null;
        case d.pNK.COMMUNITY:
          return (0, i.jsx)(r.sNh, {
            id: n,
            action: () => p(n),
            label: b.intl.string(b.t.nRtNqn)
          }, n);
        case d.pNK.APP_DIRECTORY:
          return (0, i.jsx)(r.sNh, {
            id: n,
            action: () => {
              (0, s.transitionToGlobalDiscovery)({
                tab: g.GlobalDiscoveryTab.APPS,
                newSessionState: {
                  guildId: e.id,
                  entrypoint: {
                    name: l.xF.GUILD_HEADER_POPOUT
                  }
                }
              })
            },
            label: a
          }, n);
        default:
          return (0, i.jsx)(r.sNh, {
            id: n,
            action: () => p(n),
            label: a
          }, n)
      }
    })
  })
}