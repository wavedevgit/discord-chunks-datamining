/** Chunk was on web.js **/
/** chunk id: 633057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk429913 = require("./429913.js"),
  Chunk800828 = require("./800828.js");

function s(e) {
  let t = (0, r.bG)([a.A], () => {
    let t = a.A.getGameRelationshipsForUser(e);
    if (0 !== t.length) return t[0].applicationId
  });
  return (0, i.h)(t)
}