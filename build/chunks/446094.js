/** Chunk was on web.js **/
/** chunk id: 446094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk300284 = require("./300284.js"),
  Chunk321114 = require("./321114.js"),
  Chunk526761 = require("./526761.js");

function s(e, t) {
  let [n, s] = r.useState(false), l = r.useCallback(async () => {
    s(true), await (0, a.c)(e, true), s(false), null == t || t()
  }, [e, t]), c = (0, i.Z)({
    scrollPosition: o.Y_.GUILD_TAG
  });
  return {
    isAdopting: n,
    onAdoptTag: l,
    onEditProfile: r.useCallback(() => {
      null == t || t(), c()
    }, [c, t])
  }
}