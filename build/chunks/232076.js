/** Chunk was on web.js **/
/** chunk id: 232076, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk975298 = require("./975298.js"),
  Chunk594174 = require("./594174.js"),
  Chunk111361 = require("./111361.js"),
  Chunk140465 = require("./140465.js"),
  Chunk775412 = require("./775412.js"),
  Chunk276444 = require("./276444.js"),
  Chunk474936 = require("./474936.js");
let f = function() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    n = (0, Chunk140465.t7)(),
    f = (0, Chunk775412._O)(),
    p = (0, Chunk975298.Z)(),
    _ = (null == exports ? true : exports.verified) === true && (0, Chunk111361.M5)(exports, Chunk474936.PremiumTypes.TIER_2) && p.fetched && p.fractionalState !== Chunk474936.a$.FP_ONLY && !require && !f;
  Chunk473749.useEffect(() => {
    _ && !module && Chunk276444.Z.checkAndFetchReferralsRemaining()
  }, [_, module])
}