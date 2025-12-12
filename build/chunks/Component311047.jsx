/** Chunk was on 73791 **/
/** chunk id: 311047, original params: e,n,a (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk792089 = require("./792089.js");
let i = e => {
  let {
    title: n,
    subtitle: a,
    icon: i
  } = e;
  return (0, t.jsxs)("div", {
    className: o.wrapper,
    children: [null != i && (0, t.jsx)(i, {
      size: "xs",
      color: "currentColor",
      className: o.icon
    }), (0, t.jsx)(d.Text, {
      variant: "text-md/normal",
      className: o.title,
      children: n
    }), null != a && "" !== a ? (0, t.jsx)(d.Text, {
      variant: "text-xs/semibold",
      className: o.subtitle,
      children: a
    }) : null]
  })
}