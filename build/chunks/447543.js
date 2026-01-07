/** Chunk was on web.js **/
/** chunk id: 447543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bk: () => ey,
  CB: () => ev,
  ZP: () => eS,
  r$: () => eO
}), require("./997841.js"), require("./415506.js");
var Chunk525654 = require("./525654.js"),
  i = require.n(Chunk525654),
  Chunk990547 = require("./990547.js"),
  Chunk533800 = require("./533800.js"),
  Chunk95015 = require("./95015.js"),
  Chunk39612 = require("./39612.js"),
  Chunk271579 = require("./271579.js"),
  Chunk756647 = require("./756647.js"),
  Chunk544891 = require("./544891.js"),
  Chunk46973 = require("./46973.js"),
  Chunk283693 = require("./283693.js"),
  Chunk570140 = require("./570140.js"),
  Chunk479531 = require("./479531.js"),
  Chunk34756 = require("./34756.js"),
  Chunk595519 = require("./595519.js"),
  Chunk839426 = require("./839426.js"),
  Chunk758119 = require("./758119.js"),
  Chunk622822 = require("./622822.js"),
  Chunk895924 = require("./895924.js"),
  Chunk625128 = require("./625128.js"),
  Chunk972830 = require("./972830.js"),
  Chunk305325 = require("./305325.js"),
  Chunk281956 = require("./281956.js"),
  Chunk931261 = require("./931261.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk461014 = require("./461014.js"),
  Chunk82085 = require("./82085.js"),
  Chunk264229 = require("./264229.js"),
  Chunk652898 = require("./652898.js"),
  Chunk895886 = require("./895886.jsx"),
  Chunk143816 = require("./143816.js"),
  Chunk703656 = require("./703656.js"),
  Chunk922482 = require("./922482.js"),
  Chunk131704 = require("./131704.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk341165 = require("./341165.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk573261 = require("./573261.js"),
  Chunk954824 = require("./954824.js"),
  Chunk846027 = require("./846027.js"),
  Chunk749210 = require("./749210.js"),
  Chunk872810 = require("./872810.js"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js"),
  Chunk176505 = require("./176505.js"),
  Chunk70722 = require("./70722.js"),
  Chunk245335 = require("./245335.js"),
  Chunk157925 = require("./157925.js");

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eo(e, t, n[t])
    })
  }
  return e
}

function el(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ec(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : el(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eu = "invite",
  ed = null;

function ef(e) {
  var t, n, r, i, a, l;
  let c = {};
  switch (e.target_type) {
    case ei.Iq.STREAM:
      c.targetType = e.target_type, c.targetUserId = null == (r = e.target_user) ? true : r.id;
      break;
    case ei.Iq.EMBEDDED_APPLICATION:
      c.targetType = e.target_type, c.targetApplicationId = null == (i = e.target_application) ? true : i.id;
      break;
    case ei.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
      c.targetType = e.target_type
  }
  return (null == B.Z.getGuild(null == (t = e.guild) ? true : t.id) || e.new_member) && null != e.channel && (0, k.zi)(e.channel.type) && (c.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (c.guildScheduledEvent = e.guild_scheduled_event), c.isGuestInvite = (0, s.yE)(null != (a = e.flags) ? a : 0, o.$.IS_GUEST_INVITE), c.isApplicationBypassInvite = (0, s.yE)(null != (l = e.flags) ? l : 0, o.$.IS_APPLICATION_BYPASS), c.inviterUserId = null == (n = e.inviter) ? true : n.id, c
}

function ep(e, t) {
  return ec(es({}, e), {
    invite_guild_scheduled_event_id: t.guildScheduledEventId
  })
}

function e_(e, t, n) {
  var r, i;
  if ((null == n ? true : n.targetType) === ei.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return en.oC.ROLE_SUBSCRIPTIONS;
  if ((null == n ? true : n.targetType) == null && !(0, k.tW)(t.type) && (0, C.s)(e)) return en.oC.GUILD_HOME;
  let a = G.Z.getChannel(t.id);
  return H.Z.can(ee.Plq.VIEW_CHANNEL, a) ? t.id : null != (i = null == (r = Z.ZP.getDefaultChannel(e, true, ee.Plq.CREATE_INSTANT_INVITE)) ? true : r.id) ? i : t.id
}

function em(e, t) {
  let {
    type: n
  } = e, {
    transitionTo: r,
    welcomeModalChannelId: i,
    guildScheduledEvent: a
  } = null != t ? t : {}, o = n === ee.d4z.GUILD_STAGE_VOICE, s = {
    source: L.Z.INVITE_ACCEPT,
    navigationReplace: true
  };
  return null != i && (s.welcomeModalChannelId = i), o && (s.state = ea.Df), null != a && (s.guildScheduledEventId = a.id), e => null != r ? r(e, s) : (0, j.uL)(e, s)
}

function eh(e) {
  let {
    guildId: t,
    channel: r,
    options: i,
    analyticsLocations: a = []
  } = e, o = B.Z.getGuild(t), s = null == o ? true : o.features.has(ee.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL), {
    targetUserId: l,
    targetType: c,
    targetApplicationId: u,
    isGuestInvite: d,
    isApplicationBypassInvite: p
  } = null != i ? i : {};
  if (!d && !p && !(null == i ? true : i.forceTransition) && s && Y.Z.getGuildId() !== t) return;
  let {
    type: _
  } = r, m = G.Z.getChannel(r.id), h = e_(t, r, i), b = _ === ee.d4z.GUILD_STAGE_VOICE, y = ee.Z5c.CHANNEL(t, h);
  (0, k.tW)(_) ? (0, S.h)(() => {
    Promise.resolve().then(n.bind(n, 287734)).then(e => {
      let {
        default: n
      } = e, o = () => {
        if (b) {
          (0, M.Cq)(r instanceof k.Sf ? r : (0, k.createChannelRecord)(r)), (0, j.uL)(y);
          return
        }(null == i ? true : i.muteOnJoinVoiceChannel) && X.Z.setSelfMute(f.Yn.DEFAULT, true), n.selectVoiceChannel(h), c === ei.Iq.STREAM && null != l && $.iV({
          streamType: er.lo.GUILD,
          ownerId: l,
          guildId: t,
          channelId: h
        }), c === ei.Iq.EMBEDDED_APPLICATION && null != u && ((0, j.uL)(ee.Z5c.CHANNEL(null != t ? t : ee.ME, h)), (0, E.Z)({
          channelId: h,
          applicationId: u,
          intent: null == i ? true : i.intent,
          inviterUserId: null == i ? true : i.inviterUserId,
          analyticsLocations: a,
          commandOrigin: O.bB.CHAT
        }))
      };
      !d && (0, T.n)(t, [B.Z, W.default, F.ZP]) ? (0, I.hk)(t, o) : o()
    })
  }) : (0, g.l5)(m) && c === ei.Iq.EMBEDDED_APPLICATION && null != u && ((0, j.uL)(ee.Z5c.CHANNEL(null != t ? t : ee.ME, h)), (0, E.Z)({
    channelId: h,
    applicationId: u,
    intent: null == i ? true : i.intent,
    inviterUserId: null == i ? true : i.inviterUserId,
    analyticsLocations: a,
    commandOrigin: O.bB.CHAT
  })), em(r, i)(y)
}

function eg(e) {
  let {
    guildScheduledEvent: t,
    welcomeModalChannelId: n
  } = e;
  null != t && (0, S.h)(() => {
    let e = {
      guildScheduledEventId: t.id
    };
    null != n && (e.welcomeModalChannelId = n), (0, A.P3)(t, e)
  })
}

function eE(e, t, n) {
  return _.Z.isDispatching() ? Promise.resolve().then(() => eE(e, t, n)) : (_.Z.dispatch({
    type: "INVITE_RESOLVE",
    code: e
  }), (0, D.Z)(e, t, n).then(e => {
    let {
      invite: t,
      code: n,
      banned: r
    } = e;
    return null != t ? _.Z.dispatch({
      type: "INVITE_RESOLVE_SUCCESS",
      invite: t,
      code: n
    }) : _.Z.dispatch({
      type: "INVITE_RESOLVE_FAILURE",
      code: n,
      banned: r
    }), {
      invite: t,
      code: n
    }
  }))
}
let eb = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [];
    G.Z.addConditionalChangeListener(() => {
      var r;
      let i = G.Z.getChannel(e),
        a = W.default.getCurrentUser();
      return null == i || null == a || !(i.nsfw && !a.nsfwAllowed || i.isGuildVocalOrThread() && (0, y.RW)(e)) && ((null == t ? true : t.guildScheduledEvent) != null ? eg(t) : eh({
        guildId: null != (r = i.getGuildId()) ? r : ee.ME,
        channel: i,
        options: t,
        analyticsLocations: n
      }), false)
    })
  },
  ey = async e => {
    let {
      guild_id: t,
      channel_id: n
    } = e;
    (0, N.xt)(e) && null != n ? eb(n) : await J.Z.transitionToGuildSync(t)
  };

function eO(e, t) {
  var n;
  let {
    invite: r,
    action: i,
    inviter_id: a,
    invite_message_id: o
  } = e;
  K.default.track(ee.rMx.INVITE_EMBED_ACTIONED, {
    action: i,
    invite_code: r.code,
    invite_type: null == (n = r.type) ? true : n.toString(),
    inviter_id: null != a ? a : null,
    invite_message_id: null != o ? o : null,
    location_stack: null != t ? t : null
  })
}

function ev(e, t, n) {
  K.default.track(ee.rMx.INVITE_SERVER_CLICKED, {
    guild_id: e,
    action: t,
    location_stack: null != n ? n : null
  })
}
let eS = {
  resolveInvite: eE,
  getInviteContext: (e, t) => ({
    location: e,
    location_guild_id: null != t.guild ? t.guild.id : true,
    location_channel_id: null != t.channel ? t.channel.id : true,
    location_channel_type: null != t.channel ? t.channel.type : true
  }),
  async createInvite(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : true;
    try {
      var r;
      let i = es({}, t);
      (null == (r = i.role_ids) ? true : r.length) === 0 && delete i.role_ids;
      let {
        body: a
      } = await d.tn.post({
        url: ee.ANM.INSTANT_INVITES(e),
        body: i,
        context: {
          location: n
        },
        rejectWithError: true
      });
      return _.Z.dispatch({
        type: "INSTANT_INVITE_CREATE_SUCCESS",
        channelId: e,
        invite: a
      }), a
    } catch (t) {
      throw _.Z.dispatch({
        type: "INSTANT_INVITE_CREATE_FAILURE",
        channelId: e
      }), new m.Z(t)
    }
  },
  async mobileCreateInvite(e, t) {
    let n = V.Z.getInvite(e.id);
    if (null != n && !n.isExpired()) return n.code;
    let r = {
        max_age: z.Z.Seconds.DAY
      },
      i = await this.createInvite(e.id, r, t).catch(() => _.Z.dispatch({
        type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
      }));
    return null == i ? true : i.code
  },
  async getAllFriendInvites(e) {
    if (await new Promise(e => _.Z.wait(() => e(null))), V.Z.getFriendInvitesFetching()) return null != ed ? ed.then(e => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
    ed = d.tn.get({
      url: ee.ANM.FRIEND_INVITES,
      context: {
        location: e
      },
      rejectWithError: false
    }), _.Z.dispatch({
      type: "FRIEND_INVITES_FETCH_REQUEST",
      requestedAt: new Date
    });
    let {
      body: t
    } = await ed;
    return ed = null, _.Z.dispatch({
      type: "FRIEND_INVITES_FETCH_RESPONSE",
      receivedAt: new Date,
      invites: t
    }), t
  },
  createFriendInvite: (e, t) => (_.Z.dispatch({
    type: "FRIEND_INVITE_CREATE_REQUEST"
  }), d.tn.post({
    url: ee.ANM.FRIEND_INVITES,
    body: null != e ? e : {},
    context: {
      location: t
    },
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e;
    return _.Z.dispatch({
      type: "FRIEND_INVITE_CREATE_SUCCESS",
      invite: t
    }), t
  }, e => {
    throw _.Z.dispatch({
      type: "FRIEND_INVITE_CREATE_FAILURE",
      error: e
    }), e
  })),
  revokeFriendInvites: () => (_.Z.dispatch({
    type: "FRIEND_INVITE_REVOKE_REQUEST"
  }), d.tn.del({
    url: ee.ANM.FRIEND_INVITES,
    context: {
      location
    },
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e;
    _.Z.dispatch({
      type: "FRIEND_INVITE_REVOKE_SUCCESS",
      invites: t
    })
  })),
  revokeFriendInvite: e => d.tn.del({
    url: ee.ANM.INVITE(e),
    rejectWithError: false
  }),
  async fetchFriendMembers(e) {
    try {
      let {
        body: t
      } = await q.Z.get({
        url: ee.ANM.INVITE_FRIEND_MEMBERS(e),
        trackedActionData: {
          event: a.NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
          properties: t => {
            var n, r, i;
            return (0, p.iG)({
              code: e,
              friend_count: null != (i = null == t || null == (r = t.body) || null == (n = r.friend_member_ids) ? true : n.length) ? i : 0
            })
          }
        },
        rejectWithError: true
      });
      _.Z.dispatch({
        type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS",
        code: e,
        friendMemberIds: t.friend_member_ids
      })
    } catch (t) {
      _.Z.dispatch({
        type: "INVITE_FRIEND_MEMBERS_FETCH_FAILURE",
        code: e
      })
    }
  },
  clearInviteFromStore(e) {
    _.Z.dispatch({
      type: "INSTANT_INVITE_CLEAR",
      channelId: e
    })
  },
  revokeInvite(e) {
    let {
      code: t,
      channel: n
    } = e;
    return q.Z.delete({
      url: ee.ANM.INVITE(t),
      oldFormErrors: true,
      trackedActionData: {
        event: a.NetworkActionNames.INVITE_REVOKE,
        properties: {
          uses: e.uses,
          max_uses: e.maxUses,
          max_age: e.maxAge,
          invite_type: e.type
        }
      },
      rejectWithError: false
    }).then(() => {
      _.Z.dispatch({
        type: "INSTANT_INVITE_REVOKE_SUCCESS",
        code: t,
        channelId: n.id
      })
    })
  },
  acceptInvite(e) {
    var t;
    let {
      inviteKey: r,
      context: i,
      callback: a,
      skipOnboarding: o
    } = e, s = (0, w.fU)(r), l = s.baseCode, c = U.default.getSessionId(), u = ep(i, s), f = W.default.getCurrentUser();
    return null != (t = null == f ? true : f.hasFlag(ee.xW$.QUARANTINED)) && t ? ((0, x.default)(), new Promise((e, t) => t(Error()))) : (0, y.hO)(i.location_guild_id) ? ((0, b.mN)(et.L0.JOIN_LARGE_GUILD_UNDERAGE), new Promise((e, t) => t(Error()))) : (_.Z.dispatch({
      type: "INVITE_ACCEPT",
      code: l
    }), d.tn.post({
      url: ee.ANM.INVITE(l),
      context: u,
      oldFormErrors: true,
      body: {
        session_id: c
      },
      rejectWithError: false
    }).then(async e => {
      var t, r;
      _.Z.dispatch({
        type: "INVITE_ACCEPT_SUCCESS",
        invite: e.body,
        code: l
      });
      let i = N.ZP.getGuildScheduledEvent(s.guildScheduledEventId),
        c = ec(es({}, e.body), {
          guild_scheduled_event: i
        }),
        u = null != (r = null == c ? true : c.guild_id) ? r : null == c || null == (t = c.guild) ? true : t.id;
      if (!o && null != u && c.new_member) {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 17181));
        await e({
          guildId: u
        })
      }
      return null == a || a(c), e.body
    }, e => {
      var t, n, r;
      throw (null == (t = e.body) ? true : t.code) === ee.evJ.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED && (0, b.mN)(et.L0.JOIN_LARGE_GUILD_UNDERAGE), _.Z.dispatch({
        type: "INVITE_ACCEPT_FAILURE",
        code: l,
        error: {
          message: null == (n = e.body) ? true : n.message,
          code: null == (r = e.body) ? true : r.code
        }
      }), new h.Z(e)
    }))
  },
  acceptInviteAndTransitionToInviteChannel(e) {
    let {
      inviteKey: t,
      context: n,
      analyticsLocations: r,
      callback: i,
      skipOnboarding: a
    } = e;
    return this.acceptInvite({
      inviteKey: t,
      context: n,
      skipOnboarding: a,
      callback: e => {
        if (null != e.channel) {
          let t = ef(e);
          eb(e.channel.id, t, null != r ? r : [])
        }
        null != i && i(e)
      }
    })
  },
  transitionToInvite(e, t, n) {
    var r, i;
    let {
      channel: a,
      guild: l
    } = e;
    if (null != l && (null == (r = l.features) ? true : r.includes(ee.GuildFeatures.HUB))) return void R.Z.onOpenHubInvite(e);
    let c = (0, s.yE)(null != (i = e.flags) ? i : 0, o.$.IS_APPLICATION_BYPASS);
    if (null != l && !c && (0, P.u)(l)) return void(0, P._)(l.id);
    if (null == a) return;
    let u = ef(e);
    null != t && (u.transitionTo = t), null != n && (u.muteOnJoinVoiceChannel = n), eh({
      guildId: null != l ? l.id : ee.ME,
      channel: a,
      options: u
    })
  },
  transitionToInviteSync(e, t, n) {
    if (null != e.channel) {
      let r = ef(e);
      this.transitionToInviteChannelSync(e.channel.id, ec(es({}, r), {
        intent: n,
        transitionTo: t,
        forceTransition: true
      }))
    }
  },
  openNativeAppModal(e) {
    v.Z.openNativeAppModal(e, ee.Etm.INVITE_BROWSER)
  },
  openApp(e, t, n, r, a) {
    var o, s;
    let d, f = null != e ? (0, w.fU)(e) : null,
      p = null == f ? true : f.baseCode;
    if (_.Z.dispatch({
        type: "INVITE_APP_OPENING",
        code: e
      }), null != i().ua && i().ua.toLowerCase().indexOf("googlebot") > false) return void _.Z.dispatch({
      type: "INVITE_APP_NOT_OPENED",
      code: e
    });
    if ((null == (o = i().os) ? true : o.family) === "Android" || (null == (s = i().os) ? true : s.family) === "iOS") {
      let e = null != p ? (0, l.z0)(p) : (0, l.Gk)(),
        t = (0, c.WS)();
      d = (0, c.ZP)(e, {
        utmSource: 2 === a ? "friend_invite" : eu,
        fingerprint: n,
        username: r,
        attemptId: t,
        event: null == f ? true : f.guildScheduledEventId,
        iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(p)
      }), K.default.track(ee.rMx.DEEP_LINK_CLICKED, {
        fingerprint: (0, u.K)(n),
        attempt_id: t,
        source: eu,
        invite_code: p
      })
    } else "#" === (d = null != t ? ee.Z5c.INVITE_PROXY(t) : "")[0] && (d = d.slice(1)), d = "discord://".concat(d);
    Q.Z.launch(d, t => {
      _.Z.dispatch(t ? {
        type: "INVITE_APP_OPENED",
        code: e
      } : {
        type: "INVITE_APP_NOT_OPENED",
        code: e
      })
    })
  },
  transitionToInviteChannelSync: eb,
  trackInviteServerClicked: ev
}