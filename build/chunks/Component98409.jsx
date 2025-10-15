/** Chunk was on 73848 **/
/** chunk id: 98409, original params: n,t,i (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk934415 = require("./934415.js"),
  Chunk572004 = require("./572004.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx");

function d(n) {
  let {
    guild: t,
    onSelect: i
  } = n;
  return (0, s.jsx)(a.v2r, {
    navId: "game-shop-context",
    "aria-label": o.intl.string(o.t.vyaWs7),
    onClose: e.Zy,
    onSelect: i,
    children: (0, s.jsx)(a.kSQ, {
      children: (0, s.jsx)(a.sNh, {
        id: "game-shop-copy-link",
        label: o.intl.string(o.t.WqhZsr),
        action: () => {
          (0, c.JG)((0, r.wR)(t.id, l.oC.GAME_SHOP))
        }
      })
    })
  })
}