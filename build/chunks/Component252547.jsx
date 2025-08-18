/** Chunk was on 89311 **/
/** chunk id: 252547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk383895 = require("./383895.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226788 = require("./226788.js"),
  Chunk5463 = require("./5463.js");

function f(e) {
  let {
    entries: t,
    viewId: n,
    officialGuildId: l,
    onClose: f
  } = e, p = t.length > 7, [g, x] = i.useState(false), h = i.useMemo(() => t.slice(0, p && !g ? 6 : true), [t, p, g]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.X6, {
      className: d.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: u.intl.string(u.t.ak8OHh)
    }), 0 === t.length ? (0, r.jsx)(s.xv, {
      variant: "text-xs/semibold",
      color: "text-primary",
      className: m.emptyState,
      children: u.intl.string(u.t.R5fYVF)
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: a()(m.friends, {
          [m.fadedEntries]: p && !g
        }),
        children: (0, r.jsx)("div", {
          className: d.column,
          children: h.map(e => (0, r.jsx)(c.Z, {
            entry: e,
            viewId: n,
            onClose: f,
            officialGuildId: l
          }, e.id))
        })
      }), p && !g && (0, r.jsxs)(o.P3F, {
        className: m.expandEntriesButton,
        onClick: () => x(true),
        children: [(0, r.jsx)(s.xv, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          children: u.intl.string(u.t.yohc6O)
        }), (0, r.jsx)(o.CJ0, {
          size: "xs"
        })]
      })]
    })]
  })
}