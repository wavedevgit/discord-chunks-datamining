/** Chunk was on web.js **/
/** chunk id: 843472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eH
}), require("./228524.js"), require("./65821.js"), require("./801541.js"), require("./457529.js"), require("./896048.js"), require("./638769.js"), require("./938796.js");
var Chunk889137 = require("./889137.js"),
  Chunk696292 = require("./696292.js"),
  Chunk665260 = require("./665260.js"),
  Chunk562465 = require("./562465.js"),
  Chunk582754 = require("./582754.js"),
  Chunk73153 = require("./73153.js"),
  Chunk155718 = require("./155718.js"),
  Chunk128265 = require("./128265.js"),
  Chunk884384 = require("./884384.js"),
  Chunk58149 = require("./58149.js"),
  Chunk723176 = require("./723176.js"),
  Chunk154049 = require("./154049.js"),
  Chunk348802 = require("./348802.js"),
  Chunk121401 = require("./121401.js"),
  Chunk909338 = require("./909338.js"),
  Chunk354287 = require("./354287.js"),
  Chunk695870 = require("./695870.js"),
  Chunk734066 = require("./734066.js"),
  Chunk372684 = require("./372684.js"),
  Chunk167189 = require("./167189.js"),
  Chunk833291 = require("./833291.js"),
  Chunk626584 = require("./626584.js"),
  Chunk390248 = require("./390248.js"),
  Chunk885918 = require("./885918.js"),
  Chunk142120 = require("./142120.js"),
  Chunk992771 = require("./992771.js"),
  Chunk834757 = require("./834757.js"),
  Chunk753738 = require("./753738.js"),
  Chunk51271 = require("./51271.js"),
  Chunk844944 = require("./844944.js"),
  Chunk122906 = require("./122906.js"),
  Chunk21599 = require("./21599.js"),
  Chunk346542 = require("./346542.js"),
  Chunk279208 = require("./279208.js"),
  Chunk917878 = require("./917878.js"),
  Chunk586872 = require("./586872.js"),
  Chunk99341 = require("./99341.js"),
  Chunk141468 = require("./141468.js"),
  Chunk407580 = require("./407580.js"),
  Chunk130201 = require("./130201.js"),
  Chunk963852 = require("./963852.js"),
  Chunk195880 = require("./195880.js"),
  Chunk488004 = require("./488004.js"),
  Chunk928830 = require("./928830.js"),
  Chunk3137 = require("./3137.js"),
  Chunk969632 = require("./969632.js"),
  Chunk79911 = require("./79911.js"),
  Chunk561844 = require("./561844.js"),
  Chunk710969 = require("./710969.js");
require("./853145.js");
var Chunk9842 = require("./9842.js"),
  Chunk679382 = require("./679382.js"),
  Chunk677413 = require("./677413.js"),
  Chunk867455 = require("./867455.js"),
  Chunk614792 = require("./614792.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js");
require("./580745.js");
var Chunk299091 = require("./299091.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk222823 = require("./222823.js"),
  Chunk101392 = require("./101392.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk45938 = require("./45938.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk661191 = require("./661191.js"),
  Chunk292348 = require("./292348.js"),
  Chunk157559 = require("./157559.js"),
  Chunk652215 = require("./652215.js"),
  Chunk768349 = require("./768349.js"),
  Chunk401755 = require("./401755.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx");

function eT(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eT(e, t, n[t])
    })
  }
  return e
}

function eN(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ew(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eN(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eR = null,
  eP = new Chunk626584.A("MessageActionCreators"),
  eD = new Chunk626584.A("MessageQueue"),
  eL = false;
class ex {
  markComplete() {
    this.completed = true
  }
  constructor() {
    eT(this, "completed", false)
  }
}

function eM(e) {
  let {
    content: t,
    channelId: n,
    messageId: r,
    location: a,
    inviteAnalyticsMetadata: o,
    overrideProperties: s = {}
  } = e, l = ei.default.getId();
  (0, A.Ay)(t).forEach(e => {
    let {
      type: t,
      code: c,
      url: u
    } = e;
    if (t === v.I.INVITE) ej({
      inviteKey: c,
      channelId: n,
      messageId: r,
      location: a,
      inviteAnalyticsMetadata: o,
      overrideProperties: s
    });
    else if (t === v.I.TEMPLATE) {
      let e = L.A.getGuildTemplate(c);
      if (null == e || e.state === eA.QB.RESOLVING) return;
      f.Ay.trackWithMetadata(eO.HAw.GUILD_TEMPLATE_LINK_SENT, {
        guild_template_code: c,
        guild_template_name: e.name,
        guild_template_description: e.description,
        guild_template_guild_id: e.sourceGuildId
      })
    } else if (t === v.I.BUILD_OVERRIDE);
    else if (t === v.I.EXPERIMENT);
    else if (t === v.I.MANUAL_BUILD_OVERRIDE);
    else if (t === v.I.EVENT);
    else if (t === v.I.CHANNEL_LINK);
    else if (t === v.I.APP_DIRECTORY_PROFILE)(0, N.y)(c), (0, E.KL)(c, ev.J.APP_DISCOVERY, l);
    else if (t === v.I.APP_DIRECTORY_STOREFRONT)(0, N.y)(c, "storefront");
    else if (t === v.I.APP_DIRECTORY_STOREFRONT_SKU) {
      let e = (0, m.u)(c);
      null != e && (0, N.y)(e.applicationId, "storefront_sku")
    } else if (t === v.I.ACTIVITY_BOOKMARK) {
      var d;
      let e = (0, g.N)(u);
      (0, E.KL)(c, ev.J.ACTIVITY, null != (d = e.referrerId) ? d : l, e.customId)
    } else if (t === v.I.EMBEDDED_ACTIVITY_INVITE)(0, E.KL)(c, ev.J.ACTIVITY_INVITE, l);
    else if (t === v.I.GUILD_PRODUCT);
    else if (t === v.I.SERVER_SHOP);
    else if (t === v.I.SOCIAL_LAYER_STOREFRONT);
    else if (t === v.I.QUESTS_EMBED) {
      let e = (0, X.Li)(i.u.QUESTS_EMBED),
        t = (0, X.L4)(i.u.QUESTS_EMBED);
      (0, Q.av)({
        questId: c,
        event: eO.HAw.QUEST_LINK_SHARED,
        properties: {
          metadata_raw: null != e ? e : null,
          metadata_sealed: null != t ? t : null
        },
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: i.u.QUESTS_EMBED
      })
    } else if (t === v.I.APP_OAUTH2_LINK) f.Ay.trackWithMetadata(eO.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT, {
      application_id: c
    }), (0, E.KL)(c, ev.J.OAUTH, l);
    else if (t === v.I.COLLECTIBLES_SHOP);
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
    inviteAnalyticsMetadata: s,
    overrideProperties: l = {}
  } = e, c = ei.default.getId(), u = eo.A.getInvite(r), d = (0, x.y$)(r), p = null != u && (0, M.oK)(u), _ = null == u || null == (t = u.target_application) ? true : t.id;
  null != _ && p && (0, E.KL)(_, ev.J.ACTIVITY_INVITE, c);
  let h = ea.A.getChannel(i);
  if (null != h) {
    let e = null;
    h.isMultiUserDM() ? e = eO.G2g.GDM_INVITE : h.isPrivate() || (e = eO.G2g.SERVER_INVITE);
    let t = {};
    if (null != u && u.state === eO.elq.RESOLVED && null != u.channel) {
      let r = u.channel;
      t.invite_channel_id = r.id, t.invite_guild_id = null == (n = u.guild) ? true : n.id, t.invite_channel_type = r.type, null != u.inviter && (t.invite_inviter_id = u.inviter.id), null != u.target_application && (t.application_id = u.target_application.id);
      let i = er.A.getLastActiveStream();
      if (null != i && i.channelId === r.id) {
        e = eO.G2g.STREAM, t.destination_user_id = i.ownerId;
        let n = (0, w.Ee)(i, ec.A);
        t.application_id = null != n ? n.id : null
      }
    }
    null != s && (null != s.suggestionData && (t.is_suggested = s.suggestionData.isAffinitySuggestion, t.row_num = s.suggestionData.rowNum, t.num_total = s.suggestionData.numTotal, t.num_affinity_connections = s.suggestionData.numAffinityConnections, t.is_filtered = s.suggestionData.isFiltered), t.source = s.source), t = eC(ew(eC({}, t), {
      location: o,
      invite_type: e,
      invite_code: d.baseCode,
      guild_id: h.getGuildId(),
      channel_id: h.id,
      message_id: a,
      send_type: eO.gfq.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: d.guildScheduledEventId
    }), l), f.Ay.trackWithMetadata(eO.HAw.INVITE_SENT, t)
  } else {
    let e = {};
    null != u && u.state === eO.elq.RESOLVED && null != u.inviter && (e.invite_inviter_id = u.inviter.id, null != u.target_application && (e.application_id = u.target_application.id), e = eC(ew(eC({}, e), {
      location: o,
      invite_type: eO.G2g.FRIEND_INVITE,
      invite_code: d.baseCode,
      message_id: a,
      send_type: eO.gfq.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: d.guildScheduledEventId
    }), l), f.Ay.trackWithMetadata(eO.HAw.INVITE_SENT, e))
  }
}

function ek(e, t, n, r, i) {
  (0, eh.e7)(e).forEach(e => {
    let a = ea.A.getChannel(t);
    null != a && f.Ay.trackWithMetadata(eO.HAw.GIFT_CODE_SENT, {
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

function eU(e) {
  let {
    referencedMessageId: t,
    guildId: n,
    channelId: r,
    destinationChannelId: i
  } = e;
  ep.default.track(eO.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
    referenced_message_id: t,
    guild_id: n,
    channel_id: r,
    destination_channel_id: i
  })
}

function eG(e, t) {
  let n = es.A.getMessage(e, t);
  return null != n && n.hasFlag(eO.pr7.CROSSPOSTED)
}

function eF(e, t) {
  let n = es.A.getMessage(e, t);
  if (null == n || n.type !== eO.lAJ.REPLY) return;
  let r = J.A.getMessageByReference(n.messageReference);
  if (r.state === J.a.LOADED && !n.mentions.includes(r.message.author.id)) return {
    parse: Object.values(eO.uw8),
    replied_user: false
  }
}
let eV = {
    [Chunk652215.t02.EMAIL_VERIFICATION_REQUIRED]: {
      messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
      messageGetter: () => eS.intl.string(eS.t.k1Cjqr)
    },
    [Chunk652215.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
      messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
      messageGetter: () => eS.intl.string(eS.t.Z5SUuv)
    },
    [Chunk652215.t02.INVALID_MESSAGE_SEND_USER]: {
      messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
      messageGetter: () => eS.intl.formatToPlainString(eS.t.CTMXwL, {
        helpUrl: em.A.getArticleURL(eO.MVz.DM_COULD_NOT_BE_DELIVERED)
      })
    },
    [Chunk652215.t02.RATE_LIMIT_DM_OPEN]: {
      messageName: "BOT_DM_RATE_LIMITED",
      messageGetter: () => eS.intl.string(eS.t.E8nbNb)
    },
    [Chunk652215.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => eS.intl.string(eS.t.aRUbah)
    },
    [Chunk652215.t02.SLOWMODE_RATE_LIMITED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => eS.intl.string(eS.t.aRUbah)
    },
    [Chunk652215.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
      messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
      messageGetter: () => eS.intl.string(eS.t["/meGhR"])
    },
    [Chunk652215.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
      messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
      messageGetter: () => eS.intl.string(eS.t.Oc1Zjw)
    }
  },
  eB = {
    receiveMessage(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
        r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
      l.h.dispatch({
        type: "MESSAGE_CREATE",
        channelId: e,
        message: t,
        optimistic: n,
        sendMessageOptions: r,
        isPushNotification: false
      })
    },
    sendBotMessage(e, t, n, r) {
      null != n && f.Ay.trackWithMetadata(eO.HAw.AUTOMATED_MESSAGE_RECEIVED, {
        message_author: "Clyde",
        message_name: n
      }), eB.receiveMessage(e, (0, H.pO)({
        messageId: r,
        channelId: e,
        content: t,
        loggingName: n
      }))
    },
    sendNitroSystemMessage(e, t, n) {
      let r = (0, H.Ay)({
        channelId: e,
        nonce: n,
        type: eO.lAJ.NITRO_NOTIFICATION,
        content: t,
        flags: eO.pr7.EPHEMERAL,
        author: {
          id: eO.oIV,
          username: "Nitro Notification",
          discriminator: eO.h3J,
          avatar: "nitro",
          bot: true
        }
      });
      eB.receiveMessage(e, ew(eC({}, r), {
        state: eO.cmJ.SENT,
        channel_id: e
      }), true)
    },
    sendGiftingPromptSystemMessage(e, t) {
      let n = (0, H.Ay)({
        channelId: e,
        type: eO.lAJ.GIFTING_PROMPT,
        content: "",
        flags: eO.pr7.EPHEMERAL,
        author: {
          id: eO.oIV,
          username: "Gifting Prompt",
          discriminator: eO.h3J,
          avatar: "gifting_prompt",
          bot: true
        },
        giftingPrompt: t
      });
      eB.receiveMessage(e, ew(eC({}, n), {
        state: eO.cmJ.SENT
      }), true)
    },
    sendClydeError(e) {
      let t, n, r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
        i = ea.A.getChannel(e);
      null != i && (r === eO.t02.SLOWMODE_RATE_LIMITED ? (t = eS.intl.formatToPlainString(eS.t.IWntYg, {
        seconds: i.rateLimitPerUser
      }), n = "SLOWMODE_RATE_LIMITED") : r === eO.t02.INVALID_MESSAGE_SEND_USER ? (t = eS.intl.formatToPlainString(eS.t.CTMXwL, {
        helpUrl: em.A.getArticleURL(eO.MVz.DM_COULD_NOT_BE_DELIVERED)
      }), n = "INVALID_MESSAGE_SEND_USER") : r === eO.t02.TOO_MANY_THREADS ? (t = i.isForumLikeChannel() || i.isForumPost() ? eS.intl.string(eS.t["/jUd2+"]) : eS.intl.string(eS.t["5EMPA7"]), n = "TOO_MANY_THREADS") : r === eO.t02.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = eS.intl.string(eS.t["aY+lLC"]), n = "TOO_MANY_ANNOUNCEMENT_THREADS") : r === eO.t02.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = eS.intl.formatToPlainString(eS.t.zSG3Qy, {
        helpUrl: eO.X7G.HARMFUL_LINKS
      }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : r === eO.t02.HARMFUL_URL_BLOCKED ? (t = eS.intl.string(eS.t.WxX2Fd), n = "HARMFUL_URL_BLOCKED") : r in eV ? (n = eV[r].messageName, t = eV[r].messageGetter()) : (t = eS.intl.formatToPlainString(eS.t.CTMXwL, {
        helpUrl: em.A.getArticleURL(eO.MVz.DM_COULD_NOT_BE_DELIVERED)
      }), n = "SEND_FAILED (".concat(r, ")")), eB.sendBotMessage(e, t, n))
    },
    sendExplicitMediaClydeError(e, t, n) {
      let i = ea.A.getChannel(e);
      if (null == i) return;
      let {
        message: a,
        messageName: o
      } = (0, r.YW)({
        isDM: i.isDM(),
        isGDM: i.isGroupDM()
      }).with({
        isDM: true
      }, () => ({
        message: eS.intl.string(eS.t["mktny/"]),
        messageName: "BOT_DM_EXPLICIT_CONTENT"
      })).with({
        isDM: false,
        isGDM: true
      }, () => ({
        message: eS.intl.string(eS.t["mktny/"]),
        messageName: "BOT_GDM_EXPLICIT_CONTENT"
      })).otherwise(() => ({
        message: eS.intl.string(eS.t.i4AbAS),
        messageName: "BOT_GUILD_EXPLICIT_CONTENT"
      })), s = (0, Y.m)();
      eB.sendBotMessage(e, a, o, s), (0, S.hv)({
        action: S.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
        messageId: s,
        channelId: e,
        context: n
      }), null != t && t.length > 0 && l.h.dispatch({
        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
        messageId: s,
        channelId: e,
        attachments: t
      })
    },
    truncateMessages(e, t, n) {
      l.h.dispatch({
        type: "TRUNCATE_MESSAGES",
        channelId: e,
        truncateBottom: t,
        truncateTop: n
      })
    },
    clearChannel(e) {
      l.h.dispatch({
        type: "CLEAR_MESSAGES",
        channelId: e
      })
    },
    jumpToPresent(e, t) {
      eB.trackJump(e, null, "Present");
      let n = {
        present: true
      };
      es.A.hasPresent(e) ? l.h.dispatch({
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
      f.Ay.trackWithMetadata(eO.HAw.JUMP, eC({
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
        limit: eO.d7Q,
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
        limit: eO.d7Q,
        focus: {
          messageId: n
        }
      })
    },
    async fetchMessage(e) {
      let {
        channelId: t,
        messageId: n
      } = e, r = await o.Bo.get({
        url: eO.Rsh.MESSAGES(t),
        query: {
          limit: 1,
          around: n
        },
        retries: 2,
        oldFormErrors: true,
        rejectWithError: false
      });
      if (r.body.length > 0) return (0, F.rh)(r.body[0])
    },
    fetchMessages(e) {
      let {
        channelId: t,
        before: n,
        after: r,
        limit: i,
        jump: a,
        focus: s,
        isPreload: c,
        skipLocalFetch: d,
        truncate: f,
        forICYMI: p,
        avoidInitialScroll: _,
        feature: h,
        fetchKey: m
      } = e, g = ea.A.getChannel(t), E = C.A.isConnectedOrOverlay(), b = Date.now();
      if (null != g && g.type === eO.rbe.GUILD_STORE) returnfalse;
      if (t === y.E || (eP.log("Fetching messages for ".concat(t, " between ").concat(r, " and ").concat(n, ". jump=").concat(JSON.stringify(a))), eB._tryFetchMessagesCached({
          channelId: t,
          before: n,
          after: r,
          limit: i,
          jump: a,
          focus: s,
          truncate: f
        }))) return;
      en.A.fetchMessages.recordStart(), k.A.recordChannelFetchStart(t, null != m ? m : b, n, r, i);
      let O = null != a ? a : true;
      null == O && null != s && (O = eC({}, s));
      let v = u.A.getOrCreate(t).loadStart(O);
      u.A.commit(v), l.h.dispatch({
        type: "LOAD_MESSAGES"
      });
      let A = null == O ? true : O.messageId,
        I = new ex;
      return d || this.fetchLocalMessages(t, null != m ? m : b, n, r, i, I), o.Bo.get({
        url: eO.Rsh.MESSAGES(t),
        query: {
          before: n,
          after: r,
          limit: i,
          around: A,
          preload: c,
          feature: h
        },
        retries: 2,
        oldFormErrors: true,
        rejectWithError: false
      }).then(e => (en.A.fetchMessages.recordEnd(), en.A.dispatchMessages.measure(() => {
        let o = e.body,
          s = null != n,
          c = null != r,
          u = null == n && null == r,
          d = null != A || o.length === i && (s || u),
          h = null != A || c && o.length === i;
        if (null != A) {
          let e = Math.floor(i / 2),
            n = e + i % 2,
            r = [A, ...o.map(e => {
              let {
                id: t
              } = e;
              return t
            })].filter((e, t, n) => n.indexOf(e) === t).sort(eE.default.compare).indexOf(A);
          if (r < n - 1 && (d = false), o.length - r < e && (h = false), h && o.length > 0) {
            let e = eu.Ay.lastMessageId(t);
            o[0].id === e && (h = false)
          }
        }
        eP.log("Fetched ".concat(o.length, " messages for ").concat(t, " isBefore:").concat(s, " isAfter:").concat(c)), I.markComplete(), l.h.dispatch({
          type: "LOAD_MESSAGES_SUCCESS",
          channelId: t,
          messages: o,
          isBefore: s,
          isAfter: c,
          hasMoreBefore: d,
          hasMoreAfter: h,
          limit: i,
          jump: a,
          forICYMI: p,
          isStale: !E || C.A.lastTimeConnectedChanged() >= b,
          truncate: f,
          avoidInitialScroll: _
        }), k.A.recordChannelFetchedNetwork(t, null != m ? m : b, n, r, i, o)
      }), true), () => (eP.log("Failed to fetch messages for ".concat(t)), l.h.dispatch({
        type: "LOAD_MESSAGES_FAILURE",
        channelId: t
      }), false))
    },
    async fetchLocalMessages(e, t, n, r, i, a) {
      let o = ea.A.getBasicChannel(e),
        s = u.A.getOrCreate(e),
        c = p.A.database();
      if (null == c || null == o || null != n || null != r) return void en.A.addLocalMessages(e, false);
      if (s.ready && !s.cached) return void en.A.addLocalMessages(e, false);
      let d = await (0, _.kk)(() => h.Ay.load(c, e, i));
      if (null == d) return void en.A.addLocalMessages(e, false);
      if (eP.log("fetched ".concat(d.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(a.completed, ")")), en.A.addLocalMessages(e, d.messages.length), !a.completed && d.messages.length > 0) {
        let a = d.messages.length >= i && d.connectionId === C.A.lastTimeConnectedChanged();
        k.A.recordChannelFetchedLocal(e, t, n, r, i, d.messages), l.h.dispatch({
          type: "LOCAL_MESSAGES_LOADED",
          guildId: o.guild_id,
          channelId: e,
          users: d.users,
          members: d.members,
          messages: d.messages,
          stale: !a
        })
      }
    },
    async fetchNewLocalMessages(e, t) {
      var n;
      let r = ea.A.getBasicChannel(e),
        i = p.A.database();
      if (null == i || null == r) return;
      let a = u.A.getOrCreate(e);
      if (a.hasMoreAfter) return;
      let o = await (0, _.kk)(() => h.Ay.load(i, e, t));
      if (null == o) return;
      let s = null == (n = (a = u.A.getOrCreate(e)).last()) ? true : n.id,
        c = null == s ? o.messages : o.messages.filter(e => eE.default.compare(e.id, s) > 0);
      eP.log("Fetched ".concat(o.messages.length, " messages from the cache after foregrounding. ").concat(c.length, " are new")), 0 !== c.length && l.h.dispatch({
        type: "LOCAL_MESSAGES_LOADED",
        guildId: r.guild_id,
        channelId: e,
        users: o.users,
        members: o.members,
        messages: c,
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
        truncate: s
      } = e, c = es.A.getMessages(t);
      if (c.cached || !c.ready) returnfalse;
      if ((null == a ? true : a.messageId) != null || (null == o ? true : o.messageId) != null) {
        if ((null == a ? true : a.messageId) != null && c.has(a.messageId, false)) return l.h.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: a,
          limit: i,
          truncate: s
        }), true;
        if ((null == o ? true : o.messageId) != null)
          if (c.has(o.messageId, false)) return l.h.dispatch({
            type: "LOAD_MESSAGES_SUCCESS_CACHED",
            channelId: t,
            focus: o,
            limit: i,
            truncate: s
          }), true;
          else a = eC({}, o);
        let e = (null == a ? true : a.messageId) != null ? eE.default.extractTimestamp(null == a ? true : a.messageId) : 0,
          n = c.first(),
          r = c.last();
        if (!c.hasMoreBefore && null != n && eE.default.extractTimestamp(n.id) >= e || !c.hasMoreAfter && null != r && eE.default.extractTimestamp(r.id) <= e || null != n && null != r && eE.default.extractTimestamp(n.id) < e && eE.default.extractTimestamp(r.id) > e) return l.h.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: a,
          limit: eO.d7Q
        }), true
      } else if (null != n && c.hasBeforeCached(n)) return l.h.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        before: n,
        limit: i,
        truncate: s
      }), true;
      else if (null != r && c.hasAfterCached(r)) return l.h.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        after: r,
        limit: i,
        truncate: s
      }), true;
      returnfalse
    },
    async sendMessage(e, t) {
      var n;
      let r = !(arguments.length > 2) || true === arguments[2] || arguments[2],
        i = arguments.length > 3 ? arguments[3] : true;
      if (t.reaction) return Promise.resolve();
      let a = await (0, Z.A)(e);
      if (null != a) return eB.sendMessage(a, t, r, i);
      let o = null != (n = i.nonce) ? n : (0, Y.m)();
      i = ew(eC({}, i), {
        nonce: o
      });
      let s = () => eB._sendMessage(e, t, i),
        l = G.Ay.backgroundify(s, true);
      return (V.A.recordMessageSendAttempt(e, o, i), es.A.isReady(e)) ? l() : r && e !== y.E ? (eD.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
        es.A.whenReady(e, () => {
          eD.info("Channel ".concat(e, " is ready for sending now.")), l().then(t, n)
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
          parse: Object.values(eO.uw8),
          replied_user: false
        }
      }
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
    getSendMessageOptionsForAlsoForwardToChannel: e => ({
      alsoForwardToChannelId: e.alsoForwardToChannelId
    }),
    getSendMessageOptions(e) {
      let t = eB.getSendMessageOptionsForReply(e.pendingReply),
        n = eB.getSendMessageOptionsForStickers(eC({}, e)),
        r = eB.getSendMessageOptionsForScheduledMessage(eC({}, e)),
        i = eB.getSendMessageOptionsForAlsoForwardToChannel(eC({}, e));
      return eC({}, t, n, r, i)
    },
    sendInvite(e, t, n, r, i) {
      let a = (0, j.A)(t);
      return null != i && (a = "".concat(i, "\n").concat(a)), eB._sendMessage(e, {
        content: a,
        tts: false,
        validNonShortcutEmojis: [],
        invalidEmojis: []
      }, {
        location: n,
        inviteAnalyticsMetadata: r
      })
    },
    sendActivityBookmark: (e, t, n, r) => eB._sendMessage(e, {
      content: t,
      tts: false,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      inviteAnalyticsMetadata: r
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
      }, ew(eC({}, r), {
        stickerIds: t
      }))
    },
    sendGreetMessage(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
        {
          messageReference: r,
          allowedMentions: i
        } = n;
      return o.Bo.post({
        url: eO.Rsh.MESSAGES_GREET(e),
        body: {
          sticker_ids: [t],
          allowed_mentions: i,
          message_reference: r
        },
        oldFormErrors: true,
        rejectWithError: false,
        context: {
          location: eI.Hx.GREET
        }
      }).then(n => (B.A.donateSentMessage(n.body.content, e), eB.receiveMessage(e, n.body), l.h.dispatch({
        type: "STICKER_TRACK_USAGE",
        stickerIds: [t]
      }), n), t => {
        throw eP.log("Failed to send greeting"), 429 !== t.status && eB.sendClydeError(e, t.body.code), l.h.dispatch({
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
      }, ew(eC({}, n), {
        poll: t,
        location: eI.Hx.POLL_CREATION
      }))
    },
    validateMessage(e, t, n) {
      let r, i;
      return e.some(e => e.animated) && !eg.Ay.canUseAnimatedEmojis(t) ? (r = eS.intl.string(eS.t.msFJy8), i = "INVALID_ANIMATED_EMOJI_BODY") : el.A.canWithPartialContext(eO.xBc.USE_EXTERNAL_EMOJIS, {
        channelId: n
      }) ? (r = eS.intl.string(eS.t.FzugNl), i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (r = eS.intl.string(eS.t["Q87rI/"]), i = "INVALID_EXTERNAL_EMOJI_BODY"), {
        errorMessage: r,
        errorMessageName: i
      }
    },
    async _sendMessage(e, t, n) {
      var r, i, o, s, c, u, f, p, _, h;
      let m, g = (0, Z.A)(e);
      if (null != g) return eD.info("Converting channel to a private channel"), g.then(e => {
        eD.info("Finished converting channel to a private channel"), eB._sendMessage(e, t, n)
      });
      let E = t.content,
        {
          invalidEmojis: y,
          validNonShortcutEmojis: v,
          tts: A = false
        } = t,
        {
          activityAction: I,
          location: C,
          inviteAnalyticsMetadata: N,
          stickerIds: w,
          messageReference: L,
          allowedMentions: x,
          poll: M,
          sharedCustomTheme: j,
          contentInventoryEntry: k,
          attachments: G,
          attachmentsToUpload: Q,
          onAttachmentUploadError: X,
          announcementSendOptions: J,
          withCheckpoint: et,
          messageIdFromNotificationExperiment: en
        } = n,
        er = null != (r = n.flags) ? r : 0,
        [ea, eo] = (0, ee.A)(E);
      ea && (E = eo, er = (0, a.UI)(er, eO.pr7.SUPPRESS_NOTIFICATIONS));
      let es = false,
        el = (null == (o = n.messageReference) ? true : o.type) === eO.SH7.FORWARD;
      if ("" === E && null == I && null == w && null == M && null == j && null == k && !el && (null == G || 0 === G.length) && !et && (null == t.components || 0 === t.components.length))
        if (null == Q || !(Q.length > 0)) return Promise.resolve();
        else es = true;
      let ec = null != L ? eO.lAJ.REPLY : eO.lAJ.DEFAULT,
        eu = null != (i = n.nonce) ? i : (0, Y.m)(),
        ep = eu,
        eh = (0, H.Ay)({
          channelId: e,
          content: E,
          tts: A,
          type: ec,
          messageReference: L,
          allowedMentions: x,
          flags: 0 !== er ? er : true,
          nonce: eu,
          poll: (0, q.G8)(M),
          sharedCustomTheme: j
        });
      if (false !== n.eagerDispatch && ((0, K.iq)(e, eh.id), null != w && (eh.sticker_items = w.map(e => $.A.getStickerById(e)).filter(e => null != e)), eB.receiveMessage(e, eh, true, n)), !eL && null != y && y.length > 0) {
        eL = true;
        let t = ef.default.getCurrentUser(),
          {
            errorMessage: n,
            errorMessageName: r
          } = eB.validateMessage(y, t, e);
        eB.sendBotMessage(e, n, r)
      }
      let em = {
        type: null != J ? d.AZ.SEND_ANNOUNCEMENT : d.AZ.SEND,
        message: {
          channelId: e,
          content: E,
          nonce: eu,
          tts: A,
          message_reference: L,
          allowed_mentions: x,
          flags: er,
          analyticsLocation: C
        }
      };
      if (null != t.components && (em.message.components = t.components), null != J && (em.message.create_thread = J.createThread, em.message.title = J.threadName, em.message.publish = null != (s = J.publish) && s), null != I) {
        let e, t = null == I ? true : I.activity.session_id;
        if (null != (e = I.type === eO.xL.JOIN_REQUEST || I.type === eO.xL.STREAM_REQUEST || null != t ? t : ei.default.getSessionId())) {
          let t = {
              type: I.type,
              session_id: e,
              target_user_id: I.targetUserId
            },
            {
              activity: n
            } = I;
          null != n.party && null != n.party.id && (t.party_id = n.party.id), em.message.application_id = n.application_id, em.message.activity = t
        }
      }
      if (null != M && (em.message.poll = M), null != j && (em.message.shared_client_theme = j), null != w && (em.message.sticker_ids = w), z.A.isEnabled() && (em.message.has_poggermode_enabled = true), et && (em.message.with_checkpoint = true), null != k && (em.message.content_inventory_entry = k), null != G && G.length > 0 && (em.message.attachments = G), null != en && (em.message.message_id_from_notification_experiment = en), null != Q && Q.length > 0) try {
        let t = await (0, U.L)({
          channelId: e,
          nonce: eu,
          items: Q,
          message: eh,
          shouldUploadFailureSendNotification: !n.doNotNotifyOnError && true
        });
        if (null == t) return;
        let r = t.attachments;
        if (m = t.uploader, es && (null == r || 0 === r.length)) return;
        if (null != r && (em.message.attachments = r.map((e, t) => (0, ey.OW)(e, t)), (0, b.J)())) {
          for (let e of r)
            if ((null == (p = e.item) || null == (f = p.clip) || null == (u = f.decision) || null == (c = u.signal) ? true : c.type) === O.Gy.DISTRIBUTED) {
              let t = {
                  id: e.item.clip.id,
                  remoteTriggerClipId: null == (h = e.item.clip.decision) || null == (_ = h.signal) ? true : _.remoteTriggerClipId
                },
                n = "__CLIP_METADATA__",
                r = "".concat(n).concat(JSON.stringify(t));
              em.message.content = "".concat(em.message.content).concat(r);
              break
            }
        }
      } catch (i) {
        let {
          file: e,
          code: t,
          reason: n,
          responseBody: r
        } = i;
        (0, W.O)({
          fileItems: e.items,
          failureCode: t,
          errorMessage: null == n ? true : n.msg
        }), null == X || X(e, t, n, r);
        return
      }
      return new Promise((t, r) => {
        let i = Date.now(),
          a = d.Ay.length,
          o = Math.floor(1e4 * Math.random());
        eD.info("Queueing message to be sent LogId:".concat(o)), d.Ay.enqueue(em, s => {
          let c = Date.now() - i;
          if (s.ok) {
            B.A.donateSentMessage(E, e), eB.receiveMessage(e, s.body, true, {
              sendAnalytics: {
                duration: c,
                queueSize: a
              },
              poll: M
            }), null != n.alsoForwardToChannelId && T.A.sendForward((0, F.rh)(s.body), n.alsoForwardToChannelId).then(() => {
              var e, t, r;
              eU({
                referencedMessageId: null == (e = s.body) ? true : e.id,
                guildId: null == (t = s.body) ? true : t.guild_id,
                channelId: null == (r = s.body) ? true : r.channel_id,
                destinationChannelId: n.alsoForwardToChannelId
              })
            }).catch(t => {
              var r;
              eP.log("Failed to forward thread message to parent channel LogId:".concat(o), {
                referencedMessageId: null == (r = s.body) ? true : r.id,
                channelId: e,
                destinationChannelId: n.alsoForwardToChannelId,
                error: t.toString()
              })
            });
            let r = eE.default.cast(e),
              i = D.A.getRequest(r);
            if (null != i) {
              let {
                guildId: t,
                userId: n,
                applicationStatus: r
              } = i;
              (0, P.cK)({
                guildId: t,
                channelId: e,
                messageId: s.body.id,
                joinRequestStatus: r,
                joinRequestUserId: n
              })
            }
            V.A.recordMessageSendApiResponse(eu), l.h.dispatch({
              type: "SLOWMODE_RESET_COOLDOWN",
              slowmodeType: ed.R.SendMessage,
              channelId: e
            }), l.h.dispatch({
              type: "EMOJI_TRACK_USAGE",
              emojiUsed: v
            }), l.h.dispatch({
              type: "STICKER_TRACK_USAGE",
              stickerIds: w
            }), l.h.dispatch({
              type: "LOCAL_MESSAGE_CREATE",
              message: {
                channel_id: e,
                author: ef.default.getCurrentUser()
              }
            }), eM({
              content: E,
              channelId: e,
              messageId: s.body.id,
              location: null != C ? C : "chat_input",
              inviteAnalyticsMetadata: N
            }), ek(E, e, s.body.id, null != C ? C : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), null != m && l.h.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: e,
              file: m._file,
              aborted: false
            }), t(s)
          } else {
            var u, f;
            let t;
            eP.log("Failed to send message", {
              hasErr: s.hasErr,
              status: s.status,
              code: null == (u = s.body) ? true : u.code,
              error: s.err
            });
            let i = false;
            if (s.hasErr) "ABORTED" === s.err.code && (i = true);
            else if (s.status >= 400 && s.status < 500 && s.body)
              if (s.body.code === eO.t02.SLOWMODE_RATE_LIMITED) {
                let t = s.body.retry_after;
                null != t && t > 0 && l.h.dispatch({
                  type: "SLOWMODE_SET_COOLDOWN",
                  channelId: e,
                  slowmodeType: ed.R.SendMessage,
                  cooldownMs: t * e_.A.Millis.SECOND
                })
              } else R.yf.has(s.body.code) ? l.h.dispatch({
                type: "MESSAGE_SEND_FAILED_AUTOMOD",
                messageData: em,
                errorResponseBody: {
                  code: s.body.code,
                  message: s.body.message
                }
              }) : s.body.code === eO.t02.POGGERMODE_TEMPORARILY_DISABLED ? l.h.dispatch({
                type: "POGGERMODE_TEMPORARILY_DISABLED"
              }) : s.body.code === eO.t02.EXPLICIT_CONTENT ? t = eI.ty.EXPLICIT_CONTENT : null != M || el || null != k || eB.sendClydeError(e, s.body.code);
            i ? eB.deleteMessage(e, ep, true) : (null != m && l.h.dispatch({
              type: "UPLOAD_FAIL",
              channelId: e,
              file: m._file,
              messageId: ep,
              reason: t,
              noSendFailed: true
            }), s.hasErr || t !== eI.ty.EXPLICIT_CONTENT || eB.sendExplicitMediaClydeError(e, null == (f = s.body) ? true : f.attachments, S.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED), l.h.dispatch({
              type: "MESSAGE_SEND_FAILED",
              messageId: ep,
              channelId: e,
              shouldNotify: !n.doNotNotifyOnError,
              reason: t
            }), (0, W.O)({
              failureCode: s.hasErr ? true : s.status,
              errorMessage: s.hasErr ? s.err.message : true
            }), d.Ay.cancelPendingSendRequests(e).forEach(e => {
              eP.log("Cancelling pending message", e.nonce), l.h.dispatch({
                type: "MESSAGE_SEND_FAILED",
                messageId: e.nonce,
                channelId: e.channelId
              })
            })), r(s)
          }
        }, o)
      })
    },
    startEditMessage(e, t, n, r) {
      l.h.dispatch({
        type: "MESSAGE_START_EDIT",
        channelId: e,
        messageId: t,
        content: n,
        source: r
      })
    },
    startEditMessageRecord(e, t, n) {
      if ((0, a.Lt)(t.flags, eO.pr7.IS_COMPONENTS_V2)) {
        let r = t.components.filter(e => e.type === c.I5.TEXT_DISPLAY);
        if (r.length > 0) {
          let i = r.map(e => e.content).join("\n");
          l.h.dispatch({
            type: "MESSAGE_START_EDIT",
            channelId: e,
            messageId: t.id,
            content: i,
            source: n
          });
          return
        }
      }
      l.h.dispatch({
        type: "MESSAGE_START_EDIT",
        channelId: e,
        messageId: t.id,
        content: t.content,
        source: n
      })
    },
    updateEditMessage(e, t, n) {
      l.h.dispatch({
        type: "MESSAGE_UPDATE_EDIT",
        channelId: e,
        textValue: t,
        richValue: n
      })
    },
    endEditMessage(e, t) {
      l.h.dispatch({
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
      await et.A.unarchiveThreadIfNecessary(e);
      let a = eF(e, t),
        o = eG(e, t),
        c = {
          channelId: e,
          messageId: t,
          content: r,
          isCrossposted: o,
          allowed_mentions: a,
          components: i
        };
      d.Ay.enqueue({
        type: d.AZ.EDIT,
        message: c
      }, n => {
        let r = !n.hasErr && R.yf.has(n.body.code);
        if (r) {
          let e = {
            type: d.AZ.EDIT,
            message: c
          };
          l.h.dispatch({
            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
            messageData: e,
            errorResponseBody: {
              code: n.body.code,
              message: n.body.message
            }
          })
        }
        n.hasErr ? s.OR.announce(eS.intl.string(eS.t.Atp7FP)) : r ? s.OR.announce(eS.intl.string(eS.t.Hym4ix)) : s.OR.announce(eS.intl.string(eS.t["0x1HBD"])), eB.endEditMessage(e, n.hasErr ? true : n), eB.focusMessage({
          channelId: e,
          messageId: t
        })
      })
    },
    async suppressEmbeds(e, t) {
      await et.A.unarchiveThreadIfNecessary(e), o.Bo.patch({
        url: eO.Rsh.MESSAGE(e, t),
        body: {
          flags: eO.pr7.SUPPRESS_EMBEDS
        },
        oldFormErrors: true,
        rejectWithError: false
      })
    },
    async patchMessageAttachments(e, t, n) {
      await et.A.unarchiveThreadIfNecessary(e), o.Bo.patch({
        url: eO.Rsh.MESSAGE(e, t),
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
          l.h.dispatch({
            type: "MESSAGE_DELETE",
            id: t,
            channelId: e
          }).then(() => {
            s.OR.announce(eS.intl.string(eS.t.RYMs7s))
          })
        };
      n ? r() : (await et.A.unarchiveThreadIfNecessary(e), o.Bo.del({
        url: eO.Rsh.MESSAGE(e, t),
        oldFormErrors: true,
        rejectWithError: false
      }).then(() => {
        r()
      }))
    },
    dismissAutomatedMessage(e) {
      null != e.loggingName && f.Ay.trackWithMetadata(eO.HAw.AUTOMATED_MESSAGE_DISMISSED, {
        message_name: e.loggingName,
        message_author: e.author.username
      }), this.deleteMessage(e.channel_id, e.id, true)
    },
    revealMessage(e, t) {
      l.h.dispatch({
        type: "MESSAGE_REVEAL",
        channelId: e,
        messageId: t
      })
    },
    async crosspostMessage(e, t) {
      try {
        return await o.Bo.post({
          url: eO.Rsh.MESSAGE_CROSSPOST(e, t),
          oldFormErrors: true,
          failImmediatelyWhenRateLimited: true,
          rejectWithError: false
        })
      } catch (t) {
        let e;
        e = 429 === t.status ? eS.intl.formatToPlainString(eS.t["77cuqz"], {
          retryAfter: Math.floor(t.body.retry_after / 60)
        }) : eS.intl.string(eS.t.z2gyNF), eb.A.show({
          title: eS.intl.string(eS.t.Vd1hs6),
          body: e,
          confirmText: eS.intl.string(eS.t.BddRzS)
        })
      }
    },
    trackInvite: ej
  },
  eH = eB