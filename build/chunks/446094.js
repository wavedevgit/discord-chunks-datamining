/** Chunk was on 31930 **/
/** chunk id: 446094, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk300284 = require("./300284.js"),
  Chunk321114 = require("./321114.js"),
  Chunk526761 = require("./526761.js");

function o(e, t) {
  let [n, o] = i.useState(false), a = i.useCallback(async () => {
    o(true), await (0, s.c)(e, true), o(false), null == t || t()
  }, [e, t]), c = (0, r.Z)({
    scrollPosition: l.Y_.GUILD_TAG
  });
  return {
    isAdopting: n,
    onAdoptTag: a,
    onEditProfile: i.useCallback(() => {
      null == t || t(), c()
    }, [c, t])
  }
}