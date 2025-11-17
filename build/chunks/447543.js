/** Chunk was on web.js **/
/** chunk id: 447543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bk: () => eb,
  CB: () => eO,
  ZP: () => ev,
  r$: () => ey
}), require("./997841.js"), require("./415506.js");
var Chunk525654 = require("./525654.js"),
  i = require.n(Chunk525654),
  Chunk990547 = require("./990547.js"),
  Chunk533800 = require("./533800.js"),
  Chunk39612 = require("./39612.js"),
  Chunk271579 = require("./271579.js"),
  Chunk756647 = require("./756647.js"),
  Chunk544891 = require("./544891.js"),
  Chunk46973 = require("./46973.js"),
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
  Chunk630388 = require("./630388.js"),
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

function ea(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ea(e, t, n[t])
    })
  }
  return e
}

function es(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function el(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : es(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ec = "invite",
  eu = null;

function ed(e) {
  var t, n, r, i, a, s;
  let l = {};
  switch (e.target_type) {
    case er.Iq.STREAM:
      l.targetType = e.target_type, l.targetUserId = null == (r = e.target_user) ? true : r.id;
      break;
    case er.Iq.EMBEDDED_APPLICATION:
      l.targetType = e.target_type, l.targetApplicationId = null == (i = e.target_application) ? true : i.id;
      break;
    case er.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
      l.targetType = e.target_type
  }
  return (null == B.Z.getGuild(null == (t = e.guild) ? true : t.id) || e.new_member) && null != e.channel && (0, M.zi)(e.channel.type) && (l.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (l.guildScheduledEvent = e.guild_scheduled_event), l.isGuestInvite = (0, K.yE)(null != (a = e.flags) ? a : 0, o.$.IS_GUEST_INVITE), l.isApplicationBypassInvite = (0, K.yE)(null != (s = e.flags) ? s : 0, o.$.IS_APPLICATION_BYPASS), l.inviterUserId = null == (n = e.inviter) ? true : n.id, l
}

function ef(e, t) {
  return el(eo({}, e), {
    invite_guild_scheduled_event_id: t.guildScheduledEventId
  })
}

function e_(e, t, n) {
  var r, i;
  if ((null == n ? true : n.targetType) === er.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return et.oC.ROLE_SUBSCRIPTIONS;
  if ((null == n ? true : n.targetType) == null && !M.tx.has(t.type) && (0, T.s)(e)) return et.oC.GUILD_HOME;
  let a = j.Z.getChannel(t.id);
  return F.Z.can($.Plq.VIEW_CHANNEL, a) ? t.id : null != (i = null == (r = U.ZP.getDefaultChannel(e, true, $.Plq.CREATE_INSTANT_INVITE)) ? true : r.id) ? i : t.id
}

function ep(e, t) {
  let {
    type: n
  } = e, {
    transitionTo: r,
    welcomeModalChannelId: i,
    guildScheduledEvent: a
  } = null != t ? t : {}, o = n === $.d4z.GUILD_STAGE_VOICE, s = {
    source: w.Z.INVITE_ACCEPT,
    navigationReplace: true
  };
  return null != i && (s.welcomeModalChannelId = i), o && (s.state = ei.Df), null != a && (s.guildScheduledEventId = a.id), e => null != r ? r(e, s) : (0, x.uL)(e, s)
}

function eh(e) {
  let {
    guildId: t,
    channel: r,
    options: i,
    analyticsLocations: a = []
  } = e, o = B.Z.getGuild(t), s = null == o ? true : o.features.has($.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL), {
    targetUserId: l,
    targetType: c,
    targetApplicationId: u,
    isGuestInvite: f,
    isApplicationBypassInvite: _
  } = null != i ? i : {};
  if (!f && !_ && !(null == i ? true : i.forceTransition) && s && V.Z.getGuildId() !== t) return;
  let {
    type: p
  } = r, g = j.Z.getChannel(r.id), E = e_(t, r, i), y = p === $.d4z.GUILD_STAGE_VOICE, T = $.Z5c.CHANNEL(t, E);
  M.tx.has(p) ? (0, O.h)(() => {
    Promise.resolve().then(n.bind(n, 287734)).then(e => {
      let {
        default: n
      } = e, o = () => {
        if (y) {
          (0, L.Cq)(r instanceof M.Sf ? r : (0, M.createChannelRecord)(r)), (0, x.uL)(T);
          return
        }(null == i ? true : i.muteOnJoinVoiceChannel) && X.Z.setSelfMute(d.Yn.DEFAULT, true), n.selectVoiceChannel(E), c === er.Iq.STREAM && null != l && J.iV({
          streamType: en.lo.GUILD,
          ownerId: l,
          guildId: t,
          channelId: E
        }), c === er.Iq.EMBEDDED_APPLICATION && null != u && ((0, x.uL)($.Z5c.CHANNEL(null != t ? t : $.ME, E)), (0, m.Z)({
          channelId: E,
          applicationId: u,
          intent: null == i ? true : i.intent,
          inviterUserId: null == i ? true : i.inviterUserId,
          analyticsLocations: a,
          commandOrigin: b.bB.CHAT
        }))
      };
      !f && (0, I.n)(t, [B.Z, H.default, G.ZP]) ? (0, v.hk)(t, o) : o()
    })
  }) : (0, h.l5)(g) && c === er.Iq.EMBEDDED_APPLICATION && null != u && ((0, x.uL)($.Z5c.CHANNEL(null != t ? t : $.ME, E)), (0, m.Z)({
    channelId: E,
    applicationId: u,
    intent: null == i ? true : i.intent,
    inviterUserId: null == i ? true : i.inviterUserId,
    analyticsLocations: a,
    commandOrigin: b.bB.CHAT
  })), ep(r, i)(T)
}

function em(e) {
  let {
    guildScheduledEvent: t,
    welcomeModalChannelId: n
  } = e;
  null != t && (0, O.h)(() => {
    let e = {
      guildScheduledEventId: t.id
    };
    null != n && (e.welcomeModalChannelId = n), (0, S.P3)(t, e)
  })
}

function eg(e, t, n) {
  return f.Z.isDispatching() ? Promise.resolve().then(() => eg(e, t, n)) : (f.Z.dispatch({
    type: "INVITE_RESOLVE",
    code: e
  }), (0, P.Z)(e, t, n).then(e => {
    let {
      invite: t,
      code: n,
      banned: r
    } = e;
    return null != t ? f.Z.dispatch({
      type: "INVITE_RESOLVE_SUCCESS",
      invite: t,
      code: n
    }) : f.Z.dispatch({
      type: "INVITE_RESOLVE_FAILURE",
      code: n,
      banned: r
    }), {
      invite: t,
      code: n
    }
  }))
}
let eE = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [];
    j.Z.addConditionalChangeListener(() => {
      var r;
      let i = j.Z.getChannel(e),
        a = H.default.getCurrentUser();
      return null == i || null == a || !(i.nsfw && !a.nsfwAllowed || i.isGuildVocal() && (0, E.RW)(e)) && ((null == t ? true : t.guildScheduledEvent) != null ? em(t) : eh({
        guildId: null != (r = i.getGuildId()) ? r : $.ME,
        channel: i,
        options: t,
        analyticsLocations: n
      }), false)
    })
  },
  eb = async e => {
    let {
      guild_id: t,
      channel_id: n
    } = e;
    (0, A.xt)(e) && null != n ? eE(n) : await Q.Z.transitionToGuildSync(t)
  };

function ey(e, t) {
  var n;
  let {
    invite: r,
    action: i,
    inviter_id: a,
    invite_message_id: o
  } = e;
  Y.default.track($.rMx.INVITE_EMBED_ACTIONED, {
    action: i,
    invite_code: r.code,
    invite_type: null == (n = r.type) ? true : n.toString(),
    inviter_id: null != a ? a : null,
    invite_message_id: null != o ? o : null,
    location_stack: null != t ? t : null
  })
}

function eO(e, t, n) {
  Y.default.track($.rMx.INVITE_SERVER_CLICKED, {
    guild_id: e,
    action: t,
    location_stack: null != n ? n : null
  })
}
let ev = {
  resolveInvite: eg,
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
      let {
        body: r
      } = await u.tn.post({
        url: $.ANM.INSTANT_INVITES(e),
        body: t,
        context: {
          location: n
        },
        rejectWithError: true
      });
      return f.Z.dispatch({
        type: "INSTANT_INVITE_CREATE_SUCCESS",
        channelId: e,
        invite: r
      }), r
    } catch (t) {
      throw f.Z.dispatch({
        type: "INSTANT_INVITE_CREATE_FAILURE",
        channelId: e
      }), new _.Z(t)
    }
  },
  async mobileCreateInvite(e, t) {
    let n = Z.Z.getInvite(e.id);
    if (null != n && !n.isExpired()) return n.code;
    let r = {
        max_age: W.Z.Seconds.DAY
      },
      i = await this.createInvite(e.id, r, t).catch(() => f.Z.dispatch({
        type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
      }));
    return null == i ? true : i.code
  },
  async getAllFriendInvites(e) {
    if (await new Promise(e => f.Z.wait(() => e(null))), Z.Z.getFriendInvitesFetching()) return null != eu ? eu.then(e => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
    eu = u.tn.get({
      url: $.ANM.FRIEND_INVITES,
      context: {
        location: e
      },
      rejectWithError: false
    }), f.Z.dispatch({
      type: "FRIEND_INVITES_FETCH_REQUEST",
      requestedAt: new Date
    });
    let {
      body: t
    } = await eu;
    return eu = null, f.Z.dispatch({
      type: "FRIEND_INVITES_FETCH_RESPONSE",
      receivedAt: new Date,
      invites: t
    }), t
  },
  createFriendInvite: (e, t) => (f.Z.dispatch({
    type: "FRIEND_INVITE_CREATE_REQUEST"
  }), u.tn.post({
    url: $.ANM.FRIEND_INVITES,
    body: null != e ? e : {},
    context: {
      location: t
    },
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e;
    return f.Z.dispatch({
      type: "FRIEND_INVITE_CREATE_SUCCESS",
      invite: t
    }), t
  }, e => {
    throw f.Z.dispatch({
      type: "FRIEND_INVITE_CREATE_FAILURE",
      error: e
    }), e
  })),
  revokeFriendInvites: () => (Chunk570140.Z.dispatch({
    type: "FRIEND_INVITE_REVOKE_REQUEST"
  }), Chunk544891.tn.del({
    url: Chunk981631.ANM.FRIEND_INVITES,
    context: {
      location
    },
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e;
    f.Z.dispatch({
      type: "FRIEND_INVITE_REVOKE_SUCCESS",
      invites: t
    })
  })),
  revokeFriendInvite: e => u.tn.del({
    url: $.ANM.INVITE(e),
    rejectWithError: false
  }),
  clearInviteFromStore(e) {
    f.Z.dispatch({
      type: "INSTANT_INVITE_CLEAR",
      channelId: e
    })
  },
  revokeInvite(e) {
    let {
      code: t,
      channel: n
    } = e;
    return z.Z.delete({
      url: $.ANM.INVITE(t),
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
      f.Z.dispatch({
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
    } = e, s = (0, R.fU)(r), l = s.baseCode, c = k.default.getSessionId(), d = ef(i, s), _ = H.default.getCurrentUser();
    return null != (t = null == _ ? true : _.hasFlag($.xW$.QUARANTINED)) && t ? ((0, D.default)(), new Promise((e, t) => t(Error()))) : (0, E.hO)(i.location_guild_id) ? ((0, g.mN)(ee.L0.JOIN_LARGE_GUILD_UNDERAGE), new Promise((e, t) => t(Error()))) : (f.Z.dispatch({
      type: "INVITE_ACCEPT",
      code: l
    }), u.tn.post({
      url: $.ANM.INVITE(l),
      context: d,
      oldFormErrors: true,
      body: {
        session_id: c
      },
      rejectWithError: false
    }).then(async e => {
      var t, r;
      f.Z.dispatch({
        type: "INVITE_ACCEPT_SUCCESS",
        invite: e.body,
        code: l
      });
      let i = A.ZP.getGuildScheduledEvent(s.guildScheduledEventId),
        c = el(eo({}, e.body), {
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
      throw (null == (t = e.body) ? true : t.code) === $.evJ.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED && (0, g.mN)(ee.L0.JOIN_LARGE_GUILD_UNDERAGE), f.Z.dispatch({
        type: "INVITE_ACCEPT_FAILURE",
        code: l,
        error: {
          message: null == (n = e.body) ? true : n.message,
          code: null == (r = e.body) ? true : r.code
        }
      }), new p.Z(e)
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
          let t = ed(e);
          eE(e.channel.id, t, null != r ? r : [])
        }
        null != i && i(e)
      }
    })
  },
  transitionToInvite(e, t, n) {
    var r, i;
    let {
      channel: a,
      guild: s
    } = e;
    if (null != s && (null == (r = s.features) ? true : r.includes($.GuildFeatures.HUB))) return void N.Z.onOpenHubInvite(e);
    let l = (0, K.yE)(null != (i = e.flags) ? i : 0, o.$.IS_APPLICATION_BYPASS);
    if (null != s && !l && (0, C.u)(s)) return void(0, C._)(s.id);
    if (null == a) return;
    let c = ed(e);
    null != t && (c.transitionTo = t), null != n && (c.muteOnJoinVoiceChannel = n), eh({
      guildId: null != s ? s.id : $.ME,
      channel: a,
      options: c
    })
  },
  transitionToInviteSync(e, t, n) {
    if (null != e.channel) {
      let r = ed(e);
      this.transitionToInviteChannelSync(e.channel.id, el(eo({}, r), {
        intent: n,
        transitionTo: t,
        forceTransition: true
      }))
    }
  },
  openNativeAppModal(e) {
    y.Z.openNativeAppModal(e, $.Etm.INVITE_BROWSER)
  },
  openApp(e, t, n, r, a) {
    var o, u;
    let d, _ = null != e ? (0, R.fU)(e) : null,
      p = null == _ ? true : _.baseCode;
    if (f.Z.dispatch({
        type: "INVITE_APP_OPENING",
        code: e
      }), null != i().ua && i().ua.toLowerCase().indexOf("googlebot") > false) return void f.Z.dispatch({
      type: "INVITE_APP_NOT_OPENED",
      code: e
    });
    if ((null == (o = i().os) ? true : o.family) === "Android" || (null == (u = i().os) ? true : u.family) === "iOS") {
      let e = null != p ? (0, s.z0)(p) : (0, s.Gk)(),
        t = (0, l.WS)();
      d = (0, l.ZP)(e, {
        utmSource: 2 === a ? "friend_invite" : ec,
        fingerprint: n,
        username: r,
        attemptId: t,
        event: null == _ ? true : _.guildScheduledEventId,
        iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(p)
      }), Y.default.track($.rMx.DEEP_LINK_CLICKED, {
        fingerprint: (0, c.K)(n),
        attempt_id: t,
        source: ec,
        invite_code: p
      })
    } else "#" === (d = null != t ? $.Z5c.INVITE_PROXY(t) : "")[0] && (d = d.slice(1)), d = "discord://".concat(d);
    q.Z.launch(d, t => {
      f.Z.dispatch(t ? {
        type: "INVITE_APP_OPENED",
        code: e
      } : {
        type: "INVITE_APP_NOT_OPENED",
        code: e
      })
    })
  },
  transitionToInviteChannelSync: eE,
  trackInviteServerClicked: eO
}