/** Chunk was on 27087 **/
/** chunk id: 2070, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk881052 = require("./881052.js"),
  Chunk728345 = require("./728345.js");

function s() {
  let [e, t] = Chunk647438.useState(false), [n, s] = Chunk647438.useState(), a = Chunk647438.useRef(null);
  return {
    createGuildApplication: async (e, n, r, o) => {
      s(true);
      try {
        return t(true), null == a.current && (a.current = await l.ZP.createApplication({
          name: o,
          guildId: e.id,
          type: r,
          teamId: n
        })), await l.ZP.getApplicationsForGuild(e.id, {
          type: r,
          includeTeam: true
        }), true
      } catch (e) {
        return s(new i.Hx(e)), false
      } finally {
        t(false)
      }
    },
    submitting: module,
    error: require
  }
}