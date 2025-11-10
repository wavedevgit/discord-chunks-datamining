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
    officialGuildId: r,
    onClose: f
  } = e, g = t.length > 7, [p, x] = l.useState(false), h = l.useMemo(() => t.slice(0, g && !p ? 6 : true), [t, g, p]);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(s.X6q, {
      className: u.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: d.intl.string(d.t.ak8OHk)
    }), 0 === t.length ? (0, i.jsx)(s.xvT, {
      variant: "text-xs/semibold",
      color: "text-primary",
      className: m.emptyState,
      children: d.intl.string(d.t.R5fYVO)
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        className: a()(m.friends, {
          [m.fadedEntries]: g && !p
        }),
        children: (0, i.jsx)("div", {
          className: u.column,
          children: h.map(e => (0, i.jsx)(c.Z, {
            entry: e,
            viewId: n,
            onClose: f,
            officialGuildId: r
          }, e.id))
        })
      }), g && !p && (0, i.jsxs)(o.P3F, {
        className: m.expandEntriesButton,
        onClick: () => x(true),
        children: [(0, i.jsx)(s.xvT, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          children: d.intl.string(d.t.yohc6E)
        }), (0, i.jsx)(o.CJ0, {
          size: "xs"
        })]
      })]
    })]
  })
}