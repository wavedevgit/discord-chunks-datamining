/** Chunk was on 85342 **/
/** chunk id: 635774, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk38579 = require("./38579.js");

function c(e) {
  let {
    onClose: t
  } = e;
  return (0, n.jsxs)("div", {
    className: l.infoContainer,
    children: [(0, n.jsx)(i.X6q, {
      className: l.finishTitle,
      color: "header-primary",
      variant: "heading-xl/bold",
      children: s.intl.string(s.t["3C+rbG"])
    }), (0, n.jsx)(i.Text, {
      className: l.subtitleFinish,
      color: "header-secondary",
      variant: "text-md/medium",
      children: s.intl.string(s.t.TS1L09)
    }), (0, n.jsx)(i.Text, {
      className: l.promptFinish,
      color: "header-secondary",
      variant: "text-md/medium",
      children: s.intl.format(s.t.bWE0ZG, {
        onClick: () => {
          t(), a.Z.open(o.oAB.ACCOUNT)
        }
      })
    }), (0, n.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: l.button,
      children: (0, n.jsx)(i.zxk, {
        variant: "primary",
        size: "sm",
        text: s.intl.string(s.t["yD/zkp"]),
        type: "button",
        onClick: t
      })
    })]
  })
}