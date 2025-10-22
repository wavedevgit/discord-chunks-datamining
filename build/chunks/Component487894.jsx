/** Chunk was on 91315 **/
/** chunk id: 487894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk499033 = require("./499033.jsx"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk343503 = require("./343503.js");

function c(e) {
  let {
    channel: t,
    header: n,
    startThread: c
  } = e, d = (0, s.NE)(t), u = (0, s.Xu)(t);
  return (0, r.jsxs)("div", {
    className: i.container,
    children: [(0, r.jsxs)("div", {
      className: i.iconContainer,
      children: [(0, r.jsx)("div", {
        className: i.icon,
        children: (0, r.jsx)(l.or_, {
          size: "custom",
          color: "currentColor",
          width: 36,
          height: 36
        })
      }), (0, r.jsx)(a.Z, {
        className: i.stars
      })]
    }), (0, r.jsx)(l.Heading, {
      className: i.header,
      variant: "heading-xl/semibold",
      children: n
    }), (0, r.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      children: o.intl.string(o.t.jmq9GC)
    }), d || u ? (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: i.cta,
      children: (0, r.jsx)(l.Button, {
        variant: "primary",
        text: o.intl.string(o.t.rBIGBL),
        onClick: c
      })
    }) : null]
  })
}