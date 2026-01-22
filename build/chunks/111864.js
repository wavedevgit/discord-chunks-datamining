/** Chunk was on web.js **/
/** chunk id: 111864, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk696451 = require("./696451.js"),
  Chunk369496 = require("./369496.js");

function o(e) {
  let {
    user: t,
    guildId: n
  } = e, o = (0, i.bG)([a.Ay], () => null != n && null != t ? a.Ay.getMember(n, t.id) : null);
  return (0, r.useMemo)(() => {
    var e;
    if (null == t) return;
    let r = (0, s.WK)(null == o || null == (e = o.collectibles) ? true : e.nameplate);
    return null != n && null != r ? r : t.nameplate
  }, [o, n, t])
}