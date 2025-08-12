/** Chunk was on 21863 **/
/** chunk id: 400842, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js");
require("./651711.js");
var Chunk551556 = require("./551556.jsx");
require("./388032.jsx");
var Chunk208829 = require("./208829.js");
require("./347157.js"), require("./177266.js");
let u = e => {
  let {
    name: t,
    description: n,
    checked: i,
    actionLabel: u,
    actionHandler: b
  } = e, d = null;
  return d = i ? (0, r.jsx)(s.Z, {
    width: 20,
    height: 20
  }) : (0, r.jsx)(o.k$p, {
    size: "custom",
    color: l.Z.colors.STATUS_DANGER.css,
    width: 20,
    height: 20
  }), (0, r.jsxs)("div", {
    className: a.checklistItem,
    children: [(0, r.jsx)("div", {
      className: a.checklistIcon,
      children: d
    }), (0, r.jsxs)("div", {
      className: c()(a.__invalid_checklistText, i && a.ineligibleRow),
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-md/semibold",
        className: a.checklistItemName,
        children: t
      }), (0, r.jsx)(o.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: n
      })]
    }), null != u && (0, r.jsx)("div", {
      className: a.eligibilityActionContainer,
      children: (0, r.jsx)(o.zxk, {
        variant: "primary",
        onClick: b,
        text: u,
        size: "sm"
      })
    })]
  })
}