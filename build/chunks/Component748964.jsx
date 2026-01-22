/** Chunk was on 89479 **/
/** chunk id: 748964, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  s: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk185311 = require("./185311.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk689588 = require("./689588.js"),
  Chunk332633 = require("./332633.js");

function d(a) {
  let {
    onContinue: e,
    onClose: t,
    title: d,
    body: x
  } = a;
  return (0, n.jsxs)(i.A, {
    children: [(0, n.jsxs)(r.rQ0, {
      "data-migration-pending": true,
      direction: s.A.Direction.VERTICAL,
      className: c.wx,
      separator: false,
      children: [(0, n.jsx)("img", {
        src: o,
        className: c.bm,
        width: "254",
        height: "127",
        alt: ""
      }), (0, n.jsx)(r.Heading, {
        className: c.DD,
        variant: "heading-xl/extrabold",
        children: d
      }), null != t && (0, n.jsx)(r.s_y, {
        className: c.b,
        onClick: t
      })]
    }), (0, n.jsx)(r.$mQ, {
      "data-migration-pending": true,
      className: c.rf,
      paddingFix: false,
      children: (0, n.jsx)(r.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "text-default",
        children: x
      })
    }), (0, n.jsx)(r.jlY, {
      "data-migration-pending": true,
      className: c.qr,
      children: (0, n.jsx)(r.Button, {
        text: l.intl.format(l.t["4X7vPo"], {
          popoutWindowIcon: {},
          popoutWindowIconHook: () => (0, n.jsx)(r.tfB, {
            color: "currentColor",
            className: c.LE,
            size: "xs"
          })
        }),
        onClick: e,
        fullWidth: true
      })
    })]
  })
}