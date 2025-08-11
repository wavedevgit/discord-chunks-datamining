/** Chunk was on 75708 **/
/** chunk id: 796634, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => c,
  Q: () => o
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk232567 = require("./232567.js"),
  Chunk594174 = require("./594174.js"),
  Chunk276444 = require("./276444.js");
let o = 3;

function c() {
  let e = (0, Chunk442837.Wu)([Chunk276444.Z], () => Chunk276444.Z.getSentUserIds()),
    t = (0, Chunk442837.Wu)([Chunk594174.default], () => module.map(e => a.default.getUser(e)).filter(e => null != e));
  return Chunk73800.useEffect(() => {
    module.forEach(e => {
      (0, s.PR)(e)
    })
  }, [module]), {
    referralSentUsers: exports,
    hasSentAllReferrals: module.length === o,
    refreshAt: (0, Chunk442837.e7)([Chunk276444.Z], () => Chunk276444.Z.getRefreshAt())
  }
}