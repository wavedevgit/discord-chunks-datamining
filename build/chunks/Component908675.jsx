/** Chunk was on 58652 **/
/** chunk id: 908675, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk46054 = require("./46054.js"),
  Chunk957565 = require("./957565.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk38776 = require("./38776.js");

function m(e) {
  let {
    element: {
      data: {
        title: t,
        body: n,
        sms: a,
        is_localized: m
      }
    }
  } = e, [b, p] = r.useState(false), x = r.useRef(o.A.reactParserFor(o.A.defaultRules));
  return m ? (0, l.jsxs)("div", {
    className: u.kL,
    children: [(0, l.jsx)(s.Heading, {
      variant: "heading-sm/semibold",
      color: "text-default",
      className: u.wx,
      children: t
    }), (0, l.jsx)(s.Text, {
      variant: "text-sm/normal",
      className: u.G3,
      children: x.current(n)
    }), (0, l.jsx)("div", {
      children: (0, l.jsxs)("div", {
        className: i()(u.GH, {
          [u.pG]: b
        }),
        children: [(0, l.jsx)(s.Text, {
          variant: "text-md/normal",
          selectable: true,
          className: u.Kk,
          children: a
        }), (0, l.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: u.__invalid_trailingButton,
          children: (0, l.jsx)(s.Button, {
            variant: "secondary",
            size: "sm",
            text: b ? d.intl.string(d.t.t5VZ88) : d.intl.string(d.t.OpuAlK),
            onClick: () => {
              (0, c.C)(a, () => p(true))
            }
          })
        })]
      })
    })]
  }) : null
}