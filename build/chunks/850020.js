/** Chunk was on web.js **/
/** chunk id: 850020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk346811 = require("./346811.js"),
  Chunk4242 = require("./4242.js");

function l(e) {
  let {
    user: t,
    guildId: n,
    location: l = ""
  } = e, {
    enabled: c
  } = a.Z.useConfig({
    location: l
  }), u = (0, i.e7)([o.ZP], () => null != n && null != t ? o.ZP.getMember(n, t.id) : null);
  return (0, r.useMemo)(() => {
    var e;
    if (null == t) return;
    let r = (0, s.Pb)(null == u || null == (e = u.collectibles) ? true : e.nameplate);
    return null != n && c && null != r ? r : t.nameplate
  }, [u, n, c, t])
}