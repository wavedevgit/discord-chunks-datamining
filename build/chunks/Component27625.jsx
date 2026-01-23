/** Chunk was on 81362 **/
/** chunk id: 27625, original params: t,i,s (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk915089 = require("./915089.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk36205 = require("./36205.js");

function d(t) {
  let {
    href: i,
    onClose: d,
    transitionState: o
  } = t, b = (0, r.GV)();
  return (0, a.jsxs)(n.EOs, {
    "data-migration-pending": true,
    transitionState: o,
    "aria-labelledby": b,
    parentComponent: "SuspiciousDownloadModal",
    children: [(0, a.jsx)("img", {
      className: c.Qw,
      src: s(929279),
      alt: ""
    }), (0, a.jsx)(n.$mQ, {
      children: (0, a.jsxs)("div", {
        className: c.jE,
        children: [(0, a.jsx)(n.Heading, {
          id: b,
          variant: "heading-lg/semibold",
          className: c.DD,
          children: l.intl.string(l.t.XtDo9Z)
        }), (0, a.jsx)(n.Text, {
          variant: "text-md/normal",
          className: c.rf,
          children: l.intl.string(l.t.L9yFko)
        })]
      })
    }), (0, a.jsx)(n.jlY, {
      children: (0, a.jsxs)(n.ButtonGroup, {
        children: [(0, a.jsx)(n.Button, {
          variant: "primary",
          text: l.intl.string(l.t.j7Vi2i),
          onClick: d
        }), (0, a.jsx)(n.Button, {
          text: l.intl.string(l.t["/bHu89"]),
          variant: "secondary",
          onClick: () => {
            d(), (0, e.A)(i, true)
          }
        })]
      })
    })]
  })
}