/** Chunk was on 9536 **/
/** chunk id: 44867, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  c: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk999382 = require("./999382.js"),
  Chunk227380 = require("./227380.jsx"),
  Chunk976288 = require("./976288.jsx"),
  Chunk386885 = require("./386885.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk487840 = require("./487840.js");

function m(e) {
  let {
    fetchDiscoveryData: t,
    settingsView: n,
    requireTerms: m,
    rules: f
  } = e, b = (0, l.e7)([s.Z], () => s.Z.getProps().guild);
  if (i.useEffect(() => {
      null != b && t(b.id)
    }, [t, b]), null == b) return null;
  switch (n) {
    case d.U.DISQUALIFIED:
      return (0, r.jsx)(o.Z, {
        guild: b,
        guildId: b.id,
        headerContent: (0, r.jsxs)("div", {
          children: [(0, r.jsx)(a.Heading, {
            variant: "text-md/semibold",
            color: "text-strong",
            className: g.header,
            children: u.intl.format(u.t.n1LDQM, {
              removedHook: (e, t) => (0, r.jsx)("strong", {
                className: g.danger,
                children: e
              }, t)
            })
          }), (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: u.intl.string(u.t.Qgaw3d)
          })]
        })
      });
    case d.U.ELIGIBLE_DISABLED:
    case d.U.ELIGIBLE_ENABLED:
      return (0, r.jsx)(c.d, {
        requireTerms: m,
        rules: f,
        settingsView: n
      });
    case d.U.INELIGIBLE:
      return (0, r.jsx)(o.Z, {
        guild: b,
        guildId: b.id,
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