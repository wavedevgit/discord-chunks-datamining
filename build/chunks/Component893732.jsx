/** Chunk was on 71264 **/
/** chunk id: 893732, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk544603 = require("./544603.js");

function o(e) {
  let {
    onClose: t,
    guildName: n
  } = e;
  return (0, i.jsxs)("div", {
    className: a.container,
    children: [(0, i.jsx)("div", {
      className: a.iconContainer,
      children: (0, i.jsx)(r.YlB, {
        size: "custom",
        color: "currentColor",
        className: a.icon,
        width: 20,
        height: 20
      })
    }), (0, i.jsxs)("div", {
      className: a.header,
      children: [(0, i.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        className: a.headerText,
        children: l.intl.string(l.t.LIIyeE)
      }), (0, i.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: l.intl.format(l.t["4/6vQh"], {
          guildName: n
        })
      }), (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: a.button,
        children: (0, i.jsx)(r.Button, {
          variant: "primary",
          text: l.intl.string(l.t.BddRzS),
          onClick: t
        })
      })]
    })]
  })
}