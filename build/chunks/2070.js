/** Chunk was on 60458 **/
/** chunk id: 2070, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk881052 = require("./881052.js"),
  Chunk728345 = require("./728345.js");

function a() {
  let [e, t] = Chunk73800.useState(false), [n, a] = Chunk73800.useState(), s = Chunk73800.useRef(null);
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