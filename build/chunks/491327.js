/** Chunk was on 1272 **/
/** chunk id: 491327, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk243814 = require("./243814.js"),
  Chunk447543 = require("./447543.js"),
  Chunk287734 = require("./287734.js"),
  Chunk703656 = require("./703656.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js"),
  Chunk934415 = require("./934415.js"),
  Chunk996106 = require("./996106.js"),
  Chunk914946 = require("./914946.js"),
  Chunk452426 = require("./452426.js"),
  Chunk561205 = require("./561205.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let y = {
  [Chunk981631.Etm.GET_CHANNEL]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk243814.x.GUILDS, Chunk243814.x.GUILDS_CHANNELS_READ]
    },
    handler(e) {
      let {
        args: {
          channel_id: t
        },
        socket: n
      } = e, r = u.Z.getChannel(t);
      if (null == r) throw new m.Z({
        errorCode: v.lTL.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      if (r.isPrivate()) {
        let e = n.authorization.scopes;
        if (!e.includes(l.x.RPC) && !e.includes(l.x.DM_CHANNELS_READ)) throw new m.Z({
          errorCode: v.lTL.INVALID_PERMISSIONS
        }, "Invalid scope")
      }
      return (0, b.T5)(r, (0, b.zM)(r, n.application.id, n.authorization.scopes))
    }
  },
  [Chunk981631.Etm.GET_CHANNELS]: {
    scope: Chunk243814.x.RPC,
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e, n = i().values(u.Z.loadAllGuildAndPrivateChannelsFromDisk());
      if (t) {
        let e = d.Z.getGuild(t);
        if (null == e) throw new m.Z({
          errorCode: v.lTL.INVALID_GUILD
        }, "Invalid guild id: ".concat(t));
        n = n.filter(t => {
          let {
            guild_id: n
          } = t;
          return n === e.id
        })
      }
      return {
        channels: n.filter(e => p.Z.can(v.Plq.VIEW_CHANNEL, e)).map(e => {
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
  [Chunk981631.Etm.GET_CHANNEL_PERMISSIONS]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.GUILDS_MEMBERS_READ, Chunk243814.x.GUILDS_CHANNELS_READ]
    },
    handler(e) {
      let t = (0, _.Z)();
      if (null == t) throw new m.Z({
        errorCode: v.lTL.INVALID_CHANNEL
      }, "Invalid channel");
      return {
        permissions: p.Z.computePermissions(t)
      }
    }
  },
  [Chunk981631.Etm.SELECT_VOICE_CHANNEL]: {
    scope: Chunk243814.x.RPC,
    validation: e => (0, E.Z)(e).required().keys({
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
      let E = f.Z.getVoiceChannelId();
      if (null != E && E !== r && false === l) throw new m.Z({
        errorCode: v.lTL.SELECT_VOICE_FORCE_REQUIRED
      }, "User is already joined to a voice channel.");
      return t.storeWait(n, () => u.Z.getChannel(r), i).catch(() => {
        throw new m.Z({
          errorCode: v.lTL.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select voice channel timed out.")
      }).then(e => {
        if (null == e) throw new m.Z({
          errorCode: v.lTL.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(r));
        if (!(0, c.vd)(e.type)) throw new m.Z({
          errorCode: v.lTL.INVALID_CHANNEL
        }, "Channel is not a voice channel");
        return Promise.all([Promise.resolve(e), (0, b.T5)(e, (0, b.zM)(e, n.application.id, n.authorization.scopes))])
      }).then(e => {
        let [t, n] = e;
        if (n.guild_id) {
          if ((0, h.rY)(t, g.Z, d.Z)) throw new m.Z({
            errorCode: v.lTL.INVALID_CHANNEL
          }, "Channel is full");
          if (!p.Z.can(v.Plq.CONNECT, t)) throw new m.Z({
            errorCode: v.lTL.INVALID_PERMISSIONS
          }, "Connect permission required to join channel")
        }
        return s.default.selectVoiceChannel(t.id), a && (0, o.dL)(v.Z5c.CHANNEL(t.guild_id, t.id)), n
      })
    }
  },
  [Chunk981631.Etm.GET_SELECTED_VOICE_CHANNEL]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk243814.x.RPC_VOICE_READ]
    },
    handler(e) {
      let {
        socket: t
      } = e, n = f.Z.getVoiceChannelId(), r = null != n ? u.Z.getChannel(n) : null;
      return null != r ? (0, b.T5)(r, (0, b.zM)(r, t.application.id, t.authorization.scopes)) : null
    }
  },
  [Chunk981631.Etm.SELECT_TEXT_CHANNEL]: {
    scope: Chunk243814.x.RPC,
    validation: e => (0, E.Z)(e).required().keys({
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
      return r ? t.storeWait(n, () => u.Z.getChannel(r), i).catch(() => {
        throw new m.Z({
          errorCode: v.lTL.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select text channel timed out.")
      }).then(e => {
        if (null == e) throw new m.Z({
          errorCode: v.lTL.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(r));
        if (!(0, c.Qm)(e.type)) throw new m.Z({
          errorCode: v.lTL.INVALID_CHANNEL
        }, "Channel is not a text channel");
        return Promise.all([Promise.resolve(e), (0, b.T5)(e, (0, b.zM)(e, n.application.id, n.authorization.scopes))])
      }).then(e => {
        let [t, n] = e;
        if (n.guild_id && !p.Z.can(v.Plq.VIEW_CHANNEL, t)) throw new m.Z({
          errorCode: v.lTL.INVALID_CHANNEL
        }, "No permission to see channel");
        return n.guild_id ? (0, o.dL)(v.Z5c.CHANNEL(n.guild_id, t.id)) : s.default.selectPrivateChannel(t.id), n
      }) : ((0, o.uL)(v.Z5c.ME), null)
    }
  },
  [Chunk981631.Etm.CREATE_CHANNEL_INVITE]: {
    scope: Chunk243814.x.RPC,
    handler(e) {
      var {
        args: {
          channel_id: t
        }
      } = e, n = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(e.args, ["channel_id"]);
      return a.ZP.createInvite(t, n, "RPC").catch(() => {
        throw new m.Z({
          errorCode: v.lTL.INVALID_PERMISSIONS
        }, "Unable to generate an invite for ".concat(t, ". Does this user have permissions?"))
      })
    }
  }
}