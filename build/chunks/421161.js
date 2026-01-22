/** Chunk was on web.js **/
/** chunk id: 421161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk71393 = require("./71393.js"),
  Chunk871123 = require("./871123.js");

function c(e) {
  let {
    shouldFetchIfMissing: t
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = (0, l.bF)(e), c = null == e ? true : e.applicationId, u = (0, i.bG)([s.A], () => null != c ? s.A.getApplication(c) : null, [c]), d = null == u ? true : u.guildId, f = (0, i.bG)([o.A], () => null != d ? o.A.getGuild(d) : null, [d]);
  return r.useEffect(() => {
    n && t && null == f && null != e && a.Ay.fetchApplication(e.applicationId, true)
  }, [f, e, t, n]), n ? f : null
}