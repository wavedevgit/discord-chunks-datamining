/** Chunk was on web.js **/
/** chunk id: 280837, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => c,
  a: () => u
}), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk19780 = require("./19780.js"),
  Chunk823379 = require("./823379.js"),
  Chunk41776 = require("./41776.js"),
  Chunk981631 = require("./981631.js");
async function c(e) {
  let t = s.Z.lurkingGuildIds().filter(t => !e.includes(t));
  0 !== t.length && (i.Z.dispatch({
    type: "GUILD_STOP_LURKING",
    ignoredGuildIds: e
  }), await Promise.all(t.map(async e => {
    let t = s.Z.getLurkingSource();
    try {
      await r.tn.del({
        url: l.ANM.GUILD_LEAVE(e),
        body: {
          lurking: true
        },
        oldFormErrors: true,
        rejectWithError: true
      })
    } catch (n) {
      i.Z.dispatch({
        type: "GUILD_STOP_LURKING_FAILURE",
        lurkingGuildId: e,
        lurkingSource: t
      })
    }
  })))
}
async function u() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
    t = s.Z.lurkingGuildIds();
  if (0 === t.length || !(null == e || !t.includes(e))) return;
  let n = [e, a.Z.getGuildId()].filter(o.lm);
  await c(n)
}