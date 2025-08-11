/** Chunk was on web.js **/
/** chunk id: 657352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk695256 = require("./695256.js");
let s = e => {
  let {
    guild: t,
    onClose: s
  } = e;
  return (0, r.jsxs)("div", {
    className: a.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: a.image,
      src: n(238980)
    }), (0, r.jsxs)("div", {
      className: a.content,
      children: [(0, r.jsx)(i.X6q, {
        variant: "heading-md/semibold",
        children: o.intl.format(o.t.THgVCA, {
          guild: t.name
        })
      }), (0, r.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: o.intl.string(o.t["1yq3nJ"])
      }), (0, r.jsx)("div", {
        className: a.buttonContainer,
        children: (0, r.jsx)(i.zxk, {
          variant: "primary",
          text: o.intl.string(o.t.hLw0wc),
          onClick: s
        })
      })]
    })]
  })
}