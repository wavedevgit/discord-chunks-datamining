/** Chunk was on 99063 **/
/** chunk id: 469880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk932776 = require("./932776.js"),
  Chunk680298 = require("./680298.jsx"),
  Chunk289465 = require("./289465.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk240440 = require("./240440.js");

function u(e) {
  let {
    applicationIcon: t,
    applicationName: n,
    canNavigate: u,
    guildId: p
  } = e, {
    results: m,
    query: b,
    setQuery: g,
    unfilteredCount: f
  } = (0, a.O)();
  return null != m && f > 0 ? (0, i.jsx)(s.Z, {
    bar: (0, i.jsx)(l.E1j, {
      size: "sm",
      query: b,
      onChange: g,
      onClear: () => g("")
    }),
    inModal: false,
    title: c.intl.string(c.t["0hKkS+"]),
    children: m.map((e, a) => (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(o.Z, {
        applicationIcon: t,
        applicationName: n,
        canNavigate: u,
        command: e,
        guildId: p
      }), a < m.length - 1 ? (0, i.jsx)(l.izJ, {}) : null]
    }, e.id))
  }) : (0, i.jsx)(l.Zbd, {
    className: d.emptyCard,
    editable: true,
    children: (0, i.jsx)(l.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: c.intl.string(c.t["x78c+J"])
    })
  })
}