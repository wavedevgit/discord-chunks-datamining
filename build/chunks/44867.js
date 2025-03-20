/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  c: () => g
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(999382),
  o = n(845377),
  A = n(976288),
  c = n(386885),
  d = n(388032),
  u = n(62475);

function g(e) {
  let {
    fetchDiscoveryData: t,
    settingsView: n,
    requireTerms: g,
    rules: f
  } = e, m = (0, s.e7)([l.Z], () => l.Z.getProps().guild);
  if (i.useEffect(() => {
      null != m && t(m.id)
    }, [t, m]), null == m) return null;
  switch (n) {
    case c.U.DISQUALIFIED:
      return (0, r.jsx)(o.Z, {
        guild: m,
        guildId: m.id,
        headerContent: (0, r.jsxs)("div", {
          children: [(0, r.jsx)(a.X6q, {
            variant: "text-md/semibold",
            color: "header-primary",
            className: u.header,
            children: d.NW.format(d.t.n1LDQE, {
              removedHook: (e, t) => (0, r.jsx)("strong", {
                className: u.danger,
                children: e
              }, t)
            })
          }), (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-secondary",
            children: d.NW.string(d.t.Qgaw3d)
          })]
        })
      });
    case c.U.ELIGIBLE_DISABLED:
    case c.U.ELIGIBLE_ENABLED:
      return (0, r.jsx)(A.d, {
        requireTerms: g,
        rules: f,
        settingsView: n
      });
    case c.U.INELIGIBLE:
      return (0, r.jsx)(o.Z, {
        guild: m,
        guildId: m.id,
        headerContent: (0, r.jsx)(a.X6q, {
          variant: "heading-md/semibold",
          children: d.NW.format(d.t["+6Hylp"], {
            doesNotHook: (e, t) => (0, r.jsx)("strong", {
              className: u.danger,
              children: e
            }, t)
          })
        })
      });
    default:
      return (0, r.jsx)(a.$jN, {})
  }
}