/** Chunk was on 33213 **/
/** chunk id: 422525, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk434404 = require("./434404.js"),
  Chunk956324 = require("./956324.js"),
  Chunk640678 = require("./640678.js"),
  Chunk981631 = require("./981631.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let t = (0, s.Aq)(),
    n = (0, a.Z)(e);
  if (__OVERLAY__ || !n) return null;
  let p = n => {
    c.Z.open(e.id, n), t.dispatch(d.CkL.POPOUT_CLOSE), (0, r.pTH)()
  };
  return (0, i.jsx)(r.sNh, {
    id: "guild-settings",
    label: b.intl.string(b.t["154/bG"]),
    action: () => p(),
    children: (0, u.t)(e).map(t => {
      let {
        section: n,
        label: s
      } = t;
      if (null == s) return null;
      switch (n) {
        case d.pNK.DELETE:
          return null;
        case d.pNK.COMMUNITY:
          return (0, i.jsx)(r.sNh, {
            id: n,
            action: () => p(n),
            label: b.intl.string(b.t.nRtNqq)
          }, n);
        case d.pNK.APP_DIRECTORY:
          return (0, i.jsx)(r.sNh, {
            id: n,
            action: () => {
              (0, l.transitionToGlobalDiscovery)({
                tab: g.GlobalDiscoveryTab.APPS,
                newSessionState: {
                  guildId: e.id,
                  entrypoint: {
                    name: o.xF.GUILD_HEADER_POPOUT
                  }
                }
              })
            },
            label: s
          }, n);
        default:
          return (0, i.jsx)(r.sNh, {
            id: n,
            action: () => p(n),
            label: s
          }, n)
      }
    })
  })
}