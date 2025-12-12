/** Chunk was on 85342 **/
/** chunk id: 635774, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk631936 = require("./631936.js");

function l(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsxs)("div", {
    className: s.infoContainer,
    children: [(0, r.jsx)(i.Heading, {
      className: s.finishTitle,
      color: "text-strong",
      variant: "heading-xl/bold",
      children: o.intl.string(o.t["3C+rbC"])
    }), (0, r.jsx)(i.Text, {
      className: s.subtitleFinish,
      color: "text-default",
      variant: "text-md/medium",
      children: o.intl.string(o.t.TS1L09)
    }), (0, r.jsx)(i.Text, {
      className: s.promptFinish,
      color: "text-default",
      variant: "text-md/medium",
      children: o.intl.format(o.t.bWE0ZD, {
        onClick: () => {
          t(), (0, a.openUserSettings)()
        }
      })
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: s.button,
      children: (0, r.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        text: o.intl.string(o.t["yD/zkn"]),
        type: "button",
        onClick: t
      })
    })]
  })
}