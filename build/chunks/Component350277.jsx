/** Chunk was on 54160 **/
/** chunk id: 350277, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk299043 = require("./299043.js");

function l(e) {
  let {
    onClose: t
  } = e;
  return (0, n.jsxs)("div", {
    className: o.op,
    children: [(0, n.jsx)(i.Heading, {
      className: o.qQ,
      color: "text-strong",
      variant: "heading-xl/bold",
      children: s.intl.string(s.t["3C+rbC"])
    }), (0, n.jsx)(i.Text, {
      className: o.AC,
      color: "text-default",
      variant: "text-md/medium",
      children: s.intl.string(s.t.TS1L09)
    }), (0, n.jsx)(i.Text, {
      className: o.mO,
      color: "text-default",
      variant: "text-md/medium",
      children: s.intl.format(s.t.bWE0ZD, {
        onClick: () => {
          t(), (0, a.openUserSettings)()
        }
      })
    }), (0, n.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: o.x6,
      children: (0, n.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        text: s.intl.string(s.t["yD/zkn"]),
        type: "button",
        onClick: t
      })
    })]
  })
}