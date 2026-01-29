/** Chunk was on 13530 **/
/** chunk id: 392332, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk760459 = require("./760459.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk851822 = require("./851822.js"),
  Chunk491510 = require("./491510.js");

function x(e) {
  let {
    entries: t,
    viewId: l,
    officialGuildId: a,
    onClose: x,
    source: f
  } = e, g = t.length > 7, [h, p] = i.useState(false), j = i.useMemo(() => t.slice(0, g && !h ? 6 : true), [t, g, h]);
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(s.DZT, {
      className: u.bV,
      variant: "text-md/semibold",
      color: "text-strong",
      children: d.intl.string(d.t.ak8OHk)
    }), 0 === t.length ? (0, n.jsx)(s.EYj, {
      variant: "text-xs/semibold",
      color: "text-strong",
      className: m.p$,
      children: d.intl.string(d.t.R5fYVO)
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: r()(m.yz, {
          [m.T6]: g && !h
        }),
        children: (0, n.jsx)("div", {
          className: u.fi,
          children: j.map(e => (0, n.jsx)(c.A, {
            entry: e,
            viewId: l,
            onClose: x,
            officialGuildId: a,
            source: f
          }, e.id))
        })
      }), g && !h && (0, n.jsxs)(o.DUT, {
        className: m.ND,
        onClick: () => p(true),
        children: [(0, n.jsx)(s.EYj, {
          variant: "text-xs/semibold",
          color: "interactive-text-default",
          children: d.intl.string(d.t.yohc6E)
        }), (0, n.jsx)(o.abt, {
          size: "xs"
        })]
      })]
    })]
  })
}