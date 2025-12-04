/** Chunk was on web.js **/
/** chunk id: 591085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk80721 = require("./80721.js"),
  Chunk643281 = require("./643281.js"),
  Chunk602307 = require("./602307.js");

function l() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = (0, Chunk442837.e7)([Chunk643281.Z], () => Chunk643281.Z.getMembers()),
    n = (0, Chunk442837.e7)([Chunk643281.Z], () => !Chunk643281.Z.hasFetchedMembers()),
    l = (0, Chunk602307.Z)(module);
  return (0, Chunk473749.useEffect)(() => {
    !async function() {
      !module || Chunk643281.Z.isFetchingMembers() || Chunk643281.Z.hasFetchedMembers() || null != l && await (0, Chunk80721.i1)(l)
    }()
  }, [l, module]), {
    premiumGroupMembers: exports,
    isLoading: require
  }
}