/** Chunk was on 79764 **/
/** chunk id: 109983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk624516 = require("./624516.js"),
  Chunk216019 = require("./216019.js");

function r(e) {
  let {
    icon: t,
    message: n,
    onClick: r,
    autoFocus: o
  } = e;
  return (0, i.jsx)(s.tEY, {
    children: (0, i.jsxs)("button", {
      className: l.container,
      onClick: r,
      autoFocus: o,
      children: [(0, i.jsx)("img", {
        className: l.icon,
        alt: "",
        src: t
      }), (0, i.jsx)(s.Text, {
        className: l.text,
        variant: "text-md/bold",
        children: n
      }), (0, i.jsx)("img", {
        className: l.arrow,
        alt: "",
        src: a
      })]
    })
  })
}