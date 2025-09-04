/** Chunk was on 1272 **/
/** chunk id: 670362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c,
  g: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk491873 = require("./491873.js");

function s(e) {
  let {
    children: t,
    id: n
  } = e;
  return (0, r.jsx)(l.Text, {
    className: o.popoutHeading,
    color: "text-secondary",
    id: n,
    variant: "text-sm/semibold",
    children: t
  })
}
let c = function(e) {
  let {
    children: t,
    renderPopout: n
  } = e, s = (0, a.Dt)(), c = i.useRef(null);
  return (0, r.jsx)(l.yRy, {
    align: "right",
    position: "bottom",
    renderPopout: e => (0, r.jsx)(l.VqE, {
      className: o.popout,
      "aria-labelledby": s,
      children: n(e, s)
    }),
    scrollBehavior: "close",
    targetElementRef: c,
    children: e => t(e, c)
  })
}