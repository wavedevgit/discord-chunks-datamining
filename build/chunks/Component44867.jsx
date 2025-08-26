/** Chunk was on 88479 **/
/** chunk id: 44867, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk999382 = require("./999382.js"),
  Chunk845377 = require("./845377.jsx"),
  Chunk976288 = require("./976288.jsx"),
  Chunk386885 = require("./386885.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk366869 = require("./366869.js");

function g(e) {
  let {
    fetchDiscoveryData: t,
    settingsView: n,
    requireTerms: g,
    rules: p
  } = e, h = (0, l.e7)([s.Z], () => s.Z.getProps().guild);
  if (i.useEffect(() => {
      null != h && t(h.id)
    }, [t, h]), null == h) return null;
  switch (n) {
    case d.U.DISQUALIFIED:
      return (0, r.jsx)(o.Z, {
        guild: h,
        guildId: h.id,
        headerContent: (0, r.jsxs)("div", {
          children: [(0, r.jsx)(a.X6q, {
            variant: "text-md/semibold",
            color: "header-primary",
            className: m.header,
            children: u.intl.format(u.t.n1LDQE, {
              removedHook: (e, t) => (0, r.jsx)("strong", {
                className: m.danger,
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
        requireTerms: g,
        rules: p,
        settingsView: n
      });
    case d.U.INELIGIBLE:
      return (0, r.jsx)(o.Z, {
        guild: h,
        guildId: h.id,
        headerContent: (0, r.jsx)(a.X6q, {
          variant: "heading-md/semibold",
          children: u.intl.format(u.t["+6Hylp"], {
            doesNotHook: (e, t) => (0, r.jsx)("strong", {
              className: m.danger,
              children: e
            }, t)
          })
        })
      });
    default:
      return (0, r.jsx)(a.$jN, {})
  }
}