/** Chunk was on web.js **/
/** chunk id: 447543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bk: () => eg,
  CB: () => eb,
  ZP: () => ey,
  r$: () => eE
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
  Chunk176505 = require("./176505.js"),
  Chunk70722 = require("./70722.js"),
  Chunk245335 = require("./245335.js"),
  Chunk157925 = require("./157925.js");

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      er(e, t, n[t])
    })
  }
  return e
}

function ea(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eo(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ea(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let es = "invite",
  el = null;

function ec(e) {
  var t, n, r, i, a, s;
  let l = {};
  switch (e.target_type) {
    case et.Iq.STREAM:
      l.targetType = e.target_type, l.targetUserId = null == (r = e.target_user) ? true : r.id;
      break;
    case et.Iq.EMBEDDED_APPLICATION:
      l.targetType = e.target_type, l.targetApplicationId = null == (i = e.target_application) ? true : i.id;
      break;
    case et.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
      l.targetType = e.target_type
  }
  return (null == G.Z.getGuild(null == (t = e.guild) ? true : t.id) || e.new_member) && null != e.channel && (0, L.zi)(e.channel.type) && (l.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (l.guildScheduledEvent = e.guild_scheduled_event), l.isGuestInvite = (0, W.yE)(null != (a = e.flags) ? a : 0, o.$.IS_GUEST_INVITE), l.isApplicationBypassInvite = (0, W.yE)(null != (s = e.flags) ? s : 0, o.$.IS_APPLICATION_BYPASS), l.inviterUserId = null == (n = e.inviter) ? true : n.id, l
}

function eu(e, t) {
  return eo(ei({}, e), {
    invite_guild_scheduled_event_id: t.guildScheduledEventId
  })
}

function ed(e, t, n) {
  var r, i;
  if ((null == n ? true : n.targetType) === et.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return $.oC.ROLE_SUBSCRIPTIONS;
  if ((null == n ? true : n.targetType) == null && !L.tx.has(t.type) && (0, I.s)(e)) return $.oC.GUILD_HOME;
  let a = M.Z.getChannel(t.id);
  return Z.Z.can(J.Plq.VIEW_CHANNEL, a) ? t.id : null != (i = null == (r = k.ZP.getDefaultChannel(e, true, J.Plq.CREATE_INSTANT_INVITE)) ? true : r.id) ? i : t.id
}

function ef(e, t) {
  let {
    type: n
  } = e, {
    transitionTo: r,
    welcomeModalChannelId: i,
    guildScheduledEvent: a
  } = null != t ? t : {}, o = n === J.d4z.GUILD_STAGE_VOICE, s = {
    source: w.Z.INVITE_ACCEPT,
    navigationReplace: true
  };
  return null != i && (s.welcomeModalChannelId = i), o && (s.state = en.Df), null != a && (s.guildScheduledEventId = a.id), e => null != r ? r(e, s) : (0, D.uL)(e, s)
}

function e_(e) {
  let {
    guildId: t,
    channel: r,
    options: i,
    analyticsLocations: a = []
  } = e, o = G.Z.getGuild(t), s = null == o ? true : o.features.has(J.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL), {
    targetUserId: l,
    targetType: c,
    targetApplicationId: u,
    isGuestInvite: f,
    isApplicationBypassInvite: _
  } = null != i ? i : {};
  if (!f && !_ && !(null == i ? true : i.forceTransition) && s && F.Z.getGuildId() !== t) return;
  let {
    type: p
  } = r, g = M.Z.getChannel(r.id), b = ed(t, r, i), I = p === J.d4z.GUILD_STAGE_VOICE, T = J.Z5c.CHANNEL(t, b);
  L.tx.has(p) ? (0, y.h)(() => {
    Promise.resolve().then(n.bind(n, 287734)).then(e => {
      let {
        default: n
      } = e, o = () => {
        if (I) {
          (0, x.Cq)(r instanceof L.Sf ? r : (0, L.kt)(r)), (0, D.uL)(T);
          return
        }(null == i ? true : i.muteOnJoinVoiceChannel) && q.Z.setSelfMute(d.Yn.DEFAULT, true), n.selectVoiceChannel(b), c === et.Iq.STREAM && null != l && Q.iV({
          streamType: ee.lo.GUILD,
          ownerId: l,
          guildId: t,
          channelId: b
        }), c === et.Iq.EMBEDDED_APPLICATION && null != u && ((0, D.uL)(J.Z5c.CHANNEL(null != t ? t : J.ME, b)), (0, m.Z)({
          channelId: b,
          applicationId: u,
          intent: null == i ? true : i.intent,
          inviterUserId: null == i ? true : i.inviterUserId,
          analyticsLocations: a,
          commandOrigin: E.bB.CHAT
        }))
      };
      !f && (0, v.n)(t, [G.Z, V.default, U.ZP]) ? (0, O.hk)(t, o) : o()
    })
  }) : (0, h.l5)(g) && c === et.Iq.EMBEDDED_APPLICATION && null != u && ((0, D.uL)(J.Z5c.CHANNEL(null != t ? t : J.ME, b)), (0, m.Z)({
    channelId: b,
    applicationId: u,
    intent: null == i ? true : i.intent,
    inviterUserId: null == i ? true : i.inviterUserId,
    analyticsLocations: a,
    commandOrigin: E.bB.CHAT
  })), ef(r, i)(T)
}

function ep(e) {
  let {
    guildScheduledEvent: t,
    welcomeModalChannelId: n
  } = e;
  null != t && (0, y.h)(() => {
    let e = {
      guildScheduledEventId: t.id
    };
    null != n && (e.welcomeModalChannelId = n), (0, T.P3)(t, e)
  })
}

function eh(e, t, n) {
  return f.Z.isDispatching() ? Promise.resolve().then(() => eh(e, t, n)) : (f.Z.dispatch({
    type: "INVITE_RESOLVE",
    code: e
  }), (0, R.Z)(e, t, n).then(e => {
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
let em = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [];
    M.Z.addConditionalChangeListener(() => {
      var r;
      let i = M.Z.getChannel(e),
        a = V.default.getCurrentUser();
      return null == i || null == a || !(i.nsfw && !a.nsfwAllowed || i.isGuildVocal() && (0, g.RW)(e)) && ((null == t ? true : t.guildScheduledEvent) != null ? ep(t) : e_({
        guildId: null != (r = i.getGuildId()) ? r : J.ME,
        channel: i,
        options: t,
        analyticsLocations: n
      }), false)
    })
  },
  eg = async e => {
    let {
      guild_id: t,
      channel_id: n
    } = e;
    (0, S.xt)(e) && null != n ? em(n) : await X.Z.transitionToGuildSync(t)
  };

function eE(e, t) {
  var n;
  let {
    invite: r,
    action: i,
    inviter_id: a,
    invite_message_id: o
  } = e;
  H.default.track(J.rMx.INVITE_EMBED_ACTIONED, {
    action: i,
    invite_code: r.code,
    invite_type: null == (n = r.type) ? true : n.toString(),
    inviter_id: null != a ? a : null,
    invite_message_id: null != o ? o : null,
    location_stack: null != t ? t : null
  })
}

function eb(e, t, n) {
  H.default.track(J.rMx.INVITE_SERVER_CLICKED, {
    guild_id: e,
    action: t,
    location_stack: null != n ? n : null
  })
}
let ey = {
  resolveInvite: eh,
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
        url: J.ANM.INSTANT_INVITES(e),
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
    let n = B.Z.getInvite(e.id);
    if (null != n && !n.isExpired()) return n.code;
    let r = {
        max_age: Y.Z.Seconds.DAY
      },
      i = await this.createInvite(e.id, r, t).catch(() => f.Z.dispatch({
        type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
      }));
    return null == i ? true : i.code
  },
  async getAllFriendInvites(e) {
    if (await new Promise(e => f.Z.wait(() => e(null))), B.Z.getFriendInvitesFetching()) return null != el ? el.then(e => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
    el = u.tn.get({
      url: J.ANM.FRIEND_INVITES,
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
    } = await el;
    return el = null, f.Z.dispatch({
      type: "FRIEND_INVITES_FETCH_RESPONSE",
      receivedAt: new Date,
      invites: t
    }), t
  },
  createFriendInvite: (e, t) => (f.Z.dispatch({
    type: "FRIEND_INVITE_CREATE_REQUEST"
  }), u.tn.post({
    url: J.ANM.FRIEND_INVITES,
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
    url: J.ANM.INVITE(e),
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
    return K.Z.delete({
      url: J.ANM.INVITE(t),
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
    } = e, s = (0, N.fU)(r), l = s.baseCode, c = j.default.getSessionId(), d = eu(i, s), _ = V.default.getCurrentUser();
    return null != (t = null == _ ? true : _.hasFlag(J.xW$.QUARANTINED)) && t ? ((0, P.default)(), new Promise((e, t) => t(Error()))) : (f.Z.dispatch({
      type: "INVITE_ACCEPT",
      code: l
    }), u.tn.post({
      url: J.ANM.INVITE(l),
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
      let i = S.ZP.getGuildScheduledEvent(s.guildScheduledEventId),
        c = eo(ei({}, e.body), {
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
      var t, n;
      throw f.Z.dispatch({
        type: "INVITE_ACCEPT_FAILURE",
        code: l,
        error: {
          message: null == (t = e.body) ? true : t.message,
          code: null == (n = e.body) ? true : n.code
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
          let t = ec(e);
          em(e.channel.id, t, null != r ? r : [])
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
    if (null != s && (null == (r = s.features) ? true : r.includes(J.oNc.HUB))) return void C.Z.onOpenHubInvite(e);
    let l = (0, W.yE)(null != (i = e.flags) ? i : 0, o.$.IS_APPLICATION_BYPASS);
    if (null != s && !l && (0, A.u)(s)) return void(0, A._)(s.id);
    if (null == a) return;
    let c = ec(e);
    null != t && (c.transitionTo = t), null != n && (c.muteOnJoinVoiceChannel = n), e_({
      guildId: null != s ? s.id : J.ME,
      channel: a,
      options: c
    })
  },
  transitionToInviteSync(e, t, n) {
    if (null != e.channel) {
      let r = ec(e);
      this.transitionToInviteChannelSync(e.channel.id, eo(ei({}, r), {
        intent: n,
        transitionTo: t,
        forceTransition: true
      }))
    }
  },
  openNativeAppModal(e) {
    b.Z.openNativeAppModal(e, J.Etm.INVITE_BROWSER)
  },
  openApp(e, t, n, r, a) {
    var o, u;
    let d, _ = null != e ? (0, N.fU)(e) : null,
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
        utmSource: 2 === a ? "friend_invite" : es,
        fingerprint: n,
        username: r,
        attemptId: t,
        event: null == _ ? true : _.guildScheduledEventId,
        iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(p)
      }), H.default.track(J.rMx.DEEP_LINK_CLICKED, {
        fingerprint: (0, c.K)(n),
        attempt_id: t,
        source: es,
        invite_code: p
      })
    } else "#" === (d = null != t ? J.Z5c.INVITE_PROXY(t) : "")[0] && (d = d.slice(1)), d = "discord://".concat(d);
    z.Z.launch(d, t => {
      f.Z.dispatch(t ? {
        type: "INVITE_APP_OPENED",
        code: e
      } : {
        type: "INVITE_APP_NOT_OPENED",
        code: e
      })
    })
  },
  transitionToInviteChannelSync: em,
  trackInviteServerClicked: eb
}