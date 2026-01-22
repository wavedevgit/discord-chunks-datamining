/** Chunk was on 91699 **/
/** chunk id: 167084, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  e: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js");
require("./748112.js");
var Chunk820193 = require("./820193.jsx");
require("./985018.jsx");
var Chunk975398 = require("./975398.js");
require("./950506.js"), require("./848887.js");
let d = e => {
  let {
    name: t,
    description: r,
    checked: i,
    actionLabel: d,
    actionHandler: u
  } = e, b = null;
  return b = i ? (0, n.jsx)(a.A, {
    width: 20,
    height: 20
  }) : (0, n.jsx)(o.aXh, {
    size: "custom",
    color: c.A.colors.ICON_FEEDBACK_CRITICAL,
    width: 20,
    height: 20
  }), (0, n.jsxs)("div", {
    className: s.gd,
    children: [(0, n.jsx)("div", {
      className: s.aV,
      children: b
    }), (0, n.jsxs)("div", {
      className: l()(s.__invalid_checklistText, i && s.lu),
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        className: s.LA,
        children: t
      }), (0, n.jsx)(o.Text, {
        color: "interactive-text-default",
        variant: "text-sm/normal",
        children: r
      })]
    }), null != d && (0, n.jsx)("div", {
      className: s.dT,
      children: (0, n.jsx)(o.Button, {
        variant: "primary",
        onClick: u,
        text: d,
        size: "sm"
      })
    })]
  })
}