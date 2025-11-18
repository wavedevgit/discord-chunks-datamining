/** Chunk was on 84283 **/
/** chunk id: 526571, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk855532 = require("./855532.js");
let c = Chunk473749.memo(function(e) {
  let {
    onClick: t,
    onContextMenu: n,
    className: a,
    disabled: i,
    children: c,
    "aria-label": d,
    ref: u
  } = e;
  return (0, r.jsx)(s.kL8, {
    ref: u,
    className: l()(o.card, a, {
      [o.clickable]: null != t,
      [o.disabled]: i
    }),
    onContextMenu: n,
    onClick: i ? true : t,
    "aria-label": d,
    children: c
  })
})