/** Chunk was on 79764 **/
/** chunk id: 109983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk531803 = require("./531803.js"),
  Chunk216019 = require("./216019.js");

function a(e) {
  let {
    icon: t,
    message: n,
    onClick: a,
    autoFocus: o
  } = e;
  return (0, i.jsx)(l.tEY, {
    children: (0, i.jsxs)("button", {
      className: r.container,
      onClick: a,
      autoFocus: o,
      children: [(0, i.jsx)("img", {
        className: r.icon,
        alt: "",
        src: t
      }), (0, i.jsx)(l.Text, {
        className: r.text,
        variant: "text-md/bold",
        children: n
      }), (0, i.jsx)("img", {
        className: r.arrow,
        alt: "",
        src: s
      })]
    })
  })
}