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
  let e = (0, i.Wu)([s.Z], () => s.Z.getSentUserIds()),
    t = (0, i.Wu)([o.default], () => e.map(e => o.default.getUser(e)).filter(e => null != e));
  return r.useEffect(() => {
    e.forEach(e => {
      (0, a.PR)(e)
    })
  }, [e]), {
    referralSentUsers: t,
    hasSentAllReferrals: e.length === l,
    refreshAt: (0, i.e7)([s.Z], () => s.Z.getRefreshAt())
  }
}