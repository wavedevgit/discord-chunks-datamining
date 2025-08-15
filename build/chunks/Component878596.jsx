/** Chunk was on 30202 **/
/** chunk id: 878596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk64372 = require("./64372.js");
let a = e => {
  let {
    label: t,
    onClick: n,
    submitting: a
  } = e;
  return (0, i.jsx)(r.P3F, {
    onClick: a ? true : n,
    className: s.button,
    children: (0, i.jsxs)("div", {
      className: s.contentContainer,
      children: [a ? (0, i.jsx)(r.$jN, {
        type: r.$jN.Type.PULSING_ELLIPSIS,
        className: s.__invalid_spinner
      }) : (0, i.jsx)(r.Text, {
        variant: "text-md/medium",
        className: s.label,
        children: t
      }), (0, i.jsx)(r.CJ0, {
        size: "md",
        color: "currentColor",
        className: s.arrow
      })]
    })
  })
}