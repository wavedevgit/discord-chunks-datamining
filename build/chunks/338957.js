/** Chunk was on 21738 **/
/** chunk id: 338957, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk179771 = require("./179771.js"),
  Chunk260509 = require("./260509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk636401 = require("./636401.js"),
  Chunk629471 = require("./629471.js"),
  Chunk652215 = require("./652215.js");
let c = {
  [Chunk652215.e$_.GET_GUILD]: {
    scope: Chunk179771.F.RPC,
    validation: e => (0, s.A)(e).required().keys({
      guild_id: e.string(),
      timeout: e.number().min(0).max(60)
    }),
    handler(e) {
      let {
        socket: t,
        server: n,
        args: {
          guild_id: r,
          timeout: s = 0
        }
      } = e;
      return n.storeWait(t, () => l.A.getGuild(r), s).catch(() => {
        throw new a.A({
          errorCode: o.Lw6.GET_GUILD_TIMED_OUT
        }, "Request to get guild timed out.")
      }).then(e => {
        var t;
        if (null == e) throw new a.A({
          errorCode: o.Lw6.INVALID_GUILD
        }, "Invalid guild id: ".concat(r));
        return {
          id: e.id,
          name: e.name,
          icon_url: null != (t = (0, i.Iv)(e, 128)) ? t : null,
          members: [],
          vanity_url_code: e.vanityURLCode
        }
      })
    }
  },
  [Chunk652215.e$_.GET_GUILDS]: {
    scope: Chunk179771.F.RPC,
    handler: () => ({
      guilds: l.A.getGuildsArray().map(e => {
        var t;
        return {
          id: e.id,
          name: e.name,
          icon_url: null != (t = (0, i.Iv)(e, 128)) ? t : null
        }
      })
    })
  }
}