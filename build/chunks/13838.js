/** Chunk was on 1272 **/
/** chunk id: 13838, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./997841.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk243814 = require("./243814.js"),
  Chunk149765 = require("./149765.js"),
  Chunk902704 = require("./902704.js"),
  Chunk622822 = require("./622822.js"),
  Chunk812206 = require("./812206.js"),
  Chunk594190 = require("./594190.js"),
  Chunk601964 = require("./601964.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk996106 = require("./996106.js"),
  Chunk914946 = require("./914946.js"),
  Chunk238679 = require("./238679.js"),
  Chunk452426 = require("./452426.js"),
  Chunk295424 = require("./295424.js"),
  Chunk222263 = require("./222263.js"),
  Chunk863141 = require("./863141.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let x = e => (0, y.Z)(e).required().keys({
  channel_id: e.string().required()
});

function P(e) {
  let {
    args: {
      channel_id: t
    },
    socket: n
  } = e, r = f.Z.getChannel(t);
  if (null == r || !(0, v.zM)(r, n.application.id, n.authorization.scopes)) throw new O.Z({
    errorCode: j.lTL.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(t));
  if ((0, s.ft)(r)) throw new O.Z({
    errorCode: j.lTL.INVALID_CHANNEL
  }, "Invalid nsfw channel id: ".concat(r.id))
}
let A = e => (0, y.Z)(e).keys({
  channel_id: e.string().allow(null)
});

function Z(e) {
  let {
    args: {
      channel_id: t
    }
  } = e;
  if (null != t && null == f.Z.getChannel(t)) throw new O.Z({
    errorCode: j.lTL.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(t))
}
let w = {
  [Chunk981631.zMe.GUILD_STATUS]: {
    scope: Chunk243814.x.RPC,
    validation: e => (0, y.Z)(e).required().keys({
      guild_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e;
      if (null == h.Z.getGuild(t)) throw new O.Z({
        errorCode: j.lTL.INVALID_GUILD
      }, "Invalid guild id: ".concat(t));
      return e => {
        var n;
        let {
          prevState: r,
          dispatch: l
        } = e, a = h.Z.getGuild(t);
        if (null == a) return;
        let o = {
          guild: {
            id: a.id,
            name: a.name,
            icon_url: null != (n = (0, d.EB)(a, 128)) ? n : null
          },
          online: 0
        };
        return i().isEqual(r, o) || l(o), o
      }
    }
  },
  [Chunk981631.zMe.VOICE_STATE_CREATE]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk243814.x.RPC_VOICE_READ]
    },
    validation: e => (0, y.Z)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == f.Z.getChannel(t)) throw new O.Z({
        errorCode: j.lTL.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: r
        } = e, l = f.Z.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          o = Object.values(_.Z.getVoiceStatesForChannel(l.id));
        return n && i().differenceBy(o, n, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => r((0, v.aE)(a, l.id, e))), o
      }
    }
  },
  [Chunk981631.zMe.VOICE_STATE_DELETE]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk243814.x.RPC_VOICE_READ]
    },
    validation: e => (0, y.Z)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == f.Z.getChannel(t)) throw new O.Z({
        errorCode: j.lTL.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: r
        } = e, l = f.Z.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          o = Object.values(_.Z.getVoiceStatesForChannel(l.id));
        return i().differenceBy(n, o, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => r((0, v.aE)(a, l.id, e))), o
      }
    }
  },
  [Chunk981631.zMe.VOICE_STATE_UPDATE]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk243814.x.RPC_VOICE_READ]
    },
    validation: e => (0, y.Z)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == f.Z.getChannel(t)) throw new O.Z({
        errorCode: j.lTL.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: r
        } = e, l = f.Z.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          o = Object.values(_.Z.getVoiceStatesForChannel(l.id)).map(e => (0, v.aE)(a, l.id, e));
        return i().differenceWith(o, n, i().isEqual).forEach(e => r(e)), o
      }
    }
  },
  [Chunk981631.zMe.VOICE_CONNECTION_STATUS]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk243814.x.RPC_VOICE_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, r = {
        state: (0, v.zy)(b.Z.getState()),
        hostname: b.Z.getHostname(),
        pings: b.Z.getPings(),
        average_ping: b.Z.getAveragePing(),
        last_ping: b.Z.getLastPing()
      };
      return i().isEqual(r, t) || n(r), r
    }
  },
  [Chunk981631.zMe.MESSAGE_CREATE]: {
    scope: Chunk243814.x.RPC,
    validation: x,
    handler: P
  },
  [Chunk981631.zMe.MESSAGE_UPDATE]: {
    scope: Chunk243814.x.RPC,
    validation: x,
    handler: P
  },
  [Chunk981631.zMe.MESSAGE_DELETE]: {
    scope: Chunk243814.x.RPC,
    validation: x,
    handler: P
  },
  [Chunk981631.zMe.SPEAKING_START]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk243814.x.RPC_VOICE_READ, Chunk186901.lH]
    },
    validation: A,
    handler: Z
  },
  [Chunk981631.zMe.SPEAKING_STOP]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk243814.x.RPC_VOICE_READ, Chunk186901.lH]
    },
    validation: A,
    handler: Z
  },
  [Chunk981631.zMe.GUILD_CREATE]: {
    scope: Chunk243814.x.RPC,
    handler() {}
  },
  [Chunk981631.zMe.CHANNEL_CREATE]: {
    scope: Chunk243814.x.RPC,
    handler() {}
  },
  [Chunk981631.zMe.GAME_JOIN]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.lH]
    },
    handler() {}
  },
  [Chunk981631.zMe.GAME_SPECTATE]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.lH]
    },
    handler() {}
  },
  [Chunk981631.zMe.ACTIVITY_JOIN]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.wE, Chunk186901.lH]
    },
    handler() {}
  },
  [Chunk981631.zMe.ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.lH]
    },
    handler() {}
  },
  [Chunk981631.zMe.ACTIVITY_SPECTATE]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.wE, Chunk186901.lH]
    },
    handler() {}
  },
  [Chunk981631.zMe.ACTIVITY_INVITE]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.lH]
    },
    handler() {}
  },
  [Chunk981631.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
    scope: true,
    handler() {}
  },
  [Chunk981631.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
    scope: true,
    handler() {}
  },
  [Chunk981631.zMe.FRAME_LAYOUT_MODE_UPDATE]: {
    scope: true,
    handler() {}
  },
  [Chunk981631.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: Chunk238679.gQ,
  [Chunk981631.zMe.THERMAL_STATE_UPDATE]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk186901.wE]
    },
    handler() {}
  },
  [Chunk981631.zMe.ORIENTATION_UPDATE]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk186901.wE]
    },
    handler() {}
  },
  [Chunk981631.zMe.VOICE_CHANNEL_SELECT]: {
    scope: Chunk243814.x.RPC,
    handler() {}
  },
  [Chunk981631.zMe.NOTIFICATION_CREATE]: {
    scope: {
      [Chunk186901.Gp.ALL]: [Chunk243814.x.RPC, Chunk243814.x.RPC_NOTIFICATIONS_READ]
    },
    handler() {}
  },
  [Chunk981631.zMe.RELATIONSHIP_UPDATE]: {
    scope: Chunk243814.x.RELATIONSHIPS_READ,
    handler(e) {
      var t;
      let {
        socket: n
      } = e;
      if (a.e$(a.vB(null != (t = n.application.flags) ? t : 0), a.vB(j.udG.DISABLE_RELATIONSHIPS_ACCESS))) throw new O.Z({
        errorCode: j.lTL.INVALID_PERMISSIONS
      }, "Missing Permissions")
    }
  },
  [Chunk981631.zMe.CURRENT_USER_UPDATE]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk186901.lH, Chunk243814.x.IDENTIFY]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, r = {
        currentUser: E.default.getCurrentUser()
      };
      return null == r.currentUser || null != t && (0, o.Z)(r, t) || n((0, T.Z)(r.currentUser)), r
    }
  },
  [Chunk981631.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
    scope: {
      [Chunk186901.Gp.ALL]: [Chunk243814.x.IDENTIFY, Chunk243814.x.GUILDS_MEMBERS_READ]
    },
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e;
      return e => {
        let {
          prevState: n,
          dispatch: r
        } = e, i = {
          currentGuildMember: g.ZP.getSelfMember(t)
        };
        return null == i.currentGuildMember || null != n && (0, o.Z)(i, n) || r((0, S.Z)(i.currentGuildMember)), i
      }
    }
  },
  [Chunk981631.zMe.ENTITLEMENT_CREATE]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk186901.lH, Chunk186901.wE]
    },
    handler() {}
  },
  [Chunk981631.zMe.ENTITLEMENT_DELETE]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk186901.lH, Chunk186901.wE]
    },
    handler() {}
  },
  [Chunk981631.zMe.SCREENSHARE_STATE_UPDATE]: {
    scope: {
      [Chunk186901.Gp.ALL]: [Chunk186901.lH, Chunk243814.x.RPC_SCREENSHARE_READ]
    },
    handler: () => e => {
      var t;
      let {
        prevState: n,
        dispatch: r
      } = e, l = p.Z.getStreamerActiveStreamMetadata(), a = (null == l ? true : l.pid) != null ? u.ZP.getGameForPID(l.pid) : null, o = (null == a ? true : a.id) != null ? c.Z.getApplication(a.id) : null, s = null != o ? (0, C.Z)(o) : null, d = null == l ? true : l.sourceName, f = {
        active: null != l,
        pid: null != (t = null == l ? true : l.pid) ? t : null,
        application: null != s ? {
          name: d
        } : null
      };
      return i().isEqual(f, n) || r(f), f
    }
  },
  [Chunk981631.zMe.VIDEO_STATE_UPDATE]: {
    scope: {
      [Chunk186901.Gp.ALL]: [Chunk186901.lH, Chunk243814.x.RPC_VIDEO_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, r = {
        active: m.Z.isVideoEnabled()
      };
      return i().isEqual(r, t) || n(r), r
    }
  },
  [Chunk981631.zMe.AUTHORIZE_REQUEST]: {
    scope: true,
    handler() {}
  }
}