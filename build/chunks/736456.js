/** Chunk was on 39048 **/
/** chunk id: 736456, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk198982 = require("./198982.js"),
  Chunk627363 = require("./627363.js");

function s() {
  let [e, t] = r.useState(false), [n, s] = r.useState(), a = r.useRef(null);
  return {
    createGuildApplication: async (e, n, r, o) => {
      s(true);
      try {
        return t(true), null == a.current && (a.current = await l.Ay.createApplication({
          name: o,
          guildId: e.id,
          type: r,
          teamId: n
        })), await l.Ay.getApplicationsForGuild(e.id, {
          type: r,
          includeTeam: true
        }), true
      } catch (e) {
        return s(new i.LG(e)), false
      } finally {
        t(false)
      }
    },
    submitting: e,
    error: n
  }
}