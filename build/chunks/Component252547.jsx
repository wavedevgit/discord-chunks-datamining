/** Chunk was on 89311 **/
/** chunk id: 252547, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk383895 = require("./383895.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226788 = require("./226788.js"),
  Chunk5463 = require("./5463.js");

function f(e) {
  let {
    entries: t,
    viewId: r,
    officialGuildId: i,
    onClose: f
  } = e, g = t.length > 7, [p, x] = a.useState(false), v = a.useMemo(() => t.slice(0, g && !p ? 6 : true), [t, g, p]);
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(o.X6, {
      className: d.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: u.intl.string(u.t.ak8OHh)
    }), 0 === t.length ? (0, n.jsx)(o.xv, {
      variant: "text-xs/semibold",
      color: "text-primary",
      className: m.emptyState,
      children: u.intl.string(u.t.R5fYVF)
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: l()(m.friends, {
          [m.fadedEntries]: g && !p
        }),
        children: (0, n.jsx)("div", {
          className: d.column,
          children: v.map(e => (0, n.jsx)(c.Z, {
            entry: e,
            viewId: r,
            onClose: f,
            officialGuildId: i
          }, e.id))
        })
      }), g && !p && (0, n.jsxs)(s.P3F, {
        className: m.expandEntriesButton,
        onClick: () => x(true),
        children: [(0, n.jsx)(o.xv, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          children: u.intl.string(u.t.yohc6O)
        }), (0, n.jsx)(s.CJ0, {
          size: "xs"
        })]
      })]
    })]
  })
}