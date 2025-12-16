/** Chunk was on web.js **/
/** chunk id: 904245, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ez
}), require("./953529.js"), require("./415506.js"), require("./314940.js"), require("./49124.js"), require("./388685.js"), require("./642613.js"), require("./997841.js");
var Chunk278074 = require("./278074.js"),
  Chunk636977 = require("./636977.js"),
  Chunk95015 = require("./95015.js"),
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
  Chunk924557 = require("./924557.js"),
  Chunk894694 = require("./894694.js"),
  Chunk960904 = require("./960904.js"),
  Chunk830121 = require("./830121.js"),
  Chunk710845 = require("./710845.js"),
  Chunk247206 = require("./247206.js"),
  Chunk859155 = require("./859155.js"),
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
  Chunk862657 = require("./862657.js");
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
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
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

function ew(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ew(e, t, n[t])
    })
  }
  return e
}

function ex(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eL(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ex(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ej = null,
  eM = new Chunk710845.Z("MessageActionCreators"),
  ek = new Chunk710845.Z("MessageQueue"),
  eU = false;
class eG {
  markComplete() {
    this.completed = true
  }
  constructor() {
    ew(this, "completed", false)
  }
}

function eZ(e) {
  let {
    content: t,
    channelId: n,
    messageId: r,
    location: a,
    inviteAnalyticsMetadata: o,
    overrideProperties: s = {}
  } = e, l = ec.default.getId();
  (0, S.ZP)(t).forEach(e => {
    let {
      type: t,
      code: c,
      url: u
    } = e;
    if (t === v.g.INVITE) eF({
      inviteKey: c,
      channelId: n,
      messageId: r,
      location: a,
      inviteAnalyticsMetadata: o,
      overrideProperties: s
    });
    else if (t === v.g.TEMPLATE) {
      let e = x.Z.getGuildTemplate(c);
      if (null == e || e.state === eN.Rj.RESOLVING) return;
      f.ZP.trackWithMetadata(eC.rMx.GUILD_TEMPLATE_LINK_SENT, {
        guild_template_code: c,
        guild_template_name: e.name,
        guild_template_description: e.description,
        guild_template_guild_id: e.sourceGuildId
      })
    } else if (t === v.g.BUILD_OVERRIDE);
    else if (t === v.g.EXPERIMENT);
    else if (t === v.g.MANUAL_BUILD_OVERRIDE);
    else if (t === v.g.EVENT);
    else if (t === v.g.CHANNEL_LINK);
    else if (t === v.g.APP_DIRECTORY_PROFILE)(0, N.y)(c), (0, E.z$)(c, eA.U.APP_DISCOVERY, l);
    else if (t === v.g.APP_DIRECTORY_STOREFRONT)(0, N.y)(c, "storefront");
    else if (t === v.g.APP_DIRECTORY_STOREFRONT_SKU) {
      let e = (0, h.Q)(c);
      null != e && (0, N.y)(e.applicationId, "storefront_sku")
    } else if (t === v.g.ACTIVITY_BOOKMARK) {
      var d;
      let e = (0, g.U)(u);
      (0, E.z$)(c, eA.U.ACTIVITY, null != (d = e.referrerId) ? d : l, e.customId)
    } else if (t === v.g.EMBEDDED_ACTIVITY_INVITE)(0, E.z$)(c, eA.U.ACTIVITY_INVITE, l);
    else if (t === v.g.GUILD_PRODUCT);
    else if (t === v.g.SERVER_SHOP);
    else if (t === v.g.SOCIAL_LAYER_STOREFRONT);
    else if (t === v.g.QUESTS_EMBED) {
      let e = (0, en.jY)(i.j.QUESTS_EMBED),
        t = (0, en.R_)(i.j.QUESTS_EMBED);
      (0, et.dA)({
        questId: c,
        event: eC.rMx.QUEST_LINK_SHARED,
        properties: {
          metadata_raw: null != e ? e : null,
          metadata_sealed: null != t ? t : null
        },
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: i.j.QUESTS_EMBED
      })
    } else if (t === v.g.APP_OAUTH2_LINK) f.ZP.trackWithMetadata(eC.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, {
      application_id: c
    }), (0, E.z$)(c, eA.U.OAUTH, l);
    else if (t === v.g.COLLECTIBLES_SHOP);
    else throw Error("Unknown coded link type: ".concat(t))
  })
}

function eF(e) {
  var t, n;
  let {
    inviteKey: r,
    channelId: i,
    messageId: a,
    location: o,
    inviteAnalyticsMetadata: s,
    overrideProperties: l = {}
  } = e, c = ec.default.getId(), u = ed.Z.getInvite(r), d = (0, L.fU)(r), p = null != u && (0, j.P1)(u), _ = null == u || null == (t = u.target_application) ? true : t.id;
  null != _ && p && (0, E.z$)(_, eA.U.ACTIVITY_INVITE, c);
  let m = eu.Z.getChannel(i);
  if (null != m) {
    let e = null;
    m.isMultiUserDM() ? e = eC.dAT.GDM_INVITE : m.isPrivate() || (e = eC.dAT.SERVER_INVITE);
    let t = {};
    if (null != u && u.state === eC.r2o.RESOLVED && null != u.channel) {
      let r = u.channel;
      t.invite_channel_id = r.id, t.invite_guild_id = null == (n = u.guild) ? true : n.id, t.invite_channel_type = r.type, null != u.inviter && (t.invite_inviter_id = u.inviter.id), null != u.target_application && (t.application_id = u.target_application.id);
      let i = el.Z.getLastActiveStream();
      if (null != i && i.channelId === r.id) {
        e = eC.dAT.STREAM, t.destination_user_id = i.ownerId;
        let n = (0, P.L2)(i, e_.Z);
        t.application_id = null != n ? n.id : null
      }
    }
    null != s && (null != s.suggestionData && (t.is_suggested = s.suggestionData.isAffinitySuggestion, t.row_num = s.suggestionData.rowNum, t.num_total = s.suggestionData.numTotal, t.num_affinity_connections = s.suggestionData.numAffinityConnections, t.is_filtered = s.suggestionData.isFiltered), t.source = s.source), t = eD(eL(eD({}, t), {
      location: o,
      invite_type: e,
      invite_code: d.baseCode,
      guild_id: m.getGuildId(),
      channel_id: m.id,
      message_id: a,
      send_type: eC.a5g.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: d.guildScheduledEventId
    }), l), f.ZP.trackWithMetadata(eC.rMx.INVITE_SENT, t)
  } else {
    let e = {};
    null != u && u.state === eC.r2o.RESOLVED && null != u.inviter && (e.invite_inviter_id = u.inviter.id, null != u.target_application && (e.application_id = u.target_application.id), e = eD(eL(eD({}, e), {
      location: o,
      invite_type: eC.dAT.FRIEND_INVITE,
      invite_code: d.baseCode,
      message_id: a,
      send_type: eC.a5g.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: d.guildScheduledEventId
    }), l), f.ZP.trackWithMetadata(eC.rMx.INVITE_SENT, e))
  }
}

function eB(e, t, n, r, i) {
  (0, ey.Q_)(e).forEach(e => {
    let a = eu.Z.getChannel(t);
    null != a && f.ZP.trackWithMetadata(eC.rMx.GIFT_CODE_SENT, {
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

function eV(e) {
  let {
    referencedMessageId: t,
    guildId: n,
    channelId: r,
    destinationChannelId: i
  } = e;
  eE.default.track(eC.rMx.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
    referenced_message_id: t,
    guild_id: n,
    channel_id: r,
    destination_channel_id: i
  })
}

function eH(e, t) {
  let n = ef.Z.getMessage(e, t);
  return null != n && n.hasFlag(eC.iLy.CROSSPOSTED)
}

function eY(e, t) {
  let n = ef.Z.getMessage(e, t);
  if (null == n || n.type !== eC.uaV.REPLY) return;
  let r = er.Z.getMessageByReference(n.messageReference);
  if (r.state === er.Y.LOADED && !n.mentions.includes(r.message.author.id)) return {
    parse: Object.values(eC.hCA),
    replied_user: false
  }
}
let eW = {
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
  eK = {
    receiveMessage(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
        r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
      l.Z.dispatch({
        type: "MESSAGE_CREATE",
        channelId: e,
        message: t,
        optimistic: n,
        sendMessageOptions: r,
        isPushNotification: false
      })
    },
    sendBotMessage(e, t, n, r) {
      null != n && f.ZP.trackWithMetadata(eC.rMx.AUTOMATED_MESSAGE_RECEIVED, {
        message_author: "Clyde",
        message_name: n
      }), eK.receiveMessage(e, (0, B.cs)({
        messageId: r,
        channelId: e,
        content: t,
        loggingName: n
      }))
    },
    sendNitroSystemMessage(e, t, n) {
      let r = (0, B.ZP)({
        channelId: e,
        nonce: n,
        type: eC.uaV.NITRO_NOTIFICATION,
        content: t,
        flags: eC.iLy.EPHEMERAL,
        author: {
          id: eC.LAt,
          username: "Nitro Notification",
          discriminator: eC.fo$,
          avatar: "nitro",
          bot: true
        }
      });
      eK.receiveMessage(e, eL(eD({}, r), {
        state: eC.yb.SENT,
        channel_id: e
      }), true)
    },
    sendGiftingPromptSystemMessage(e, t) {
      let n = (0, B.ZP)({
        channelId: e,
        type: eC.uaV.GIFTING_PROMPT,
        content: "",
        flags: eC.iLy.EPHEMERAL,
        author: {
          id: eC.LAt,
          username: "Gifting Prompt",
          discriminator: eC.fo$,
          avatar: "gifting_prompt",
          bot: true
        },
        giftingPrompt: t
      });
      eK.receiveMessage(e, eL(eD({}, n), {
        state: eC.yb.SENT
      }), true)
    },
    sendClydeError(e) {
      let t, n, r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
        i = eu.Z.getChannel(e);
      null != i && (r === eC.evJ.SLOWMODE_RATE_LIMITED ? (t = eR.intl.formatToPlainString(eR.t.IWntYg, {
        seconds: i.rateLimitPerUser
      }), n = "SLOWMODE_RATE_LIMITED") : r === eC.evJ.INVALID_MESSAGE_SEND_USER ? (t = eR.intl.formatToPlainString(eR.t.CTMXwL, {
        helpUrl: eO.Z.getArticleURL(eC.BhN.DM_COULD_NOT_BE_DELIVERED)
      }), n = "INVALID_MESSAGE_SEND_USER") : r === eC.evJ.TOO_MANY_THREADS ? (t = i.isForumLikeChannel() || i.isForumPost() ? eR.intl.string(eR.t["/jUd2+"]) : eR.intl.string(eR.t["5EMPA7"]), n = "TOO_MANY_THREADS") : r === eC.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = eR.intl.string(eR.t["aY+lLC"]), n = "TOO_MANY_ANNOUNCEMENT_THREADS") : r === eC.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = eR.intl.formatToPlainString(eR.t.zSG3Qy, {
        helpUrl: eC.EYA.HARMFUL_LINKS
      }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : r === eC.evJ.HARMFUL_URL_BLOCKED ? (t = eR.intl.string(eR.t.WxX2Fd), n = "HARMFUL_URL_BLOCKED") : r in eW ? (n = eW[r].messageName, t = eW[r].messageGetter()) : (t = eR.intl.formatToPlainString(eR.t.CTMXwL, {
        helpUrl: eO.Z.getArticleURL(eC.BhN.DM_COULD_NOT_BE_DELIVERED)
      }), n = "SEND_FAILED (".concat(r, ")")), eK.sendBotMessage(e, t, n))
    },
    sendExplicitMediaClydeError(e, t, n) {
      let i = eu.Z.getChannel(e);
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
        message: eR.intl.string(eR.t["mktny/"]),
        messageName: "BOT_DM_EXPLICIT_CONTENT"
      })).with({
        isDM: false,
        isGDM: true
      }, () => ({
        message: eR.intl.string(eR.t["mktny/"]),
        messageName: "BOT_GDM_EXPLICIT_CONTENT"
      })).otherwise(() => ({
        message: eR.intl.string(eR.t.i4AbAS),
        messageName: "BOT_GUILD_EXPLICIT_CONTENT"
      })), s = (0, V.r)();
      eK.sendBotMessage(e, a, o, s), (0, T.aP)({
        action: T.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
        messageId: s,
        channelId: e,
        context: n
      }), null != t && t.length > 0 && l.Z.dispatch({
        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
        messageId: s,
        channelId: e,
        attachments: t
      })
    },
    truncateMessages(e, t, n) {
      l.Z.dispatch({
        type: "TRUNCATE_MESSAGES",
        channelId: e,
        truncateBottom: t,
        truncateTop: n
      })
    },
    clearChannel(e) {
      l.Z.dispatch({
        type: "CLEAR_MESSAGES",
        channelId: e
      })
    },
    jumpToPresent(e, t) {
      eK.trackJump(e, null, "Present");
      let n = {
        present: true
      };
      ef.Z.hasPresent(e) ? l.Z.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        jump: n,
        channelId: e,
        limit: t
      }) : eK.fetchMessages({
        channelId: e,
        limit: t,
        jump: n
      })
    },
    trackJump(e, t, n, r) {
      f.ZP.trackWithMetadata(eC.rMx.JUMP, eD({
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
      return "string" == typeof o && eK.trackJump(n, r, o, s), null == ej || null == (t = ej.pauseAllMediaPlayers) || t.call(ej), eK.fetchMessages({
        channelId: n,
        limit: eC.Z8P,
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
      eK.fetchMessages({
        channelId: t,
        limit: eC.Z8P,
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
      return o.tn.get({
        url: eC.ANM.MESSAGES(t),
        query: {
          limit: 1,
          around: n
        },
        retries: 2,
        oldFormErrors: true,
        rejectWithError: false
      }).then(e => {
        if (e.body.length > 0) return (0, G.e5)(e.body[0])
      })
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
        feature: m
      } = e, h = eu.Z.getChannel(t), g = A.Z.isConnectedOrOverlay(), E = Date.now();
      if (null != h && h.type === eC.d4z.GUILD_STORE) returnfalse;
      if (t === b.V || (eM.log("Fetching messages for ".concat(t, " between ").concat(r, " and ").concat(n, ". jump=").concat(JSON.stringify(a))), eK._tryFetchMessagesCached({
          channelId: t,
          before: n,
          after: r,
          limit: i,
          jump: a,
          focus: s,
          truncate: f
        }))) return;
      es.Z.fetchMessages.recordStart();
      let y = null != a ? a : true;
      null == y && null != s && (y = eD({}, s));
      let O = u.Z.getOrCreate(t).loadStart(y);
      u.Z.commit(O), l.Z.dispatch({
        type: "LOAD_MESSAGES"
      });
      let v = null == y ? true : y.messageId,
        S = new eG;
      return d || this.fetchLocalMessages(t, n, r, i, S), o.tn.get({
        url: eC.ANM.MESSAGES(t),
        query: {
          before: n,
          after: r,
          limit: i,
          around: v,
          preload: c,
          feature: m
        },
        retries: 2,
        oldFormErrors: true,
        rejectWithError: false
      }).then(e => (es.Z.fetchMessages.recordEnd(), es.Z.dispatchMessages.measure(() => {
        let o = e.body,
          s = null != n,
          c = null != r,
          u = null == n && null == r,
          d = null != v || o.length === i && (s || u),
          m = null != v || c && o.length === i;
        if (null != v) {
          let e = Math.floor(i / 2),
            n = e + i % 2,
            r = [v, ...o.map(e => {
              let {
                id: t
              } = e;
              return t
            })].filter((e, t, n) => n.indexOf(e) === t).sort(eS.default.compare).indexOf(v);
          if (r < n - 1 && (d = false), o.length - r < e && (m = false), m && o.length > 0) {
            let e = em.ZP.lastMessageId(t);
            o[0].id === e && (m = false)
          }
        }
        eM.log("Fetched ".concat(o.length, " messages for ").concat(t, " isBefore:").concat(s, " isAfter:").concat(c)), S.markComplete(), l.Z.dispatch({
          type: "LOAD_MESSAGES_SUCCESS",
          channelId: t,
          messages: o,
          isBefore: s,
          isAfter: c,
          hasMoreBefore: d,
          hasMoreAfter: m,
          limit: i,
          jump: a,
          forICYMI: p,
          isStale: !g || A.Z.lastTimeConnectedChanged() >= E,
          truncate: f,
          avoidInitialScroll: _
        })
      }), true), () => (eM.log("Failed to fetch messages for ".concat(t)), l.Z.dispatch({
        type: "LOAD_MESSAGES_FAILURE",
        channelId: t
      }), false))
    },
    async fetchLocalMessages(e, t, n, r, i) {
      let a = eu.Z.getBasicChannel(e),
        o = u.Z.getOrCreate(e),
        s = p.Z.database();
      if (null == s || null == a || null != t || null != n) return void es.Z.addLocalMessages(e, false);
      if (o.ready && !o.cached) return void es.Z.addLocalMessages(e, false);
      let c = await (0, _.dI)(() => m.ZP.load(s, e, r));
      if (null == c) return void es.Z.addLocalMessages(e, false);
      if (eM.log("fetched ".concat(c.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(i.completed, ")")), es.Z.addLocalMessages(e, c.messages.length), !i.completed && c.messages.length > 0) {
        let t = c.messages.length >= r && c.connectionId === A.Z.lastTimeConnectedChanged();
        l.Z.dispatch({
          type: "LOCAL_MESSAGES_LOADED",
          guildId: a.guild_id,
          channelId: e,
          users: c.users,
          members: c.members,
          messages: c.messages,
          stale: !t
        })
      }
    },
    async fetchNewLocalMessages(e, t) {
      var n;
      let r = eu.Z.getBasicChannel(e),
        i = p.Z.database();
      if (null == i || null == r) return;
      let a = u.Z.getOrCreate(e);
      if (a.hasMoreAfter) return;
      let o = await (0, _.dI)(() => m.ZP.load(i, e, t));
      if (null == o) return;
      let s = null == (n = (a = u.Z.getOrCreate(e)).last()) ? true : n.id,
        c = null == s ? o.messages : o.messages.filter(e => eS.default.compare(e.id, s) > 0);
      eM.log("Fetched ".concat(o.messages.length, " messages from the cache after foregrounding. ").concat(c.length, " are new")), 0 !== c.length && l.Z.dispatch({
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
      } = e, c = ef.Z.getMessages(t);
      if (c.cached || !c.ready) returnfalse;
      if ((null == a ? true : a.messageId) != null || (null == o ? true : o.messageId) != null) {
        if ((null == a ? true : a.messageId) != null && c.has(a.messageId, false)) return l.Z.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: a,
          limit: i,
          truncate: s
        }), true;
        if ((null == o ? true : o.messageId) != null)
          if (c.has(o.messageId, false)) return l.Z.dispatch({
            type: "LOAD_MESSAGES_SUCCESS_CACHED",
            channelId: t,
            focus: o,
            limit: i,
            truncate: s
          }), true;
          else a = eD({}, o);
        let e = (null == a ? true : a.messageId) != null ? eS.default.extractTimestamp(null == a ? true : a.messageId) : 0,
          n = c.first(),
          r = c.last();
        if (!c.hasMoreBefore && null != n && eS.default.extractTimestamp(n.id) >= e || !c.hasMoreAfter && null != r && eS.default.extractTimestamp(r.id) <= e || null != n && null != r && eS.default.extractTimestamp(n.id) < e && eS.default.extractTimestamp(r.id) > e) return l.Z.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: a,
          limit: eC.Z8P
        }), true
      } else if (null != n && c.hasBeforeCached(n)) return l.Z.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        before: n,
        limit: i,
        truncate: s
      }), true;
      else if (null != r && c.hasAfterCached(r)) return l.Z.dispatch({
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
      let a = await (0, ee.Z)(e);
      if (null != a) return eK.sendMessage(a, t, r, i);
      let o = null != (n = i.nonce) ? n : (0, V.r)();
      i = eL(eD({}, i), {
        nonce: o
      });
      let s = () => eK._sendMessage(e, t, i),
        l = U.ZP.backgroundify(s, true);
      return (Z.Z.recordMessageSendAttempt(e, o, i), ef.Z.isReady(e)) ? l() : r && e !== b.V ? (ek.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
        ef.Z.whenReady(e, () => {
          ek.info("Channel ".concat(e, " is ready for sending now.")), l().then(t, n)
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
          parse: Object.values(eC.hCA),
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
      return null != o && (0, X.tv)(n, r, i, a) ? {
        confettiPotionData: {
          emoji: o,
          callback: () => (0, q.Hb)(t)
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
    getSendMessageOptionsForAlsoForwardToChannel: e => ({
      alsoForwardToChannelId: e.alsoForwardToChannelId
    }),
    getSendMessageOptions(e) {
      let t = eK.getSendMessageOptionsForReply(e.pendingReply),
        n = eK.getSendMessageOptionsForConfettiPotion(eD({}, e)),
        r = eK.getSendMessageOptionsForStickers(eD({}, e)),
        i = eK.getSendMessageOptionsForScheduledMessage(eD({}, e)),
        a = eK.getSendMessageOptionsForAlsoForwardToChannel(eD({}, e));
      return eD({}, t, n, r, i, a)
    },
    sendInvite(e, t, n, r, i) {
      let a = (0, M.Z)(t);
      return null != i && (a = "".concat(i, "\n").concat(a)), eK._sendMessage(e, {
        content: a,
        tts: false,
        validNonShortcutEmojis: [],
        invalidEmojis: []
      }, {
        location: n,
        inviteAnalyticsMetadata: r
      })
    },
    sendActivityBookmark: (e, t, n, r) => eK._sendMessage(e, {
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
      return eK._sendMessage(e, {
        content: n,
        invalidEmojis: [],
        validNonShortcutEmojis: [],
        tts: i
      }, eL(eD({}, r), {
        stickerIds: t
      }))
    },
    sendGreetMessage(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
        {
          messageReference: r,
          allowedMentions: i
        } = n;
      return o.tn.post({
        url: eC.ANM.MESSAGES_GREET(e),
        body: {
          sticker_ids: [t],
          allowed_mentions: i,
          message_reference: r
        },
        oldFormErrors: true,
        rejectWithError: false,
        context: {
          location: eP.dy.GREET
        }
      }).then(n => (F.Z.donateSentMessage(n.body.content, e), eK.receiveMessage(e, n.body), l.Z.dispatch({
        type: "STICKER_TRACK_USAGE",
        stickerIds: [t]
      }), n), t => {
        throw eM.log("Failed to send greeting"), 429 !== t.status && eK.sendClydeError(e, t.body.code), l.Z.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: t.body.id,
          channelId: e
        }), t
      })
    },
    sendPollMessage(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
      return eK._sendMessage(e, {
        content: "",
        tts: false,
        validNonShortcutEmojis: [],
        invalidEmojis: []
      }, eL(eD({}, n), {
        poll: t,
        location: eP.dy.POLL_CREATION
      }))
    },
    validateMessage(e, t, n) {
      let r, i;
      return e.some(e => e.animated) && !ev.ZP.canUseAnimatedEmojis(t) ? (r = eR.intl.string(eR.t.msFJy8), i = "INVALID_ANIMATED_EMOJI_BODY") : ep.Z.canWithPartialContext(eC.Plq.USE_EXTERNAL_EMOJIS, {
        channelId: n
      }) ? (r = eR.intl.string(eR.t.FzugNl), i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (r = eR.intl.string(eR.t["Q87rI/"]), i = "INVALID_EXTERNAL_EMOJI_BODY"), {
        errorMessage: r,
        errorMessageName: i
      }
    },
    async _sendMessage(e, t, n) {
      var r, i, o, s, c, u, f, p, _, m;
      let h, g = (0, ee.Z)(e);
      if (null != g) return ek.info("Converting channel to a private channel"), g.then(e => {
        ek.info("Finished converting channel to a private channel"), eK._sendMessage(e, t, n)
      });
      let E = t.content,
        {
          invalidEmojis: b,
          validNonShortcutEmojis: v,
          tts: S = false
        } = t,
        {
          activityAction: I,
          location: A,
          inviteAnalyticsMetadata: N,
          stickerIds: P,
          confettiPotionData: x,
          messageReference: L,
          allowedMentions: j,
          poll: M,
          sharedCustomTheme: U,
          contentInventoryEntry: q,
          attachments: et,
          attachmentsToUpload: en,
          onAttachmentUploadError: er,
          announcementSendOptions: eo,
          withCheckpoint: es,
          messageIdFromNotificationExperiment: el
        } = n,
        eu = null != (i = n.flags) ? i : 0,
        [ed, ef] = (0, ea.Z)(E);
      ed && (E = ef, eu = (0, a.pj)(eu, eC.iLy.SUPPRESS_NOTIFICATIONS));
      let ep = false,
        e_ = (null == (r = n.messageReference) ? true : r.type) === eC.Uvt.FORWARD;
      if ("" === E && null == I && null == P && null == M && null == U && null == q && !e_ && (null == et || 0 === et.length) && !es && (null == t.components || 0 === t.components.length))
        if (null == en || !(en.length > 0)) return Promise.resolve();
        else ep = true;
      let em = null != L ? eC.uaV.REPLY : eC.uaV.DEFAULT,
        eE = null != (o = n.nonce) ? o : (0, V.r)(),
        ey = eE,
        eO = (0, B.ZP)({
          channelId: e,
          content: E,
          tts: S,
          type: em,
          messageReference: L,
          allowedMentions: j,
          flags: 0 !== eu ? eu : true,
          nonce: eE,
          poll: (0, K.x9)(M),
          sharedCustomTheme: U
        });
      if (false !== n.eagerDispatch && ((0, Y.EL)(e, eO.id), null != P && (eO.sticker_items = P.map(e => ei.Z.getStickerById(e)).filter(e => null != e)), eK.receiveMessage(e, eO, true, n)), !eU && null != b && b.length > 0) {
        eU = true;
        let t = eg.default.getCurrentUser(),
          {
            errorMessage: n,
            errorMessageName: r
          } = eK.validateMessage(b, t, e);
        eK.sendBotMessage(e, n, r)
      }
      let ev = {
        type: null != eo ? d.$V.SEND_ANNOUNCEMENT : d.$V.SEND,
        message: {
          channelId: e,
          content: E,
          nonce: eE,
          tts: S,
          message_reference: L,
          allowed_mentions: j,
          flags: eu,
          analyticsLocation: A
        }
      };
      if (null != t.components && (ev.message.components = t.components), null != eo && (ev.message.create_thread = eo.createThread, ev.message.title = eo.threadName, ev.message.publish = null != (s = eo.publish) && s), null != I) {
        let e, t = null == I ? true : I.activity.session_id;
        if (null != (e = I.type === eC.mFx.JOIN_REQUEST || I.type === eC.mFx.STREAM_REQUEST || null != t ? t : ec.default.getSessionId())) {
          let t = {
              type: I.type,
              session_id: e,
              target_user_id: I.targetUserId
            },
            {
              activity: n
            } = I;
          null != n.party && null != n.party.id && (t.party_id = n.party.id), ev.message.application_id = n.application_id, ev.message.activity = t
        }
      }
      if (null != M && (ev.message.poll = M), null != U && (ev.message.shared_client_theme = U), null != P && (ev.message.sticker_ids = P), W.Z.isEnabled() && (ev.message.has_poggermode_enabled = true), es && (ev.message.with_checkpoint = true), null != q && (ev.message.content_inventory_entry = q), null != x && (ev.message.confetti_potion = (0, X.vY)(x), x.callback()), null != et && et.length > 0 && (ev.message.attachments = et), null != el && (ev.message.message_id_from_notification_experiment = el), null != en && en.length > 0) try {
        let t = await (0, k.c)({
          channelId: e,
          nonce: eE,
          items: en,
          message: eO,
          shouldUploadFailureSendNotification: !n.doNotNotifyOnError && true
        });
        if (null == t) return;
        let r = t.attachments;
        if (h = t.uploader, ep && (null == r || 0 === r.length)) return;
        if (null != r && (ev.message.attachments = r.map((e, t) => (0, eI.B)(e, t)), (0, y.NS)())) {
          for (let e of r)
            if ((null == (p = e.item) || null == (f = p.clip) || null == (u = f.decision) || null == (c = u.signal) ? true : c.type) === O.Bs.DISTRIBUTED) {
              let t = {
                  id: e.item.clip.id,
                  remoteTriggerClipId: null == (m = e.item.clip.decision) || null == (_ = m.signal) ? true : _.remoteTriggerClipId
                },
                n = "__CLIP_METADATA__",
                r = "".concat(n).concat(JSON.stringify(t));
              ev.message.content = "".concat(ev.message.content).concat(r);
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
        (0, H.x)({
          fileItems: e.items,
          failureCode: t,
          errorMessage: null == n ? true : n.msg
        }), null == er || er(e, t, n, r);
        return
      }
      return new Promise((t, r) => {
        let i = Date.now(),
          a = d.ZP.length,
          o = Math.floor(1e4 * Math.random());
        ek.info("Queueing message to be sent LogId:".concat(o)), d.ZP.enqueue(ev, s => {
          let c = Date.now() - i;
          if (s.ok) {
            F.Z.donateSentMessage(E, e), eK.receiveMessage(e, s.body, true, {
              sendAnalytics: {
                duration: c,
                queueSize: a
              },
              poll: M
            }), null != n.alsoForwardToChannelId && C.Z.sendForward((0, G.e5)(s.body), n.alsoForwardToChannelId).then(() => {
              var e, t, r;
              eV({
                referencedMessageId: null == (e = s.body) ? true : e.id,
                guildId: null == (t = s.body) ? true : t.guild_id,
                channelId: null == (r = s.body) ? true : r.channel_id,
                destinationChannelId: n.alsoForwardToChannelId
              })
            }).catch(t => {
              var r;
              eM.log("Failed to forward thread message to parent channel LogId:".concat(o), {
                referencedMessageId: null == (r = s.body) ? true : r.id,
                channelId: e,
                destinationChannelId: n.alsoForwardToChannelId,
                error: t.toString()
              })
            });
            let r = (0, X.ZC)(s.body);
            null != r && ((0, z.gA)(J.D1), (0, $.I)({
              name: r.name,
              id: r.id
            }, true, true, Q.LL.MessageSent));
            let i = eS.default.cast(e),
              u = D.Z.getRequest(i);
            if (null != u) {
              let {
                guildId: t,
                userId: n,
                applicationStatus: r
              } = u;
              (0, w.pL)({
                guildId: t,
                channelId: e,
                messageId: s.body.id,
                joinRequestStatus: r,
                joinRequestUserId: n
              })
            }
            Z.Z.recordMessageSendApiResponse(eE), l.Z.dispatch({
              type: "SLOWMODE_RESET_COOLDOWN",
              slowmodeType: eh.S.SendMessage,
              channelId: e
            }), l.Z.dispatch({
              type: "EMOJI_TRACK_USAGE",
              emojiUsed: v
            }), l.Z.dispatch({
              type: "STICKER_TRACK_USAGE",
              stickerIds: P
            }), l.Z.dispatch({
              type: "LOCAL_MESSAGE_CREATE",
              message: {
                channel_id: e,
                author: eg.default.getCurrentUser()
              }
            }), eZ({
              content: E,
              channelId: e,
              messageId: s.body.id,
              location: null != A ? A : "chat_input",
              inviteAnalyticsMetadata: N
            }), eB(E, e, s.body.id, null != A ? A : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), null != h && l.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: e,
              file: h._file,
              aborted: false
            }), t(s)
          } else {
            var u, f;
            let t;
            eM.log("Failed to send message", {
              hasErr: s.hasErr,
              status: s.status,
              code: null == (u = s.body) ? true : u.code,
              error: s.err
            });
            let i = false;
            if (s.hasErr) "ABORTED" === s.err.code && (i = true);
            else if (s.status >= 400 && s.status < 500 && s.body)
              if (s.body.code === eC.evJ.SLOWMODE_RATE_LIMITED) {
                let t = s.body.retry_after;
                null != t && t > 0 && l.Z.dispatch({
                  type: "SLOWMODE_SET_COOLDOWN",
                  channelId: e,
                  slowmodeType: eh.S.SendMessage,
                  cooldownMs: t * eb.Z.Millis.SECOND
                })
              } else R.U8.has(s.body.code) ? l.Z.dispatch({
                type: "MESSAGE_SEND_FAILED_AUTOMOD",
                messageData: ev,
                errorResponseBody: {
                  code: s.body.code,
                  message: s.body.message
                }
              }) : s.body.code === eC.evJ.POGGERMODE_TEMPORARILY_DISABLED ? l.Z.dispatch({
                type: "POGGERMODE_TEMPORARILY_DISABLED"
              }) : s.body.code === eC.evJ.EXPLICIT_CONTENT ? t = eP.xi.EXPLICIT_CONTENT : null != M || e_ || null != q || eK.sendClydeError(e, s.body.code);
            i ? eK.deleteMessage(e, ey, true) : (null != h && l.Z.dispatch({
              type: "UPLOAD_FAIL",
              channelId: e,
              file: h._file,
              messageId: ey,
              reason: t,
              noSendFailed: true
            }), s.hasErr || t !== eP.xi.EXPLICIT_CONTENT || eK.sendExplicitMediaClydeError(e, null == (f = s.body) ? true : f.attachments, T.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED), l.Z.dispatch({
              type: "MESSAGE_SEND_FAILED",
              messageId: ey,
              channelId: e,
              shouldNotify: !n.doNotNotifyOnError,
              reason: t
            }), (0, H.x)({
              failureCode: s.hasErr ? true : s.status,
              errorMessage: s.hasErr ? s.err.message : true
            }), d.ZP.cancelPendingSendRequests(e).forEach(e => {
              eM.log("Cancelling pending message", e.nonce), l.Z.dispatch({
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
      l.Z.dispatch({
        type: "MESSAGE_START_EDIT",
        channelId: e,
        messageId: t,
        content: n,
        source: r
      })
    },
    startEditMessageRecord(e, t, n) {
      if ((0, a.yE)(t.flags, eC.iLy.IS_COMPONENTS_V2)) {
        let r = t.components.filter(e => e.type === c.re.TEXT_DISPLAY);
        if (r.length > 0) {
          let i = r.map(e => e.content).join("\n");
          l.Z.dispatch({
            type: "MESSAGE_START_EDIT",
            channelId: e,
            messageId: t.id,
            content: i,
            source: n
          });
          return
        }
      }
      l.Z.dispatch({
        type: "MESSAGE_START_EDIT",
        channelId: e,
        messageId: t.id,
        content: t.content,
        source: n
      })
    },
    updateEditMessage(e, t, n) {
      l.Z.dispatch({
        type: "MESSAGE_UPDATE_EDIT",
        channelId: e,
        textValue: t,
        richValue: n
      })
    },
    endEditMessage(e, t) {
      l.Z.dispatch({
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
      await eo.Z.unarchiveThreadIfNecessary(e);
      let a = eY(e, t),
        o = eH(e, t),
        c = {
          channelId: e,
          messageId: t,
          content: r,
          isCrossposted: o,
          allowed_mentions: a,
          components: i
        };
      d.ZP.enqueue({
        type: d.$V.EDIT,
        message: c
      }, n => {
        let r = !n.hasErr && R.U8.has(n.body.code);
        if (r) {
          let e = {
            type: d.$V.EDIT,
            message: c
          };
          l.Z.dispatch({
            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
            messageData: e,
            errorResponseBody: {
              code: n.body.code,
              message: n.body.message
            }
          })
        }
        n.hasErr ? s.uv.announce(eR.intl.string(eR.t.Atp7FP)) : r ? s.uv.announce(eR.intl.string(eR.t.Hym4ix)) : s.uv.announce(eR.intl.string(eR.t["0x1HBD"])), eK.endEditMessage(e, n.hasErr ? true : n), eK.focusMessage({
          channelId: e,
          messageId: t
        })
      })
    },
    async suppressEmbeds(e, t) {
      await eo.Z.unarchiveThreadIfNecessary(e), o.tn.patch({
        url: eC.ANM.MESSAGE(e, t),
        body: {
          flags: eC.iLy.SUPPRESS_EMBEDS
        },
        oldFormErrors: true,
        rejectWithError: false
      })
    },
    async patchMessageAttachments(e, t, n) {
      await eo.Z.unarchiveThreadIfNecessary(e), o.tn.patch({
        url: eC.ANM.MESSAGE(e, t),
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
          l.Z.dispatch({
            type: "MESSAGE_DELETE",
            id: t,
            channelId: e
          }).then(() => {
            s.uv.announce(eR.intl.string(eR.t.RYMs7s))
          })
        };
      n ? r() : (await eo.Z.unarchiveThreadIfNecessary(e), o.tn.del({
        url: eC.ANM.MESSAGE(e, t),
        oldFormErrors: true,
        rejectWithError: false
      }).then(() => {
        r()
      }))
    },
    dismissAutomatedMessage(e) {
      null != e.loggingName && f.ZP.trackWithMetadata(eC.rMx.AUTOMATED_MESSAGE_DISMISSED, {
        message_name: e.loggingName,
        message_author: e.author.username
      }), this.deleteMessage(e.channel_id, e.id, true)
    },
    revealMessage(e, t) {
      l.Z.dispatch({
        type: "MESSAGE_REVEAL",
        channelId: e,
        messageId: t
      })
    },
    crosspostMessage: (e, t) => o.tn.post({
      url: eC.ANM.MESSAGE_CROSSPOST(e, t),
      oldFormErrors: true,
      failImmediatelyWhenRateLimited: true,
      rejectWithError: false
    }).catch(e => {
      let t;
      t = 429 === e.status ? eR.intl.formatToPlainString(eR.t["77cuqz"], {
        retryAfter: Math.floor(e.body.retry_after / 60)
      }) : eR.intl.string(eR.t.z2gyNF), eT.Z.show({
        title: eR.intl.string(eR.t.Vd1hs6),
        body: t,
        confirmText: eR.intl.string(eR.t.BddRzS)
      })
    }),
    trackInvite: eF
  },
  ez = eK