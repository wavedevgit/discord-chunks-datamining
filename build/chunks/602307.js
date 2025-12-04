/** Chunk was on web.js **/
/** chunk id: 602307, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk80721 = require("./80721.js"),
  Chunk643281 = require("./643281.js");

function s() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = (0, Chunk442837.e7)([Chunk643281.Z], () => Chunk643281.Z.getSubscriptionId());
  return (0, Chunk473749.useEffect)(() => {
    !async function() {
      !module || Chunk643281.Z.isFetchingMembership() || Chunk643281.Z.hasFetchedMembership() || null != exports || await (0, Chunk80721.WH)()
    }()
  }, [exports, module]), exports
}