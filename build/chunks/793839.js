/** Chunk was on 1272 **/
/** chunk id: 793839, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk243814 = require("./243814.js"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk996106 = require("./996106.js"),
  Chunk452426 = require("./452426.js"),
  Chunk981631 = require("./981631.js");
let c = {
  [Chunk981631.Etm.GET_GUILD]: {
    scope: Chunk243814.x.RPC,
    validation: e => (0, o.Z)(e).required().keys({
      guild_id: e.string(),
      timeout: e.number().min(0).max(60)
    }),
    handler(e) {
      let {
        socket: t,
        server: n,
        args: {
          guild_id: r,
          timeout: o = 0
        }
      } = e;
      return n.storeWait(t, () => l.Z.getGuild(r), o).catch(() => {
        throw new a.Z({
          errorCode: s.lTL.GET_GUILD_TIMED_OUT
        }, "Request to get guild timed out.")
      }).then(e => {
        var t;
        if (null == e) throw new a.Z({
          errorCode: s.lTL.INVALID_GUILD
        }, "Invalid guild id: ".concat(r));
        return {
          id: e.id,
          name: e.name,
          icon_url: null != (t = (0, i.EB)(e, 128)) ? t : null,
          members: [],
          vanity_url_code: e.vanityURLCode
        }
      })
    }
  },
  [Chunk981631.Etm.GET_GUILDS]: {
    scope: Chunk243814.x.RPC,
    handler: () => ({
      guilds: l.Z.getGuildsArray().map(e => {
        var t;
        return {
          id: e.id,
          name: e.name,
          icon_url: null != (t = (0, i.EB)(e, 128)) ? t : null
        }
      })
    })
  }
}