/** Chunk was on web.js **/
/** chunk id: 242723, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk430824 = require("./430824.js"),
  Chunk164670 = require("./164670.js");

function c(e) {
  let {
    shouldFetchIfMissing: t
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = (0, l.K$)(e), c = null == e ? true : e.applicationId, u = (0, i.e7)([o.Z], () => null != c ? o.Z.getApplication(c) : null, [c]), d = null == u ? true : u.guildId, f = (0, i.e7)([s.Z], () => null != d ? s.Z.getGuild(d) : null, [d]);
  return r.useEffect(() => {
    n && t && null == f && null != e && a.ZP.fetchApplication(e.applicationId, true)
  }, [f, e, t, n]), n ? f : null
}