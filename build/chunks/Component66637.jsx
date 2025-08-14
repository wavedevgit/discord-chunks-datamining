/** Chunk was on 32561 **/
/** chunk id: 66637, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk514482 = require("./514482.js");
let c = Chunk73800.memo(Chunk73800.forwardRef(function(e, t) {
  let {
    onClick: n,
    onContextMenu: a,
    className: i,
    disabled: c,
    children: d,
    "aria-label": u
  } = e;
  return (0, r.jsx)(s.kL8, {
    ref: t,
    className: l()(o.card, i, {
      [o.clickable]: null != n,
      [o.disabled]: c
    }),
    onContextMenu: a,
    onClick: c ? true : n,
    "aria-label": u,
    children: d
  })
}))