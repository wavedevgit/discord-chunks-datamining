/** Chunk was on 21738 **/
/** chunk id: 508094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./321073.js"), require("./896048.js");
var Chunk179771 = require("./179771.js"),
  Chunk793574 = require("./793574.js"),
  Chunk796774 = require("./796774.js"),
  Chunk209932 = require("./209932.js"),
  Chunk807348 = require("./807348.js"),
  Chunk536432 = require("./536432.js"),
  Chunk123973 = require("./123973.js"),
  Chunk287809 = require("./287809.js"),
  Chunk636401 = require("./636401.js"),
  Chunk629471 = require("./629471.js"),
  Chunk693806 = require("./693806.js"),
  Chunk613057 = require("./613057.js"),
  Chunk818348 = require("./818348.js");
let m = {
  [Chunk818348.e$.GET_SOUNDBOARD_SOUNDS]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.hj]
    },
    async handler() {
      await (0, l.E7)();
      let e = a.A.getSounds(),
        t = [];
      return e.forEach(e => e.forEach(e => t.push((0, s.A2)(e)))), t
    }
  },
  [Chunk818348.e$.PLAY_SOUNDBOARD_SOUND]: {
    scope: {
      [Chunk613057.sm.ALL]: [Chunk179771.F.RPC, Chunk179771.F.RPC_VOICE_WRITE]
    },
    validation: e => (0, p.A)(e).required().keys({
      guild_id: e.string(),
      sound_id: e.string()
    }),
    async handler(e) {
      let {
        args: {
          guild_id: t,
          sound_id: n
        }
      } = e;
      await (0, l.E7)();
      let r = u.default.getCurrentUser(),
        s = a.A.getSound(t, n),
        p = (0, h.A)(),
        g = null != s && null != r && (0, o.Ir)(r, s, p);
      if (null == p) throw new d.A({
        errorCode: f.Lw.INVALID_CHANNEL
      }, "Invalid Channel.");
      if (g)
        if ((0, c.A)(p)) null != s && (0, o.Ak)(s, p.id, [i.A.RPC]);
        else throw new d.A({
          errorCode: f.Lw.INVALID_PERMISSIONS
        }, "Invalid Permissions.");
      else throw new d.A({
        errorCode: f.Lw.INVALID_SOUND
      }, "Invalid Sound.")
    }
  }
}