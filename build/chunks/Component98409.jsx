/** Chunk was on 73848 **/
/** chunk id: 98409, original params: n,s,t (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk934415 = require("./934415.js"),
  Chunk572004 = require("./572004.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx");

function d(n) {
  let {
    guild: s,
    onSelect: t
  } = n;
  return (0, i.jsx)(a.v2r, {
    navId: "game-shop-context",
    "aria-label": r.intl.string(r.t.vyaWs7),
    onClose: e.Zy,
    onSelect: t,
    children: (0, i.jsx)(a.kSQ, {
      children: (0, i.jsx)(a.sNh, {
        id: "game-shop-copy-link",
        label: r.intl.string(r.t.WqhZss),
        action: () => {
          (0, l.JG)((0, c.wR)(s.id, o.oC.GAME_SHOP))
        }
      })
    })
  })
}