/** Chunk was on 92504 **/
/** chunk id: 66637, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk674633 = require("./674633.js");
let c = Chunk473749.memo(function(e) {
  let {
    onClick: t,
    onContextMenu: n,
    className: r,
    disabled: i,
    children: c,
    "aria-label": d,
    ref: u
  } = e;
  return (0, a.jsx)(s.kL8, {
    ref: u,
    className: l()(o.card, r, {
      [o.clickable]: null != t,
      [o.disabled]: i
    }),
    onContextMenu: n,
    onClick: i ? true : t,
    "aria-label": d,
    children: c
  })
})