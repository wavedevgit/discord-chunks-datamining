/** Chunk was on 13530 **/
/** chunk id: 392332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk760459 = require("./760459.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk851822 = require("./851822.js"),
  Chunk491510 = require("./491510.js");

function f(e) {
  let {
    entries: t,
    viewId: n,
    officialGuildId: i,
    onClose: f
  } = e, g = t.length > 7, [x, p] = r.useState(false), j = r.useMemo(() => t.slice(0, g && !x ? 6 : true), [t, g, x]);
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)(s.DZT, {
      className: d.bV,
      variant: "text-md/semibold",
      color: "text-strong",
      children: u.intl.string(u.t.ak8OHk)
    }), 0 === t.length ? (0, l.jsx)(s.EYj, {
      variant: "text-xs/semibold",
      color: "text-strong",
      className: m.p$,
      children: u.intl.string(u.t.R5fYVO)
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: a()(m.yz, {
          [m.T6]: g && !x
        }),
        children: (0, l.jsx)("div", {
          className: d.fi,
          children: j.map(e => (0, l.jsx)(c.A, {
            entry: e,
            viewId: n,
            onClose: f,
            officialGuildId: i
          }, e.id))
        })
      }), g && !x && (0, l.jsxs)(o.DUT, {
        className: m.ND,
        onClick: () => p(true),
        children: [(0, l.jsx)(s.EYj, {
          variant: "text-xs/semibold",
          color: "interactive-text-default",
          children: u.intl.string(u.t.yohc6E)
        }), (0, l.jsx)(o.abt, {
          size: "xs"
        })]
      })]
    })]
  })
}