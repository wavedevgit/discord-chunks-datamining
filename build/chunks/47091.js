/** Chunk was on web.js **/
/** chunk id: 47091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk320582 = require("./320582.js"),
  Chunk298213 = require("./298213.js"),
  Chunk51144 = require("./51144.js"),
  Chunk749302 = require("./749302.jsx"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    user: t
  } = e, n = (0, a.ML)(t.id), u = s.ZP.useName(t), d = r.useCallback(e => {
    let {
      id: n,
      name: r
    } = e;
    (0, i.Z)({
      title: c.intl.formatToPlainString(c.t["GOFk9+"], {
        name: u
      }),
      subtitle: c.intl.format(c.t.dsU5bl, {
        name: u,
        gameName: r
      }),
      confirmText: c.intl.string(c.t["cY+Oob"]),
      onConfirm: () => o.Z.removeFriend({
        userId: t.id,
        applicationId: n,
        location: "Context Menu"
      })
    })
  }, [u, t]);
  return (0, l.Z)({
    user: t,
    gameRelationships: n,
    menuItemId: "remove-game-friend",
    label: c.intl.string(c.t.RLcE6x),
    onClick: d,
    color: "danger"
  })
}