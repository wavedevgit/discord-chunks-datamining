/** Chunk was on 99523 **/
/** chunk id: 41614, original params: t,n,s (module,exports,require) **/
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
    guild: n,
    onSelect: s
  } = t;
  return (0, i.jsx)(a.W1t, {
    navId: "game-shop-context",
    "aria-label": d.intl.string(d.t.vyaWs7),
    onClose: e.Z_,
    onSelect: s,
    children: (0, i.jsx)(a.rXV, {
      children: (0, i.jsx)(a.Drp, {
        id: "game-shop-copy-link",
        label: d.intl.string(d.t.WqhZss),
        action: () => {
          (0, l.C)((0, r.n)(n.id, c.VV.GAME_SHOP))
        }
      })
    })
  })
}