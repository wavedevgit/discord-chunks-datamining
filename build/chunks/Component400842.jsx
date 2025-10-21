/** Chunk was on 21863 **/
/** chunk id: 400842, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  d: () => d
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js");
require("./651711.js");
var Chunk551556 = require("./551556.jsx");
require("./388032.jsx");
var Chunk957048 = require("./957048.js");
require("./347157.js"), require("./177266.js");
let d = e => {
  let {
    name: t,
    description: i,
    checked: r,
    actionLabel: d,
    actionHandler: h
  } = e, u = null;
  return u = r ? (0, n.jsx)(s.Z, {
    width: 20,
    height: 20
  }) : (0, n.jsx)(o.k$p, {
    size: "custom",
    color: l.Z.colors.STATUS_DANGER.css,
    width: 20,
    height: 20
  }), (0, n.jsxs)("div", {
    className: a.checklistItem,
    children: [(0, n.jsx)("div", {
      className: a.checklistIcon,
      children: u
    }), (0, n.jsxs)("div", {
      className: c()(a.__invalid_checklistText, r && a.ineligibleRow),
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        className: a.checklistItemName,
        children: t
      }), (0, n.jsx)(o.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: i
      })]
    }), null != d && (0, n.jsx)("div", {
      className: a.eligibilityActionContainer,
      children: (0, n.jsx)(o.Button, {
        variant: "primary",
        onClick: h,
        text: d,
        size: "sm"
      })
    })]
  })
}