/** Chunk was on web.js **/
/** chunk id: 904245, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eV
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
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js");
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
  Chunk967249 = require("./967249.js"),
  Chunk260539 = require("./260539.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx");

function eC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eC(e, t, n[t])
    })
  }
  return e
}

function eR(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eP(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eR(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ew = null,
  eD = new Chunk710845.Z("MessageActionCreators"),
  eL = new Chunk710845.Z("MessageQueue"),
  ex = false;
class eM {
  markComplete() {
    this.completed = true
  }
  constructor() {
    eC(this, "completed", false)
  }
}

function ek(e) {
  let {
    content: t,
    channelId: n,
    messageId: r,
    location: a,
    inviteAnalyticsMetadata: o,
    overrideProperties: s = {}
  } = e, l = ea.default.getId();
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
      inviteAnalyticsMetadata: o,
      overrideProperties: s
    });
    else if (t === b.g.TEMPLATE) {
      let e = R.Z.getGuildTemplate(c);
      if (null == e || e.state === eT.Rj.RESOLVING) return;
      d.ZP.trackWithMetadata(ev.rMx.GUILD_TEMPLATE_LINK_SENT, {
        guild_template_code: c,
        guild_template_name: e.name,
        guild_template_description: e.description,
        guild_template_guild_id: e.sourceGuildId
      })
    } else if (t === b.g.BUILD_OVERRIDE);
    else if (t === b.g.MANUAL_BUILD_OVERRIDE);
    else if (t === b.g.EVENT);
    else if (t === b.g.CHANNEL_LINK);
    else if (t === b.g.APP_DIRECTORY_PROFILE)(0, T.y)(c), (0, g.z$)(c, eI.U.APP_DISCOVERY, l);
    else if (t === b.g.APP_DIRECTORY_STOREFRONT)(0, T.y)(c, "storefront");
    else if (t === b.g.APP_DIRECTORY_STOREFRONT_SKU) {
      let e = (0, h.Q)(c);
      null != e && (0, T.y)(e.applicationId, "storefront_sku")
    } else if (t === b.g.ACTIVITY_BOOKMARK) {
      var f;
      let e = (0, m.U)(u);
      (0, g.z$)(c, eI.U.ACTIVITY, null != (f = e.referrerId) ? f : l, e.customId)
    } else if (t === b.g.EMBEDDED_ACTIVITY_INVITE)(0, g.z$)(c, eI.U.ACTIVITY_INVITE, l);
    else if (t === b.g.GUILD_PRODUCT);
    else if (t === b.g.SERVER_SHOP);
    else if (t === b.g.QUESTS_EMBED) {
      let e = (0, J.jY)(i.j.QUESTS_EMBED);
      (0, Q.dA)({
        questId: c,
        event: ev.rMx.QUEST_LINK_SHARED,
        properties: {
          metadata_raw: null != e ? e : null
        },
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: i.j.QUESTS_EMBED
      })
    } else if (t === b.g.APP_OAUTH2_LINK) d.ZP.trackWithMetadata(ev.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, {
      application_id: c
    }), (0, g.z$)(c, eI.U.OAUTH, l);
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
    inviteAnalyticsMetadata: s,
    overrideProperties: l = {}
  } = e, c = ea.default.getId(), u = es.Z.getInvite(r), f = (0, P.fU)(r), _ = null != u && (0, w.P1)(u), p = null == u || null == (t = u.target_application) ? true : t.id;
  null != p && _ && (0, g.z$)(p, eI.U.ACTIVITY_INVITE, c);
  let h = eo.Z.getChannel(i);
  if (null != h) {
    let e = null;
    h.isMultiUserDM() ? e = ev.dAT.GDM_INVITE : h.isPrivate() || (e = ev.dAT.SERVER_INVITE);
    let t = {};
    if (null != u && u.state === ev.r2o.RESOLVED && null != u.channel) {
      let r = u.channel;
      t.invite_channel_id = r.id, t.invite_guild_id = null == (n = u.guild) ? true : n.id, t.invite_channel_type = r.type, null != u.inviter && (t.invite_inviter_id = u.inviter.id), null != u.target_application && (t.application_id = u.target_application.id);
      let i = ei.Z.getLastActiveStream();
      if (null != i && i.channelId === r.id) {
        e = ev.dAT.STREAM, t.destination_user_id = i.ownerId;
        let n = (0, S.L2)(i, eu.Z);
        t.application_id = null != n ? n.id : null
      }
    }
    null != s && (null != s.suggestionData && (t.is_suggested = s.suggestionData.isAffinitySuggestion, t.row_num = s.suggestionData.rowNum, t.num_total = s.suggestionData.numTotal, t.num_affinity_connections = s.suggestionData.numAffinityConnections, t.is_filtered = s.suggestionData.isFiltered), t.source = s.source), t = eN(eP(eN({}, t), {
      location: o,
      invite_type: e,
      invite_code: f.baseCode,
      guild_id: h.getGuildId(),
      channel_id: h.id,
      message_id: a,
      send_type: ev.a5g.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: f.guildScheduledEventId
    }), l), d.ZP.trackWithMetadata(ev.rMx.INVITE_SENT, t)
  } else {
    let e = {};
    null != u && u.state === ev.r2o.RESOLVED && null != u.inviter && (e.invite_inviter_id = u.inviter.id, null != u.target_application && (e.application_id = u.target_application.id), e = eN(eP(eN({}, e), {
      location: o,
      invite_type: ev.dAT.FRIEND_INVITE,
      invite_code: f.baseCode,
      message_id: a,
      send_type: ev.a5g.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: f.guildScheduledEventId
    }), l), d.ZP.trackWithMetadata(ev.rMx.INVITE_SENT, e))
  }
}

function eU(e, t, n, r, i) {
  (0, em.Q_)(e).forEach(e => {
    let a = eo.Z.getChannel(t);
    null != a && d.ZP.trackWithMetadata(ev.rMx.GIFT_CODE_SENT, {
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

function eG(e, t) {
  let n = el.Z.getMessage(e, t);
  return null != n && n.hasFlag(ev.iLy.CROSSPOSTED)
}

function eB(e, t) {
  let n = el.Z.getMessage(e, t);
  if (null == n || n.type !== ev.uaV.REPLY) return;
  let r = $.Z.getMessageByReference(n.messageReference);
  if (r.state === $.Y.LOADED && !n.mentions.includes(r.message.author.id)) return {
    parse: Object.values(ev.hCA),
    replied_user: false
  }
}
let eZ = {
    [Chunk981631.evJ.EMAIL_VERIFICATION_REQUIRED]: {
      messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
      messageGetter: () => Chunk388032.intl.string(Chunk388032.t.k1Cjqr)
    },
    [Chunk981631.evJ.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
      messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
      messageGetter: () => Chunk388032.intl.string(Chunk388032.t.Z5SUuv)
    },
    [Chunk981631.evJ.INVALID_MESSAGE_SEND_USER]: {
      messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
      messageGetter: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.CTMXwL, {
        helpUrl: Chunk63063.Z.getArticleURL(Chunk981631.BhN.DM_COULD_NOT_BE_DELIVERED)
      })
    },
    [Chunk981631.evJ.RATE_LIMIT_DM_OPEN]: {
      messageName: "BOT_DM_RATE_LIMITED",
      messageGetter: () => Chunk388032.intl.string(Chunk388032.t.E8nbNb)
    },
    [Chunk981631.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => Chunk388032.intl.string(Chunk388032.t.aRUbah)
    },
    [Chunk981631.evJ.SLOWMODE_RATE_LIMITED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => Chunk388032.intl.string(Chunk388032.t.aRUbah)
    },
    [Chunk981631.evJ.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
      messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
      messageGetter: () => Chunk388032.intl.string(Chunk388032.t["/meGhR"])
    },
    [Chunk981631.evJ.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
      messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
      messageGetter: () => Chunk388032.intl.string(Chunk388032.t.Oc1Zjw)
    }
  },
  eF = {
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
      null != n && d.ZP.trackWithMetadata(ev.rMx.AUTOMATED_MESSAGE_RECEIVED, {
        message_author: "Clyde",
        message_name: n
      }), eF.receiveMessage(e, (0, U.cs)({
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
        type: ev.uaV.NITRO_NOTIFICATION,
        content: t,
        flags: ev.iLy.EPHEMERAL,
        author: {
          id: ev.LAt,
          username: "Nitro Notification",
          discriminator: ev.fo$,
          avatar: "nitro",
          bot: true
        }
      });
      eF.receiveMessage(e, eP(eN({}, r), {
        state: ev.yb.SENT,
        channel_id: e
      }), true)
    },
    sendGiftingPromptSystemMessage(e, t) {
      let n = (0, U.ZP)({
        channelId: e,
        type: ev.uaV.GIFTING_PROMPT,
        content: "",
        flags: ev.iLy.EPHEMERAL,
        author: {
          id: ev.LAt,
          username: "Gifting Prompt",
          discriminator: ev.fo$,
          avatar: "gifting_prompt",
          bot: true
        },
        giftingPrompt: t
      });
      eF.receiveMessage(e, eP(eN({}, n), {
        state: ev.yb.SENT
      }), true)
    },
    sendClydeError(e) {
      let t, n, r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
        i = eo.Z.getChannel(e);
      null != i && (r === ev.evJ.SLOWMODE_RATE_LIMITED ? (t = eA.intl.formatToPlainString(eA.t.IWntYg, {
        seconds: i.rateLimitPerUser
      }), n = "SLOWMODE_RATE_LIMITED") : r === ev.evJ.INVALID_MESSAGE_SEND_USER ? (t = eA.intl.formatToPlainString(eA.t.CTMXwL, {
        helpUrl: eg.Z.getArticleURL(ev.BhN.DM_COULD_NOT_BE_DELIVERED)
      }), n = "INVALID_MESSAGE_SEND_USER") : r === ev.evJ.TOO_MANY_THREADS ? (t = i.isForumLikeChannel() || i.isForumPost() ? eA.intl.string(eA.t["/jUd2+"]) : eA.intl.string(eA.t["5EMPA7"]), n = "TOO_MANY_THREADS") : r === ev.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = eA.intl.string(eA.t["aY+lLC"]), n = "TOO_MANY_ANNOUNCEMENT_THREADS") : r === ev.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = eA.intl.formatToPlainString(eA.t.zSG3Qy, {
        helpUrl: ev.EYA.HARMFUL_LINKS
      }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : r in eZ ? (n = eZ[r].messageName, t = eZ[r].messageGetter()) : (t = eA.intl.formatToPlainString(eA.t.CTMXwL, {
        helpUrl: eg.Z.getArticleURL(ev.BhN.DM_COULD_NOT_BE_DELIVERED)
      }), n = "SEND_FAILED (".concat(r, ")")), eF.sendBotMessage(e, t, n))
    },
    sendExplicitMediaClydeError(e, t, n) {
      let i = eo.Z.getChannel(e);
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
        message: eA.intl.string(eA.t["mktny/"]),
        messageName: "BOT_DM_EXPLICIT_CONTENT"
      })).with({
        isDM: false,
        isGDM: true
      }, () => ({
        message: eA.intl.string(eA.t["mktny/"]),
        messageName: "BOT_GDM_EXPLICIT_CONTENT"
      })).otherwise(() => ({
        message: eA.intl.string(eA.t.i4AbAS),
        messageName: "BOT_GUILD_EXPLICIT_CONTENT"
      })), l = (0, G.r)();
      eF.sendBotMessage(e, a, o, l), (0, v.aP)({
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
      eF.trackJump(e, null, "Present");
      let n = {
        present: true
      };
      el.Z.hasPresent(e) ? s.Z.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        jump: n,
        channelId: e,
        limit: t
      }) : eF.fetchMessages({
        channelId: e,
        limit: t,
        jump: n
      })
    },
    trackJump(e, t, n, r) {
      d.ZP.trackWithMetadata(ev.rMx.JUMP, eN({
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
      return "string" == typeof o && eF.trackJump(n, r, o, s), null == ew || null == (t = ew.pauseAllMediaPlayers) || t.call(ew), eF.fetchMessages({
        channelId: n,
        limit: ev.Z8P,
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
      eF.fetchMessages({
        channelId: t,
        limit: ev.Z8P,
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
        url: ev.ANM.MESSAGES(t),
        query: {
          limit: 1,
          around: n
        },
        retries: 2,
        oldFormErrors: true,
        rejectWithError: false
      }).then(e => {
        if (e.body.length > 0) return (0, M.e5)(e.body[0])
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
      } = e, m = eo.Z.getChannel(t), g = I.Z.isConnectedOrOverlay(), b = Date.now();
      if (null != m && m.type === ev.d4z.GUILD_STORE) returnfalse;
      if (t === E.V || (eD.log("Fetching messages for ".concat(t, " between ").concat(r, " and ").concat(n, ". jump=").concat(JSON.stringify(o))), eF._tryFetchMessagesCached({
          channelId: t,
          before: n,
          after: r,
          limit: i,
          jump: o,
          focus: l,
          truncate: f
        }))) return;
      er.Z.fetchMessages.recordStart();
      let y = null != o ? o : true;
      null == y && null != l && (y = eN({}, l));
      let O = c.Z.getOrCreate(t).loadStart(y);
      c.Z.commit(O), s.Z.dispatch({
        type: "LOAD_MESSAGES"
      });
      let v = null == y ? true : y.messageId,
        T = new eM;
      return d || this.fetchLocalMessages(t, n, r, i, T), a.tn.get({
        url: ev.ANM.MESSAGES(t),
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
      }).then(e => (er.Z.fetchMessages.recordEnd(), er.Z.dispatchMessages.measure(() => {
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
            })].filter((e, t, n) => n.indexOf(e) === t).sort(eb.default.compare).indexOf(v);
          if (r < n - 1 && (d = false), a.length - r < e && (h = false), h && a.length > 0) {
            let e = ed.ZP.lastMessageId(t);
            a[0].id === e && (h = false)
          }
        }
        eD.log("Fetched ".concat(a.length, " messages for ").concat(t, " isBefore:").concat(l, " isAfter:").concat(c)), T.markComplete(), s.Z.dispatch({
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
      }), true), () => (eD.log("Failed to fetch messages for ".concat(t)), s.Z.dispatch({
        type: "LOAD_MESSAGES_FAILURE",
        channelId: t
      }), false))
    },
    async fetchLocalMessages(e, t, n, r, i) {
      let a = eo.Z.getBasicChannel(e),
        o = c.Z.getOrCreate(e),
        l = f.Z.database();
      if (null == l || null == a || null != t || null != n) return void er.Z.addLocalMessages(e, false);
      if (o.ready && !o.cached) return void er.Z.addLocalMessages(e, false);
      let u = await (0, _.dI)(() => p.ZP.load(l, e, r));
      if (null == u) return void er.Z.addLocalMessages(e, false);
      if (eD.log("fetched ".concat(u.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(i.completed, ")")), er.Z.addLocalMessages(e, u.messages.length), !i.completed && u.messages.length > 0) {
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
      let r = eo.Z.getBasicChannel(e),
        i = f.Z.database();
      if (null == i || null == r) return;
      let a = c.Z.getOrCreate(e);
      if (a.hasMoreAfter) return;
      let o = await (0, _.dI)(() => p.ZP.load(i, e, t));
      if (null == o) return;
      let l = null == (n = (a = c.Z.getOrCreate(e)).last()) ? true : n.id,
        u = null == l ? o.messages : o.messages.filter(e => eb.default.compare(e.id, l) > 0);
      eD.log("Fetched ".concat(o.messages.length, " messages from the cache after foregrounding. ").concat(u.length, " are new")), 0 !== u.length && s.Z.dispatch({
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
      } = e, c = el.Z.getMessages(t);
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
          else a = eN({}, o);
        let e = (null == a ? true : a.messageId) != null ? eb.default.extractTimestamp(null == a ? true : a.messageId) : 0,
          n = c.first(),
          r = c.last();
        if (!c.hasMoreBefore && null != n && eb.default.extractTimestamp(n.id) >= e || !c.hasMoreAfter && null != r && eb.default.extractTimestamp(r.id) <= e || null != n && null != r && eb.default.extractTimestamp(n.id) < e && eb.default.extractTimestamp(r.id) > e) return s.Z.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: a,
          limit: ev.Z8P
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
      if (null != a) return eF.sendMessage(a, t, r, i);
      let o = null != (n = i.nonce) ? n : (0, G.r)();
      i = eP(eN({}, i), {
        nonce: o
      });
      let s = () => eF._sendMessage(e, t, i),
        l = x.ZP.backgroundify(s, true);
      return (k.Z.recordMessageSendAttempt(e, o, i), el.Z.isReady(e)) ? l() : r && e !== E.V ? (eL.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
        el.Z.whenReady(e, () => {
          eL.info("Channel ".concat(e, " is ready for sending now.")), l().then(t, n)
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
          parse: Object.values(ev.hCA),
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
      let t = eF.getSendMessageOptionsForReply(e.pendingReply),
        n = eF.getSendMessageOptionsForConfettiPotion(eN({}, e)),
        r = eF.getSendMessageOptionsForStickers(eN({}, e)),
        i = eF.getSendMessageOptionsForScheduledMessage(eN({}, e));
      return eN({}, t, n, r, i)
    },
    sendInvite(e, t, n, r, i) {
      let a = (0, D.Z)(t);
      return null != i && (a = "".concat(i, "\n").concat(a)), eF._sendMessage(e, {
        content: a,
        tts: false,
        validNonShortcutEmojis: [],
        invalidEmojis: []
      }, {
        location: n,
        inviteAnalyticsMetadata: r
      })
    },
    sendActivityBookmark: (e, t, n, r) => eF._sendMessage(e, {
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
      return eF._sendMessage(e, {
        content: n,
        invalidEmojis: [],
        validNonShortcutEmojis: [],
        tts: i
      }, eP(eN({}, r), {
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
        url: ev.ANM.MESSAGES_GREET(e),
        body: {
          sticker_ids: [t],
          allowed_mentions: i,
          message_reference: r
        },
        oldFormErrors: true,
        rejectWithError: false,
        context: {
          location: eS.dy.GREET
        }
      }).then(n => (j.Z.donateSentMessage(n.body.content, e), eF.receiveMessage(e, n.body), s.Z.dispatch({
        type: "STICKER_TRACK_USAGE",
        stickerIds: [t]
      }), n), t => {
        throw eD.log("Failed to send greeting"), 429 !== t.status && eF.sendClydeError(e, t.body.code), s.Z.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: t.body.id,
          channelId: e
        }), t
      })
    },
    sendPollMessage(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
      return eF._sendMessage(e, {
        content: "",
        tts: false,
        validNonShortcutEmojis: [],
        invalidEmojis: []
      }, eP(eN({}, n), {
        poll: t,
        location: eS.dy.POLL_CREATION
      }))
    },
    validateMessage(e, t, n) {
      let r, i;
      return e.some(e => e.animated) && !eE.ZP.canUseAnimatedEmojis(t) ? (r = eA.intl.string(eA.t.msFJy8), i = "INVALID_ANIMATED_EMOJI_BODY") : ec.Z.canWithPartialContext(ev.Plq.USE_EXTERNAL_EMOJIS, {
        channelId: n
      }) ? (r = eA.intl.string(eA.t.FzugNl), i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (r = eA.intl.string(eA.t["Q87rI/"]), i = "INVALID_EXTERNAL_EMOJI_BODY"), {
        errorMessage: r,
        errorMessageName: i
      }
    },
    async _sendMessage(e, t, n) {
      var r, i, a, o;
      let l, c = (0, X.Z)(e);
      if (null != c) return eL.info("Converting channel to a private channel"), c.then(e => {
        eL.info("Finished converting channel to a private channel"), eF._sendMessage(e, t, n)
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
          inviteAnalyticsMetadata: g,
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
        x = null != (i = n.flags) ? i : 0,
        [M, Y] = (0, et.Z)(d);
      M && (d = Y, x = (0, eh.pj)(x, ev.iLy.SUPPRESS_NOTIFICATIONS));
      let Q = false,
        J = (null == (r = n.messageReference) ? true : r.type) === ev.Uvt.FORWARD;
      if ("" === d && null == h && null == E && null == I && null == T && null == S && !J && (null == R || 0 === R.length) && (null == t.components || 0 === t.components.length))
        if (null == P || !(P.length > 0)) return Promise.resolve();
        else Q = true;
      let $ = null != y ? ev.uaV.REPLY : ev.uaV.DEFAULT,
        en = null != (a = n.nonce) ? a : (0, G.r)(),
        er = en,
        ei = (0, U.ZP)({
          channelId: e,
          content: d,
          tts: p,
          type: $,
          messageReference: y,
          allowedMentions: O,
          flags: 0 !== x ? x : true,
          nonce: en,
          poll: (0, V.x9)(I),
          sharedCustomTheme: T
        });
      if (false !== n.eagerDispatch && ((0, Z.EL)(e, ei.id), null != E && (ei.sticker_items = E.map(e => ee.Z.getStickerById(e)).filter(e => null != e)), eF.receiveMessage(e, ei, true, n)), !ex && null != f && f.length > 0) {
        ex = true;
        let t = e_.default.getCurrentUser(),
          {
            errorMessage: n,
            errorMessageName: r
          } = eF.validateMessage(f, t, e);
        eF.sendBotMessage(e, n, r)
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
          flags: x,
          analyticsLocation: m
        }
      };
      if (null != t.components && (eo.message.components = t.components), null != D && (eo.message.create_thread = D.createThread, eo.message.title = D.threadName, eo.message.publish = null != (o = D.publish) && o), null != h) {
        let e, t = null == h ? true : h.activity.session_id;
        if (null != (e = h.type === ev.mFx.JOIN_REQUEST || h.type === ev.mFx.STREAM_REQUEST || null != t ? t : ea.default.getSessionId())) {
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
        let t = await (0, L.c)({
          channelId: e,
          nonce: en,
          items: P,
          message: ei,
          shouldUploadFailureSendNotification: !n.doNotNotifyOnError && true
        });
        if (null == t) return;
        let r = t.attachments;
        if (l = t.uploader, Q && (null == r || 0 === r.length)) return;
        null != r && (eo.message.attachments = r.map((e, t) => (0, ey.B)(e, t)))
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
        eL.info("Queueing message to be sent LogId:".concat(o)), u.ZP.enqueue(eo, o => {
          let c = Date.now() - i;
          if (o.ok) {
            j.Z.donateSentMessage(d, e), eF.receiveMessage(e, o.body, true, {
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
            let i = eb.default.cast(e),
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
            k.Z.recordMessageSendApiResponse(en), s.Z.dispatch({
              type: "SLOWMODE_RESET_COOLDOWN",
              slowmodeType: ef.S.SendMessage,
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
                author: e_.default.getCurrentUser()
              }
            }), ek({
              content: d,
              channelId: e,
              messageId: o.body.id,
              location: null != m ? m : "chat_input",
              inviteAnalyticsMetadata: g
            }), eU(d, e, o.body.id, null != m ? m : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), null != l && s.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: e,
              file: l._file,
              aborted: false
            }), t(o)
          } else {
            var f, p;
            let t;
            eD.log("Failed to send message", {
              hasErr: o.hasErr,
              status: o.status,
              code: null == (f = o.body) ? true : f.code,
              error: o.err
            });
            let i = false;
            if (o.hasErr) "ABORTED" === o.err.code && (i = true);
            else if (o.status >= 400 && o.status < 500 && o.body)
              if (o.body.code === ev.evJ.SLOWMODE_RATE_LIMITED) {
                let t = o.body.retry_after;
                null != t && t > 0 && s.Z.dispatch({
                  type: "SLOWMODE_SET_COOLDOWN",
                  channelId: e,
                  slowmodeType: ef.S.SendMessage,
                  cooldownMs: t * ep.Z.Millis.SECOND
                })
              } else A.U8.has(o.body.code) ? s.Z.dispatch({
                type: "MESSAGE_SEND_FAILED_AUTOMOD",
                messageData: eo,
                errorResponseBody: {
                  code: o.body.code,
                  message: o.body.message
                }
              }) : o.body.code === ev.evJ.POGGERMODE_TEMPORARILY_DISABLED ? s.Z.dispatch({
                type: "POGGERMODE_TEMPORARILY_DISABLED"
              }) : o.body.code === ev.evJ.EXPLICIT_CONTENT ? t = eS.xi.EXPLICIT_CONTENT : null != I || J || null != S || eF.sendClydeError(e, o.body.code);
            i ? eF.deleteMessage(e, er, true) : (null != l && s.Z.dispatch({
              type: "UPLOAD_FAIL",
              channelId: e,
              file: l._file,
              messageId: er,
              reason: t,
              noSendFailed: true
            }), o.hasErr || t !== eS.xi.EXPLICIT_CONTENT || eF.sendExplicitMediaClydeError(e, null == (p = o.body) ? true : p.attachments, v.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED), s.Z.dispatch({
              type: "MESSAGE_SEND_FAILED",
              messageId: er,
              channelId: e,
              shouldNotify: !n.doNotNotifyOnError,
              reason: t
            }), (0, B.x)({
              failureCode: o.hasErr ? true : o.status,
              errorMessage: o.hasErr ? o.err.message : true
            }), u.ZP.cancelPendingSendRequests(e).forEach(e => {
              eD.log("Cancelling pending message", e.nonce), s.Z.dispatch({
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
      if ((0, eh.yE)(t.flags, ev.iLy.IS_COMPONENTS_V2)) {
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
      await en.Z.unarchiveThreadIfNecessary(e);
      let a = eB(e, t),
        l = eG(e, t),
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
        n.hasErr ? o.uv.announce(eA.intl.string(eA.t.Atp7FP)) : r ? o.uv.announce(eA.intl.string(eA.t.Hym4ix)) : o.uv.announce(eA.intl.string(eA.t["0x1HBD"])), eF.endEditMessage(e, n.hasErr ? true : n), eF.focusMessage({
          channelId: e,
          messageId: t
        })
      })
    },
    async suppressEmbeds(e, t) {
      await en.Z.unarchiveThreadIfNecessary(e), a.tn.patch({
        url: ev.ANM.MESSAGE(e, t),
        body: {
          flags: ev.iLy.SUPPRESS_EMBEDS
        },
        oldFormErrors: true,
        rejectWithError: false
      })
    },
    async patchMessageAttachments(e, t, n) {
      await en.Z.unarchiveThreadIfNecessary(e), a.tn.patch({
        url: ev.ANM.MESSAGE(e, t),
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
            o.uv.announce(eA.intl.string(eA.t.RYMs7s))
          })
        };
      n ? r() : (await en.Z.unarchiveThreadIfNecessary(e), a.tn.del({
        url: ev.ANM.MESSAGE(e, t),
        oldFormErrors: true,
        rejectWithError: false
      }).then(() => {
        r()
      }))
    },
    dismissAutomatedMessage(e) {
      null != e.loggingName && d.ZP.trackWithMetadata(ev.rMx.AUTOMATED_MESSAGE_DISMISSED, {
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
      url: ev.ANM.MESSAGE_CROSSPOST(e, t),
      oldFormErrors: true,
      failImmediatelyWhenRateLimited: true,
      rejectWithError: false
    }).catch(e => {
      let t;
      t = 429 === e.status ? eA.intl.formatToPlainString(eA.t["77cuqz"], {
        retryAfter: Math.floor(e.body.retry_after / 60)
      }) : eA.intl.string(eA.t.z2gyNF), eO.Z.show({
        title: eA.intl.string(eA.t.Vd1hs6),
        body: t,
        confirmText: eA.intl.string(eA.t.BddRzS)
      })
    }),
    trackInvite: ej
  },
  eV = eF