/** Chunk was on 46317 **/
/** chunk id: 841178, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk952164 = require("./952164.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk949498 = require("./949498.js");

function c(t) {
  let {
    transitionState: i,
    onClose: n
  } = t, c = (0, s.Dt)();
  return (0, e.jsxs)(r.Y0X, {
    "aria-labelledby": c,
    transitionState: i,
    size: r.CgR.SMALL,
    parentComponent: "SpotifyPremiumUpgradeModal",
    children: [(0, e.jsx)(r.xBx, {
      separator: false,
      children: (0, e.jsx)(r.Heading, {
        id: c,
        variant: "heading-lg/semibold",
        children: d.intl.formatToMarkdownString(d.t.DQsSGr, {})
      })
    }), (0, e.jsxs)(r.hzk, {
      children: [(0, e.jsx)(a.Z, {
        justify: a.Z.Justify.CENTER,
        children: (0, e.jsx)("div", {
          className: l.image
        })
      }), (0, e.jsx)(r.Text, {
        className: l.text,
        variant: "text-sm/normal",
        children: d.intl.string(d.t.xGMwi9)
      })]
    }), (0, e.jsx)(r.mzw, {
      children: (0, e.jsxs)(r.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, e.jsx)(r.Button, {
          variant: "primary",
          text: d.intl.string(d.t.n8U5jd),
          onClick: function() {
            (0, o.KK)(), n()
          }
        }), (0, e.jsx)(r.Button, {
          variant: "secondary",
          text: d.intl.string(d.t["ETE/oC"]),
          onClick: n
        })]
      })
    })]
  })
}