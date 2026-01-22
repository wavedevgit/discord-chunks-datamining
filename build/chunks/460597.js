/** Chunk was on web.js **/
/** chunk id: 460597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk922590 = require("./922590.js"),
  Chunk607272 = require("./607272.js"),
  Chunk427262 = require("./427262.js"),
  Chunk433880 = require("./433880.jsx"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    user: t
  } = e, n = (0, a.f1)(t.id), u = o.Ay.useName(t), d = r.useCallback(e => {
    let {
      id: n,
      name: r
    } = e;
    (0, i.A)({
      title: c.intl.formatToPlainString(c.t["GOFk9+"], {
        name: u
      }),
      subtitle: c.intl.format(c.t.dsU5bl, {
        name: u,
        gameName: r
      }),
      confirmText: c.intl.string(c.t["cY+Oob"]),
      onConfirm: () => s.A.removeFriend({
        userId: t.id,
        applicationId: n,
        location: "Context Menu"
      })
    })
  }, [u, t]);
  return (0, l.A)({
    user: t,
    gameRelationships: n,
    menuItemId: "remove-game-friend",
    label: c.intl.string(c.t.RLcE6x),
    onClick: d,
    color: "danger"
  })
}