/** Chunk was on 67208 **/
/** chunk id: 417048, original params: e,c,a (module,exports,require) **/
require.d(exports, {
  X: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk82170 = require("./82170.js");
let b = e => {
  let {
    title: c,
    subtitle: a,
    icon: b
  } = e;
  return (0, f.jsxs)("div", {
    className: _.iE,
    children: [null != b && (0, f.jsx)(b, {
      size: "xs",
      color: "currentColor",
      className: _.Kk
    }), (0, f.jsx)(d.Text, {
      variant: "text-md/normal",
      className: _.DD,
      children: c
    }), null != a && "" !== a ? (0, f.jsx)(d.Text, {
      variant: "text-xs/semibold",
      className: _.VA,
      children: a
    }) : null]
  })
}