/** Chunk was on web.js **/
/** chunk id: 373076, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => u
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk687158 = require("./687158.js"),
  Chunk484459 = require("./484459.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js");

function u(e) {
  let t = (0, a.ZP)(e),
    n = (0, i.e7)([s.default], () => l.ZP.canUseChatWallpapers(s.default.getUser(e))),
    u = n || (null == t ? true : t.premiumType) === c.p9.TIER_2;
  return r.useEffect(() => {
    n || null != t || null == e || (0, o.Z)(e)
  }, [n, t, e]), u
}