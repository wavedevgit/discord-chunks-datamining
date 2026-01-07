/** Chunk was on 1272 **/
/** chunk id: 265067, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./539854.js"), require("./388685.js");
var Chunk243814 = require("./243814.js"),
  Chunk100527 = require("./100527.js"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk697426 = require("./697426.js"),
  Chunk242291 = require("./242291.js"),
  Chunk641015 = require("./641015.js"),
  Chunk594174 = require("./594174.js"),
  Chunk996106 = require("./996106.js"),
  Chunk452426 = require("./452426.js"),
  Chunk736045 = require("./736045.js"),
  Chunk186901 = require("./186901.js"),
  Chunk231338 = require("./231338.js");
let h = {
  [Chunk231338.Et.GET_SOUNDBOARD_SOUNDS]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.lH]
    },
    async handler() {
      await (0, l.w)();
      let e = a.Z.getSounds(),
        t = [];
      return e.forEach(e => e.forEach(e => t.push((0, o.QL)(e)))), t
    }
  },
  [Chunk231338.Et.PLAY_SOUNDBOARD_SOUND]: {
    scope: {
      [Chunk186901.Gp.ALL]: [Chunk243814.x.RPC, Chunk243814.x.RPC_VOICE_WRITE]
    },
    validation: e => (0, p.Z)(e).required().keys({
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
      await (0, l.w)();
      let r = u.default.getCurrentUser(),
        o = a.Z.getSound(t, n),
        p = (0, f.Z)(),
        g = null != o && null != r && (0, s.Nq)(r, o, p);
      if (null == p) throw new d.Z({
        errorCode: m.lT.INVALID_CHANNEL
      }, "Invalid Channel.");
      if (g)
        if ((0, c.Z)(p)) null != o && (0, s.GN)(o, p.id, [i.Z.RPC]);
        else throw new d.Z({
          errorCode: m.lT.INVALID_PERMISSIONS
        }, "Invalid Permissions.");
      else throw new d.Z({
        errorCode: m.lT.INVALID_SOUND
      }, "Invalid Sound.")
    }
  }
}