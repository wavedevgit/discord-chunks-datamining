/** Chunk was on web.js **/
/** chunk id: 417317, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk699955 = require("./699955.js");

function l(e) {
  let {
    guildId: t,
    location: n
  } = e, l = (0, s.cZ)({
    location: n
  }), c = (0, i.e7)([o.Z], () => null != t ? o.Z.getStorefrontData(t) : true, [t]);
  return r.useEffect(() => {
    null != t && l && (0, a.YL)(t, false)
  }, [t, c, l]), c
}