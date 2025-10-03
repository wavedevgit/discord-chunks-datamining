/** Chunk was on 1272 **/
/** chunk id: 321488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var r, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk286389 = require("./286389.js"),
  u = ((r = u || {})[r.ACCEPT = 0] = "ACCEPT", r[r.DENY = 1] = "DENY", r[r.DEFAULT = 2] = "DEFAULT", r);

function d(e) {
  let {
    icon: t,
    tooltip: n,
    onClick: r,
    actionType: l = 2,
    shouldHighlight: u
  } = e;
  return (0, i.jsx)(o.u, {
    text: n,
    children: (0, i.jsx)(s.P3F, {
      tag: "div",
      "aria-label": n,
      onClick: r,
      className: a()(c.actionButton, {
        [c.actionAccept]: 0 === l,
        [c.actionDeny]: 1 === l,
        [c.highlight]: u
      }),
      children: (0, i.jsx)(t, {
        className: c.icon,
        color: "currentColor"
      })
    })
  })
}
d.ActionTypes = u;
let p = d