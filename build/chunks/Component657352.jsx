/** Chunk was on 34740 **/
/** chunk id: 657352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk576385 = require("./576385.js");
let o = e => {
  let {
    guild: t,
    onClose: o
  } = e;
  return (0, i.jsxs)("div", {
    className: a.container,
    children: [(0, i.jsx)("img", {
      alt: "",
      className: a.image,
      src: n(238980)
    }), (0, i.jsxs)("div", {
      className: a.content,
      children: [(0, i.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: l.intl.format(l.t.THgVCC, {
          guild: t.name
        })
      }), (0, i.jsx)(r.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: l.intl.string(l.t["1yq3nO"])
      }), (0, i.jsx)("div", {
        className: a.buttonContainer,
        children: (0, i.jsx)(r.Button, {
          variant: "primary",
          text: l.intl.string(l.t.hLw0wc),
          onClick: o
        })
      })]
    })]
  })
}