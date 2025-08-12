/** Chunk was on web.js **/
/** chunk id: 893732, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk936523 = require("./936523.js");

function s(e) {
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
      children: [(0, r.jsx)(i.X6q, {
        variant: "heading-md/semibold",
        className: a.headerText,
        children: o.intl.string(o.t.LIIyeH)
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: o.intl.format(o.t["4/6vQk"], {
          guildName: n
        })
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: a.button,
        children: (0, r.jsx)(i.zxk, {
          variant: "primary",
          text: o.intl.string(o.t.BddRzc),
          onClick: t
        })
      })]
    })]
  })
}