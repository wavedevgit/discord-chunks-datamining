/** Chunk was on 8551 **/
/** chunk id: 311047, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk915578 = require("./915578.js");
let _ = e => {
  let {
    title: n,
    subtitle: t,
    icon: _
  } = e;
  return (0, a.jsxs)("div", {
    className: i.wrapper,
    children: [null != _ && (0, a.jsx)(_, {
      size: "xs",
      color: "currentColor",
      className: i.icon
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      className: i.title,
      children: n
    }), null != t && "" !== t ? (0, a.jsx)(o.Text, {
      variant: "text-xs/semibold",
      className: i.subtitle,
      children: t
    }) : null]
  })
}