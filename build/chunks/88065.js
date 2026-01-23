/** Chunk was on 21738 **/
/** chunk id: 88065, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L
}), require("./896048.js"), require("./938796.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk179771 = require("./179771.js"),
  Chunk136722 = require("./136722.js"),
  Chunk52133 = require("./52133.js"),
  Chunk323073 = require("./323073.js"),
  Chunk587895 = require("./587895.js"),
  Chunk15285 = require("./15285.js"),
  Chunk260509 = require("./260509.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk636401 = require("./636401.js"),
  Chunk90924 = require("./90924.js"),
  Chunk592653 = require("./592653.js"),
  Chunk629471 = require("./629471.js"),
  Chunk511776 = require("./511776.js"),
  Chunk901898 = require("./901898.js"),
  Chunk639621 = require("./639621.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let j = e => (0, I.A)(e).required().keys({
  channel_id: e.string().required()
});

function x(e) {
  let {
    args: {
      channel_id: t
    },
    socket: n
  } = e, r = h.A.getChannel(t);
  if (null == r || !(0, O.B_)(r, n.application.id, n.authorization.scopes)) throw new E.A({
    errorCode: T.Lw6.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(t));
  if ((0, o.$v)(r)) throw new E.A({
    errorCode: T.Lw6.INVALID_CHANNEL
  }, "Invalid nsfw channel id: ".concat(r.id))
}
let P = e => (0, I.A)(e).keys({
  channel_id: e.string().allow(null)
});

function w(e) {
  let {
    args: {
      channel_id: t
    }
  } = e;
  if (null != t && null == h.A.getChannel(t)) throw new E.A({
    errorCode: T.Lw6.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(t))
}
let L = {
  [Chunk652215.ZE4.GUILD_STATUS]: {
    scope: Chunk179771.F.RPC,
    validation: e => (0, I.A)(e).required().keys({
      guild_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e;
      if (null == f.A.getGuild(t)) throw new E.A({
        errorCode: T.Lw6.INVALID_GUILD
      }, "Invalid guild id: ".concat(t));
      return e => {
        var n;
        let {
          prevState: r,
          dispatch: l
        } = e, a = f.A.getGuild(t);
        if (null == a) return;
        let s = {
          guild: {
            id: a.id,
            name: a.name,
            icon_url: null != (n = (0, d.Iv)(a, 128)) ? n : null
          },
          online: 0
        };
        return i().isEqual(r, s) || l(s), s
      }
    }
  },
  [Chunk652215.ZE4.VOICE_STATE_CREATE]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk179771.F.RPC_VOICE_READ]
    },
    validation: e => (0, I.A)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == h.A.getChannel(t)) throw new E.A({
        errorCode: T.Lw6.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: r
        } = e, l = h.A.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          s = Object.values(b.A.getVoiceStatesForChannel(l.id));
        return n && i().differenceBy(s, n, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => r((0, O.qG)(a, l.id, e))), s
      }
    }
  },
  [Chunk652215.ZE4.VOICE_STATE_DELETE]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk179771.F.RPC_VOICE_READ]
    },
    validation: e => (0, I.A)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == h.A.getChannel(t)) throw new E.A({
        errorCode: T.Lw6.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: r
        } = e, l = h.A.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          s = Object.values(b.A.getVoiceStatesForChannel(l.id));
        return i().differenceBy(n, s, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => r((0, O.qG)(a, l.id, e))), s
      }
    }
  },
  [Chunk652215.ZE4.VOICE_STATE_UPDATE]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk179771.F.RPC_VOICE_READ]
    },
    validation: e => (0, I.A)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == h.A.getChannel(t)) throw new E.A({
        errorCode: T.Lw6.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: r
        } = e, l = h.A.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          s = Object.values(b.A.getVoiceStatesForChannel(l.id)).map(e => (0, O.qG)(a, l.id, e));
        return i().differenceWith(s, n, i().isEqual).forEach(e => r(e)), s
      }
    }
  },
  [Chunk652215.ZE4.VOICE_CONNECTION_STATUS]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk179771.F.RPC_VOICE_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, r = {
        state: (0, O.SK)(A.A.getState()),
        hostname: A.A.getHostname(),
        pings: A.A.getPings(),
        average_ping: A.A.getAveragePing(),
        last_ping: A.A.getLastPing()
      };
      return i().isEqual(r, t) || n(r), r
    }
  },
  [Chunk652215.ZE4.MESSAGE_CREATE]: {
    scope: Chunk179771.F.RPC,
    validation: j,
    handler: x
  },
  [Chunk652215.ZE4.MESSAGE_UPDATE]: {
    scope: Chunk179771.F.RPC,
    validation: j,
    handler: x
  },
  [Chunk652215.ZE4.MESSAGE_DELETE]: {
    scope: Chunk179771.F.RPC,
    validation: j,
    handler: x
  },
  [Chunk652215.ZE4.SPEAKING_START]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk179771.F.RPC_VOICE_READ, Chunk613057.hj]
    },
    validation: P,
    handler: w
  },
  [Chunk652215.ZE4.SPEAKING_STOP]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk179771.F.RPC_VOICE_READ, Chunk613057.hj]
    },
    validation: P,
    handler: w
  },
  [Chunk652215.ZE4.GUILD_CREATE]: {
    scope: Chunk179771.F.RPC,
    handler() {}
  },
  [Chunk652215.ZE4.CHANNEL_CREATE]: {
    scope: Chunk179771.F.RPC,
    handler() {}
  },
  [Chunk652215.ZE4.GAME_JOIN]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.hj]
    },
    handler() {}
  },
  [Chunk652215.ZE4.GAME_SPECTATE]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.hj]
    },
    handler() {}
  },
  [Chunk652215.ZE4.ACTIVITY_JOIN]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.VH, Chunk613057.hj]
    },
    handler() {}
  },
  [Chunk652215.ZE4.ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.hj]
    },
    handler() {}
  },
  [Chunk652215.ZE4.ACTIVITY_SPECTATE]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.VH, Chunk613057.hj]
    },
    handler() {}
  },
  [Chunk652215.ZE4.ACTIVITY_INVITE]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.hj]
    },
    handler() {}
  },
  [Chunk652215.ZE4.ACTIVITY_PIP_MODE_UPDATE]: {
    scope: true,
    handler() {}
  },
  [Chunk652215.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE]: {
    scope: true,
    handler() {}
  },
  [Chunk652215.ZE4.FRAME_LAYOUT_MODE_UPDATE]: {
    scope: true,
    handler() {}
  },
  [Chunk652215.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: Chunk592653.t$,
  [Chunk652215.ZE4.THERMAL_STATE_UPDATE]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk613057.VH]
    },
    handler() {}
  },
  [Chunk652215.ZE4.ORIENTATION_UPDATE]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk613057.VH]
    },
    handler() {}
  },
  [Chunk652215.ZE4.VOICE_CHANNEL_SELECT]: {
    scope: Chunk179771.F.RPC,
    handler() {}
  },
  [Chunk652215.ZE4.NOTIFICATION_CREATE]: {
    scope: {
      [Chunk613057.sm.ALL]: [Chunk179771.F.RPC, Chunk179771.F.RPC_NOTIFICATIONS_READ]
    },
    handler() {}
  },
  [Chunk652215.ZE4.RELATIONSHIP_UPDATE]: {
    scope: Chunk179771.F.RELATIONSHIPS_READ,
    handler(e) {
      var t;
      let {
        socket: n
      } = e;
      if (a.zy(a.iu(null != (t = n.application.flags) ? t : 0), a.iu(T.gfo.DISABLE_RELATIONSHIPS_ACCESS))) throw new E.A({
        errorCode: T.Lw6.INVALID_PERMISSIONS
      }, "Missing Permissions")
    }
  },
  [Chunk652215.ZE4.CURRENT_USER_UPDATE]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk613057.hj, Chunk179771.F.IDENTIFY]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, r = {
        currentUser: _.default.getCurrentUser()
      };
      return null == r.currentUser || null != t && (0, s.A)(r, t) || n((0, C.A)(r.currentUser)), r
    }
  },
  [Chunk652215.ZE4.CURRENT_GUILD_MEMBER_UPDATE]: {
    scope: {
      [Chunk613057.sm.ALL]: [Chunk179771.F.IDENTIFY, Chunk179771.F.GUILDS_MEMBERS_READ]
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
          currentGuildMember: g.Ay.getSelfMember(t)
        };
        return null == i.currentGuildMember || null != n && (0, s.A)(i, n) || r((0, S.A)(i.currentGuildMember)), i
      }
    }
  },
  [Chunk652215.ZE4.ENTITLEMENT_CREATE]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk613057.hj, Chunk613057.VH]
    },
    handler() {}
  },
  [Chunk652215.ZE4.ENTITLEMENT_DELETE]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk613057.hj, Chunk613057.VH]
    },
    handler() {}
  },
  [Chunk652215.ZE4.SCREENSHARE_STATE_UPDATE]: {
    scope: {
      [Chunk613057.sm.ALL]: [Chunk613057.hj, Chunk179771.F.RPC_SCREENSHARE_READ]
    },
    handler: () => e => {
      var t;
      let {
        prevState: n,
        dispatch: r
      } = e, l = p.A.getStreamerActiveStreamMetadata(), a = (null == l ? true : l.pid) != null ? u.Ay.getGameForPID(l.pid) : null, s = (null == a ? true : a.id) != null ? c.A.getApplication(a.id) : null, o = null != s ? (0, v.A)(s) : null, d = null == l ? true : l.sourceName, h = {
        active: null != l,
        pid: null != (t = null == l ? true : l.pid) ? t : null,
        application: null != o ? {
          name: d
        } : null
      };
      return i().isEqual(h, n) || r(h), h
    }
  },
  [Chunk652215.ZE4.VIDEO_STATE_UPDATE]: {
    scope: {
      [Chunk613057.sm.ALL]: [Chunk613057.hj, Chunk179771.F.RPC_VIDEO_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, r = {
        active: m.A.isVideoEnabled()
      };
      return i().isEqual(r, t) || n(r), r
    }
  },
  [Chunk652215.ZE4.AUTHORIZE_REQUEST]: {
    scope: true,
    handler() {}
  }
}