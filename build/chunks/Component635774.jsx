/** Chunk was on 85342 **/
/** chunk id: 635774, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk38579 = require("./38579.js");

function l(e) {
  let {
    onClose: t
  } = e;
  return (0, n.jsxs)("div", {
    className: s.infoContainer,
    children: [(0, n.jsx)(i.X6q, {
      className: s.finishTitle,
      color: "header-primary",
      variant: "heading-xl/bold",
      children: a.intl.string(a.t["3C+rbG"])
    }), (0, n.jsx)(i.Text, {
      className: s.subtitleFinish,
      color: "header-secondary",
      variant: "text-md/medium",
      children: a.intl.string(a.t.TS1L09)
    }), (0, n.jsx)(i.Text, {
      className: s.promptFinish,
      color: "header-secondary",
      variant: "text-md/medium",
      children: a.intl.format(a.t.bWE0ZG, {
        onClick: () => {
          t(), (0, o.openUserSettings)()
        }
      })
    }), (0, n.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: s.button,
      children: (0, n.jsx)(i.zxk, {
        variant: "primary",
        size: "sm",
        text: a.intl.string(a.t["yD/zkp"]),
        type: "button",
        onClick: t
      })
    })]
  })
}