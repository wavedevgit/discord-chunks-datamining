/** Chunk was on 79764 **/
/** chunk id: 109983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk207568 = require("./207568.js"),
  Chunk216019 = require("./216019.js");

function s(e) {
  let {
    icon: t,
    message: n,
    onClick: s,
    autoFocus: o
  } = e;
  return (0, i.jsx)(a.tEY, {
    children: (0, i.jsxs)("button", {
      className: l.container,
      onClick: s,
      autoFocus: o,
      children: [(0, i.jsx)("img", {
        className: l.icon,
        alt: "",
        src: t
      }), (0, i.jsx)(a.Text, {
        className: l.text,
        variant: "text-md/bold",
        children: n
      }), (0, i.jsx)("img", {
        className: l.arrow,
        alt: "",
        src: r
      })]
    })
  })
}