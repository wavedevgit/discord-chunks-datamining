/** Chunk was on web.js **/
/** chunk id: 509302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk922590 = require("./922590.js"),
  Chunk607272 = require("./607272.js"),
  Chunk433880 = require("./433880.jsx"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  let {
    user: t
  } = e, n = (0, i.fi)(t.id), l = r.useCallback(e => {
    a.A.acceptFriendRequest({
      userId: t.id,
      applicationId: e.id,
      location: "Context Menu"
    })
  }, [t.id]);
  return (0, o.A)({
    user: t,
    gameRelationships: n,
    menuItemId: "add-game-friend",
    label: s.intl.string(s.t.X76oLM),
    onClick: l
  })
}