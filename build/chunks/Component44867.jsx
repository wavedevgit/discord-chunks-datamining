/** Chunk was on 384 **/
/** chunk id: 44867, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk999382 = require("./999382.js"),
  Chunk227380 = require("./227380.jsx"),
  Chunk976288 = require("./976288.jsx"),
  Chunk386885 = require("./386885.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk366869 = require("./366869.js");

function m(e) {
  let {
    fetchDiscoveryData: t,
    settingsView: n,
    requireTerms: m,
    rules: p
  } = e, f = (0, l.e7)([s.Z], () => s.Z.getProps().guild);
  if (i.useEffect(() => {
      null != f && t(f.id)
    }, [t, f]), null == f) return null;
  switch (n) {
    case d.U.DISQUALIFIED:
      return (0, r.jsx)(o.Z, {
        guild: f,
        guildId: f.id,
        headerContent: (0, r.jsxs)("div", {
          children: [(0, r.jsx)(a.Heading, {
            variant: "text-md/semibold",
            color: "header-primary",
            className: g.header,
            children: u.intl.format(u.t.n1LDQM, {
              removedHook: (e, t) => (0, r.jsx)("strong", {
                className: g.danger,
                children: e
              }, t)
            })
          }), (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-secondary",
            children: u.intl.string(u.t.Qgaw3d)
          })]
        })
      });
    case d.U.ELIGIBLE_DISABLED:
    case d.U.ELIGIBLE_ENABLED:
      return (0, r.jsx)(c.d, {
        requireTerms: m,
        rules: p,
        settingsView: n
      });
    case d.U.INELIGIBLE:
      return (0, r.jsx)(o.Z, {
        guild: f,
        guildId: f.id,
        headerContent: (0, r.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          children: u.intl.format(u.t["+6Hylv"], {
            doesNotHook: (e, t) => (0, r.jsx)("strong", {
              className: g.danger,
              children: e
            }, t)
          })
        })
      });
    default:
      return (0, r.jsx)(a.$jN, {})
  }
}