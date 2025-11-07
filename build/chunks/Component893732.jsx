/** Chunk was on 13140 **/
/** chunk id: 893732, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk771371 = require("./771371.js");

function o(e) {
  let {
    onClose: t,
    guildName: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a.container,
    children: [(0, r.jsx)("div", {
      className: a.iconContainer,
      children: (0, r.jsx)(i.YlB, {
        size: "custom",
        color: "currentColor",
        className: a.icon,
        width: 20,
        height: 20
      })
    }), (0, r.jsxs)("div", {
      className: a.header,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        className: a.headerText,
        children: l.intl.string(l.t.LIIyeE)
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: l.intl.format(l.t["4/6vQh"], {
          guildName: n
        })
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: a.button,
        children: (0, r.jsx)(i.Button, {
          variant: "primary",
          text: l.intl.string(l.t.BddRzS),
          onClick: t
        })
      })]
    })]
  })
}