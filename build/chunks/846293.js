/** Chunk was on web.js **/
/** chunk id: 846293, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eA,
  Pq: () => ev,
  he: () => eO,
  rq: () => eb
}), require("./938796.js"), require("./65821.js");
var Chunk481613 = require("./481613.js"),
  i = require.n(Chunk481613),
  Chunk110259 = require("./110259.js"),
  Chunk821418 = require("./821418.js"),
  Chunk665260 = require("./665260.js"),
  Chunk400253 = require("./400253.js"),
  Chunk49485 = require("./49485.js"),
  Chunk80703 = require("./80703.js"),
  Chunk562465 = require("./562465.js"),
  Chunk205693 = require("./205693.js"),
  Chunk933681 = require("./933681.js"),
  Chunk73153 = require("./73153.js"),
  Chunk181658 = require("./181658.js"),
  Chunk178253 = require("./178253.js"),
  Chunk811024 = require("./811024.js"),
  Chunk983057 = require("./983057.js"),
  Chunk612200 = require("./612200.js"),
  Chunk323073 = require("./323073.js"),
  Chunk392054 = require("./392054.js"),
  Chunk197111 = require("./197111.js"),
  Chunk507263 = require("./507263.js"),
  Chunk202384 = require("./202384.js"),
  Chunk51758 = require("./51758.js"),
  Chunk473529 = require("./473529.js"),
  Chunk707592 = require("./707592.jsx"),
  Chunk698441 = require("./698441.js"),
  Chunk610101 = require("./610101.js"),
  Chunk224536 = require("./224536.js"),
  Chunk21599 = require("./21599.js"),
  Chunk970163 = require("./970163.js"),
  Chunk700241 = require("./700241.jsx"),
  Chunk824865 = require("./824865.js"),
  Chunk976860 = require("./976860.js"),
  Chunk323443 = require("./323443.js"),
  Chunk95701 = require("./95701.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk958590 = require("./958590.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk499785 = require("./499785.js"),
  Chunk877062 = require("./877062.js"),
  Chunk827343 = require("./827343.js"),
  Chunk686956 = require("./686956.js"),
  Chunk401843 = require("./401843.js"),
  Chunk652215 = require("./652215.js"),
  Chunk204925 = require("./204925.js"),
  Chunk746080 = require("./746080.js"),
  Chunk502075 = require("./502075.js"),
  Chunk172799 = require("./172799.js"),
  Chunk516607 = require("./516607.js");

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
    case ei.yV.STREAM:
      c.targetType = e.target_type, c.targetUserId = null == (a = e.target_user) ? true : a.id;
      break;
    case ei.yV.EMBEDDED_APPLICATION:
      c.targetType = e.target_type, c.targetApplicationId = null == (l = e.target_application) ? true : l.id;
      break;
    case ei.yV.ROLE_SUBSCRIPTIONS_PURCHASE:
      c.targetType = e.target_type
  }
  let u = null == B.A.getGuild(null == (r = e.guild) ? true : r.id) || e.new_member;
  return u && null != e.channel && (0, k.ke)(e.channel.type) && (c.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (c.guildScheduledEvent = e.guild_scheduled_event), c.isGuestInvite = (0, s.Lt)(null != (t = e.flags) ? t : 0, o.Q.IS_GUEST_INVITE), c.isApplicationBypassInvite = (0, s.Lt)(null != (n = e.flags) ? n : 0, o.Q.IS_APPLICATION_BYPASS), c.inviterUserId = null == (i = e.inviter) ? true : i.id, u || (c.forceTransition = true), c
}

function ep(e, t) {
  return ec(es({}, e), {
    invite_guild_scheduled_event_id: t.guildScheduledEventId
  })
}

function e_(e, t, n) {
  var r, i;
  if ((null == n ? true : n.targetType) === ei.yV.ROLE_SUBSCRIPTIONS_PURCHASE) return en.VV.ROLE_SUBSCRIPTIONS;
  if ((null == n ? true : n.targetType) == null && !(0, k.QE)(t.type) && (0, T.K)(e)) return en.VV.GUILD_HOME;
  let a = G.A.getChannel(t.id);
  return Y.A.can(ee.xBc.VIEW_CHANNEL, a) ? t.id : null != (r = null == (i = F.Ay.getDefaultChannel(e, true, ee.xBc.CREATE_INSTANT_INVITE)) ? true : i.id) ? r : t.id
}

function eh(e, t) {
  let {
    type: n
  } = e, {
    transitionTo: r,
    welcomeModalChannelId: i,
    guildScheduledEvent: a
  } = null != t ? t : {}, o = n === ee.rbe.GUILD_STAGE_VOICE, s = {
    source: x.A.INVITE_ACCEPT,
    navigationReplace: true
  };
  return null != i && (s.welcomeModalChannelId = i), o && (s.state = {
    stageInviteKey: ea.J2
  }), null != a && (s.guildScheduledEventId = a.id), e => null != r ? r(e, s) : (0, M.pX)(e, s)
}

function em(e) {
  let {
    guildId: t,
    channel: r,
    options: i,
    analyticsLocations: a = []
  } = e, o = B.A.getGuild(t), s = null == o ? true : o.features.has(ee.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL), {
    targetUserId: l,
    targetType: c,
    targetApplicationId: u,
    isGuestInvite: d,
    isApplicationBypassInvite: p
  } = null != i ? i : {};
  if (!d && !p && !(null == i ? true : i.forceTransition) && s && W.A.getGuildId() !== t) return;
  let {
    type: _
  } = r, h = G.A.getChannel(r.id), m = e_(t, r, i), y = _ === ee.rbe.GUILD_STAGE_VOICE, b = ee.BVt.CHANNEL(t, m);
  (0, k.QE)(_) ? (0, A.B)(() => {
    Promise.resolve().then(n.bind(n, 956793)).then(e => {
      let {
        default: n
      } = e, o = () => {
        if (y) {
          (0, j.av)(r instanceof k.YB ? r : (0, k.createChannelRecord)(r)), (0, M.pX)(b);
          return
        }(null == i ? true : i.muteOnJoinVoiceChannel) && X.A.setSelfMute(f.x.DEFAULT, true), n.selectVoiceChannel(m), c === ei.yV.STREAM && null != l && $.Nl({
          streamType: er.U4.GUILD,
          ownerId: l,
          guildId: t,
          channelId: m
        }), c === ei.yV.EMBEDDED_APPLICATION && null != u && ((0, M.pX)(ee.BVt.CHANNEL(null != t ? t : ee.ME, m)), (0, E.A)({
          channelId: m,
          applicationId: u,
          intent: null == i ? true : i.intent,
          inviterUserId: null == i ? true : i.inviterUserId,
          analyticsLocations: a,
          commandOrigin: O.iw.CHAT
        }))
      };
      !d && (0, S.V)(t, [B.A, K.default, V.Ay]) ? (0, I.Ze)(t, o) : o()
    })
  }) : (0, g.AX)(h) && c === ei.yV.EMBEDDED_APPLICATION && null != u && ((0, M.pX)(ee.BVt.CHANNEL(null != t ? t : ee.ME, m)), (0, E.A)({
    channelId: m,
    applicationId: u,
    intent: null == i ? true : i.intent,
    inviterUserId: null == i ? true : i.inviterUserId,
    analyticsLocations: a,
    commandOrigin: O.iw.CHAT
  })), eh(r, i)(b)
}

function eg(e) {
  let {
    guildScheduledEvent: t,
    welcomeModalChannelId: n
  } = e;
  null != t && (0, A.B)(() => {
    let e = {
      guildScheduledEventId: t.id
    };
    null != n && (e.welcomeModalChannelId = n), (0, C.Ul)(t, e)
  })
}

function eE(e, t, n) {
  return _.h.isDispatching() ? Promise.resolve().then(() => eE(e, t, n)) : (_.h.dispatch({
    type: "INVITE_RESOLVE",
    code: e
  }), (0, D.A)(e, t, n).then(e => {
    let {
      invite: t,
      code: n,
      banned: r
    } = e;
    return null != t ? _.h.dispatch({
      type: "INVITE_RESOLVE_SUCCESS",
      invite: t,
      code: n
    }) : _.h.dispatch({
      type: "INVITE_RESOLVE_FAILURE",
      code: n,
      banned: r
    }), {
      invite: t,
      code: n
    }
  }))
}
let ey = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [];
    G.A.addConditionalChangeListener(() => {
      var r;
      let i = G.A.getChannel(e),
        a = K.default.getCurrentUser();
      return null == i || null == a || !(i.nsfw && !a.nsfwAllowed || i.isGuildVocalOrThread() && (0, b.Tv)(e)) && ((null == t ? true : t.guildScheduledEvent) != null ? eg(t) : em({
        guildId: null != (r = i.getGuildId()) ? r : ee.ME,
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
    (0, N.Fd)(e) && null != n ? ey(n) : await J.A.transitionToGuildSync(t)
  };

function eO(e, t) {
  var n;
  let {
    invite: r,
    action: i,
    inviter_id: a,
    invite_message_id: o
  } = e;
  z.default.track(ee.HAw.INVITE_EMBED_ACTIONED, {
    action: i,
    invite_code: r.code,
    invite_type: null == (n = r.type) ? true : n.toString(),
    inviter_id: null != a ? a : null,
    invite_message_id: null != o ? o : null,
    location_stack: null != t ? t : null
  })
}

function ev(e, t, n) {
  z.default.track(ee.HAw.INVITE_SERVER_CLICKED, {
    guild_id: e,
    action: t,
    location_stack: null != n ? n : null
  })
}
let eA = {
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
      } = await d.Bo.post({
        url: ee.Rsh.INSTANT_INVITES(e),
        body: i,
        context: {
          location: n
        },
        rejectWithError: true
      });
      return _.h.dispatch({
        type: "INSTANT_INVITE_CREATE_SUCCESS",
        channelId: e,
        invite: a
      }), a
    } catch (t) {
      throw _.h.dispatch({
        type: "INSTANT_INVITE_CREATE_FAILURE",
        channelId: e
      }), new h.A(t)
    }
  },
  async mobileCreateInvite(e, t) {
    let n = H.A.getInvite(e.id);
    if (null != n && !n.isExpired()) return n.code;
    let r = {
        max_age: q.A.Seconds.DAY
      },
      i = await this.createInvite(e.id, r, t).catch(() => _.h.dispatch({
        type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
      }));
    return null == i ? true : i.code
  },
  async getAllFriendInvites(e) {
    if (await new Promise(e => _.h.wait(() => e(null))), H.A.getFriendInvitesFetching()) return null != ed ? ed.then(e => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
    ed = d.Bo.get({
      url: ee.Rsh.FRIEND_INVITES,
      context: {
        location: e
      },
      rejectWithError: false
    }), _.h.dispatch({
      type: "FRIEND_INVITES_FETCH_REQUEST",
      requestedAt: new Date
    });
    let {
      body: t
    } = await ed;
    return ed = null, _.h.dispatch({
      type: "FRIEND_INVITES_FETCH_RESPONSE",
      receivedAt: new Date,
      invites: t
    }), t
  },
  createFriendInvite: (e, t) => (_.h.dispatch({
    type: "FRIEND_INVITE_CREATE_REQUEST"
  }), d.Bo.post({
    url: ee.Rsh.FRIEND_INVITES,
    body: null != e ? e : {},
    context: {
      location: t
    },
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e;
    return _.h.dispatch({
      type: "FRIEND_INVITE_CREATE_SUCCESS",
      invite: t
    }), t
  }, e => {
    throw _.h.dispatch({
      type: "FRIEND_INVITE_CREATE_FAILURE",
      error: e
    }), e
  })),
  revokeFriendInvites: () => (_.h.dispatch({
    type: "FRIEND_INVITE_REVOKE_REQUEST"
  }), d.Bo.del({
    url: ee.Rsh.FRIEND_INVITES,
    context: {
      location
    },
    rejectWithError: false
  }).then(e => {
    let {
      body: t
    } = e;
    _.h.dispatch({
      type: "FRIEND_INVITE_REVOKE_SUCCESS",
      invites: t
    })
  })),
  revokeFriendInvite: e => d.Bo.del({
    url: ee.Rsh.INVITE(e),
    rejectWithError: false
  }),
  async fetchFriendMembers(e) {
    try {
      let {
        body: t
      } = await Z.A.get({
        url: ee.Rsh.INVITE_FRIEND_MEMBERS(e),
        trackedActionData: {
          event: a.NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
          properties: t => {
            var n, r, i;
            return (0, p.e0)({
              code: e,
              friend_count: null != (n = null == t || null == (i = t.body) || null == (r = i.friend_member_ids) ? true : r.length) ? n : 0
            })
          }
        },
        rejectWithError: true
      });
      _.h.dispatch({
        type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS",
        code: e,
        friendMemberIds: t.friend_member_ids
      })
    } catch (t) {
      _.h.dispatch({
        type: "INVITE_FRIEND_MEMBERS_FETCH_FAILURE",
        code: e
      })
    }
  },
  clearInviteFromStore(e) {
    _.h.dispatch({
      type: "INSTANT_INVITE_CLEAR",
      channelId: e
    })
  },
  revokeInvite(e) {
    let {
      code: t,
      channel: n
    } = e;
    return Z.A.delete({
      url: ee.Rsh.INVITE(t),
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
      _.h.dispatch({
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
    } = e, s = (0, P.y$)(r), l = s.baseCode, c = U.default.getSessionId(), u = ep(i, s), f = K.default.getCurrentUser();
    return null != (t = null == f ? true : f.hasFlag(ee.nhx.QUARANTINED)) && t ? ((0, L.default)(), new Promise((e, t) => t(Error()))) : (_.h.dispatch({
      type: "INVITE_ACCEPT",
      code: l
    }), d.Bo.post({
      url: ee.Rsh.INVITE(l),
      context: u,
      oldFormErrors: true,
      body: {
        session_id: c
      },
      rejectWithError: false
    }).then(async e => {
      var t, r;
      _.h.dispatch({
        type: "INVITE_ACCEPT_SUCCESS",
        invite: e.body,
        code: l
      });
      let i = N.Ay.getGuildScheduledEvent(s.guildScheduledEventId),
        c = ec(es({}, e.body), {
          guild_scheduled_event: i
        }),
        u = null != (t = null == c ? true : c.guild_id) ? t : null == c || null == (r = c.guild) ? true : r.id;
      if (!o && null != u && c.new_member && !c.show_verification_form) {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 967305));
        await e({
          guildId: u
        })
      }
      return null == a || a(c), e.body
    }, e => {
      var t, n, r;
      throw (null == (t = e.body) ? true : t.code) === ee.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED && (0, y.yO)(et.w_.JOIN_LARGE_GUILD_UNDERAGE), _.h.dispatch({
        type: "INVITE_ACCEPT_FAILURE",
        code: l,
        error: {
          message: null == (n = e.body) ? true : n.message,
          code: null == (r = e.body) ? true : r.code
        }
      }), new m.A(e)
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
          ey(e.channel.id, t, null != r ? r : [])
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
    if (null != l && (null == (i = l.features) ? true : i.includes(ee.GuildFeatures.HUB))) return void R.A.onOpenHubInvite(e);
    let c = (0, s.Lt)(null != (r = e.flags) ? r : 0, o.Q.IS_APPLICATION_BYPASS);
    if (null != l && !c && e.new_member && (0, w.h)(l)) return void(0, w.W)(l.id);
    if (null == a) return;
    let u = ef(e);
    null != t && (u.transitionTo = t), null != n && (u.muteOnJoinVoiceChannel = n), em({
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
    v.A.openNativeAppModal(e, ee.e$_.INVITE_BROWSER)
  },
  openApp(e, t, n, r, a) {
    var o, s;
    let d, f = null != e ? (0, P.y$)(e) : null,
      p = null == f ? true : f.baseCode;
    if (_.h.dispatch({
        type: "INVITE_APP_OPENING",
        code: e
      }), null != i().ua && i().ua.toLowerCase().indexOf("googlebot") > false) return void _.h.dispatch({
      type: "INVITE_APP_NOT_OPENED",
      code: e
    });
    if ((null == (o = i().os) ? true : o.family) === "Android" || (null == (s = i().os) ? true : s.family) === "iOS") {
      let e = null != p ? (0, l.jN)(p) : (0, l.BH)(),
        t = (0, c.I_)();
      d = (0, c.Ay)(e, {
        utmSource: 2 === a ? "friend_invite" : eu,
        fingerprint: n,
        username: r,
        attemptId: t,
        event: null == f ? true : f.guildScheduledEventId,
        iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(p)
      }), z.default.track(ee.HAw.DEEP_LINK_CLICKED, {
        fingerprint: (0, u.v)(n),
        attempt_id: t,
        source: eu,
        invite_code: p
      })
    } else "#" === (d = null != t ? ee.BVt.INVITE_PROXY(t) : "")[0] && (d = d.slice(1)), d = "discord://".concat(d);
    Q.A.launch(d, t => {
      _.h.dispatch(t ? {
        type: "INVITE_APP_OPENED",
        code: e
      } : {
        type: "INVITE_APP_NOT_OPENED",
        code: e
      })
    })
  },
  transitionToInviteChannelSync: ey,
  trackInviteServerClicked: ev
}