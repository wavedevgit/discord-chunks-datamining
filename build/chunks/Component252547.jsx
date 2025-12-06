/** Chunk was on 89311 **/
/** chunk id: 252547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk383895 = require("./383895.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226788 = require("./226788.js"),
  Chunk5463 = require("./5463.js");

function g(e) {
  let {
    entries: t,
    viewId: n,
    officialGuildId: r,
    onClose: g
  } = e, f = t.length > 7, [p, x] = i.useState(false), v = i.useMemo(() => t.slice(0, f && !p ? 6 : true), [t, f, p]);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(o.X6q, {
      className: u.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: d.intl.string(d.t.ak8OHk)
    }), 0 === t.length ? (0, a.jsx)(o.xvT, {
      variant: "text-xs/semibold",
      color: "text-strong",
      className: m.emptyState,
      children: d.intl.string(d.t.R5fYVO)
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: l()(m.friends, {
          [m.fadedEntries]: f && !p
        }),
        children: (0, a.jsx)("div", {
          className: u.column,
          children: v.map(e => (0, a.jsx)(c.Z, {
            entry: e,
            viewId: n,
            onClose: g,
            officialGuildId: r
          }, e.id))
        })
      }), f && !p && (0, a.jsxs)(s.P3F, {
        className: m.expandEntriesButton,
        onClick: () => x(true),
        children: [(0, a.jsx)(o.xvT, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          children: d.intl.string(d.t.yohc6E)
        }), (0, a.jsx)(s.CJ0, {
          size: "xs"
        })]
      })]
    })]
  })
}