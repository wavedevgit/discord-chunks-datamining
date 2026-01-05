/** Chunk was on 1272 **/
/** chunk id: 606271, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk107105 = require("./107105.js"),
  Chunk616022 = require("./616022.js"),
  Chunk254579 = require("./254579.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk158776 = require("./158776.js"),
  Chunk19780 = require("./19780.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk914946 = require("./914946.js"),
  Chunk238679 = require("./238679.js"),
  Chunk863141 = require("./863141.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk408491 = require("./408491.js"),
  Chunk65154 = require("./65154.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class P {
  loadServer() {
    for (let e of (Chunk358085.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports)) this.rpcServer.registerTransport(module);
    for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(module, exports);
    for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(module, exports)
  }
  init() {
    this.rpcServer.getCurrentUser = () => Chunk594174.default.getCurrentUser(), this.rpcServer.onConnect = e => {
      i.Z.dispatch({
        type: "RPC_APP_CONNECTED",
        socketId: e.id,
        application: e.application
      }), _.default.track(C.rMx.AUTHORIZED_APP_CONNECTED, {
        app_id: e.application.id,
        transport: e.transport
      })
    }, this.rpcServer.onDisconnect = (e, t) => {
      i.Z.dispatch({
        type: "RPC_APP_DISCONNECTED",
        socketId: e.id,
        application: e.application,
        reason: t
      })
    };
    let e = [Chunk592125.Z, Chunk271383.ZP, Chunk158776.Z, Chunk979651.Z, Chunk131951.Z, Chunk19780.Z];
    new Chunk442837.Fh(module.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"), Chunk570140.Z.subscribe("MESSAGE_CREATE", this.handleMessage), Chunk570140.Z.subscribe("MESSAGE_UPDATE", this.handleMessage), Chunk570140.Z.subscribe("MESSAGE_DELETE", this.handleMessage), Chunk570140.Z.subscribe("SPEAKING", this.handleSpeaking), Chunk570140.Z.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke), Chunk570140.Z.subscribe("GUILD_CREATE", this.handleGuildCreate), Chunk570140.Z.subscribe("CHANNEL_CREATE", this.handleChannelCreate), Chunk570140.Z.subscribe("LOGOUT", this.handleLogout), Chunk570140.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), Chunk570140.Z.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate), Chunk570140.Z.subscribe("ACTIVITY_JOIN", this.handleActivityJoin), Chunk570140.Z.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate), Chunk570140.Z.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode), Chunk570140.Z.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange), Chunk570140.Z.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate), Chunk570140.Z.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate), Chunk570140.Z.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd), Chunk570140.Z.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate), Chunk570140.Z.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove), Chunk570140.Z.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates), Chunk570140.Z.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace), Chunk570140.Z.subscribe("USER_UPDATE", this.handleUserUpdate), Chunk570140.Z.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate), Chunk570140.Z.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete), Chunk570140.Z.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess)
  }
  terminate() {
    Chunk570140.Z.unsubscribe("MESSAGE_CREATE", this.handleMessage), Chunk570140.Z.unsubscribe("MESSAGE_UPDATE", this.handleMessage), Chunk570140.Z.unsubscribe("MESSAGE_DELETE", this.handleMessage), Chunk570140.Z.unsubscribe("SPEAKING", this.handleSpeaking), Chunk570140.Z.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke), Chunk570140.Z.unsubscribe("GUILD_CREATE", this.handleGuildCreate), Chunk570140.Z.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate), Chunk570140.Z.unsubscribe("LOGOUT", this.handleLogout), Chunk570140.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), Chunk570140.Z.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate), Chunk570140.Z.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin), Chunk570140.Z.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate), Chunk570140.Z.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode), Chunk570140.Z.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange), Chunk570140.Z.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate), Chunk570140.Z.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate), Chunk570140.Z.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd), Chunk570140.Z.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate), Chunk570140.Z.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove), Chunk570140.Z.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates), Chunk570140.Z.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace), Chunk570140.Z.unsubscribe("USER_UPDATE", this.handleUserUpdate), Chunk570140.Z.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate), Chunk570140.Z.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete), Chunk570140.Z.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess)
  }
  constructor(e) {
    j(this, "rpcServer", true), j(this, "transports", true), j(this, "rpcCommandHandlers", true), j(this, "rpcEventHandlers", true), j(this, "stores", true), j(this, "registerTransportsForEmbeddedPlatform", true), j(this, "handleMessage", e => {
      let t, n, r;
      if (0 === this.rpcServer.subscriptions.length) return;
      "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
      let i = null;
      switch (e.type) {
        case "MESSAGE_CREATE":
          if ("SENDING" === e.message.state) return;
          t = C.zMe.MESSAGE_CREATE, n = e.channelId, r = e.message, i = "".concat(t).concat(e.message.id);
          break;
        case "MESSAGE_UPDATE":
          t = C.zMe.MESSAGE_UPDATE, n = e.message.channel_id, r = e.message;
          break;
        case "MESSAGE_DELETE":
          t = C.zMe.MESSAGE_DELETE, n = e.channelId, r = {
            id: e.id
          }, i = "".concat(t).concat(e.id);
          break;
        default:
          return (0, E.vE)(e)
      }
      null != n && this.rpcServer.dispatchToSubscriptions(t, {
        channel_id: n
      }, {
        channel_id: n,
        message: (0, v.Xb)(r)
      }, i)
    }), j(this, "handleSpeaking", e => {
      if (0 === this.rpcServer.subscriptions.length) return;
      let t = 0 !== e.speakingFlags ? C.zMe.SPEAKING_START : C.zMe.SPEAKING_STOP;
      if (e.context === N.Yn.DEFAULT) {
        let n = m.Z.getVoiceChannelId();
        if (null != n) {
          let r = s.Z.getChannel(n);
          if (null == r) return;
          let i = b.Z.getVoiceState(r.getGuildId(), e.userId);
          if (null == i) return;
          this.rpcServer.dispatchToSubscriptions(t, {
            channel_id: i.channelId
          }, {
            channel_id: i.channelId,
            user_id: e.userId
          })
        }
      }
    }), j(this, "handleVoiceChannelSelect", e => {
      let {
        guildId: t,
        channelId: n
      } = e;
      0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(C.zMe.VOICE_CHANNEL_SELECT, {}, {
        channel_id: n,
        guild_id: t
      })
    }), j(this, "handleNotificationCreate", e => {
      let {
        channelId: t,
        message: n,
        icon: r,
        title: i,
        body: l
      } = e;
      0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(C.zMe.NOTIFICATION_CREATE, {}, {
        channel_id: t,
        message: (0, v.Xb)(n),
        icon_url: null != r ? (0, v.RE)(r) : null,
        title: i,
        body: l
      })
    }), j(this, "handleActivityJoin", e => {
      let {
        applicationId: t,
        secret: n,
        intent: r,
        embedded: i
      } = e;
      if (0 === this.rpcServer.subscriptions.length) return;
      let l = {
        secret: n
      };
      i && (l.intent = r), this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_JOIN, e => e.socket.application.id === t, l), this.rpcServer.dispatchToSubscriptions(C.zMe.GAME_JOIN, e => e.socket.application.id === t, l)
    }), j(this, "handleActivityLayoutModeUpdate", e => {
      let {
        applicationId: t,
        layoutMode: n
      } = e;
      if (0 === this.rpcServer.subscriptions.length) return;
      let r = n !== S.cE.FOCUSED;
      this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_PIP_MODE_UPDATE, e => e.socket.application.id === t, {
        is_pip_mode: r
      }), this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_LAYOUT_MODE_UPDATE, e => e.socket.application.id === t, {
        layout_mode: n
      })
    }), j(this, "handleFrameUpdateLayoutMode", e => {
      let {
        applicationId: t,
        layoutMode: n
      } = e;
      if (0 === this.rpcServer.subscriptions.length) return;
      let r = n === T.U.PIP ? S.cE.PIP : S.cE.FOCUSED,
        i = r !== S.cE.FOCUSED;
      this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_PIP_MODE_UPDATE, e => e.socket.application.id === t, {
        is_pip_mode: i
      }), this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_LAYOUT_MODE_UPDATE, e => e.socket.application.id === t, {
        layout_mode: r
      })
    }), j(this, "handleThermalStateChange", e => {
      let {
        applicationId: t
      } = e;
      if (0 === this.rpcServer.subscriptions.length || null == t) return;
      let n = {
        thermal_state: (0, l.bY)()
      };
      this.rpcServer.dispatchToSubscriptions(C.zMe.THERMAL_STATE_UPDATE, e => e.socket.application.id === t, n)
    }), j(this, "handleScreenOrientationUpdate", e => {
      let {
        screenOrientation: t
      } = e;
      0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(C.zMe.ORIENTATION_UPDATE, {}, {
        screen_orientation: t
      })
    }), j(this, "handleEmbeddedActivityUpdate", () => {
      if (0 === this.rpcServer.subscriptions.length) return;
      let e = (0, y.dO)();
      this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e)
    }), j(this, "handleActivityMessage", e => {
      var t;
      let {
        channelId: n,
        message: r
      } = e;
      if (0 === this.rpcServer.subscriptions.length) return;
      let {
        application: i,
        activity: l
      } = r;
      if (null == i || null == l || null == l.party_id) return;
      let a = h.default.getUser(null == (t = r.author) ? true : t.id);
      if (null == a) return;
      let o = h.default.getCurrentUser();
      if (null == o || a.id === o.id) return;
      let s = l.type === C.mFx.JOIN_REQUEST ? p.Z.getApplicationActivity(o.id, i.id) : p.Z.getApplicationActivity(a.id, i.id);
      if (null == s || null == s.party || s.party.id !== l.party_id) return;
      let c = s.application_id;
      switch (l.type) {
        case C.mFx.JOIN:
          this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_INVITE, e => e.socket.application.id === c, {
            user: (0, I.Z)(a),
            activity: s,
            type: l.type,
            channel_id: n,
            message_id: r.id
          });
          break;
        case C.mFx.JOIN_REQUEST:
          this.rpcServer.dispatchToSubscriptions(C.zMe.ACTIVITY_JOIN_REQUEST, e => e.socket.application.id === c, {
            user: (0, I.Z)(a),
            activity: s,
            type: l.type,
            channel_id: n,
            message_id: r.id
          })
      }
    }), j(this, "handleOAuth2TokenRevoke", e => {
      let {
        accessToken: t
      } = e;
      this.rpcServer.sockets.forEach(e => {
        e.authorization.accessToken === t && e.close(C.$VG.TOKEN_REVOKED, "Token revoked")
      })
    }), j(this, "handleGuildCreate", e => {
      let {
        guild: {
          id: t
        }
      } = e, n = u.Z.getGuild(t);
      0 !== this.rpcServer.subscriptions.length && null != n && this.rpcServer.dispatchToSubscriptions(C.zMe.GUILD_CREATE, {}, {
        id: t,
        name: n.name
      })
    }), j(this, "handleChannelCreate", e => {
      let {
        channel: {
          id: t,
          name: n,
          type: r
        }
      } = e;
      0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(C.zMe.CHANNEL_CREATE, {}, {
        id: t,
        name: n,
        type: r
      })
    }), j(this, "handleLogout", () => {
      this.rpcServer.sockets.forEach(e => e.close(C.$VG.CLOSE_NORMAL, "User logout"))
    }), j(this, "handleRelationshipAdd", e => {
      let {
        relationship: {
          id: t,
          type: n
        }
      } = e;
      if (0 === this.rpcServer.subscriptions.length) return;
      let r = h.default.getUser(t);
      if (null == r) return;
      let i = (0, v._J)(n, r);
      this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, e => (0, v.kb)(i, e.socket.application.id))
    }), j(this, "handleRelationshipUpdate", e => {
      let {
        relationship: {
          id: t,
          type: n
        }
      } = e;
      if (0 === this.rpcServer.subscriptions.length) return;
      let r = h.default.getUser(t);
      if (null == r) return;
      let i = (0, v._J)(n, r);
      this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, e => (0, v.kb)(i, e.socket.application.id))
    }), j(this, "handleRelationshipRemove", e => {
      let {
        relationship: {
          id: t
        }
      } = e;
      if (0 === this.rpcServer.subscriptions.length) return;
      let n = h.default.getUser(t);
      if (null == n) return;
      let r = (0, v._J)(C.OGo.NONE, n);
      this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, e => (0, v.kb)(r, e.socket.application.id))
    }), j(this, "handlePresenceUpdates", e => {
      let {
        updates: t
      } = e;
      if (0 !== this.rpcServer.subscriptions.length)
        for (let e of new Set(t.map(e => {
            let {
              user: t
            } = e;
            return t.id
          })).values()) {
          let t = g.Z.getRelationshipType(e);
          if (t === C.OGo.NONE) continue;
          let n = h.default.getUser(e);
          if (null == n) continue;
          let r = (0, v._J)(t, n);
          this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, e => (0, v.kb)(r, e.socket.application.id))
        }
    }), j(this, "handlePresencesReplace", () => {
      if (0 !== this.rpcServer.subscriptions.length)
        for (let [e, t] of g.Z.getMutableRelationships().entries()) {
          if (t === C.OGo.NONE) continue;
          let n = h.default.getUser(e);
          if (null == n) continue;
          let r = (0, v._J)(t, n);
          this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, e => (0, v.kb)(r, e.socket.application.id))
        }
    }), j(this, "handleUserUpdate", e => {
      let {
        user: {
          id: t
        }
      } = e;
      if (0 === this.rpcServer.subscriptions.length) return;
      let n = g.Z.getRelationshipType(t);
      if (n === C.OGo.NONE) return;
      let r = h.default.getUser(t);
      if (null == r) return;
      let i = (0, v._J)(n, r);
      this.rpcServer.dispatchToSubscriptions(C.zMe.RELATIONSHIP_UPDATE, {}, e => (0, v.kb)(i, e.socket.application.id))
    }), j(this, "handleEntitlementCreate", e => {
      let {
        entitlement: t
      } = e;
      0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(C.zMe.ENTITLEMENT_CREATE, e => e.socket.application.id === t.application_id, {
        entitlement: t
      })
    }), j(this, "handleEntitlementDelete", e => {
      let {
        entitlement: t
      } = e;
      0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(C.zMe.ENTITLEMENT_DELETE, e => e.socket.application.id === t.application_id, {
        entitlement: t
      })
    }), j(this, "handleQuestEnrollSuccess", e => {
      let {
        enrolledQuestUserStatus: t
      } = e;
      if (0 === this.rpcServer.subscriptions.length) return;
      let n = t.questId,
        r = a.Z.getQuest(n);
      if (null == r) return;
      let i = (0, o.nY)(r);
      null != i && this.rpcServer.dispatchToSubscriptions(C.zMe.QUEST_ENROLLMENT_STATUS_UPDATE, e => {
        var t;
        return e.socket.application.id === i && (null == (t = e.args) ? true : t.quest_id) === n
      }, {
        quest_id: n,
        is_enrolled: null != t.enrolledAt,
        enrolled_at: t.enrolledAt
      })
    }), this.rpcServer = e.server, this.transports = e.transports, this.rpcCommandHandlers = e.commands, this.rpcEventHandlers = e.events, this.stores = e.stores, this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform
  }
}