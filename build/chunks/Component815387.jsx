/** Chunk was on web.js **/
/** chunk id: 815387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => tl
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk904245 = require("./904245.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk911969 = require("./911969.js"),
  Chunk376484 = require("./376484.jsx"),
  Chunk362604 = require("./362604.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk387188 = require("./387188.jsx"),
  Chunk825829 = require("./825829.js"),
  Chunk623624 = require("./623624.jsx"),
  Chunk29887 = require("./29887.jsx"),
  Chunk533694 = require("./533694.jsx"),
  Chunk345114 = require("./345114.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk225890 = require("./225890.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk507435 = require("./507435.jsx"),
  Chunk579832 = require("./579832.jsx"),
  Chunk686380 = require("./686380.jsx"),
  Chunk504733 = require("./504733.jsx"),
  Chunk563959 = require("./563959.jsx"),
  Chunk917318 = require("./917318.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk471253 = require("./471253.js"),
  Chunk565799 = require("./565799.js"),
  Chunk590415 = require("./590415.js"),
  Chunk911560 = require("./911560.js"),
  Chunk488131 = require("./488131.js"),
  Chunk814820 = require("./814820.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk523746 = require("./523746.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk585483 = require("./585483.js"),
  Chunk5192 = require("./5192.js"),
  Chunk960048 = require("./960048.js"),
  Chunk709054 = require("./709054.js"),
  Chunk937889 = require("./937889.js"),
  Chunk15642 = require("./15642.jsx"),
  Chunk260736 = require("./260736.jsx"),
  Chunk930282 = require("./930282.jsx"),
  Chunk818570 = require("./818570.jsx"),
  Chunk942951 = require("./942951.jsx"),
  Chunk9423 = require("./9423.jsx"),
  Chunk789267 = require("./789267.jsx"),
  Chunk262 = require("./262.jsx"),
  Chunk303135 = require("./303135.jsx"),
  Chunk673052 = require("./673052.jsx"),
  Chunk385063 = require("./385063.jsx"),
  Chunk253118 = require("./253118.jsx"),
  Chunk54817 = require("./54817.jsx"),
  Chunk502115 = require("./502115.jsx"),
  Chunk27103 = require("./27103.jsx"),
  Chunk396252 = require("./396252.jsx"),
  Chunk522860 = require("./522860.jsx"),
  Chunk600397 = require("./600397.jsx"),
  Chunk73352 = require("./73352.jsx"),
  Chunk507962 = require("./507962.jsx"),
  Chunk857640 = require("./857640.jsx"),
  Chunk614972 = require("./614972.jsx"),
  Chunk701181 = require("./701181.jsx"),
  Chunk29338 = require("./29338.jsx"),
  Chunk461135 = require("./461135.jsx"),
  Chunk523453 = require("./523453.jsx"),
  Chunk296571 = require("./296571.jsx"),
  Chunk587737 = require("./587737.jsx"),
  Chunk482239 = require("./482239.jsx"),
  Chunk328749 = require("./328749.jsx"),
  Chunk4305 = require("./4305.jsx"),
  Chunk910548 = require("./910548.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk70722 = require("./70722.js"),
  Chunk388032 = require("./388032.jsx");

function eD(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ex(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eD(e, t, n[t])
    })
  }
  return e
}

function eL(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ej(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eL(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eM(e) {
  z.Z.captureException(e), new _.Z("SystemMessage").error("", e)
}

function ek(e) {
  let {
    message: t,
    compact: n,
    channel: o
  } = e, {
    id: s,
    author: l
  } = t, u = k.default.getId(), d = t.getChannelId(), f = (0, a.e7)([U.Z], () => U.Z.isCallActive(d, s), [d, s]), p = (0, a.e7)([Y.Z], () => Y.Z.getVoiceState(eP.ME, u)), _ = !f && null != t.call && !t.call.participants.includes(u), m = f && (null == p || p.channelId !== d), h = i.useCallback(() => c.default.selectVoiceChannel(d), [d]), g = (0, et.l)({
    user: l,
    channelId: d,
    guildId: o.guild_id,
    messageId: t.id,
    enableDisplayNameStyles: true
  });
  return (0, r.jsx)(er.Z, {
    compact: n,
    message: t,
    missed: _,
    joinable: m,
    usernameHook: g,
    onClickJoinCall: h
  })
}

function eU(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, {
    author: a
  } = t, o = t.getChannelId(), s = (0, et.l)({
    user: a,
    channelId: o,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(es.Z, {
    compact: n,
    message: t,
    usernameHook: s,
    isForumPost: i.isForumPost()
  })
}

function eG(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, {
    author: a
  } = t, o = t.getChannelId(), s = (0, et.l)({
    user: a,
    channelId: o,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(ea.Z, {
    compact: n,
    message: t,
    usernameHook: s
  })
}

function eZ(e) {
  let {
    message: t,
    compact: n,
    channel: a
  } = e, {
    author: o
  } = t, s = t.getChannelId(), l = i.useCallback(() => {
    if (V.Z.getChannelId() !== s) {
      let e = G.Z.getChannel(s);
      null != e && (0, R.XU)(e.guild_id, e.id)
    }
    setTimeout(() => W.S.dispatch(eP.CkL.TOGGLE_CHANNEL_PINS), 0)
  }, [s]), c = (0, et.l)({
    user: o,
    channelId: s,
    guildId: a.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(el.Z, {
    message: t,
    compact: n,
    usernameHook: c,
    onClickPins: __OVERLAY__ ? null : l
  })
}

function eB(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, {
    author: o
  } = t, s = t.getChannelId(), l = (0, a.e7)([H.default], () => H.default.getUser(t.mentions[0]), [t]), c = K.ZP.getName(null, s, l), u = (0, et.l)({
    user: o,
    channelId: s,
    guildId: n.guild_id,
    messageId: t.id
  }), d = (0, et.l)({
    user: l,
    channelId: s,
    guildId: n.guild_id,
    messageId: t.id
  });
  return n.isThread() ? (0, r.jsx)(eI.Z, {
    message: t,
    channel: n,
    compact: i,
    targetUser: l,
    actorUsernameHook: u,
    targetUsernameHook: d
  }) : (0, r.jsx)(em.Z, {
    message: t,
    compact: i,
    otherUsername: c,
    usernameHook: u,
    otherUsernameHook: d
  })
}

function eF(e) {
  let {
    message: t,
    channel: a,
    compact: l
  } = e, c = (0, et.l)({
    user: t.author,
    channelId: t.channel_id,
    guildId: a.guild_id,
    messageId: t.id
  }), u = i.useCallback(async e => {
    var n;
    let r = null == (n = t.messageReference) ? true : n.channel_id;
    if (null != r) {
      await L.Z.loadThread(r);
      let t = G.Z.getChannel(r);
      null != t && (0, j.ok)(t, e.shiftKey)
    }
  }, [t]), d = i.useCallback(() => {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("91315"), n.e("219")]).then(n.bind(n, 223901));
      return t => (0, r.jsx)(e, ex({
        channel: a
      }, t))
    })
  }, [a]), f = i.useCallback(e => {
    var i;
    let a = G.Z.getChannel(null == (i = t.messageReference) ? true : i.channel_id);
    null != a && (0, s.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("90508"), n.e("89250"), n.e("18308")]).then(n.bind(n, 422200));
      return t => (0, r.jsx)(e, ej(ex({}, t), {
        channel: a
      }))
    })
  }, [t]);
  return (0, r.jsx)(eS.Z, {
    message: t,
    compact: l,
    usernameHook: c,
    onClickThread: u,
    onClickViewThreads: d,
    onContextMenuThread: f
  })
}

function eV(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, {
    author: o
  } = t, s = t.getChannelId(), l = (0, a.e7)([H.default], () => H.default.getUser(t.mentions[0]), [t]), c = (0, et.l)({
    user: o,
    channelId: s,
    guildId: n.guild_id,
    messageId: t.id
  }), u = (0, et.l)({
    user: l,
    channelId: s,
    guildId: n.guild_id,
    messageId: t.id
  });
  return n.isThread() ? (0, r.jsx)(eT.Z, {
    message: t,
    channel: n,
    compact: i,
    targetUser: l,
    actorUsernameHook: c,
    targetUsernameHook: u
  }) : null != l && l.id !== o.id ? (0, r.jsx)(eh.Z, {
    message: t,
    channel: n,
    compact: i,
    usernameHook: c,
    otherUser: l,
    otherUsernameHook: u
  }) : (0, r.jsx)(eh.Z, {
    message: t,
    channel: n,
    usernameHook: c
  })
}

function eH(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, {
    author: a
  } = t, o = t.getChannelId(), s = (0, et.l)({
    user: a,
    channelId: o,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(eC.Z, {
      message: t,
      compact: n,
      usernameHook: s
    }), (0, r.jsx)(M.f, {
      channel: i,
      message: t
    })]
  })
}

function eY(e) {
  let {
    message: t,
    channel: n,
    compact: o
  } = e, {
    author: s
  } = t, {
    guild_id: l
  } = n, c = t.getChannelId(), u = (0, a.e7)([Z.Z], () => Z.Z.getGuild(l), [l]), d = i.useCallback(() => {
    null != u && (0, g.f)({
      guildId: u.id,
      location: {
        section: eP.jXE.CHANNEL_TEXT_AREA,
        object: eP.qAy.BOOST_ANNOUNCEMENT_UPSELL
      }
    })
  }, [u]), f = (0, et.l)({
    user: s,
    channelId: c,
    guildId: n.guild_id,
    messageId: t.id,
    stopPropagation: true
  });
  return (0, r.jsx)(eN.ZP, {
    message: t,
    compact: o,
    guild: u,
    usernameHook: f,
    onClickMessage: d
  })
}

function eW(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, {
    author: a
  } = t, o = t.getChannelId(), s = (0, et.l)({
    user: a,
    channelId: o,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(ei.Z, {
    message: t,
    compact: n,
    usernameHook: s
  })
}

function eK(e) {
  let {
    message: t,
    compact: n,
    channel: o
  } = e, {
    author: s,
    author: {
      id: l
    },
    messageReference: c
  } = t, d = t.getChannelId(), f = (0, a.e7)([F.Z], () => F.Z.findActivity(l, e => e.type === eP.IIU.PLAYING), [l]), p = (0, a.e7)([G.Z], () => null != c ? G.Z.getChannel(c.channel_id) : null, [c]), _ = null == c ? true : c.guild_id, m = (0, et.l)({
    user: s,
    channelId: d,
    guildId: o.guild_id,
    messageId: t.id
  }), h = i.useCallback(() => {
    null != p && null != _ && (0, u.iV)({
      streamType: eR.lo.GUILD,
      ownerId: l,
      channelId: p.id,
      guildId: _
    })
  }, [l, p, _]);
  return null != c && null != p && null != c.guild_id ? (0, r.jsx)(ep.Z, {
    message: t,
    compact: n,
    channel: p,
    playingActivity: f,
    onJoinStream: h,
    usernameHook: m
  }) : null
}

function ez(e) {
  let {
    message: t,
    compact: n
  } = e, i = t.getChannelId(), o = (0, a.e7)([G.Z], () => G.Z.getChannel(i), [i]), s = null != o ? o.getGuildId() : null, l = () => {
    null != s && S.Z.open(s, eP.pNK.ACCESS, eP.KsC.ACCESS_DISCOVERABLE)
  };
  return (0, r.jsx)(eu.FJ, {
    message: t,
    compact: n,
    onClick: l
  })
}

function eq(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e;
  return (0, h.nY)(t) ? (0, r.jsx)(en.Z, {
    message: t,
    compact: n,
    channel: i
  }) : null
}

function eX(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, a = (0, et.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(ec.Z, {
    message: t,
    compact: n,
    usernameHook: a
  })
}

function eQ(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, a = (0, et.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(ef.Z, {
    message: t,
    compact: n,
    channel: i,
    usernameHook: a
  })
}

function eJ(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, a = (0, et.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(ed.Z, {
    message: t,
    compact: n,
    channel: i,
    usernameHook: a
  })
}

function e$(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, o = (0, et.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  }), s = (0, a.e7)([O.ZP], () => O.ZP.getActiveEventByChannel(n.id), [n.id]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(ey.Z, {
      message: t,
      compact: i,
      usernameHook: o
    }), null != s && s.name === t.content ? (0, r.jsx)(v.Z, {
      code: "".concat(n.guild_id, "-").concat(s.id)
    }) : null]
  })
}

function e0(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, a = (0, et.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(eg.Z, {
    message: t,
    compact: i,
    usernameHook: a
  })
}

function e1(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, a = (0, et.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(eO.Z, {
    message: t,
    compact: i,
    usernameHook: a
  })
}

function e3(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, a = (0, et.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(eb.Z, {
    message: t,
    compact: i,
    usernameHook: a
  })
}

function e2(e) {
  var t, n;
  let {
    message: i,
    channel: s,
    compact: c
  } = e, u = (0, et.l)({
    user: i.author,
    channelId: s.id,
    guildId: s.guild_id,
    messageId: i.id
  }), d = (0, a.e7)([B.Z], () => B.Z.can(eP.Plq.MUTE_MEMBERS, s)), f = () => {
    (0, w.DT)(s, i.author.id, false), l.Z.deleteMessage(s.id, i.id, true)
  }, p = (0, a.e7)([D.Z], () => D.Z.getParticipant(s.id, i.author.id)), _ = new Date(q.default.extractTimestamp(i.id)).toISOString() === new Date(null != (n = null == p || null == (t = p.voiceState) ? true : t.requestToSpeakTimestamp) ? n : 0).toISOString(), m = d && (null == p ? true : p.rtsState) === x.xO.REQUESTED_TO_SPEAK && _;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(eE.Z, {
      message: i,
      compact: c,
      usernameHook: u
    }), m ? (0, r.jsx)(o.Button, {
      variant: "secondary",
      onClick: f,
      text: ew.intl.string(ew.t.f0T7hI),
      icon: o.Lrb
    }) : null]
  })
}

function e4(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e;
  return (0, r.jsx)(p.Z, {
    message: t,
    channel: n,
    compact: i
  })
}

function e5(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e;
  return (0, r.jsx)(f.Z, {
    message: t,
    channel: n,
    compact: i
  })
}

function e8(e) {
  var t;
  let {
    message: n,
    channel: i,
    compact: a
  } = e;
  return (null == (t = n.purchaseNotification) ? true : t.type) === d.Eh.GUILD_PRODUCT ? (0, r.jsx)(b.Z, {
    message: n,
    channel: i,
    compact: a
  }) : null
}

function e6(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e;
  return (0, r.jsx)(J.Z, {
    message: t,
    channel: n,
    compact: i
  })
}

function e7(e) {
  let {
    message: t,
    channel: n
  } = e;
  return (0, r.jsx)(ee.Z, {
    message: t,
    channel: n
  })
}

function e9(e) {
  let {
    message: t,
    channel: n
  } = e, i = t.giftingPrompt, o = (0, a.e7)([H.default], () => H.default.getUser(null == i ? true : i.recipientUserId));
  return null == i || null == o ? null : (0, r.jsx)(Q.Z, {
    giftIntentType: i.giftIntentType,
    recipientUser: o,
    channel: n
  })
}

function te(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e;
  return (0, r.jsx)(eo.Z, {
    message: t,
    channel: n,
    compact: i
  })
}

function tt(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e;
  return (0, r.jsx)(e_.Z, {
    message: t,
    channel: n,
    author: t.author,
    compact: i
  })
}

function tn(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, r.jsx)(A.Z, {
    userTrialOfferId: t.referralTrialOfferId,
    canRenderReferralEmbed: true,
    compact: n
  })
}

function tr(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, a = (0, et.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(m.iq, {
    message: t,
    channel: n,
    compact: i,
    usernameHook: a
  })
}

function ti(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, r.jsx)(ev.Z, {
    message: t,
    compact: n
  })
}

function ta(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e;
  return (0, r.jsx)(T.Z, {
    message: t,
    channel: n,
    compact: i
  })
}
let to = Object.freeze({
  [Chunk981631.uaV.DEFAULT]: true,
  [Chunk981631.uaV.REPLY]: true,
  [Chunk981631.uaV.CHAT_INPUT_COMMAND]: true,
  [Chunk981631.uaV.CONTEXT_MENU_COMMAND]: true,
  [Chunk981631.uaV.RECIPIENT_ADD]: eB,
  [Chunk981631.uaV.RECIPIENT_REMOVE]: eV,
  [Chunk981631.uaV.CALL]: ek,
  [Chunk981631.uaV.CHANNEL_NAME_CHANGE]: eU,
  [Chunk981631.uaV.CHANNEL_ICON_CHANGE]: eG,
  [Chunk981631.uaV.CHANNEL_PINNED_MESSAGE]: eZ,
  [Chunk981631.uaV.USER_JOIN]: eH,
  [Chunk981631.uaV.GUILD_BOOST]: eY,
  [Chunk981631.uaV.GUILD_BOOST_TIER_1]: eY,
  [Chunk981631.uaV.GUILD_BOOST_TIER_2]: eY,
  [Chunk981631.uaV.GUILD_BOOST_TIER_3]: eY,
  [Chunk981631.uaV.CHANNEL_FOLLOW_ADD]: eW,
  [Chunk981631.uaV.GUILD_STREAM]: eK,
  [Chunk981631.uaV.GUILD_DISCOVERY_DISQUALIFIED]: ez,
  [Chunk981631.uaV.GUILD_DISCOVERY_REQUALIFIED]: Chunk502115.xe,
  [Chunk981631.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: Chunk502115.HL,
  [Chunk981631.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: Chunk502115.Yc,
  [Chunk981631.uaV.THREAD_CREATED]: eF,
  [Chunk981631.uaV.THREAD_STARTER_MESSAGE]: Chunk328749.Z,
  [Chunk981631.uaV.GUILD_INVITE_REMINDER]: true,
  [Chunk981631.uaV.AUTO_MODERATION_ACTION]: eq,
  [Chunk981631.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eX,
  [Chunk981631.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eX,
  [Chunk981631.uaV.GUILD_INCIDENT_REPORT_RAID]: eQ,
  [Chunk981631.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: eJ,
  [Chunk981631.uaV.ROLE_SUBSCRIPTION_PURCHASE]: Chunk345114.Z,
  [Chunk981631.uaV.PURCHASE_NOTIFICATION]: e8,
  [Chunk981631.uaV.INTERACTION_PREMIUM_UPSELL]: true,
  [Chunk981631.uaV.STAGE_START]: e$,
  [Chunk981631.uaV.STAGE_END]: e0,
  [Chunk981631.uaV.STAGE_SPEAKER]: e3,
  [Chunk981631.uaV.STAGE_RAISE_HAND]: e2,
  [Chunk981631.uaV.STAGE_TOPIC]: e1,
  [Chunk981631.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: Chunk504733.Z,
  [Chunk981631.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: Chunk563959.P,
  [Chunk981631.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: Chunk563959.e,
  [Chunk981631.uaV.PREMIUM_REFERRAL]: tn,
  [Chunk981631.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: e4,
  [Chunk981631.uaV.CUSTOM_GIFT]: true,
  [Chunk981631.uaV.GUILD_GAMING_STATS_PROMPT]: e5,
  [Chunk981631.uaV.VOICE_HANGOUT_INVITE]: true,
  [Chunk981631.uaV.POLL_RESULT]: Chunk507435.Z,
  [Chunk981631.uaV.CHANGELOG]: true,
  [Chunk981631.uaV.NITRO_NOTIFICATION]: e7,
  [Chunk981631.uaV.CHANNEL_LINKED_TO_LOBBY]: te,
  [Chunk981631.uaV.GIFTING_PROMPT]: e9,
  [Chunk981631.uaV.IN_GAME_MESSAGE_NUX]: tt,
  [Chunk981631.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: Chunk29887.Cn,
  [Chunk981631.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: Chunk29887.Ue,
  [Chunk981631.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: Chunk29887.R6,
  [Chunk981631.uaV.HD_STREAMING_UPGRADED]: e6,
  [Chunk981631.uaV.EMOJI_ADDED]: tr,
  [Chunk981631.uaV.CHAT_WALLPAPER_SET]: true,
  [Chunk981631.uaV.CHAT_WALLPAPER_REMOVED]: true,
  [Chunk981631.uaV.REPORT_TO_MOD_BAN_USER]: Chunk917318.Z,
  [Chunk981631.uaV.REPORT_TO_MOD_KICK_USER]: Chunk917318.Z,
  [Chunk981631.uaV.REPORT_TO_MOD_TIMEOUT_USER]: Chunk917318.Z,
  [Chunk981631.uaV.REPORT_TO_MOD_DELETED_MESSAGE]: Chunk917318.Z,
  [Chunk981631.uaV.REPORT_TO_MOD_CLOSED_REPORT]: Chunk917318.Z,
  [Chunk981631.uaV.PREMIUM_GROUP_INVITE]: ta,
  65: ti
});

function ts(e) {
  let {
    message: t,
    channel: n,
    compact: i,
    disableInteraction: a
  } = e, {
    type: o
  } = t, s = to[o];
  return null == s ? (eM(Error("unknown message type ".concat(t.type))), null) : (0, r.jsx)($.ZP, {
    message: t,
    content: (0, X.ZP)(t).content,
    compact: null != i && i,
    children: (0, r.jsx)(s, {
      message: t,
      channel: n,
      compact: i,
      disableInteraction: a
    })
  })
}
let tl = Chunk473749.memo(ts)