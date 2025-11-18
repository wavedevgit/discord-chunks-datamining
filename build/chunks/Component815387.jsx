/** Chunk was on web.js **/
/** chunk id: 815387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => to
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

function ew(e) {
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

function ex(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eL(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eM(e) {
  K.Z.captureException(e), new p.Z("SystemMessage").error("", e)
}

function ek(e) {
  let {
    message: t,
    compact: n,
    channel: o
  } = e, {
    id: s,
    author: l
  } = t, u = k.default.getId(), d = t.getChannelId(), f = (0, a.e7)([j.Z], () => j.Z.isCallActive(d, s), [d, s]), _ = (0, a.e7)([H.Z], () => H.Z.getVoiceState(eN.ME, u)), p = !f && null != t.call && !t.call.participants.includes(u), h = f && (null == _ || _.channelId !== d), m = i.useCallback(() => c.default.selectVoiceChannel(d), [d]), g = (0, ee.l)({
    user: l,
    channelId: d,
    guildId: o.guild_id,
    messageId: t.id,
    enableDisplayNameStyles: true
  });
  return (0, r.jsx)(en.Z, {
    compact: n,
    message: t,
    missed: p,
    joinable: h,
    usernameHook: g,
    onClickJoinCall: m
  })
}

function ej(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, {
    author: a
  } = t, o = t.getChannelId(), s = (0, ee.l)({
    user: a,
    channelId: o,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(eo.Z, {
    compact: n,
    message: t,
    usernameHook: s,
    isForumPost: i.isForumPost()
  })
}

function eU(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, {
    author: a
  } = t, o = t.getChannelId(), s = (0, ee.l)({
    user: a,
    channelId: o,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(ei.Z, {
    compact: n,
    message: t,
    usernameHook: s
  })
}

function eG(e) {
  let {
    message: t,
    compact: n,
    channel: a
  } = e, {
    author: o
  } = t, s = t.getChannelId(), l = i.useCallback(() => {
    if (F.Z.getChannelId() !== s) {
      let e = U.Z.getChannel(s);
      null != e && (0, R.XU)(e.guild_id, e.id)
    }
    setTimeout(() => Y.S.dispatch(eN.CkL.TOGGLE_CHANNEL_PINS), 0)
  }, [s]), c = (0, ee.l)({
    user: o,
    channelId: s,
    guildId: a.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(es.Z, {
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
  } = t, s = t.getChannelId(), l = (0, a.e7)([V.default], () => V.default.getUser(t.mentions[0]), [t]), c = W.ZP.getName(null, s, l), u = (0, ee.l)({
    user: o,
    channelId: s,
    guildId: n.guild_id,
    messageId: t.id
  }), d = (0, ee.l)({
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
  }) : (0, r.jsx)(ep.Z, {
    message: t,
    compact: i,
    otherUsername: c,
    usernameHook: u,
    otherUsernameHook: d
  })
}

function eZ(e) {
  let {
    message: t,
    channel: a,
    compact: l
  } = e, c = (0, ee.l)({
    user: t.author,
    channelId: t.channel_id,
    guildId: a.guild_id,
    messageId: t.id
  }), u = i.useCallback(async e => {
    var n;
    let r = null == (n = t.messageReference) ? true : n.channel_id;
    if (null != r) {
      await L.Z.loadThread(r);
      let t = U.Z.getChannel(r);
      null != t && (0, x.ok)(t, e.shiftKey)
    }
  }, [t]), d = i.useCallback(() => {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("91315"), n.e("91792")]).then(n.bind(n, 223901));
      return t => (0, r.jsx)(e, ew({
        channel: a
      }, t))
    })
  }, [a]), f = i.useCallback(e => {
    var i;
    let a = U.Z.getChannel(null == (i = t.messageReference) ? true : i.channel_id);
    null != a && (0, s.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("90508"), n.e("89250"), n.e("68869")]).then(n.bind(n, 422200));
      return t => (0, r.jsx)(e, ex(ew({}, t), {
        channel: a
      }))
    })
  }, [t]);
  return (0, r.jsx)(ev.Z, {
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
    author: o
  } = t, s = t.getChannelId(), l = (0, a.e7)([V.default], () => V.default.getUser(t.mentions[0]), [t]), c = (0, ee.l)({
    user: o,
    channelId: s,
    guildId: n.guild_id,
    messageId: t.id
  }), u = (0, ee.l)({
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

function eV(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, {
    author: a
  } = t, o = t.getChannelId(), s = (0, ee.l)({
    user: a,
    channelId: o,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(eA.Z, {
      message: t,
      compact: n,
      usernameHook: s
    }), (0, r.jsx)(M.f, {
      channel: i,
      message: t
    })]
  })
}

function eH(e) {
  let {
    message: t,
    channel: n,
    compact: o
  } = e, {
    author: s
  } = t, {
    guild_id: l
  } = n, c = t.getChannelId(), u = (0, a.e7)([G.Z], () => G.Z.getGuild(l), [l]), d = i.useCallback(() => {
    null != u && (0, g.f)({
      guildId: u.id,
      location: {
        section: eN.jXE.CHANNEL_TEXT_AREA,
        object: eN.qAy.BOOST_ANNOUNCEMENT_UPSELL
      }
    })
  }, [u]), f = (0, ee.l)({
    user: s,
    channelId: c,
    guildId: n.guild_id,
    messageId: t.id,
    stopPropagation: true
  });
  return (0, r.jsx)(eC.ZP, {
    message: t,
    compact: o,
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
  } = t, o = t.getChannelId(), s = (0, ee.l)({
    user: a,
    channelId: o,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(er.Z, {
    message: t,
    compact: n,
    usernameHook: s
  })
}

function eW(e) {
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
  } = t, d = t.getChannelId(), f = (0, a.e7)([Z.Z], () => Z.Z.findActivity(l, e => e.type === eN.IIU.PLAYING), [l]), _ = (0, a.e7)([U.Z], () => null != c ? U.Z.getChannel(c.channel_id) : null, [c]), p = null == c ? true : c.guild_id, h = (0, ee.l)({
    user: s,
    channelId: d,
    guildId: o.guild_id,
    messageId: t.id
  }), m = i.useCallback(() => {
    null != _ && null != p && (0, u.iV)({
      streamType: eR.lo.GUILD,
      ownerId: l,
      channelId: _.id,
      guildId: p
    })
  }, [l, _, p]);
  return null != c && null != _ && null != c.guild_id ? (0, r.jsx)(ef.Z, {
    message: t,
    compact: n,
    channel: _,
    playingActivity: f,
    onJoinStream: m,
    usernameHook: h
  }) : null
}

function eK(e) {
  let {
    message: t,
    compact: n
  } = e, i = t.getChannelId(), o = (0, a.e7)([U.Z], () => U.Z.getChannel(i), [i]), s = null != o ? o.getGuildId() : null, l = () => {
    null != s && I.Z.open(s, eN.pNK.ACCESS, eN.KsC.ACCESS_DISCOVERABLE)
  };
  return (0, r.jsx)(ec.FJ, {
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
  return (0, m.nY)(t) ? (0, r.jsx)(et.Z, {
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
  } = e, a = (0, ee.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(el.Z, {
    message: t,
    compact: n,
    usernameHook: a
  })
}

function eX(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, a = (0, ee.l)({
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

function eQ(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, a = (0, ee.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(eu.Z, {
    message: t,
    compact: n,
    channel: i,
    usernameHook: a
  })
}

function eJ(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, o = (0, ee.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  }), s = (0, a.e7)([O.ZP], () => O.ZP.getActiveEventByChannel(n.id), [n.id]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(eb.Z, {
      message: t,
      compact: i,
      usernameHook: o
    }), null != s && s.name === t.content ? (0, r.jsx)(v.Z, {
      code: "".concat(n.guild_id, "-").concat(s.id)
    }) : null]
  })
}

function e$(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, a = (0, ee.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(em.Z, {
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
  } = e, a = (0, ee.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(ey.Z, {
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
  } = e, a = (0, ee.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(eE.Z, {
    message: t,
    compact: i,
    usernameHook: a
  })
}

function e3(e) {
  var t, n;
  let {
    message: i,
    channel: s,
    compact: c
  } = e, u = (0, ee.l)({
    user: i.author,
    channelId: s.id,
    guildId: s.guild_id,
    messageId: i.id
  }), d = (0, a.e7)([B.Z], () => B.Z.can(eN.Plq.MUTE_MEMBERS, s)), f = () => {
    (0, P.DT)(s, i.author.id, false), l.Z.deleteMessage(s.id, i.id, true)
  }, _ = (0, a.e7)([D.Z], () => D.Z.getParticipant(s.id, i.author.id)), p = new Date(z.default.extractTimestamp(i.id)).toISOString() === new Date(null != (n = null == _ || null == (t = _.voiceState) ? true : t.requestToSpeakTimestamp) ? n : 0).toISOString(), h = d && (null == _ ? true : _.rtsState) === w.xO.REQUESTED_TO_SPEAK && p;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(eg.Z, {
      message: i,
      compact: c,
      usernameHook: u
    }), h ? (0, r.jsx)(o.Button, {
      variant: "secondary",
      onClick: f,
      text: eP.intl.string(eP.t.f0T7hI),
      icon: o.Lrb
    }) : null]
  })
}

function e2(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e;
  return (0, r.jsx)(_.Z, {
    message: t,
    channel: n,
    compact: i
  })
}

function e4(e) {
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

function e5(e) {
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

function e8(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e;
  return (0, r.jsx)(Q.Z, {
    message: t,
    channel: n,
    compact: i
  })
}

function e6(e) {
  let {
    message: t,
    channel: n
  } = e;
  return (0, r.jsx)($.Z, {
    message: t,
    channel: n
  })
}

function e7(e) {
  let {
    message: t,
    channel: n
  } = e, i = t.giftingPrompt, o = (0, a.e7)([V.default], () => V.default.getUser(null == i ? true : i.recipientUserId));
  return null == i || null == o ? null : (0, r.jsx)(X.Z, {
    giftIntentType: i.giftIntentType,
    recipientUser: o,
    channel: n,
    giftIntentSecondaryAction: i.giftIntentSecondaryAction
  })
}

function e9(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e;
  return (0, r.jsx)(ea.Z, {
    message: t,
    channel: n,
    compact: i
  })
}

function te(e) {
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

function tt(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, r.jsx)(S.Z, {
    userTrialOfferId: t.referralTrialOfferId,
    canRenderReferralEmbed: true,
    compact: n
  })
}

function tn(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, a = (0, ee.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(h.iq, {
    message: t,
    channel: n,
    compact: i,
    usernameHook: a
  })
}

function tr(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, r.jsx)(eO.Z, {
    message: t,
    compact: n
  })
}
let ti = Object.freeze({
  [Chunk981631.uaV.DEFAULT]: true,
  [Chunk981631.uaV.REPLY]: true,
  [Chunk981631.uaV.CHAT_INPUT_COMMAND]: true,
  [Chunk981631.uaV.CONTEXT_MENU_COMMAND]: true,
  [Chunk981631.uaV.RECIPIENT_ADD]: eB,
  [Chunk981631.uaV.RECIPIENT_REMOVE]: eF,
  [Chunk981631.uaV.CALL]: ek,
  [Chunk981631.uaV.CHANNEL_NAME_CHANGE]: ej,
  [Chunk981631.uaV.CHANNEL_ICON_CHANGE]: eU,
  [Chunk981631.uaV.CHANNEL_PINNED_MESSAGE]: eG,
  [Chunk981631.uaV.USER_JOIN]: eV,
  [Chunk981631.uaV.GUILD_BOOST]: eH,
  [Chunk981631.uaV.GUILD_BOOST_TIER_1]: eH,
  [Chunk981631.uaV.GUILD_BOOST_TIER_2]: eH,
  [Chunk981631.uaV.GUILD_BOOST_TIER_3]: eH,
  [Chunk981631.uaV.CHANNEL_FOLLOW_ADD]: eY,
  [Chunk981631.uaV.GUILD_STREAM]: eW,
  [Chunk981631.uaV.GUILD_DISCOVERY_DISQUALIFIED]: eK,
  [Chunk981631.uaV.GUILD_DISCOVERY_REQUALIFIED]: Chunk502115.xe,
  [Chunk981631.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: Chunk502115.HL,
  [Chunk981631.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: Chunk502115.Yc,
  [Chunk981631.uaV.THREAD_CREATED]: eZ,
  [Chunk981631.uaV.THREAD_STARTER_MESSAGE]: Chunk328749.Z,
  [Chunk981631.uaV.GUILD_INVITE_REMINDER]: true,
  [Chunk981631.uaV.AUTO_MODERATION_ACTION]: ez,
  [Chunk981631.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eq,
  [Chunk981631.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eq,
  [Chunk981631.uaV.GUILD_INCIDENT_REPORT_RAID]: eX,
  [Chunk981631.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: eQ,
  [Chunk981631.uaV.ROLE_SUBSCRIPTION_PURCHASE]: Chunk345114.Z,
  [Chunk981631.uaV.PURCHASE_NOTIFICATION]: e5,
  [Chunk981631.uaV.INTERACTION_PREMIUM_UPSELL]: true,
  [Chunk981631.uaV.STAGE_START]: eJ,
  [Chunk981631.uaV.STAGE_END]: e$,
  [Chunk981631.uaV.STAGE_SPEAKER]: e1,
  [Chunk981631.uaV.STAGE_RAISE_HAND]: e3,
  [Chunk981631.uaV.STAGE_TOPIC]: e0,
  [Chunk981631.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: Chunk504733.Z,
  [Chunk981631.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: Chunk563959.P,
  [Chunk981631.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: Chunk563959.e,
  [Chunk981631.uaV.PREMIUM_REFERRAL]: tt,
  [Chunk981631.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: e2,
  [Chunk981631.uaV.CUSTOM_GIFT]: true,
  [Chunk981631.uaV.GUILD_GAMING_STATS_PROMPT]: e4,
  [Chunk981631.uaV.VOICE_HANGOUT_INVITE]: true,
  [Chunk981631.uaV.POLL_RESULT]: Chunk507435.Z,
  [Chunk981631.uaV.CHANGELOG]: true,
  [Chunk981631.uaV.NITRO_NOTIFICATION]: e6,
  [Chunk981631.uaV.CHANNEL_LINKED_TO_LOBBY]: e9,
  [Chunk981631.uaV.GIFTING_PROMPT]: e7,
  [Chunk981631.uaV.IN_GAME_MESSAGE_NUX]: te,
  [Chunk981631.uaV.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: Chunk29887.Cn,
  [Chunk981631.uaV.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: Chunk29887.Ue,
  [Chunk981631.uaV.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: Chunk29887.R6,
  [Chunk981631.uaV.HD_STREAMING_UPGRADED]: e8,
  [Chunk981631.uaV.EMOJI_ADDED]: tn,
  [Chunk981631.uaV.CHAT_WALLPAPER_SET]: true,
  [Chunk981631.uaV.CHAT_WALLPAPER_REMOVED]: true,
  [Chunk981631.uaV.REPORT_TO_MOD_BAN_USER]: Chunk917318.Z,
  [Chunk981631.uaV.REPORT_TO_MOD_KICK_USER]: Chunk917318.Z,
  [Chunk981631.uaV.REPORT_TO_MOD_TIMEOUT_USER]: Chunk917318.Z,
  [Chunk981631.uaV.REPORT_TO_MOD_DELETED_MESSAGE]: Chunk917318.Z,
  [Chunk981631.uaV.REPORT_TO_MOD_CLOSED_REPORT]: Chunk917318.Z,
  [Chunk981631.uaV.PREMIUM_GROUP_INVITE]: true,
  65: tr
});

function ta(e) {
  let {
    message: t,
    channel: n,
    compact: i,
    disableInteraction: a
  } = e, {
    type: o
  } = t, s = ti[o];
  return null == s ? (eM(Error("unknown message type ".concat(t.type))), null) : (0, r.jsx)(J.ZP, {
    message: t,
    content: (0, q.ZP)(t).content,
    compact: null != i && i,
    children: (0, r.jsx)(s, {
      message: t,
      channel: n,
      compact: i,
      disableInteraction: a
    })
  })
}
let to = Chunk473749.memo(ta)