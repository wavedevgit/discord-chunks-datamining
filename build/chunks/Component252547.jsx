/** Chunk was on 89311 **/
/** chunk id: 252547, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk383895 = require("./383895.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk456486 = require("./456486.js"),
  Chunk975951 = require("./975951.js");

function p(e) {
  let {
    entries: t,
    viewId: r,
    officialGuildId: l,
    onClose: p
  } = e, f = t.length > 7, [g, j] = i.useState(false), x = i.useMemo(() => t.slice(0, f && !g ? 6 : true), [t, f, g]);
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(s.X6q, {
      className: d.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: u.intl.string(u.t.ak8OHh)
    }), 0 === t.length ? (0, n.jsx)(s.xvT, {
      variant: "text-xs/semibold",
      color: "text-primary",
      className: m.emptyState,
      children: u.intl.string(u.t.R5fYVF)
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: a()(m.friends, {
          [m.fadedEntries]: f && !g
        }),
        children: (0, n.jsx)("div", {
          className: d.column,
          children: x.map(e => (0, n.jsx)(c.Z, {
            entry: e,
            viewId: r,
            onClose: p,
            officialGuildId: l
          }, e.id))
        })
      }), f && !g && (0, n.jsxs)(o.P3F, {
        className: m.expandEntriesButton,
        onClick: () => j(true),
        children: [(0, n.jsx)(s.xvT, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          children: u.intl.string(u.t.yohc6O)
        }), (0, n.jsx)(o.CJ0, {
          size: "xs"
        })]
      })]
    })]
  })
}