/** Chunk was on 99523 **/
/** chunk id: 41614, original params: t,a,n (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk147036 = require("./147036.js"),
  Chunk957565 = require("./957565.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  let {
    guild: a,
    onSelect: n
  } = t;
  return (0, i.jsx)(e.W1t, {
    "data-menu-migration-ready": true,
    navId: "game-shop-context",
    "aria-label": c.intl.string(c.t.vyaWs7),
    onClose: s.Z_,
    onSelect: n,
    children: (0, i.jsx)(e.rXV, {
      children: (0, i.jsx)(e.Drp, {
        id: "game-shop-copy-link",
        label: c.intl.string(c.t.WqhZss),
        action: () => {
          (0, d.C)((0, r.n)(a.id, l.VV.GAME_SHOP))
        }
      })
    })
  })
}