/** Chunk was on 2827 **/
/** chunk id: 178856, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk391526 = require("./391526.js");
let s = e => {
  let {
    label: t,
    onClick: n,
    submitting: s
  } = e;
  return (0, r.jsx)(i.DUT, {
    onClick: s ? true : n,
    className: l.x6,
    children: (0, r.jsxs)("div", {
      className: l.hQ,
      children: [s ? (0, r.jsx)(i.y$y, {
        type: i.y$y.Type.PULSING_ELLIPSIS,
        className: l.__invalid_spinner
      }) : (0, r.jsx)(i.Text, {
        variant: "text-md/medium",
        className: l.Pf,
        children: t
      }), (0, r.jsx)(i.abt, {
        size: "md",
        color: "currentColor",
        className: l.UE
      })]
    })
  })
}