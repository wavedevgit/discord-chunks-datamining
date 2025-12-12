/** Chunk was on web.js **/
/** chunk id: 81866, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk835473 = require("./835473.js"),
  Chunk91896 = require("./91896.js");

function o(e) {
  let t = (0, r.e7)([a.Z], () => {
    let t = a.Z.getGameRelationshipsForUser(e);
    if (0 !== t.length) return t[0].applicationId
  });
  return (0, i.q)(t)
}