/** Chunk was on 54844 **/
/** chunk id: 739319, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk595670 = require("./595670.js");

function m(e) {
  let {
    element: {
      data: {
        title: t,
        body: n,
        sms: i,
        is_localized: m
      }
    }
  } = e, [b, p] = l.useState(false), g = l.useRef(o.Z.reactParserFor(o.Z.defaultRules));
  return m ? (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-sm/semibold",
      color: "text-default",
      className: u.header,
      children: t
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      className: u.bodyText,
      children: g.current(n)
    }), (0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: a()(u.smsNumberContainer, {
          [u.copied]: b
        }),
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          selectable: true,
          className: u.smsNumberText,
          children: i
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: u.__invalid_trailingButton,
          children: (0, r.jsx)(s.Button, {
            variant: "secondary",
            size: "sm",
            text: b ? c.intl.string(c.t.t5VZ88) : c.intl.string(c.t.OpuAlK),
            onClick: () => {
              (0, d.JG)(i, () => p(true))
            }
          })
        })]
      })
    })]
  }) : null
}