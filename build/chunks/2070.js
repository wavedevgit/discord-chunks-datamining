/** Chunk was on 29679 **/
/** chunk id: 2070, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk881052 = require("./881052.js"),
  Chunk728345 = require("./728345.js");

function a() {
  let [e, t] = Chunk647438.useState(false), [n, a] = Chunk647438.useState(), s = Chunk647438.useRef(null);
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