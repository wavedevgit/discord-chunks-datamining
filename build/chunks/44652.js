/** Chunk was on web.js **/
/** chunk id: 44652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk320582 = require("./320582.js"),
  Chunk298213 = require("./298213.js"),
  Chunk749302 = require("./749302.jsx"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    user: t
  } = e, n = (0, i.vh)(t.id), l = r.useCallback(e => {
    a.Z.acceptFriendRequest({
      userId: t.id,
      applicationId: e.id,
      location: "Context Menu"
    })
  }, [t.id]);
  return (0, o.Z)({
    user: t,
    gameRelationships: n,
    menuItemId: "add-game-friend",
    label: s.intl.string(s.t.X76oLM),
    onClick: l
  })
}