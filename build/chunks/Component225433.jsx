/** Chunk was on 89382 **/
/** chunk id: 225433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk903443 = require("./903443.js");
let l = Object.freeze({
  DEFAULT: Chunk903443.default,
  FILLED: Chunk903443.filled
});

function d(e) {
  let {
    className: t,
    onClick: n,
    "aria-label": a,
    look: d = l.DEFAULT
  } = e;
  return (0, i.jsx)(o.P3F, {
    "aria-label": null != a ? a : c.intl.string(c.t.N86XcH),
    className: r()(s.button, d, t),
    onClick: n
  })
}
d.Looks = l