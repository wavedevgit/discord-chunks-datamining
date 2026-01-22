/** Chunk was on 54469 **/
/** chunk id: 684509, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk837057 = require("./837057.js"),
  Chunk310419 = require("./310419.js"),
  Chunk997509 = require("./997509.js"),
  Chunk5298 = require("./5298.js"),
  Chunk266648 = require("./266648.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk488995 = require("./488995.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let t = (0, u.aL)(),
    n = (0, o.A)(e);
  if (__OVERLAY__ || !n) return null;
  let b = n => {
    a.A.open(e.id, n), t.dispatch(d.jej.POPOUT_CLOSE), (0, r.s7G)()
  };
  return (0, i.jsx)(r.Drp, {
    id: "guild-settings",
    label: p.intl.string(p.t["154/bL"]),
    action: () => b(),
    children: (0, c.P)(e).map(t => {
      let {
        section: n,
        label: a
      } = t;
      if (null == a) return null;
      switch (n) {
        case d.BEX.DELETE:
          return null;
        case d.BEX.COMMUNITY:
          return (0, i.jsx)(r.Drp, {
            id: n,
            action: () => b(n),
            label: p.intl.string(p.t.nRtNqn)
          }, n);
        case d.BEX.APP_DIRECTORY:
          return (0, i.jsx)(r.Drp, {
            id: n,
            action: () => {
              (0, s.transitionToGlobalDiscovery)({
                tab: g.GlobalDiscoveryTab.APPS,
                newSessionState: {
                  guildId: e.id,
                  entrypoint: {
                    name: l.sW.GUILD_HEADER_POPOUT
                  }
                }
              })
            },
            label: a
          }, n);
        default:
          return (0, i.jsx)(r.Drp, {
            id: n,
            action: () => b(n),
            label: a
          }, n)
      }
    })
  })
}