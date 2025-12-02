/** Chunk was on 384 **/
/** chunk id: 2070, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk881052 = require("./881052.js"),
  Chunk728345 = require("./728345.js");

function a() {
  let [e, t] = Chunk473749.useState(false), [n, a] = Chunk473749.useState(), s = Chunk473749.useRef(null);
  return {
    createGuildApplication: async (e, n, r, o) => {
      a(true);
      try {
        return t(true), null == s.current && (s.current = await l.ZP.createApplication({
          name: o,
          guildId: e.id,
          type: r,
          teamId: n
        })), await l.ZP.getApplicationsForGuild(e.id, {
          type: r,
          includeTeam: true
        }), true
      } catch (e) {
        return a(new i.Hx(e)), false
      } finally {
        t(false)
      }
    },
    submitting: module,
    error: require
  }
}