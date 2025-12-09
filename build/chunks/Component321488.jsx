/** Chunk was on 74969 **/
/** chunk id: 321488, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var n, Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk286389 = require("./286389.js"),
  c = ((n = c || {})[n.ACCEPT = 0] = "ACCEPT", n[n.DENY = 1] = "DENY", n[n.DEFAULT = 2] = "DEFAULT", n);

function h(e) {
  let {
    icon: t,
    tooltip: i,
    onClick: n,
    actionType: r = 2,
    shouldHighlight: c
  } = e;
  return (0, s.jsx)(a.u, {
    text: i,
    children: (0, s.jsx)(l.P3F, {
      tag: "div",
      "aria-label": i,
      onClick: n,
      className: o()(u.actionButton, {
        [u.actionAccept]: 0 === r,
        [u.actionDeny]: 1 === r,
        [u.highlight]: c
      }),
      children: (0, s.jsx)(t, {
        className: u.icon,
        color: "currentColor"
      })
    })
  })
}
h.ActionTypes = c;
let p = h