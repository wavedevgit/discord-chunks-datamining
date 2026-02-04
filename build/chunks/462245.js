/** Chunk was on 21738 **/
/** chunk id: 462245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk179771 = require("./179771.js"),
  Chunk846293 = require("./846293.js"),
  Chunk956793 = require("./956793.js"),
  Chunk976860 = require("./976860.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk977997 = require("./977997.js"),
  Chunk147036 = require("./147036.js"),
  Chunk636401 = require("./636401.js"),
  Chunk90924 = require("./90924.js"),
  Chunk629471 = require("./629471.js"),
  Chunk569475 = require("./569475.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let y = {
  [Chunk652215.e$_.GET_CHANNEL]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk179771.F.GUILDS, Chunk179771.F.GUILDS_CHANNELS_READ]
    },
    handler(e) {
      let {
        args: {
          channel_id: t
        },
        socket: n
      } = e, r = u.A.getChannel(t);
      if (null == r) throw new m.A({
        errorCode: O.Lw6.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      if (r.isPrivate()) {
        let e = n.authorization.scopes;
        if (!e.includes(l.F.RPC) && !e.includes(l.F.DM_CHANNELS_READ)) throw new m.A({
          errorCode: O.Lw6.INVALID_PERMISSIONS
        }, "Invalid scope")
      }
      return (0, A.SN)(r, (0, A.B_)(r, n.application.id, n.authorization.scopes))
    }
  },
  [Chunk652215.e$_.GET_CHANNELS]: {
    scope: Chunk179771.F.RPC,
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e, n = i().values(u.A.loadAllGuildAndPrivateChannelsFromDisk());
      if (t) {
        let e = d.A.getGuild(t);
        if (null == e) throw new m.A({
          errorCode: O.Lw6.INVALID_GUILD
        }, "Invalid guild id: ".concat(t));
        n = n.filter(t => {
          let {
            guild_id: n
          } = t;
          return n === e.id
        })
      }
      return {
        channels: n.filter(e => p.A.can(O.xBc.VIEW_CHANNEL, e)).map(e => {
          let {
            id: t,
            name: n,
            type: r
          } = e;
          return {
            id: t,
            name: n,
            type: r
          }
        })
      }
    }
  },
  [Chunk652215.e$_.GET_CHANNEL_PERMISSIONS]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.GUILDS_MEMBERS_READ, Chunk179771.F.GUILDS_CHANNELS_READ]
    },
    handler(e) {
      let t = (0, b.A)();
      if (null == t) throw new m.A({
        errorCode: O.Lw6.INVALID_CHANNEL
      }, "Invalid channel");
      return {
        permissions: p.A.computePermissions(t)
      }
    }
  },
  [Chunk652215.e$_.SELECT_VOICE_CHANNEL]: {
    scope: Chunk179771.F.RPC,
    validation: e => (0, _.A)(e).required().keys({
      channel_id: e.string().allow(null),
      timeout: e.number().min(0).max(60),
      force: e.boolean(),
      navigate: e.boolean()
    }),
    handler(e) {
      let {
        server: t,
        socket: n,
        args: {
          channel_id: r,
          timeout: i = 0,
          force: l = false,
          navigate: a = false
        }
      } = e;
      if (!r) return s.default.selectVoiceChannel(null), null;
      let _ = h.A.getVoiceChannelId();
      if (null != _ && _ !== r && false === l) throw new m.A({
        errorCode: O.Lw6.SELECT_VOICE_FORCE_REQUIRED
      }, "User is already joined to a voice channel.");
      return t.storeWait(n, () => u.A.getChannel(r), i).catch(() => {
        throw new m.A({
          errorCode: O.Lw6.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select voice channel timed out.")
      }).then(e => {
        if (null == e) throw new m.A({
          errorCode: O.Lw6.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(r));
        if (!(0, c.gV)(e.type)) throw new m.A({
          errorCode: O.Lw6.INVALID_CHANNEL
        }, "Channel is not a voice channel");
        return Promise.all([Promise.resolve(e), (0, A.SN)(e, (0, A.B_)(e, n.application.id, n.authorization.scopes))])
      }).then(e => {
        let [t, n] = e;
        if (n.guild_id) {
          if ((0, g.Pd)(t, f.A, d.A)) throw new m.A({
            errorCode: O.Lw6.INVALID_CHANNEL
          }, "Channel is full");
          if (!p.A.can(O.xBc.CONNECT, t)) throw new m.A({
            errorCode: O.Lw6.INVALID_PERMISSIONS
          }, "Connect permission required to join channel")
        }
        return s.default.selectVoiceChannel(t.id), a && (0, o.bG)(O.BVt.CHANNEL(t.guild_id, t.id)), n
      })
    }
  },
  [Chunk652215.e$_.GET_SELECTED_VOICE_CHANNEL]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk179771.F.RPC_VOICE_READ]
    },
    handler(e) {
      let {
        socket: t
      } = e, n = h.A.getVoiceChannelId(), r = null != n ? u.A.getChannel(n) : null;
      return null != r ? (0, A.SN)(r, (0, A.B_)(r, t.application.id, t.authorization.scopes)) : null
    }
  },
  [Chunk652215.e$_.SELECT_TEXT_CHANNEL]: {
    scope: Chunk179771.F.RPC,
    validation: e => (0, _.A)(e).required().keys({
      channel_id: e.string().allow(null),
      timeout: e.number().min(0).max(60)
    }),
    handler(e) {
      let {
        server: t,
        socket: n,
        args: {
          channel_id: r,
          timeout: i = 0
        }
      } = e;
      return r ? t.storeWait(n, () => u.A.getChannel(r), i).catch(() => {
        throw new m.A({
          errorCode: O.Lw6.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select text channel timed out.")
      }).then(e => {
        if (null == e) throw new m.A({
          errorCode: O.Lw6.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(r));
        if (!(0, c.pQ)(e.type)) throw new m.A({
          errorCode: O.Lw6.INVALID_CHANNEL
        }, "Channel is not a text channel");
        return Promise.all([Promise.resolve(e), (0, A.SN)(e, (0, A.B_)(e, n.application.id, n.authorization.scopes))])
      }).then(e => {
        let [t, n] = e;
        if (n.guild_id && !p.A.can(O.xBc.VIEW_CHANNEL, t)) throw new m.A({
          errorCode: O.Lw6.INVALID_CHANNEL
        }, "No permission to see channel");
        return n.guild_id ? (0, o.bG)(O.BVt.CHANNEL(n.guild_id, t.id)) : s.default.selectPrivateChannel(t.id), n
      }) : ((0, o.pX)(O.BVt.ME), null)
    }
  },
  [Chunk652215.e$_.CREATE_CHANNEL_INVITE]: {
    scope: Chunk179771.F.RPC,
    handler(e) {
      let {
        args: t
      } = e, {
        channel_id: n
      } = t, r = function(e, t) {
        if (null == e) return {};
        var n, r, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }
        if (l = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i
          }(e, t), Object.getOwnPropertySymbols)
          for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(t, ["channel_id"]);
      return a.Ay.createInvite(n, r, "RPC").catch(() => {
        throw new m.A({
          errorCode: O.Lw6.INVALID_PERMISSIONS
        }, "Unable to generate an invite for ".concat(n, ". Does this user have permissions?"))
      })
    }
  }
}