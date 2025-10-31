/** Chunk was on web.js **/
/** chunk id: 242723, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => _,
  p: () => p
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js"),
  Chunk602733 = require("./602733.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk164670 = require("./164670.js");

function _(e) {
  let {
    shouldFetchIfMissing: t
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = (0, f.K$)(e), s = null == e ? true : e.applicationId, l = (0, i.e7)([o.Z], () => null != s ? o.Z.getApplication(s) : null, [s]), c = null == l ? true : l.guildId, u = (0, i.e7)([d.Z], () => null != c ? d.Z.getGuild(c) : null, [c]);
  return r.useEffect(() => {
    n && t && null == u && null != e && a.ZP.fetchApplication(e.applicationId, true)
  }, [u, e, t, n]), n ? u : null
}

function p() {
  let e = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.getId()),
    {
      userProfile: t,
      wishlistId: n
    } = (0, Chunk442837.cj)([Chunk621853.Z], () => ({
      userProfile: Chunk621853.Z.getUserProfile(module),
      wishlistId: Chunk621853.Z.getFirstWishlistId(module)
    }), [module]);
  return Chunk647438.useEffect(() => {
    null != module && null == exports && (0, Chunk484459.Z)(module)
  }, [module, exports]), (0, Chunk602733.kZ)(require, module)
}