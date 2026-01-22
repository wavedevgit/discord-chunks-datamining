/** Chunk was on web.js **/
/** chunk id: 854492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c,
  j: () => u
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk383501 = require("./383501.js"),
  Chunk403362 = require("./403362.js"),
  Chunk857071 = require("./857071.js"),
  Chunk652215 = require("./652215.js");
async function c(e) {
  let t = o.A.lurkingGuildIds().filter(t => !e.includes(t));
  0 !== t.length && (i.h.dispatch({
    type: "GUILD_STOP_LURKING",
    ignoredGuildIds: e
  }), await Promise.all(t.map(async e => {
    let t = o.A.getLurkingSource();
    try {
      await r.Bo.del({
        url: l.Rsh.GUILD_LEAVE(e),
        body: {
          lurking: true
        },
        oldFormErrors: true,
        rejectWithError: true
      })
    } catch (n) {
      i.h.dispatch({
        type: "GUILD_STOP_LURKING_FAILURE",
        lurkingGuildId: e,
        lurkingSource: t
      })
    }
  })))
}
async function u() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
    t = o.A.lurkingGuildIds();
  if (0 === t.length || !(null == e || !t.includes(e))) return;
  let n = [e, a.A.getGuildId()].filter(s.Vq);
  await c(n)
}