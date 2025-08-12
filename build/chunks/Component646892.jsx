/** Chunk was on 5533 **/
/** chunk id: 646892, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk307537 = require("./307537.jsx"),
  Chunk336984 = require("./336984.js");

function u(e) {
  let {
    className: t,
    shouldShine: n = true,
    size: i = 14
  } = e, u = (0, a.e7)([o.Z], () => o.Z.useReducedMotion);
  return (0, r.jsxs)("div", {
    className: l()([d.guildProductRoleIcon, t]),
    children: [(0, r.jsx)(c.Z, {
      height: i,
      width: i
    }), (0, r.jsx)(s.ZX5, {
      className: d.shine,
      shinePaused: u || !n,
      shineSize: s.gtL.ShineSizes.SMALL
    })]
  })
}