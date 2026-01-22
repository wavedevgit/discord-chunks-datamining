/** Chunk was on 81362 **/
/** chunk id: 27625, original params: t,s,i (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk915089 = require("./915089.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk36205 = require("./36205.js");

function c(t) {
  let {
    href: s,
    onClose: c,
    transitionState: o
  } = t, x = (0, r.GV)();
  return (0, a.jsxs)(n.EOs, {
    "data-migration-pending": true,
    transitionState: o,
    "aria-labelledby": x,
    parentComponent: "SuspiciousDownloadModal",
    children: [(0, a.jsx)("img", {
      className: d.Qw,
      src: i(929279),
      alt: ""
    }), (0, a.jsx)(n.$mQ, {
      children: (0, a.jsxs)("div", {
        className: d.jE,
        children: [(0, a.jsx)(n.Heading, {
          id: x,
          variant: "heading-lg/semibold",
          className: d.DD,
          children: l.intl.string(l.t.XtDo9Z)
        }), (0, a.jsx)(n.Text, {
          variant: "text-md/normal",
          className: d.rf,
          children: l.intl.string(l.t.L9yFko)
        })]
      })
    }), (0, a.jsx)(n.jlY, {
      children: (0, a.jsxs)(n.ButtonGroup, {
        children: [(0, a.jsx)(n.Button, {
          variant: "primary",
          text: l.intl.string(l.t.j7Vi2i),
          onClick: c
        }), (0, a.jsx)(n.Button, {
          text: l.intl.string(l.t["/bHu89"]),
          variant: "secondary",
          onClick: () => {
            c(), (0, e.A)(s, true)
          }
        })]
      })
    })]
  })
}