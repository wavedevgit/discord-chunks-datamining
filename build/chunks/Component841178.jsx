/** Chunk was on 46317 **/
/** chunk id: 841178, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk952164 = require("./952164.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk551850 = require("./551850.js");

function d(t) {
  let {
    transitionState: i,
    onClose: n
  } = t, d = (0, s.Dt)();
  return (0, e.jsxs)(a.Y0X, {
    "aria-labelledby": d,
    transitionState: i,
    size: a.CgR.SMALL,
    parentComponent: "SpotifyPremiumUpgradeModal",
    children: [(0, e.jsx)(a.xBx, {
      separator: false,
      children: (0, e.jsx)(a.Heading, {
        id: d,
        variant: "heading-lg/semibold",
        children: l.intl.formatToMarkdownString(l.t.DQsSGh, {})
      })
    }), (0, e.jsxs)(a.hzk, {
      children: [(0, e.jsx)(r.Z, {
        justify: r.Z.Justify.CENTER,
        children: (0, e.jsx)("div", {
          className: c.image
        })
      }), (0, e.jsx)(a.Text, {
        className: c.text,
        variant: "text-sm/normal",
        children: l.intl.string(l.t.xGMwi4)
      })]
    }), (0, e.jsx)(a.mzw, {
      children: (0, e.jsxs)(a.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, e.jsx)(a.Button, {
          variant: "primary",
          text: l.intl.string(l.t.n8U5jY),
          onClick: function() {
            (0, o.KK)(), n()
          }
        }), (0, e.jsx)(a.Button, {
          variant: "secondary",
          text: l.intl.string(l.t["ETE/oK"]),
          onClick: n
        })]
      })
    })]
  })
}