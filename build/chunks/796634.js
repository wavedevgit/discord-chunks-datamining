/** Chunk was on web.js **/
/** chunk id: 796634, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => c,
  Q: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk232567 = require("./232567.js"),
  Chunk594174 = require("./594174.js"),
  Chunk276444 = require("./276444.js");
let l = 3;

function c() {
  let e = (0, Chunk442837.Wu)([Chunk276444.Z], () => Chunk276444.Z.getSentUserIds()),
    t = (0, Chunk442837.Wu)([Chunk594174.default], () => module.map(e => o.default.getUser(e)).filter(e => null != e));
  return Chunk473749.useEffect(() => {
    module.forEach(e => {
      (0, a.PR)(e)
    })
  }, [module]), {
    referralSentUsers: exports,
    hasSentAllReferrals: module.length === l,
    refreshAt: (0, Chunk442837.e7)([Chunk276444.Z], () => Chunk276444.Z.getRefreshAt())
  }
}