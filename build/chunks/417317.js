/** Chunk was on web.js **/
/** chunk id: 417317, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk699955 = require("./699955.js");

function c(e) {
  let {
    guildId: t,
    location: n
  } = e, c = (0, l.cZ)({
    location: n
  }), u = (0, i.e7)([a.Z], () => a.Z.getGuild(null != t ? t : null), [t]), d = (0, i.e7)([s.Z], () => null != u ? s.Z.getStorefrontData(u.id) : true);
  return r.useEffect(() => {
    (null == u ? true : u.id) != null && c && (0, o.YL)(null == u ? true : u.id, false)
  }, [null == u ? true : u.id, d, c]), d
}