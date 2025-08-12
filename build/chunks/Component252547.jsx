/** Chunk was on 89311 **/
/** chunk id: 252547, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk383895 = require("./383895.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk110568 = require("./110568.js"),
  Chunk559537 = require("./559537.js");

function g(e) {
  let {
    entries: t,
    viewId: r,
    officialGuildId: i,
    onClose: g
  } = e, p = t.length > 7, [f, x] = a.useState(false), j = a.useMemo(() => t.slice(0, p && !f ? 6 : true), [t, p, f]);
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(o.X6, {
      className: u.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: d.intl.string(d.t.ak8OHh)
    }), 0 === t.length ? (0, n.jsx)(o.xv, {
      variant: "text-xs/semibold",
      color: "text-primary",
      className: m.emptyState,
      children: d.intl.string(d.t.R5fYVF)
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: l()(m.friends, {
          [m.fadedEntries]: p && !f
        }),
        children: (0, n.jsx)("div", {
          className: u.column,
          children: j.map(e => (0, n.jsx)(c.Z, {
            entry: e,
            viewId: r,
            onClose: g,
            officialGuildId: i
          }, e.id))
        })
      }), p && !f && (0, n.jsxs)(s.P3F, {
        className: m.expandEntriesButton,
        onClick: () => x(true),
        children: [(0, n.jsx)(o.xv, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          children: d.intl.string(d.t.yohc6O)
        }), (0, n.jsx)(s.CJ0, {
          size: "xs"
        })]
      })]
    })]
  })
}