/** Chunk was on web.js **/
/** chunk id: 850020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk4242 = require("./4242.js");

function s(e) {
  let {
    user: t,
    guildId: n
  } = e, s = (0, i.e7)([a.ZP], () => null != n && null != t ? a.ZP.getMember(n, t.id) : null);
  return (0, r.useMemo)(() => {
    var e;
    if (null == t) return;
    let r = (0, o.Pb)(null == s || null == (e = s.collectibles) ? true : e.nameplate);
    return null != n && null != r ? r : t.nameplate
  }, [s, n, t])
}