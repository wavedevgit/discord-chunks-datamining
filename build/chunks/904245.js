/** Chunk was on web.js **/
/** chunk id: 904245, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eZ
}), require("./953529.js"), require("./415506.js"), require("./314940.js"), require("./49124.js"), require("./388685.js"), require("./642613.js"), require("./997841.js");
var Chunk278074 = require("./278074.js"),
  Chunk636977 = require("./636977.js"),
  Chunk544891 = require("./544891.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk89892 = require("./89892.js"),
  Chunk673750 = require("./673750.js"),
  Chunk367907 = require("./367907.js"),
  Chunk287328 = require("./287328.js"),
  Chunk86670 = require("./86670.js"),
  Chunk685736 = require("./685736.js"),
  Chunk421474 = require("./421474.js"),
  Chunk234431 = require("./234431.js"),
  Chunk914498 = require("./914498.js"),
  Chunk333023 = require("./333023.js"),
  Chunk960904 = require("./960904.js"),
  Chunk830121 = require("./830121.js"),
  Chunk710845 = require("./710845.js"),
  Chunk247206 = require("./247206.js"),
  Chunk38618 = require("./38618.js"),
  Chunk859487 = require("./859487.js"),
  Chunk687516 = require("./687516.js"),
  Chunk539573 = require("./539573.js"),
  Chunk926526 = require("./926526.js"),
  Chunk826581 = require("./826581.js"),
  Chunk409059 = require("./409059.js"),
  Chunk264229 = require("./264229.js"),
  Chunk413605 = require("./413605.js"),
  Chunk366980 = require("./366980.js"),
  Chunk467512 = require("./467512.js"),
  Chunk779832 = require("./779832.js"),
  Chunk786761 = require("./786761.js"),
  Chunk459618 = require("./459618.js"),
  Chunk541288 = require("./541288.js"),
  Chunk3148 = require("./3148.js"),
  Chunk48854 = require("./48854.js"),
  Chunk785359 = require("./785359.js"),
  Chunk64078 = require("./64078.js"),
  Chunk351780 = require("./351780.js"),
  Chunk79390 = require("./79390.js"),
  Chunk980463 = require("./980463.js"),
  Chunk328908 = require("./328908.js"),
  Chunk992970 = require("./992970.js"),
  Chunk576645 = require("./576645.js"),
  Chunk317951 = require("./317951.js"),
  Chunk287941 = require("./287941.js"),
  Chunk643266 = require("./643266.js"),
  Chunk617136 = require("./617136.js");
require("./807092.js");
var Chunk869765 = require("./869765.js"),
  Chunk926491 = require("./926491.js"),
  Chunk467798 = require("./467798.js"),
  Chunk346479 = require("./346479.js"),
  Chunk218543 = require("./218543.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js");
require("./323873.js");
var Chunk701190 = require("./701190.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk306680 = require("./306680.js"),
  Chunk300429 = require("./300429.js"),
  Chunk594174 = require("./594174.js");
require("./626135.js");
var Chunk70956 = require("./70956.js"),
  Chunk630388 = require("./630388.js"),
  Chunk669079 = require("./669079.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk709054 = require("./709054.js"),
  Chunk861990 = require("./861990.js"),
  Chunk668781 = require("./668781.js"),
  Chunk981631 = require("./981631.js"),
  Chunk260539 = require("./260539.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx");

function eS(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eS(e, t, n[t])
    })
  }
  return e
}

function eC(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eN(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eC(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eR = null,
  eP = new Chunk710845.Z("MessageActionCreators"),
  ew = new Chunk710845.Z("MessageQueue"),
  eD = false;
class ex {
  markComplete() {
    this.completed = true
  }
  constructor() {
    eS(this, "completed", false)
  }
}

function eL(e) {
  let {
    content: t,
    channelId: n,
    messageId: r,
    location: a,
    suggested: o = null,
    overrideProperties: s = {}
  } = e, l = ei.default.getId();
  (0, y.ZP)(t).forEach(e => {
    let {
      type: t,
      code: c,
      url: u
    } = e;
    if (t === b.g.INVITE) ej({
      inviteKey: c,
      channelId: n,
      messageId: r,
      location: a,
      suggested: o,
      overrideProperties: s
    });
    else if (t === b.g.TEMPLATE) {
      let e = R.Z.getGuildTemplate(c);
      if (null == e || e.state === ev.Rj.RESOLVING) return;
      d.ZP.trackWithMetadata(eO.rMx.GUILD_TEMPLATE_LINK_SENT, {
        guild_template_code: c,
        guild_template_name: e.name,
        guild_template_description: e.description,
        guild_template_guild_id: e.sourceGuildId
      })
    } else if (t === b.g.BUILD_OVERRIDE);
    else if (t === b.g.MANUAL_BUILD_OVERRIDE);
    else if (t === b.g.EVENT);
    else if (t === b.g.CHANNEL_LINK);
    else if (t === b.g.APP_DIRECTORY_PROFILE)(0, T.y)(c), (0, g.z$)(c, g.Un.APP_DISCOVERY, l);
    else if (t === b.g.APP_DIRECTORY_STOREFRONT)(0, T.y)(c, "storefront");
    else if (t === b.g.APP_DIRECTORY_STOREFRONT_SKU) {
      let e = (0, h.Q)(c);
      null != e && (0, T.y)(e.applicationId, "storefront_sku")
    } else if (t === b.g.ACTIVITY_BOOKMARK) {
      var f;
      let e = (0, m.U)(u);
      (0, g.z$)(c, g.Un.ACTIVITY, null != (f = e.referrerId) ? f : l, e.customId)
    } else if (t === b.g.EMBEDDED_ACTIVITY_INVITE)(0, g.z$)(c, g.Un.ACTIVITY_INVITE, l);
    else if (t === b.g.GUILD_PRODUCT);
    else if (t === b.g.SERVER_SHOP);
    else if (t === b.g.QUESTS_EMBED)(0, Q.dA)({
      questId: c,
      event: eO.rMx.QUEST_LINK_SHARED,
      properties: {},
      trackGuildAndChannelMetadata: true,
      sourceQuestContent: i.j.QUESTS_EMBED
    });
    else if (t === b.g.APP_OAUTH2_LINK) d.ZP.trackWithMetadata(eO.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, {
      application_id: c
    }), (0, g.z$)(c, g.Un.OAUTH, l);
    else if (t === b.g.COLLECTIBLES_SHOP);
    else throw Error("Unknown coded link type: ".concat(t))
  })
}

function ej(e) {
  var t, n;
  let {
    inviteKey: r,
    channelId: i,
    messageId: a,
    location: o,
    suggested: s = null,
    overrideProperties: l = {}
  } = e, c = ei.default.getId(), u = eo.Z.getInvite(r), f = (0, P.fU)(r), _ = null != u && (0, w.P1)(u), p = null == u || null == (t = u.target_application) ? true : t.id;
  null != p && _ && (0, g.z$)(p, g.Un.ACTIVITY_INVITE, c);
  let h = ea.Z.getChannel(i);
  if (null != h) {
    let e = null;
    h.isMultiUserDM() ? e = eO.dAT.GDM_INVITE : h.isPrivate() || (e = eO.dAT.SERVER_INVITE);
    let t = {};
    if (null != u && u.state === eO.r2o.RESOLVED && null != u.channel) {
      let r = u.channel;
      t.invite_channel_id = r.id, t.invite_guild_id = null == (n = u.guild) ? true : n.id, t.invite_channel_type = r.type, null != u.inviter && (t.invite_inviter_id = u.inviter.id), null != u.target_application && (t.application_id = u.target_application.id);
      let i = er.Z.getLastActiveStream();
      if (null != i && i.channelId === r.id) {
        e = eO.dAT.STREAM, t.destination_user_id = i.ownerId;
        let n = (0, S.L2)(i, ec.Z);
        t.application_id = null != n ? n.id : null
      }
    }
    null != s && (t.is_suggested = s.isAffinitySuggestion, t.row_num = s.rowNum, t.num_total = s.numTotal, t.num_affinity_connections = s.numAffinityConnections, t.is_filtered = s.isFiltered), t = eA(eN(eA({}, t), {
      location: o,
      invite_type: e,
      invite_code: f.baseCode,
      guild_id: h.getGuildId(),
      channel_id: h.id,
      message_id: a,
      send_type: eO.a5g.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: f.guildScheduledEventId
    }), l), d.ZP.trackWithMetadata(eO.rMx.INVITE_SENT, t)
  } else {
    let e = {};
    null != u && u.state === eO.r2o.RESOLVED && null != u.inviter && (e.invite_inviter_id = u.inviter.id, null != u.target_application && (e.application_id = u.target_application.id), e = eA(eN(eA({}, e), {
      location: o,
      invite_type: eO.dAT.FRIEND_INVITE,
      invite_code: f.baseCode,
      message_id: a,
      send_type: eO.a5g.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: f.guildScheduledEventId
    }), l), d.ZP.trackWithMetadata(eO.rMx.INVITE_SENT, e))
  }
}

function eM(e, t, n, r, i) {
  (0, eh.Q_)(e).forEach(e => {
    let a = ea.Z.getChannel(t);
    null != a && d.ZP.trackWithMetadata(eO.rMx.GIFT_CODE_SENT, {
      location: r,
      gift_code: e,
      guild_id: a.getGuildId(),
      channel_id: a.id,
      channel_type: a.type,
      message_id: n,
      automatic_send: i
    })
  })
}

function ek(e, t) {
  let n = es.Z.getMessage(e, t);
  return null != n && n.hasFlag(eO.iLy.CROSSPOSTED)
}

function eU(e, t) {
  let n = es.Z.getMessage(e, t);
  if (null == n || n.type !== eO.uaV.REPLY) return;
  let r = J.Z.getMessageByReference(n.messageReference);
  if (r.state === J.Y.LOADED && !n.mentions.includes(r.message.author.id)) return {
    parse: Object.values(eO.hCA),
    replied_user: false
  }
}
let eG = {
    [Chunk981631.evJ.EMAIL_VERIFICATION_REQUIRED]: {
      messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
      messageGetter: () => Chunk388032.intl.string(Chunk388032.t.k1Cjqq)
    },
    [Chunk981631.evJ.INVALID_MESSAGE_SEND_USER]: {
      messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
      messageGetter: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.CTMXwM, {
        helpUrl: Chunk63063.Z.getArticleURL(Chunk981631.BhN.DM_COULD_NOT_BE_DELIVERED)
      })
    },
    [Chunk981631.evJ.RATE_LIMIT_DM_OPEN]: {
      messageName: "BOT_DM_RATE_LIMITED",
      messageGetter: () => Chunk388032.intl.string(Chunk388032.t.E8nbNT)
    },
    [Chunk981631.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => Chunk388032.intl.string(Chunk388032.t.aRUbam)
    },
    [Chunk981631.evJ.SLOWMODE_RATE_LIMITED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => Chunk388032.intl.string(Chunk388032.t.aRUbam)
    },
    [Chunk981631.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
      messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
      messageGetter: () => Chunk388032.intl.string(Chunk388032.t["/meGhY"])
    },
    [Chunk981631.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
      messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
      messageGetter: () => Chunk388032.intl.string(Chunk388032.t.Oc1Zj4)
    }
  },
  eB = {
    receiveMessage(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
        r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
      s.Z.dispatch({
        type: "MESSAGE_CREATE",
        channelId: e,
        message: t,
        optimistic: n,
        sendMessageOptions: r,
        isPushNotification: false
      })
    },
    sendBotMessage(e, t, n, r) {
      null != n && d.ZP.trackWithMetadata(eO.rMx.AUTOMATED_MESSAGE_RECEIVED, {
        message_author: "Clyde",
        message_name: n
      }), eB.receiveMessage(e, (0, U.cs)({
        messageId: r,
        channelId: e,
        content: t,
        loggingName: n
      }))
    },
    sendNitroSystemMessage(e, t, n) {
      let r = (0, U.ZP)({
        channelId: e,
        nonce: n,
        type: eO.uaV.NITRO_NOTIFICATION,
        content: t,
        flags: eO.iLy.EPHEMERAL,
        author: {
          id: eO.LAt,
          username: "Nitro Notification",
          discriminator: eO.fo$,
          avatar: "nitro",
          bot: true
        }
      });
      eB.receiveMessage(e, eN(eA({}, r), {
        state: eO.yb.SENT,
        channel_id: e
      }), true)
    },
    sendGiftingPromptSystemMessage(e, t) {
      let n = (0, U.ZP)({
        channelId: e,
        type: eO.uaV.GIFTING_PROMPT,
        content: "",
        flags: eO.iLy.EPHEMERAL,
        author: {
          id: eO.LAt,
          username: "Gifting Prompt",
          discriminator: eO.fo$,
          avatar: "gifting_prompt",
          bot: true
        },
        giftingPrompt: t
      });
      eB.receiveMessage(e, eN(eA({}, n), {
        state: eO.yb.SENT
      }), true)
    },
    sendClydeError(e) {
      let t, n, r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
        i = ea.Z.getChannel(e);
      null != i && (r === eO.evJ.SLOWMODE_RATE_LIMITED ? (t = eT.intl.formatToPlainString(eT.t.IWntYm, {
        seconds: i.rateLimitPerUser
      }), n = "SLOWMODE_RATE_LIMITED") : r === eO.evJ.INVALID_MESSAGE_SEND_USER ? (t = eT.intl.formatToPlainString(eT.t.CTMXwM, {
        helpUrl: em.Z.getArticleURL(eO.BhN.DM_COULD_NOT_BE_DELIVERED)
      }), n = "INVALID_MESSAGE_SEND_USER") : r === eO.evJ.TOO_MANY_THREADS ? (t = i.isForumLikeChannel() || i.isForumPost() ? eT.intl.string(eT.t["/jUd29"]) : eT.intl.string(eT.t["5EMPAw"]), n = "TOO_MANY_THREADS") : r === eO.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = eT.intl.string(eT.t["aY+lLC"]), n = "TOO_MANY_ANNOUNCEMENT_THREADS") : r === eO.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = eT.intl.formatToPlainString(eT.t.zSG3Q0, {
        helpUrl: eO.EYA.HARMFUL_LINKS
      }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : r in eG ? (n = eG[r].messageName, t = eG[r].messageGetter()) : (t = eT.intl.formatToPlainString(eT.t.CTMXwM, {
        helpUrl: em.Z.getArticleURL(eO.BhN.DM_COULD_NOT_BE_DELIVERED)
      }), n = "SEND_FAILED (".concat(r, ")")), eB.sendBotMessage(e, t, n))
    },
    sendExplicitMediaClydeError(e, t, n) {
      let i = ea.Z.getChannel(e);
      if (null == i) return;
      let {
        message: a,
        messageName: o
      } = (0, r.EQ)({
        isDM: i.isDM(),
        isGDM: i.isGroupDM()
      }).with({
        isDM: true
      }, () => ({
        message: eT.intl.string(eT.t.mktny8),
        messageName: "BOT_DM_EXPLICIT_CONTENT"
      })).with({
        isDM: false,
        isGDM: true
      }, () => ({
        message: eT.intl.string(eT.t.mktny8),
        messageName: "BOT_GDM_EXPLICIT_CONTENT"
      })).otherwise(() => ({
        message: eT.intl.string(eT.t.i4AbAQ),
        messageName: "BOT_GUILD_EXPLICIT_CONTENT"
      })), l = (0, G.r)();
      eB.sendBotMessage(e, a, o, l), (0, v.aP)({
        action: v.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
        messageId: l,
        channelId: e,
        context: n
      }), null != t && t.length > 0 && s.Z.dispatch({
        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
        messageId: l,
        channelId: e,
        attachments: t
      })
    },
    truncateMessages(e, t, n) {
      s.Z.dispatch({
        type: "TRUNCATE_MESSAGES",
        channelId: e,
        truncateBottom: t,
        truncateTop: n
      })
    },
    clearChannel(e) {
      s.Z.dispatch({
        type: "CLEAR_MESSAGES",
        channelId: e
      })
    },
    jumpToPresent(e, t) {
      eB.trackJump(e, null, "Present");
      let n = {
        present: true
      };
      es.Z.hasPresent(e) ? s.Z.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        jump: n,
        channelId: e,
        limit: t
      }) : eB.fetchMessages({
        channelId: e,
        limit: t,
        jump: n
      })
    },
    trackJump(e, t, n, r) {
      d.ZP.trackWithMetadata(eO.rMx.JUMP, eA({
        context: n,
        channel_id: e,
        message_id: t
      }, r))
    },
    jumpToMessage(e) {
      var t;
      let {
        channelId: n,
        messageId: r,
        flash: i = false,
        offset: a,
        context: o,
        extraProperties: s = null,
        isPreload: l,
        returnMessageId: c,
        skipLocalFetch: u,
        jumpType: d,
        avoidInitialScroll: f
      } = e;
      return "string" == typeof o && eB.trackJump(n, r, o, s), null == eR || null == (t = eR.pauseAllMediaPlayers) || t.call(eR), eB.fetchMessages({
        channelId: n,
        limit: eO.Z8P,
        jump: {
          messageId: r,
          flash: i,
          offset: a,
          returnMessageId: c,
          jumpType: d
        },
        isPreload: l,
        skipLocalFetch: u,
        avoidInitialScroll: f
      })
    },
    focusMessage(e) {
      let {
        channelId: t,
        messageId: n
      } = e;
      eB.fetchMessages({
        channelId: t,
        limit: eO.Z8P,
        focus: {
          messageId: n
        }
      })
    },
    fetchMessage(e) {
      let {
        channelId: t,
        messageId: n
      } = e;
      return a.tn.get({
        url: eO.ANM.MESSAGES(t),
        query: {
          limit: 1,
          around: n
        },
        retries: 2,
        oldFormErrors: true,
        rejectWithError: false
      }).then(e => {
        if (e.body.length > 0) return (0, j.e5)(e.body[0])
      })
    },
    fetchMessages(e) {
      let {
        channelId: t,
        before: n,
        after: r,
        limit: i,
        jump: o,
        focus: l,
        isPreload: u,
        skipLocalFetch: d,
        truncate: f,
        forICYMI: _,
        avoidInitialScroll: p,
        feature: h
      } = e, m = ea.Z.getChannel(t), g = I.Z.isConnectedOrOverlay(), b = Date.now();
      if (null != m && m.type === eO.d4z.GUILD_STORE) returnfalse;
      if (t === E.V || (eP.log("Fetching messages for ".concat(t, " between ").concat(r, " and ").concat(n, ". jump=").concat(JSON.stringify(o))), eB._tryFetchMessagesCached({
          channelId: t,
          before: n,
          after: r,
          limit: i,
          jump: o,
          focus: l,
          truncate: f
        }))) return;
      en.Z.fetchMessages.recordStart();
      let y = null != o ? o : true;
      null == y && null != l && (y = eA({}, l));
      let O = c.Z.getOrCreate(t).loadStart(y);
      c.Z.commit(O), s.Z.dispatch({
        type: "LOAD_MESSAGES"
      });
      let v = null == y ? true : y.messageId,
        T = new ex;
      return d || this.fetchLocalMessages(t, n, r, i, T), a.tn.get({
        url: eO.ANM.MESSAGES(t),
        query: {
          before: n,
          after: r,
          limit: i,
          around: v,
          preload: u,
          feature: h
        },
        retries: 2,
        oldFormErrors: true,
        rejectWithError: false
      }).then(e => (en.Z.fetchMessages.recordEnd(), en.Z.dispatchMessages.measure(() => {
        let a = e.body,
          l = null != n,
          c = null != r,
          u = null == n && null == r,
          d = null != v || a.length === i && (l || u),
          h = null != v || c && a.length === i;
        if (null != v) {
          let e = Math.floor(i / 2),
            n = e + i % 2,
            r = [v, ...a.map(e => {
              let {
                id: t
              } = e;
              return t
            })].filter((e, t, n) => n.indexOf(e) === t).sort(eE.default.compare).indexOf(v);
          if (r < n - 1 && (d = false), a.length - r < e && (h = false), h && a.length > 0) {
            let e = eu.ZP.lastMessageId(t);
            a[0].id === e && (h = false)
          }
        }
        eP.log("Fetched ".concat(a.length, " messages for ").concat(t, " isBefore:").concat(l, " isAfter:").concat(c)), T.markComplete(), s.Z.dispatch({
          type: "LOAD_MESSAGES_SUCCESS",
          channelId: t,
          messages: a,
          isBefore: l,
          isAfter: c,
          hasMoreBefore: d,
          hasMoreAfter: h,
          limit: i,
          jump: o,
          forICYMI: _,
          isStale: !g || I.Z.lastTimeConnectedChanged() >= b,
          truncate: f,
          avoidInitialScroll: p
        })
      }), true), () => (eP.log("Failed to fetch messages for ".concat(t)), s.Z.dispatch({
        type: "LOAD_MESSAGES_FAILURE",
        channelId: t
      }), false))
    },
    async fetchLocalMessages(e, t, n, r, i) {
      let a = ea.Z.getBasicChannel(e),
        o = c.Z.getOrCreate(e),
        l = f.Z.database();
      if (null == l || null == a || null != t || null != n) return void en.Z.addLocalMessages(e, false);
      if (o.ready && !o.cached) return void en.Z.addLocalMessages(e, false);
      let u = await (0, _.dI)(() => p.ZP.load(l, e, r));
      if (null == u) return void en.Z.addLocalMessages(e, false);
      if (eP.log("fetched ".concat(u.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(i.completed, ")")), en.Z.addLocalMessages(e, u.messages.length), !i.completed && u.messages.length > 0) {
        let t = u.messages.length >= r && u.connectionId === I.Z.lastTimeConnectedChanged();
        s.Z.dispatch({
          type: "LOCAL_MESSAGES_LOADED",
          guildId: a.guild_id,
          channelId: e,
          users: u.users,
          members: u.members,
          messages: u.messages,
          stale: !t
        })
      }
    },
    async fetchNewLocalMessages(e, t) {
      var n;
      let r = ea.Z.getBasicChannel(e),
        i = f.Z.database();
      if (null == i || null == r) return;
      let a = c.Z.getOrCreate(e);
      if (a.hasMoreAfter) return;
      let o = await (0, _.dI)(() => p.ZP.load(i, e, t));
      if (null == o) return;
      let l = null == (n = (a = c.Z.getOrCreate(e)).last()) ? true : n.id,
        u = null == l ? o.messages : o.messages.filter(e => eE.default.compare(e.id, l) > 0);
      eP.log("Fetched ".concat(o.messages.length, " messages from the cache after foregrounding. ").concat(u.length, " are new")), 0 !== u.length && s.Z.dispatch({
        type: "LOCAL_MESSAGES_LOADED",
        guildId: r.guild_id,
        channelId: e,
        users: o.users,
        members: o.members,
        messages: u,
        stale: true
      })
    },
    _tryFetchMessagesCached(e) {
      let {
        channelId: t,
        before: n,
        after: r,
        limit: i,
        jump: a,
        focus: o,
        truncate: l
      } = e, c = es.Z.getMessages(t);
      if (c.cached || !c.ready) returnfalse;
      if ((null == a ? true : a.messageId) != null || (null == o ? true : o.messageId) != null) {
        if ((null == a ? true : a.messageId) != null && c.has(a.messageId, false)) return s.Z.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: a,
          limit: i,
          truncate: l
        }), true;
        if ((null == o ? true : o.messageId) != null)
          if (c.has(o.messageId, false)) return s.Z.dispatch({
            type: "LOAD_MESSAGES_SUCCESS_CACHED",
            channelId: t,
            focus: o,
            limit: i,
            truncate: l
          }), true;
          else a = eA({}, o);
        let e = (null == a ? true : a.messageId) != null ? eE.default.extractTimestamp(null == a ? true : a.messageId) : 0,
          n = c.first(),
          r = c.last();
        if (!c.hasMoreBefore && null != n && eE.default.extractTimestamp(n.id) >= e || !c.hasMoreAfter && null != r && eE.default.extractTimestamp(r.id) <= e || null != n && null != r && eE.default.extractTimestamp(n.id) < e && eE.default.extractTimestamp(r.id) > e) return s.Z.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: a,
          limit: eO.Z8P
        }), true
      } else if (null != n && c.hasBeforeCached(n)) return s.Z.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        before: n,
        limit: i,
        truncate: l
      }), true;
      else if (null != r && c.hasAfterCached(r)) return s.Z.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        after: r,
        limit: i,
        truncate: l
      }), true;
      returnfalse
    },
    async sendMessage(e, t) {
      var n;
      let r = !(arguments.length > 2) || true === arguments[2] || arguments[2],
        i = arguments.length > 3 ? arguments[3] : true;
      if (t.reaction) return Promise.resolve();
      let a = await (0, X.Z)(e);
      if (null != a) return eB.sendMessage(a, t, r, i);
      let o = null != (n = i.nonce) ? n : (0, G.r)();
      i = eN(eA({}, i), {
        nonce: o
      });
      let s = () => eB._sendMessage(e, t, i),
        l = L.ZP.backgroundify(s, true);
      return (M.Z.recordMessageSendAttempt(e, o, i), es.Z.isReady(e)) ? l() : r && e !== E.V ? (ew.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
        es.Z.whenReady(e, () => {
          ew.info("Channel ".concat(e, " is ready for sending now.")), l().then(t, n)
        })
      })) : l()
    },
    getSendMessageOptionsForReply(e) {
      var t;
      return null == e ? {} : {
        messageReference: {
          guild_id: null != (t = e.channel.getGuildId()) ? t : true,
          channel_id: e.channel.id,
          message_id: e.message.id
        },
        allowedMentions: e.shouldMention ? true : {
          parse: Object.values(eO.hCA),
          replied_user: false
        }
      }
    },
    getSendMessageOptionsForConfettiPotion(e) {
      let {
        channelId: t,
        content: n,
        isGif: r,
        command: i,
        uploads: a,
        confettiPotionEmoji: o
      } = e;
      return null != o && (0, K.tv)(n, r, i, a) ? {
        confettiPotionData: {
          emoji: o,
          callback: () => (0, Y.Hb)(t)
        }
      } : {}
    },
    getSendMessageOptionsForStickers(e) {
      let {
        isGif: t,
        stickers: n
      } = e;
      return null == n || 0 === n.length || t ? {} : {
        stickerIds: n
      }
    },
    getSendMessageOptionsForScheduledMessage(e) {
      let {
        scheduledTimestamp: t
      } = e;
      return null == t ? {} : {
        scheduledTimestamp: t
      }
    },
    getSendMessageOptions(e) {
      let t = eB.getSendMessageOptionsForReply(e.pendingReply),
        n = eB.getSendMessageOptionsForConfettiPotion(eA({}, e)),
        r = eB.getSendMessageOptionsForStickers(eA({}, e)),
        i = eB.getSendMessageOptionsForScheduledMessage(eA({}, e));
      return eA({}, t, n, r, i)
    },
    sendInvite(e, t, n, r, i) {
      let a = (0, D.Z)(t);
      return null != i && (a = "".concat(i, "\n").concat(a)), eB._sendMessage(e, {
        content: a,
        tts: false,
        validNonShortcutEmojis: [],
        invalidEmojis: []
      }, {
        location: n,
        suggestedInvite: null != r ? r : true
      })
    },
    sendActivityBookmark: (e, t, n, r) => eB._sendMessage(e, {
      content: t,
      tts: false,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != r ? r : true
    }),
    sendStickers(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "",
        r = arguments.length > 3 ? arguments[3] : true,
        i = arguments.length > 4 && true !== arguments[4] && arguments[4];
      return eB._sendMessage(e, {
        content: n,
        invalidEmojis: [],
        validNonShortcutEmojis: [],
        tts: i
      }, eN(eA({}, r), {
        stickerIds: t
      }))
    },
    sendGreetMessage(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
        {
          messageReference: r,
          allowedMentions: i
        } = n;
      return a.tn.post({
        url: eO.ANM.MESSAGES_GREET(e),
        body: {
          sticker_ids: [t],
          allowed_mentions: i,
          message_reference: r
        },
        oldFormErrors: true,
        rejectWithError: false,
        context: {
          location: eI.dy.GREET
        }
      }).then(n => (k.Z.donateSentMessage(n.body.content, e), eB.receiveMessage(e, n.body), s.Z.dispatch({
        type: "STICKER_TRACK_USAGE",
        stickerIds: [t]
      }), n), t => {
        throw eP.log("Failed to send greeting"), 429 !== t.status && eB.sendClydeError(e, t.body.code), s.Z.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: t.body.id,
          channelId: e
        }), t
      })
    },
    sendPollMessage(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
      return eB._sendMessage(e, {
        content: "",
        tts: false,
        validNonShortcutEmojis: [],
        invalidEmojis: []
      }, eN(eA({}, n), {
        poll: t,
        location: eI.dy.POLL_CREATION
      }))
    },
    validateMessage(e, t, n) {
      let r, i;
      return e.some(e => e.animated) && !eg.ZP.canUseAnimatedEmojis(t) ? (r = eT.intl.string(eT.t.msFJy8), i = "INVALID_ANIMATED_EMOJI_BODY") : el.Z.canWithPartialContext(eO.Plq.USE_EXTERNAL_EMOJIS, {
        channelId: n
      }) ? (r = eT.intl.string(eT.t.FzugNj), i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (r = eT.intl.string(eT.t.Q87rIy), i = "INVALID_EXTERNAL_EMOJI_BODY"), {
        errorMessage: r,
        errorMessageName: i
      }
    },
    async _sendMessage(e, t, n) {
      var r, i, a, o;
      let l, c = (0, X.Z)(e);
      if (null != c) return ew.info("Converting channel to a private channel"), c.then(e => {
        ew.info("Finished converting channel to a private channel"), eB._sendMessage(e, t, n)
      });
      let d = t.content,
        {
          invalidEmojis: f,
          validNonShortcutEmojis: _,
          tts: p = false
        } = t,
        {
          activityAction: h,
          location: m,
          suggestedInvite: g,
          stickerIds: E,
          confettiPotionData: b,
          messageReference: y,
          allowedMentions: O,
          poll: I,
          sharedCustomTheme: T,
          contentInventoryEntry: S,
          attachments: R,
          attachmentsToUpload: P,
          onAttachmentUploadError: w,
          announcementSendOptions: D
        } = n,
        L = null != (i = n.flags) ? i : 0,
        [j, Y] = (0, ee.Z)(d);
      j && (d = Y, L = (0, ep.pj)(L, eO.iLy.SUPPRESS_NOTIFICATIONS));
      let Q = false,
        J = (null == (r = n.messageReference) ? true : r.type) === eO.Uvt.FORWARD;
      if ("" === d && null == h && null == E && null == I && null == T && null == S && !J && (null == R || 0 === R.length) && (null == t.components || 0 === t.components.length))
        if (null == P || !(P.length > 0)) return Promise.resolve();
        else Q = true;
      let et = null != y ? eO.uaV.REPLY : eO.uaV.DEFAULT,
        en = null != (a = n.nonce) ? a : (0, G.r)(),
        er = en,
        ea = (0, U.ZP)({
          channelId: e,
          content: d,
          tts: p,
          type: et,
          messageReference: y,
          allowedMentions: O,
          flags: 0 !== L ? L : true,
          nonce: en,
          poll: (0, V.x9)(I),
          sharedCustomTheme: T
        });
      if (false !== n.eagerDispatch && ((0, Z.EL)(e, ea.id), null != E && (ea.sticker_items = E.map(e => $.Z.getStickerById(e)).filter(e => null != e)), eB.receiveMessage(e, ea, true, n)), !eD && null != f && f.length > 0) {
        eD = true;
        let t = ef.default.getCurrentUser(),
          {
            errorMessage: n,
            errorMessageName: r
          } = eB.validateMessage(f, t, e);
        eB.sendBotMessage(e, n, r)
      }
      let eo = {
        type: null != D ? u.$V.SEND_ANNOUNCEMENT : u.$V.SEND,
        message: {
          channelId: e,
          content: d,
          nonce: en,
          tts: p,
          message_reference: y,
          allowed_mentions: O,
          flags: L,
          analyticsLocation: m
        }
      };
      if (null != t.components && (eo.message.components = t.components), null != D && (eo.message.create_thread = D.createThread, eo.message.title = D.threadName, eo.message.publish = null != (o = D.publish) && o), null != h) {
        let e, t = null == h ? true : h.activity.session_id;
        if (null != (e = h.type === eO.mFx.JOIN_REQUEST || h.type === eO.mFx.STREAM_REQUEST || null != t ? t : ei.default.getSessionId())) {
          let t = {
              type: h.type,
              session_id: e,
              target_user_id: h.targetUserId
            },
            {
              activity: n
            } = h;
          null != n.party && null != n.party.id && (t.party_id = n.party.id), eo.message.application_id = n.application_id, eo.message.activity = t
        }
      }
      if (null != I && (eo.message.poll = I), null != T && (eo.message.shared_client_theme = T), null != E && (eo.message.sticker_ids = E), F.Z.isEnabled() && (eo.message.has_poggermode_enabled = true), null != S && (eo.message.content_inventory_entry = S), null != b && (eo.message.confetti_potion = (0, K.vY)(b), b.callback()), null != R && R.length > 0 && (eo.message.attachments = R), null != P && P.length > 0) try {
        let t = await (0, x.c)({
          channelId: e,
          nonce: en,
          items: P,
          message: ea,
          shouldUploadFailureSendNotification: !n.doNotNotifyOnError && true
        });
        if (null == t) return;
        let r = t.attachments;
        if (l = t.uploader, Q && (null == r || 0 === r.length)) return;
        null != r && (eo.message.attachments = r.map((e, t) => (0, eb.B)(e, t)))
      } catch (i) {
        let {
          file: e,
          code: t,
          reason: n,
          responseBody: r
        } = i;
        (0, B.x)({
          fileItems: e.items,
          failureCode: t,
          errorMessage: null == n ? true : n.msg
        }), null == w || w(e, t, n, r);
        return
      }
      return new Promise((t, r) => {
        let i = Date.now(),
          a = u.ZP.length,
          o = Math.floor(1e4 * Math.random());
        ew.info("Queueing message to be sent LogId:".concat(o)), u.ZP.enqueue(eo, o => {
          let c = Date.now() - i;
          if (o.ok) {
            k.Z.donateSentMessage(d, e), eB.receiveMessage(e, o.body, true, {
              sendAnalytics: {
                duration: c,
                queueSize: a
              },
              poll: I
            });
            let r = (0, K.ZC)(o.body);
            null != r && ((0, H.gA)(z.D1), (0, q.I)({
              name: r.name,
              id: r.id
            }, true, true, W.LL.MessageSent));
            let i = eE.default.cast(e),
              u = N.Z.getRequest(i);
            if (null != u) {
              let {
                guildId: t,
                userId: n,
                applicationStatus: r
              } = u;
              (0, C.pL)({
                guildId: t,
                channelId: e,
                messageId: o.body.id,
                joinRequestStatus: r,
                joinRequestUserId: n
              })
            }
            M.Z.recordMessageSendApiResponse(en), s.Z.dispatch({
              type: "SLOWMODE_RESET_COOLDOWN",
              slowmodeType: ed.S.SendMessage,
              channelId: e
            }), s.Z.dispatch({
              type: "EMOJI_TRACK_USAGE",
              emojiUsed: _
            }), s.Z.dispatch({
              type: "STICKER_TRACK_USAGE",
              stickerIds: E
            }), s.Z.dispatch({
              type: "LOCAL_MESSAGE_CREATE",
              message: {
                channel_id: e,
                author: ef.default.getCurrentUser()
              }
            }), eL({
              content: d,
              channelId: e,
              messageId: o.body.id,
              location: null != m ? m : "chat_input",
              suggested: g
            }), eM(d, e, o.body.id, null != m ? m : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), null != l && s.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: e,
              file: l._file,
              aborted: false
            }), t(o)
          } else {
            var f, p;
            let t;
            eP.log("Failed to send message", {
              hasErr: o.hasErr,
              status: o.status,
              code: null == (f = o.body) ? true : f.code,
              error: o.err
            });
            let i = false;
            if (o.hasErr) "ABORTED" === o.err.code && (i = true);
            else if (o.status >= 400 && o.status < 500 && o.body)
              if (o.body.code === eO.evJ.SLOWMODE_RATE_LIMITED) {
                let t = o.body.retry_after;
                null != t && t > 0 && s.Z.dispatch({
                  type: "SLOWMODE_SET_COOLDOWN",
                  channelId: e,
                  slowmodeType: ed.S.SendMessage,
                  cooldownMs: t * e_.Z.Millis.SECOND
                })
              } else A.U8.has(o.body.code) ? s.Z.dispatch({
                type: "MESSAGE_SEND_FAILED_AUTOMOD",
                messageData: eo,
                errorResponseBody: {
                  code: o.body.code,
                  message: o.body.message
                }
              }) : o.body.code === eO.evJ.POGGERMODE_TEMPORARILY_DISABLED ? s.Z.dispatch({
                type: "POGGERMODE_TEMPORARILY_DISABLED"
              }) : o.body.code === eO.evJ.EXPLICIT_CONTENT ? t = eI.xi.EXPLICIT_CONTENT : null != I || J || null != S || eB.sendClydeError(e, o.body.code);
            i ? eB.deleteMessage(e, er, true) : (null != l && s.Z.dispatch({
              type: "UPLOAD_FAIL",
              channelId: e,
              file: l._file,
              messageId: er,
              reason: t,
              noSendFailed: true
            }), o.hasErr || t !== eI.xi.EXPLICIT_CONTENT || eB.sendExplicitMediaClydeError(e, null == (p = o.body) ? true : p.attachments, v.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED), s.Z.dispatch({
              type: "MESSAGE_SEND_FAILED",
              messageId: er,
              channelId: e,
              shouldNotify: !n.doNotNotifyOnError,
              reason: t
            }), (0, B.x)({
              failureCode: o.hasErr ? true : o.status,
              errorMessage: o.hasErr ? o.err.message : true
            }), u.ZP.cancelPendingSendRequests(e).forEach(e => {
              eP.log("Cancelling pending message", e.nonce), s.Z.dispatch({
                type: "MESSAGE_SEND_FAILED",
                messageId: e.nonce,
                channelId: e.channelId
              })
            })), r(o)
          }
        }, o)
      })
    },
    startEditMessage(e, t, n, r) {
      s.Z.dispatch({
        type: "MESSAGE_START_EDIT",
        channelId: e,
        messageId: t,
        content: n,
        source: r
      })
    },
    startEditMessageRecord(e, t, n) {
      if ((0, ep.yE)(t.flags, eO.iLy.IS_COMPONENTS_V2)) {
        let r = t.components.filter(e => e.type === l.re.TEXT_DISPLAY);
        if (r.length > 0) {
          let i = r.map(e => e.content).join("\n");
          s.Z.dispatch({
            type: "MESSAGE_START_EDIT",
            channelId: e,
            messageId: t.id,
            content: i,
            source: n
          });
          return
        }
      }
      s.Z.dispatch({
        type: "MESSAGE_START_EDIT",
        channelId: e,
        messageId: t.id,
        content: t.content,
        source: n
      })
    },
    updateEditMessage(e, t, n) {
      s.Z.dispatch({
        type: "MESSAGE_UPDATE_EDIT",
        channelId: e,
        textValue: t,
        richValue: n
      })
    },
    endEditMessage(e, t) {
      s.Z.dispatch({
        type: "MESSAGE_END_EDIT",
        channelId: e,
        response: t
      })
    },
    async editMessage(e, t, n) {
      let {
        content: r,
        components: i
      } = n;
      await et.Z.unarchiveThreadIfNecessary(e);
      let a = eU(e, t),
        l = ek(e, t),
        c = {
          channelId: e,
          messageId: t,
          content: r,
          isCrossposted: l,
          allowed_mentions: a,
          components: i
        };
      u.ZP.enqueue({
        type: u.$V.EDIT,
        message: c
      }, n => {
        let r = !n.hasErr && A.U8.has(n.body.code);
        if (r) {
          let e = {
            type: u.$V.EDIT,
            message: c
          };
          s.Z.dispatch({
            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
            messageData: e,
            errorResponseBody: {
              code: n.body.code,
              message: n.body.message
            }
          })
        }
        n.hasErr ? o.uv.announce(eT.intl.string(eT.t.Atp7FB)) : r ? o.uv.announce(eT.intl.string(eT.t.Hym4i4)) : o.uv.announce(eT.intl.string(eT.t["0x1HBA"])), eB.endEditMessage(e, n.hasErr ? true : n), eB.focusMessage({
          channelId: e,
          messageId: t
        })
      })
    },
    async suppressEmbeds(e, t) {
      await et.Z.unarchiveThreadIfNecessary(e), a.tn.patch({
        url: eO.ANM.MESSAGE(e, t),
        body: {
          flags: eO.iLy.SUPPRESS_EMBEDS
        },
        oldFormErrors: true,
        rejectWithError: false
      })
    },
    async patchMessageAttachments(e, t, n) {
      await et.Z.unarchiveThreadIfNecessary(e), a.tn.patch({
        url: eO.ANM.MESSAGE(e, t),
        body: {
          attachments: n
        },
        oldFormErrors: true,
        rejectWithError: false
      })
    },
    async deleteMessage(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
        r = () => {
          s.Z.dispatch({
            type: "MESSAGE_DELETE",
            id: t,
            channelId: e
          }).then(() => {
            o.uv.announce(eT.intl.string(eT.t.RYMs7u))
          })
        };
      n ? r() : (await et.Z.unarchiveThreadIfNecessary(e), a.tn.del({
        url: eO.ANM.MESSAGE(e, t),
        oldFormErrors: true,
        rejectWithError: false
      }).then(() => {
        r()
      }))
    },
    dismissAutomatedMessage(e) {
      null != e.loggingName && d.ZP.trackWithMetadata(eO.rMx.AUTOMATED_MESSAGE_DISMISSED, {
        message_name: e.loggingName,
        message_author: e.author.username
      }), this.deleteMessage(e.channel_id, e.id, true)
    },
    revealMessage(e, t) {
      s.Z.dispatch({
        type: "MESSAGE_REVEAL",
        channelId: e,
        messageId: t
      })
    },
    crosspostMessage: (e, t) => a.tn.post({
      url: eO.ANM.MESSAGE_CROSSPOST(e, t),
      oldFormErrors: true,
      failImmediatelyWhenRateLimited: true,
      rejectWithError: false
    }).catch(e => {
      let t;
      t = 429 === e.status ? eT.intl.formatToPlainString(eT.t["77cuq6"], {
        retryAfter: Math.floor(e.body.retry_after / 60)
      }) : eT.intl.string(eT.t.z2gyND), ey.Z.show({
        title: eT.intl.string(eT.t.Vd1hs7),
        body: t,
        confirmText: eT.intl.string(eT.t.BddRzc)
      })
    }),
    trackInvite: ej
  },
  eZ = eB