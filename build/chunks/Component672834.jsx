/** Chunk was on web.js **/
/** chunk id: 672834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ti
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk843472 = require("./843472.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk155718 = require("./155718.js"),
  Chunk151660 = require("./151660.jsx"),
  Chunk626584 = require("./626584.js"),
  Chunk659859 = require("./659859.jsx"),
  Chunk785823 = require("./785823.js"),
  Chunk509536 = require("./509536.jsx"),
  Chunk615179 = require("./615179.jsx"),
  Chunk120120 = require("./120120.jsx"),
  Chunk379114 = require("./379114.jsx"),
  Chunk698441 = require("./698441.js"),
  Chunk484724 = require("./484724.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk850131 = require("./850131.jsx"),
  Chunk31051 = require("./31051.jsx"),
  Chunk659203 = require("./659203.jsx"),
  Chunk446028 = require("./446028.jsx"),
  Chunk302291 = require("./302291.jsx"),
  Chunk282224 = require("./282224.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk849736 = require("./849736.js"),
  Chunk63995 = require("./63995.js"),
  Chunk105530 = require("./105530.js"),
  Chunk353202 = require("./353202.js"),
  Chunk747926 = require("./747926.js"),
  Chunk336589 = require("./336589.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk470710 = require("./470710.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk203982 = require("./203982.js"),
  Chunk562153 = require("./562153.js"),
  Chunk728458 = require("./728458.js"),
  Chunk661191 = require("./661191.js"),
  Chunk465364 = require("./465364.js"),
  Chunk877923 = require("./877923.jsx"),
  Chunk291812 = require("./291812.jsx"),
  Chunk898401 = require("./898401.jsx"),
  Chunk447215 = require("./447215.jsx"),
  Chunk97896 = require("./97896.jsx"),
  Chunk939344 = require("./939344.jsx"),
  Chunk451483 = require("./451483.jsx"),
  Chunk855532 = require("./855532.jsx"),
  Chunk724382 = require("./724382.jsx"),
  Chunk333782 = require("./333782.jsx"),
  Chunk441412 = require("./441412.jsx"),
  Chunk986533 = require("./986533.jsx"),
  Chunk320381 = require("./320381.jsx"),
  Chunk749795 = require("./749795.jsx"),
  Chunk821241 = require("./821241.jsx"),
  Chunk541171 = require("./541171.jsx"),
  Chunk229673 = require("./229673.jsx"),
  Chunk494086 = require("./494086.jsx"),
  Chunk734771 = require("./734771.jsx"),
  Chunk753073 = require("./753073.jsx"),
  Chunk640289 = require("./640289.jsx"),
  Chunk293657 = require("./293657.jsx"),
  Chunk269802 = require("./269802.jsx"),
  Chunk576471 = require("./576471.jsx"),
  Chunk808821 = require("./808821.jsx"),
  Chunk933762 = require("./933762.jsx"),
  Chunk840233 = require("./840233.jsx"),
  Chunk536030 = require("./536030.jsx"),
  Chunk912746 = require("./912746.jsx"),
  Chunk817253 = require("./817253.jsx"),
  Chunk911726 = require("./911726.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk502075 = require("./502075.js"),
  Chunk985018 = require("./985018.jsx");

function eR(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eR(e, t, n[t])
    })
  }
  return e
}

function eD(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ex(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eD(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eL(e) {
  z.A.captureException(e), new p.A("SystemMessage").error("", e)
}

function ej(e) {
  let {
    message: t,
    compact: n,
    channel: s
  } = e, {
    id: o,
    author: l
  } = t, u = M.default.getId(), d = t.getChannelId(), f = (0, a.bG)([k.A], () => k.A.isCallActive(d, o), [d, o]), p = (0, a.bG)([Y.A], () => Y.A.getVoiceState(eC.ME, u)), _ = !f && null != t.call && !t.call.participants.includes(u), h = f && (null == p || p.channelId !== d), m = i.useCallback(() => c.default.selectVoiceChannel(d), [d]), g = (0, $.P)({
    user: l,
    channelId: d,
    guildId: s.guild_id,
    messageId: t.id,
    enableDisplayNameStyles: true
  });
  return (0, r.jsx)(et.A, {
    compact: n,
    message: t,
    missed: _,
    joinable: h,
    usernameHook: g,
    onClickJoinCall: m
  })
}

function eM(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, {
    author: a
  } = t, s = t.getChannelId(), o = (0, $.P)({
    user: a,
    channelId: s,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(ea.A, {
    compact: n,
    message: t,
    usernameHook: o,
    isForumPost: i.isForumPost()
  })
}

function ek(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, {
    author: a
  } = t, s = t.getChannelId(), o = (0, $.P)({
    user: a,
    channelId: s,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(er.A, {
    compact: n,
    message: t,
    usernameHook: o
  })
}

function eU(e) {
  let {
    message: t,
    compact: n,
    channel: a
  } = e, {
    author: s
  } = t, o = t.getChannelId(), l = i.useCallback(() => {
    if (B.A.getChannelId() !== o) {
      let e = U.A.getChannel(o);
      null != e && (0, w.uh)(e.guild_id, e.id)
    }
    setTimeout(() => W._.dispatch(eC.jej.TOGGLE_CHANNEL_PINS), 0)
  }, [o]), c = (0, $.P)({
    user: s,
    channelId: o,
    guildId: a.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(es.A, {
    message: t,
    compact: n,
    usernameHook: c,
    onClickPins: __OVERLAY__ ? null : l
  })
}

function eG(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, {
    author: s
  } = t, o = t.getChannelId(), l = (0, a.bG)([H.default], () => H.default.getUser(t.mentions[0]), [t]), c = K.Ay.getName(null, o, l), u = (0, $.P)({
    user: s,
    channelId: o,
    guildId: n.guild_id,
    messageId: t.id
  }), d = (0, $.P)({
    user: l,
    channelId: o,
    guildId: n.guild_id,
    messageId: t.id
  });
  return n.isThread() ? (0, r.jsx)(ev.A, {
    message: t,
    channel: n,
    compact: i,
    targetUser: l,
    actorUsernameHook: u,
    targetUsernameHook: d
  }) : (0, r.jsx)(ep.A, {
    message: t,
    compact: i,
    otherUsername: c,
    usernameHook: u,
    otherUsernameHook: d
  })
}

function eV(e) {
  let {
    message: t,
    channel: a,
    compact: l
  } = e, c = (0, $.P)({
    user: t.author,
    channelId: t.channel_id,
    guildId: a.guild_id,
    messageId: t.id
  }), u = i.useCallback(async e => {
    var n;
    let r = null == (n = t.messageReference) ? true : n.channel_id;
    if (null != r) {
      await x.A.loadThread(r);
      let t = U.A.getChannel(r);
      null != t && (0, L.JA)(t, e.shiftKey)
    }
  }, [t]), d = i.useCallback(() => {
    (0, s.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("34160"), n.e("86155")]).then(n.bind(n, 126768));
      return t => (0, r.jsx)(e, eP({
        channel: a
      }, t))
    })
  }, [a]), f = i.useCallback(e => {
    var i;
    let a = U.A.getChannel(null == (i = t.messageReference) ? true : i.channel_id);
    null != a && (0, o.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99011"), n.e("88974"), n.e("9282")]).then(n.bind(n, 44536));
      return t => (0, r.jsx)(e, ex(eP({}, t), {
        channel: a
      }))
    })
  }, [t]);
  return (0, r.jsx)(eO.A, {
    message: t,
    compact: l,
    usernameHook: c,
    onClickThread: u,
    onClickViewThreads: d,
    onContextMenuThread: f
  })
}

function eF(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, {
    author: s
  } = t, o = t.getChannelId(), l = (0, a.bG)([H.default], () => H.default.getUser(t.mentions[0]), [t]), c = (0, $.P)({
    user: s,
    channelId: o,
    guildId: n.guild_id,
    messageId: t.id
  }), u = (0, $.P)({
    user: l,
    channelId: o,
    guildId: n.guild_id,
    messageId: t.id
  });
  return n.isThread() ? (0, r.jsx)(eA.A, {
    message: t,
    channel: n,
    compact: i,
    targetUser: l,
    actorUsernameHook: c,
    targetUsernameHook: u
  }) : null != l && l.id !== s.id ? (0, r.jsx)(e_.A, {
    message: t,
    channel: n,
    compact: i,
    usernameHook: c,
    otherUser: l,
    otherUsernameHook: u
  }) : (0, r.jsx)(e_.A, {
    message: t,
    channel: n,
    usernameHook: c
  })
}

function eB(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, {
    author: a
  } = t, s = t.getChannelId(), o = (0, $.P)({
    user: a,
    channelId: s,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(eS.A, {
      message: t,
      compact: n,
      usernameHook: o
    }), (0, r.jsx)(j.I, {
      channel: i,
      message: t
    })]
  })
}

function eH(e) {
  let {
    message: t,
    channel: n,
    compact: s
  } = e, {
    author: o
  } = t, {
    guild_id: l
  } = n, c = t.getChannelId(), u = (0, a.bG)([G.A], () => G.A.getGuild(l), [l]), d = i.useCallback(() => {
    null != u && (0, m.K)({
      guildId: u.id,
      location: {
        section: eC.JJy.CHANNEL_TEXT_AREA,
        object: eC.ZSU.BOOST_ANNOUNCEMENT_UPSELL
      }
    })
  }, [u]), f = (0, $.P)({
    user: o,
    channelId: c,
    guildId: n.guild_id,
    messageId: t.id,
    stopPropagation: true
  });
  return (0, r.jsx)(eT.Ay, {
    message: t,
    compact: s,
    guild: u,
    usernameHook: f,
    onClickMessage: d
  })
}

function eY(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, {
    author: a
  } = t, s = t.getChannelId(), o = (0, $.P)({
    user: a,
    channelId: s,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(en.A, {
    message: t,
    compact: n,
    usernameHook: o
  })
}

function eW(e) {
  let {
    message: t,
    compact: n,
    channel: s
  } = e, {
    author: o,
    author: {
      id: l
    },
    messageReference: c
  } = t, d = t.getChannelId(), f = (0, a.bG)([F.A], () => F.A.findActivity(l, e => e.type === eC.$pd.PLAYING), [l]), p = (0, a.bG)([U.A], () => null != c ? U.A.getChannel(c.channel_id) : null, [c]), _ = null == c ? true : c.guild_id, h = (0, $.P)({
    user: o,
    channelId: d,
    guildId: s.guild_id,
    messageId: t.id
  }), m = i.useCallback(() => {
    null != p && null != _ && (0, u.Nl)({
      streamType: eN.U4.GUILD,
      ownerId: l,
      channelId: p.id,
      guildId: _
    })
  }, [l, p, _]);
  return null != c && null != p && null != c.guild_id ? (0, r.jsx)(ed.A, {
    message: t,
    compact: n,
    channel: p,
    playingActivity: f,
    onJoinStream: m,
    usernameHook: h
  }) : null
}

function eK(e) {
  let {
    message: t,
    compact: n
  } = e, i = t.getChannelId(), s = (0, a.bG)([U.A], () => U.A.getChannel(i), [i]), o = null != s ? s.getGuildId() : null, l = () => {
    null != o && v.A.open(o, eC.BEX.ACCESS, eC.nd0.ACCESS_DISCOVERABLE)
  };
  return (0, r.jsx)(el.Rk, {
    message: t,
    compact: n,
    onClick: l
  })
}

function ez(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e;
  return (0, h.ER)(t) ? (0, r.jsx)(ee.A, {
    message: t,
    compact: n,
    channel: i
  }) : null
}

function eq(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, a = (0, $.P)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(eo.A, {
    message: t,
    compact: n,
    usernameHook: a
  })
}

function eZ(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, a = (0, $.P)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(eu.A, {
    message: t,
    compact: n,
    channel: i,
    usernameHook: a
  })
}

function eX(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, a = (0, $.P)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(ec.A, {
    message: t,
    compact: n,
    channel: i,
    usernameHook: a
  })
}

function eQ(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, s = (0, $.P)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  }), o = (0, a.bG)([b.Ay], () => b.Ay.getActiveEventByChannel(n.id), [n.id]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(eE.A, {
      message: t,
      compact: i,
      usernameHook: s
    }), null != o && o.name === t.content ? (0, r.jsx)(O.A, {
      code: "".concat(n.guild_id, "-").concat(o.id)
    }) : null]
  })
}

function eJ(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, a = (0, $.P)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(eh.A, {
    message: t,
    compact: i,
    usernameHook: a
  })
}

function e$(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, a = (0, $.P)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(ey.A, {
    message: t,
    compact: i,
    usernameHook: a
  })
}

function e0(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, a = (0, $.P)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(eg.A, {
    message: t,
    compact: i,
    usernameHook: a
  })
}

function e1(e) {
  var t, n;
  let {
    message: i,
    channel: o,
    compact: c
  } = e, u = (0, $.P)({
    user: i.author,
    channelId: o.id,
    guildId: o.guild_id,
    messageId: i.id
  }), d = (0, a.bG)([V.A], () => V.A.can(eC.xBc.MUTE_MEMBERS, o)), f = () => {
    (0, R.lL)(o, i.author.id, false), l.A.deleteMessage(o.id, i.id, true)
  }, p = (0, a.bG)([P.A], () => P.A.getParticipant(o.id, i.author.id)), _ = new Date(q.default.extractTimestamp(i.id)).toISOString() === new Date(null != (t = null == p || null == (n = p.voiceState) ? true : n.requestToSpeakTimestamp) ? t : 0).toISOString(), h = d && (null == p ? true : p.rtsState) === D.zF.REQUESTED_TO_SPEAK && _;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(em.A, {
      message: i,
      compact: c,
      usernameHook: u
    }), h ? (0, r.jsx)(s.Button, {
      variant: "secondary",
      onClick: f,
      text: ew.intl.string(ew.t.f0T7hI),
      icon: s.LvC
    }) : null]
  })
}

function e2(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e;
  return (0, r.jsx)(f.A, {
    message: t,
    channel: n,
    compact: i
  })
}

function e3(e) {
  var t;
  let {
    message: n,
    channel: i,
    compact: a
  } = e;
  return (null == (t = n.purchaseNotification) ? true : t.type) === d.hE.GUILD_PRODUCT ? (0, r.jsx)(E.A, {
    message: n,
    channel: i,
    compact: a
  }) : null
}

function e6(e) {
  let {
    message: t,
    channel: n
  } = e;
  return (0, r.jsx)(J.A, {
    message: t,
    channel: n
  })
}

function e4(e) {
  let {
    message: t,
    channel: n
  } = e, i = t.giftingPrompt, s = (0, a.bG)([H.default], () => H.default.getUser(null == i ? true : i.recipientUserId));
  return null == i || null == s ? null : (0, r.jsx)(X.A, {
    giftIntentType: i.giftIntentType,
    recipientUser: s,
    channel: n
  })
}

function e5(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e;
  return (0, r.jsx)(ei.A, {
    message: t,
    channel: n,
    compact: i
  })
}

function e7(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e;
  return (0, r.jsx)(ef.A, {
    message: t,
    channel: n,
    author: t.author,
    compact: i
  })
}

function e8(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, r.jsx)(S.A, {
    userTrialOfferId: t.referralTrialOfferId,
    canRenderReferralEmbed: true,
    compact: n
  })
}

function e9(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, a = (0, $.P)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(_._W, {
    message: t,
    channel: n,
    compact: i,
    usernameHook: a
  })
}

function te(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, r.jsx)(eb.A, {
    message: t,
    compact: n
  })
}

function tt(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e;
  return (0, r.jsx)(I.A, {
    message: t,
    channel: n,
    compact: i
  })
}
let tn = Object.freeze({
  [Chunk652215.lAJ.DEFAULT]: true,
  [Chunk652215.lAJ.REPLY]: true,
  [Chunk652215.lAJ.CHAT_INPUT_COMMAND]: true,
  [Chunk652215.lAJ.CONTEXT_MENU_COMMAND]: true,
  [Chunk652215.lAJ.RECIPIENT_ADD]: eG,
  [Chunk652215.lAJ.RECIPIENT_REMOVE]: eF,
  [Chunk652215.lAJ.CALL]: ej,
  [Chunk652215.lAJ.CHANNEL_NAME_CHANGE]: eM,
  [Chunk652215.lAJ.CHANNEL_ICON_CHANGE]: ek,
  [Chunk652215.lAJ.CHANNEL_PINNED_MESSAGE]: eU,
  [Chunk652215.lAJ.USER_JOIN]: eB,
  [Chunk652215.lAJ.GUILD_BOOST]: eH,
  [Chunk652215.lAJ.GUILD_BOOST_TIER_1]: eH,
  [Chunk652215.lAJ.GUILD_BOOST_TIER_2]: eH,
  [Chunk652215.lAJ.GUILD_BOOST_TIER_3]: eH,
  [Chunk652215.lAJ.CHANNEL_FOLLOW_ADD]: eY,
  [Chunk652215.lAJ.GUILD_STREAM]: eW,
  [Chunk652215.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: eK,
  [Chunk652215.lAJ.GUILD_DISCOVERY_REQUALIFIED]: Chunk320381.wj,
  [Chunk652215.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: Chunk320381.Cq,
  [Chunk652215.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: Chunk320381.If,
  [Chunk652215.lAJ.THREAD_CREATED]: eV,
  [Chunk652215.lAJ.THREAD_STARTER_MESSAGE]: Chunk912746.A,
  [Chunk652215.lAJ.GUILD_INVITE_REMINDER]: true,
  [Chunk652215.lAJ.AUTO_MODERATION_ACTION]: ez,
  [Chunk652215.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eq,
  [Chunk652215.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eq,
  [Chunk652215.lAJ.GUILD_INCIDENT_REPORT_RAID]: eZ,
  [Chunk652215.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: eX,
  [Chunk652215.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: Chunk379114.A,
  [Chunk652215.lAJ.PURCHASE_NOTIFICATION]: e3,
  [Chunk652215.lAJ.INTERACTION_PREMIUM_UPSELL]: true,
  [Chunk652215.lAJ.STAGE_START]: eQ,
  [Chunk652215.lAJ.STAGE_END]: eJ,
  [Chunk652215.lAJ.STAGE_SPEAKER]: e0,
  [Chunk652215.lAJ.STAGE_RAISE_HAND]: e1,
  [Chunk652215.lAJ.STAGE_TOPIC]: e$,
  [Chunk652215.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: Chunk446028.A,
  [Chunk652215.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: Chunk302291.R,
  [Chunk652215.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: Chunk302291.d,
  [Chunk652215.lAJ.PREMIUM_REFERRAL]: e8,
  [Chunk652215.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: e2,
  [Chunk652215.lAJ.CUSTOM_GIFT]: true,
  [Chunk652215.lAJ.GUILD_GAMING_STATS_PROMPT]: true,
  [Chunk652215.lAJ.VOICE_HANGOUT_INVITE]: true,
  [Chunk652215.lAJ.POLL_RESULT]: Chunk850131.A,
  [Chunk652215.lAJ.CHANGELOG]: true,
  [Chunk652215.lAJ.NITRO_NOTIFICATION]: e6,
  [Chunk652215.lAJ.CHANNEL_LINKED_TO_LOBBY]: e5,
  [Chunk652215.lAJ.GIFTING_PROMPT]: e4,
  [Chunk652215.lAJ.IN_GAME_MESSAGE_NUX]: e7,
  [Chunk652215.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: Chunk615179.Z_,
  [Chunk652215.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: Chunk615179.QN,
  [Chunk652215.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: Chunk615179.ez,
  [Chunk652215.lAJ.HD_STREAMING_UPGRADED]: true,
  [Chunk652215.lAJ.EMOJI_ADDED]: e9,
  [Chunk652215.lAJ.CHAT_WALLPAPER_SET]: true,
  [Chunk652215.lAJ.CHAT_WALLPAPER_REMOVED]: true,
  [Chunk652215.lAJ.REPORT_TO_MOD_BAN_USER]: Chunk282224.A,
  [Chunk652215.lAJ.REPORT_TO_MOD_KICK_USER]: Chunk282224.A,
  [Chunk652215.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: Chunk282224.A,
  [Chunk652215.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: Chunk282224.A,
  [Chunk652215.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: Chunk282224.A,
  [Chunk652215.lAJ.PREMIUM_GROUP_INVITE]: tt,
  [Chunk652215.lAJ.VOICE_SESSION]: true,
  66: te
});

function tr(e) {
  let {
    message: t,
    channel: n,
    compact: i,
    disableInteraction: a
  } = e, {
    type: s
  } = t, o = tn[s];
  return null == o ? (eL(Error("unknown message type ".concat(t.type))), null) : (0, r.jsx)(Q.Ay, {
    message: t,
    content: (0, Z.Ay)(t).content,
    compact: null != i && i,
    children: (0, r.jsx)(o, {
      message: t,
      channel: n,
      compact: i,
      disableInteraction: a
    })
  })
}
let ti = Chunk64700.memo(tr)