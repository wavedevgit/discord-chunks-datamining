/** Chunk was on 79764 **/
/** chunk id: 109983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk73610 = require("./73610.js"),
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
      className: s.container,
      onClick: a,
      autoFocus: o,
      children: [(0, i.jsx)("img", {
        className: s.icon,
        alt: "",
        src: t
      }), (0, i.jsx)(l.Text, {
        className: s.text,
        variant: "text-md/bold",
        children: n
      }), (0, i.jsx)("img", {
        className: s.arrow,
        alt: "",
        src: r
      })]
    })
  })
}