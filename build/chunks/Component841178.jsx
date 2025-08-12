/** Chunk was on 46317 **/
/** chunk id: 841178, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk952164 = require("./952164.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk798842 = require("./798842.js");

function x(t) {
  let {
    transitionState: i,
    onClose: e
  } = t, x = (0, r.Dt)();
  return (0, n.jsxs)(s.Y0X, {
    "aria-labelledby": x,
    transitionState: i,
    size: s.CgR.SMALL,
    parentComponent: "SpotifyPremiumUpgradeModal",
    children: [(0, n.jsx)(s.xBx, {
      separator: false,
      children: (0, n.jsx)(s.X6q, {
        id: x,
        variant: "heading-lg/semibold",
        children: o.intl.formatToMarkdownString(o.t.DQsSGh, {})
      })
    }), (0, n.jsxs)(s.hzk, {
      children: [(0, n.jsx)(a.Z, {
        justify: a.Z.Justify.CENTER,
        children: (0, n.jsx)("div", {
          className: l.image
        })
      }), (0, n.jsx)(s.Text, {
        className: l.text,
        variant: "text-sm/normal",
        children: o.intl.string(o.t.xGMwi4)
      })]
    }), (0, n.jsx)(s.mzw, {
      children: (0, n.jsxs)(s.hE2, {
        direction: "horizontal-reverse",
        children: [(0, n.jsx)(s.zxk, {
          variant: "primary",
          text: o.intl.string(o.t.n8U5jY),
          onClick: function() {
            (0, c.KK)(), e()
          }
        }), (0, n.jsx)(s.zxk, {
          variant: "secondary",
          text: o.intl.string(o.t["ETE/oK"]),
          onClick: e
        })]
      })
    })]
  })
}