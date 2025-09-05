/** Chunk was on 55777 **/
/** chunk id: 739319, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk852950 = require("./852950.js");

function _(e) {
  let {
    element: {
      data: {
        title: t,
        body: n,
        sms: a,
        is_localized: _
      }
    }
  } = e, [m, p] = i.useState(false), f = i.useRef(s.Z.reactParserFor(s.Z.defaultRules));
  return _ ? (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsx)(o.X6q, {
      variant: "heading-sm/semibold",
      color: "header-secondary",
      className: u.header,
      children: t
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      className: u.bodyText,
      children: f.current(n)
    }), (0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: l()(u.smsNumberContainer, {
          [u.copied]: m
        }),
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          selectable: true,
          className: u.smsNumberText,
          children: a
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: u.__invalid_trailingButton,
          children: (0, r.jsx)(o.zxk, {
            variant: "secondary",
            size: "sm",
            text: m ? d.intl.string(d.t["t5VZ8/"]) : d.intl.string(d.t.OpuAlJ),
            onClick: () => {
              (0, c.JG)(a, () => p(true))
            }
          })
        })]
      })
    })]
  }) : null
}