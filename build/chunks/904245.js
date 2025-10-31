/** Chunk was on web.js **/
/** chunk id: 904245, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eY
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
  Chunk924557 = require("./924557.js"),
  Chunk894694 = require("./894694.js"),
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

function ew(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eD(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ew(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ex = null,
  eL = new Chunk710845.Z("MessageActionCreators"),
  eM = new Chunk710845.Z("MessageQueue"),
  ek = false;
class ej {
  markComplete() {
    this.completed = true
  }
  constructor() {
    eR(this, "completed", false)
  }
}

function eU(e) {
  let {
    content: t,
    channelId: n,
    messageId: r,
    location: a,
    inviteAnalyticsMetadata: o,
    overrideProperties: s = {}
  } = e, l = es.default.getId();
  (0, v.ZP)(t).forEach(e => {
    let {
      type: t,
      code: c,
      url: u
    } = e;
    if (t === O.g.INVITE) eG({
      inviteKey: c,
      channelId: n,
      messageId: r,
      location: a,
      inviteAnalyticsMetadata: o,
      overrideProperties: s
    });
    else if (t === O.g.TEMPLATE) {
      let e = w.Z.getGuildTemplate(c);
      if (null == e || e.state === eA.Rj.RESOLVING) return;
      d.ZP.trackWithMetadata(eT.rMx.GUILD_TEMPLATE_LINK_SENT, {
        guild_template_code: c,
        guild_template_name: e.name,
        guild_template_description: e.description,
        guild_template_guild_id: e.sourceGuildId
      })
    } else if (t === O.g.BUILD_OVERRIDE);
    else if (t === O.g.MANUAL_BUILD_OVERRIDE);
    else if (t === O.g.EVENT);
    else if (t === O.g.CHANNEL_LINK);
    else if (t === O.g.APP_DIRECTORY_PROFILE)(0, A.y)(c), (0, g.z$)(c, eS.U.APP_DISCOVERY, l);
    else if (t === O.g.APP_DIRECTORY_STOREFRONT)(0, A.y)(c, "storefront");
    else if (t === O.g.APP_DIRECTORY_STOREFRONT_SKU) {
      let e = (0, h.Q)(c);
      null != e && (0, A.y)(e.applicationId, "storefront_sku")
    } else if (t === O.g.ACTIVITY_BOOKMARK) {
      var f;
      let e = (0, m.U)(u);
      (0, g.z$)(c, eS.U.ACTIVITY, null != (f = e.referrerId) ? f : l, e.customId)
    } else if (t === O.g.EMBEDDED_ACTIVITY_INVITE)(0, g.z$)(c, eS.U.ACTIVITY_INVITE, l);
    else if (t === O.g.GUILD_PRODUCT);
    else if (t === O.g.SERVER_SHOP);
    else if (t === O.g.SOCIAL_LAYER_STOREFRONT);
    else if (t === O.g.QUESTS_EMBED) {
      let e = (0, ee.jY)(i.j.QUESTS_EMBED);
      (0, $.dA)({
        questId: c,
        event: eT.rMx.QUEST_LINK_SHARED,
        properties: {
          metadata_raw: null != e ? e : null
        },
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: i.j.QUESTS_EMBED
      })
    } else if (t === O.g.APP_OAUTH2_LINK) d.ZP.trackWithMetadata(eT.rMx.APP_OAUTH2_LINK_EMBED_URL_SENT, {
      application_id: c
    }), (0, g.z$)(c, eS.U.OAUTH, l);
    else if (t === O.g.COLLECTIBLES_SHOP);
    else throw Error("Unknown coded link type: ".concat(t))
  })
}

function eG(e) {
  var t, n;
  let {
    inviteKey: r,
    channelId: i,
    messageId: a,
    location: o,
    inviteAnalyticsMetadata: s,
    overrideProperties: l = {}
  } = e, c = es.default.getId(), u = ec.Z.getInvite(r), f = (0, D.fU)(r), _ = null != u && (0, x.P1)(u), p = null == u || null == (t = u.target_application) ? true : t.id;
  null != p && _ && (0, g.z$)(p, eS.U.ACTIVITY_INVITE, c);
  let h = el.Z.getChannel(i);
  if (null != h) {
    let e = null;
    h.isMultiUserDM() ? e = eT.dAT.GDM_INVITE : h.isPrivate() || (e = eT.dAT.SERVER_INVITE);
    let t = {};
    if (null != u && u.state === eT.r2o.RESOLVED && null != u.channel) {
      let r = u.channel;
      t.invite_channel_id = r.id, t.invite_guild_id = null == (n = u.guild) ? true : n.id, t.invite_channel_type = r.type, null != u.inviter && (t.invite_inviter_id = u.inviter.id), null != u.target_application && (t.application_id = u.target_application.id);
      let i = eo.Z.getLastActiveStream();
      if (null != i && i.channelId === r.id) {
        e = eT.dAT.STREAM, t.destination_user_id = i.ownerId;
        let n = (0, C.L2)(i, ef.Z);
        t.application_id = null != n ? n.id : null
      }
    }
    null != s && (null != s.suggestionData && (t.is_suggested = s.suggestionData.isAffinitySuggestion, t.row_num = s.suggestionData.rowNum, t.num_total = s.suggestionData.numTotal, t.num_affinity_connections = s.suggestionData.numAffinityConnections, t.is_filtered = s.suggestionData.isFiltered), t.source = s.source), t = eP(eD(eP({}, t), {
      location: o,
      invite_type: e,
      invite_code: f.baseCode,
      guild_id: h.getGuildId(),
      channel_id: h.id,
      message_id: a,
      send_type: eT.a5g.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: f.guildScheduledEventId
    }), l), d.ZP.trackWithMetadata(eT.rMx.INVITE_SENT, t)
  } else {
    let e = {};
    null != u && u.state === eT.r2o.RESOLVED && null != u.inviter && (e.invite_inviter_id = u.inviter.id, null != u.target_application && (e.application_id = u.target_application.id), e = eP(eD(eP({}, e), {
      location: o,
      invite_type: eT.dAT.FRIEND_INVITE,
      invite_code: f.baseCode,
      message_id: a,
      send_type: eT.a5g.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: f.guildScheduledEventId
    }), l), d.ZP.trackWithMetadata(eT.rMx.INVITE_SENT, e))
  }
}

function eB(e, t, n, r, i) {
  (0, eE.Q_)(e).forEach(e => {
    let a = el.Z.getChannel(t);
    null != a && d.ZP.trackWithMetadata(eT.rMx.GIFT_CODE_SENT, {
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

function eZ(e, t) {
  let n = eu.Z.getMessage(e, t);
  return null != n && n.hasFlag(eT.iLy.CROSSPOSTED)
}

function eF(e, t) {
  let n = eu.Z.getMessage(e, t);
  if (null == n || n.type !== eT.uaV.REPLY) return;
  let r = et.Z.getMessageByReference(n.messageReference);
  if (r.state === et.Y.LOADED && !n.mentions.includes(r.message.author.id)) return {
    parse: Object.values(eT.hCA),
    replied_user: false
  }
}
let eV = {
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
  eH = {
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
      null != n && d.ZP.trackWithMetadata(eT.rMx.AUTOMATED_MESSAGE_RECEIVED, {
        message_author: "Clyde",
        message_name: n
      }), eH.receiveMessage(e, (0, B.cs)({
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
        type: eT.uaV.NITRO_NOTIFICATION,
        content: t,
        flags: eT.iLy.EPHEMERAL,
        author: {
          id: eT.LAt,
          username: "Nitro Notification",
          discriminator: eT.fo$,
          avatar: "nitro",
          bot: true
        }
      });
      eH.receiveMessage(e, eD(eP({}, r), {
        state: eT.yb.SENT,
        channel_id: e
      }), true)
    },
    sendGiftingPromptSystemMessage(e, t) {
      let n = (0, B.ZP)({
        channelId: e,
        type: eT.uaV.GIFTING_PROMPT,
        content: "",
        flags: eT.iLy.EPHEMERAL,
        author: {
          id: eT.LAt,
          username: "Gifting Prompt",
          discriminator: eT.fo$,
          avatar: "gifting_prompt",
          bot: true
        },
        giftingPrompt: t
      });
      eH.receiveMessage(e, eD(eP({}, n), {
        state: eT.yb.SENT
      }), true)
    },
    sendClydeError(e) {
      let t, n, r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
        i = el.Z.getChannel(e);
      null != i && (r === eT.evJ.SLOWMODE_RATE_LIMITED ? (t = eN.intl.formatToPlainString(eN.t.IWntYg, {
        seconds: i.rateLimitPerUser
      }), n = "SLOWMODE_RATE_LIMITED") : r === eT.evJ.INVALID_MESSAGE_SEND_USER ? (t = eN.intl.formatToPlainString(eN.t.CTMXwL, {
        helpUrl: eb.Z.getArticleURL(eT.BhN.DM_COULD_NOT_BE_DELIVERED)
      }), n = "INVALID_MESSAGE_SEND_USER") : r === eT.evJ.TOO_MANY_THREADS ? (t = i.isForumLikeChannel() || i.isForumPost() ? eN.intl.string(eN.t["/jUd2+"]) : eN.intl.string(eN.t["5EMPA7"]), n = "TOO_MANY_THREADS") : r === eT.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = eN.intl.string(eN.t["aY+lLC"]), n = "TOO_MANY_ANNOUNCEMENT_THREADS") : r === eT.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = eN.intl.formatToPlainString(eN.t.zSG3Qy, {
        helpUrl: eT.EYA.HARMFUL_LINKS
      }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : r in eV ? (n = eV[r].messageName, t = eV[r].messageGetter()) : (t = eN.intl.formatToPlainString(eN.t.CTMXwL, {
        helpUrl: eb.Z.getArticleURL(eT.BhN.DM_COULD_NOT_BE_DELIVERED)
      }), n = "SEND_FAILED (".concat(r, ")")), eH.sendBotMessage(e, t, n))
    },
    sendExplicitMediaClydeError(e, t, n) {
      let i = el.Z.getChannel(e);
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
        message: eN.intl.string(eN.t["mktny/"]),
        messageName: "BOT_DM_EXPLICIT_CONTENT"
      })).with({
        isDM: false,
        isGDM: true
      }, () => ({
        message: eN.intl.string(eN.t["mktny/"]),
        messageName: "BOT_GDM_EXPLICIT_CONTENT"
      })).otherwise(() => ({
        message: eN.intl.string(eN.t.i4AbAS),
        messageName: "BOT_GUILD_EXPLICIT_CONTENT"
      })), l = (0, Z.r)();
      eH.sendBotMessage(e, a, o, l), (0, T.aP)({
        action: T.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
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
      eH.trackJump(e, null, "Present");
      let n = {
        present: true
      };
      eu.Z.hasPresent(e) ? s.Z.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        jump: n,
        channelId: e,
        limit: t
      }) : eH.fetchMessages({
        channelId: e,
        limit: t,
        jump: n
      })
    },
    trackJump(e, t, n, r) {
      d.ZP.trackWithMetadata(eT.rMx.JUMP, eP({
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
      return "string" == typeof o && eH.trackJump(n, r, o, s), null == ex || null == (t = ex.pauseAllMediaPlayers) || t.call(ex), eH.fetchMessages({
        channelId: n,
        limit: eT.Z8P,
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
      eH.fetchMessages({
        channelId: t,
        limit: eT.Z8P,
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
        url: eT.ANM.MESSAGES(t),
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
      } = e, m = el.Z.getChannel(t), g = S.Z.isConnectedOrOverlay(), b = Date.now();
      if (null != m && m.type === eT.d4z.GUILD_STORE) returnfalse;
      if (t === E.V || (eL.log("Fetching messages for ".concat(t, " between ").concat(r, " and ").concat(n, ". jump=").concat(JSON.stringify(o))), eH._tryFetchMessagesCached({
          channelId: t,
          before: n,
          after: r,
          limit: i,
          jump: o,
          focus: l,
          truncate: f
        }))) return;
      ea.Z.fetchMessages.recordStart();
      let y = null != o ? o : true;
      null == y && null != l && (y = eP({}, l));
      let O = c.Z.getOrCreate(t).loadStart(y);
      c.Z.commit(O), s.Z.dispatch({
        type: "LOAD_MESSAGES"
      });
      let v = null == y ? true : y.messageId,
        I = new ej;
      return d || this.fetchLocalMessages(t, n, r, i, I), a.tn.get({
        url: eT.ANM.MESSAGES(t),
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
      }).then(e => (ea.Z.fetchMessages.recordEnd(), ea.Z.dispatchMessages.measure(() => {
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
            })].filter((e, t, n) => n.indexOf(e) === t).sort(eO.default.compare).indexOf(v);
          if (r < n - 1 && (d = false), a.length - r < e && (h = false), h && a.length > 0) {
            let e = e_.ZP.lastMessageId(t);
            a[0].id === e && (h = false)
          }
        }
        eL.log("Fetched ".concat(a.length, " messages for ").concat(t, " isBefore:").concat(l, " isAfter:").concat(c)), I.markComplete(), s.Z.dispatch({
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
          isStale: !g || S.Z.lastTimeConnectedChanged() >= b,
          truncate: f,
          avoidInitialScroll: p
        })
      }), true), () => (eL.log("Failed to fetch messages for ".concat(t)), s.Z.dispatch({
        type: "LOAD_MESSAGES_FAILURE",
        channelId: t
      }), false))
    },
    async fetchLocalMessages(e, t, n, r, i) {
      let a = el.Z.getBasicChannel(e),
        o = c.Z.getOrCreate(e),
        l = f.Z.database();
      if (null == l || null == a || null != t || null != n) return void ea.Z.addLocalMessages(e, false);
      if (o.ready && !o.cached) return void ea.Z.addLocalMessages(e, false);
      let u = await (0, _.dI)(() => p.ZP.load(l, e, r));
      if (null == u) return void ea.Z.addLocalMessages(e, false);
      if (eL.log("fetched ".concat(u.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(i.completed, ")")), ea.Z.addLocalMessages(e, u.messages.length), !i.completed && u.messages.length > 0) {
        let t = u.messages.length >= r && u.connectionId === S.Z.lastTimeConnectedChanged();
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
      let r = el.Z.getBasicChannel(e),
        i = f.Z.database();
      if (null == i || null == r) return;
      let a = c.Z.getOrCreate(e);
      if (a.hasMoreAfter) return;
      let o = await (0, _.dI)(() => p.ZP.load(i, e, t));
      if (null == o) return;
      let l = null == (n = (a = c.Z.getOrCreate(e)).last()) ? true : n.id,
        u = null == l ? o.messages : o.messages.filter(e => eO.default.compare(e.id, l) > 0);
      eL.log("Fetched ".concat(o.messages.length, " messages from the cache after foregrounding. ").concat(u.length, " are new")), 0 !== u.length && s.Z.dispatch({
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
      } = e, c = eu.Z.getMessages(t);
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
          else a = eP({}, o);
        let e = (null == a ? true : a.messageId) != null ? eO.default.extractTimestamp(null == a ? true : a.messageId) : 0,
          n = c.first(),
          r = c.last();
        if (!c.hasMoreBefore && null != n && eO.default.extractTimestamp(n.id) >= e || !c.hasMoreAfter && null != r && eO.default.extractTimestamp(r.id) <= e || null != n && null != r && eO.default.extractTimestamp(n.id) < e && eO.default.extractTimestamp(r.id) > e) return s.Z.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: a,
          limit: eT.Z8P
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
      let a = await (0, J.Z)(e);
      if (null != a) return eH.sendMessage(a, t, r, i);
      let o = null != (n = i.nonce) ? n : (0, Z.r)();
      i = eD(eP({}, i), {
        nonce: o
      });
      let s = () => eH._sendMessage(e, t, i),
        l = k.ZP.backgroundify(s, true);
      return (U.Z.recordMessageSendAttempt(e, o, i), eu.Z.isReady(e)) ? l() : r && e !== E.V ? (eM.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
        eu.Z.whenReady(e, () => {
          eM.info("Channel ".concat(e, " is ready for sending now.")), l().then(t, n)
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
          parse: Object.values(eT.hCA),
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
      return null != o && (0, q.tv)(n, r, i, a) ? {
        confettiPotionData: {
          emoji: o,
          callback: () => (0, K.Hb)(t)
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
      let t = eH.getSendMessageOptionsForReply(e.pendingReply),
        n = eH.getSendMessageOptionsForConfettiPotion(eP({}, e)),
        r = eH.getSendMessageOptionsForStickers(eP({}, e)),
        i = eH.getSendMessageOptionsForScheduledMessage(eP({}, e));
      return eP({}, t, n, r, i)
    },
    sendInvite(e, t, n, r, i) {
      let a = (0, L.Z)(t);
      return null != i && (a = "".concat(i, "\n").concat(a)), eH._sendMessage(e, {
        content: a,
        tts: false,
        validNonShortcutEmojis: [],
        invalidEmojis: []
      }, {
        location: n,
        inviteAnalyticsMetadata: r
      })
    },
    sendActivityBookmark: (e, t, n, r) => eH._sendMessage(e, {
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
      return eH._sendMessage(e, {
        content: n,
        invalidEmojis: [],
        validNonShortcutEmojis: [],
        tts: i
      }, eD(eP({}, r), {
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
        url: eT.ANM.MESSAGES_GREET(e),
        body: {
          sticker_ids: [t],
          allowed_mentions: i,
          message_reference: r
        },
        oldFormErrors: true,
        rejectWithError: false,
        context: {
          location: eC.dy.GREET
        }
      }).then(n => (G.Z.donateSentMessage(n.body.content, e), eH.receiveMessage(e, n.body), s.Z.dispatch({
        type: "STICKER_TRACK_USAGE",
        stickerIds: [t]
      }), n), t => {
        throw eL.log("Failed to send greeting"), 429 !== t.status && eH.sendClydeError(e, t.body.code), s.Z.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: t.body.id,
          channelId: e
        }), t
      })
    },
    sendPollMessage(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
      return eH._sendMessage(e, {
        content: "",
        tts: false,
        validNonShortcutEmojis: [],
        invalidEmojis: []
      }, eD(eP({}, n), {
        poll: t,
        location: eC.dy.POLL_CREATION
      }))
    },
    validateMessage(e, t, n) {
      let r, i;
      return e.some(e => e.animated) && !ey.ZP.canUseAnimatedEmojis(t) ? (r = eN.intl.string(eN.t.msFJy8), i = "INVALID_ANIMATED_EMOJI_BODY") : ed.Z.canWithPartialContext(eT.Plq.USE_EXTERNAL_EMOJIS, {
        channelId: n
      }) ? (r = eN.intl.string(eN.t.FzugNl), i = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (r = eN.intl.string(eN.t["Q87rI/"]), i = "INVALID_EXTERNAL_EMOJI_BODY"), {
        errorMessage: r,
        errorMessageName: i
      }
    },
    async _sendMessage(e, t, n) {
      var r, i, a, o, l, c, d, f, _, p;
      let h, m = (0, J.Z)(e);
      if (null != m) return eM.info("Converting channel to a private channel"), m.then(e => {
        eM.info("Finished converting channel to a private channel"), eH._sendMessage(e, t, n)
      });
      let g = t.content,
        {
          invalidEmojis: E,
          validNonShortcutEmojis: O,
          tts: v = false
        } = t,
        {
          activityAction: I,
          location: S,
          inviteAnalyticsMetadata: A,
          stickerIds: C,
          confettiPotionData: w,
          messageReference: D,
          allowedMentions: x,
          poll: L,
          sharedCustomTheme: k,
          contentInventoryEntry: j,
          attachments: K,
          attachmentsToUpload: $,
          onAttachmentUploadError: ee,
          announcementSendOptions: et
        } = n,
        ei = null != (i = n.flags) ? i : 0,
        [ea, eo] = (0, er.Z)(g);
      ea && (g = eo, ei = (0, eg.pj)(ei, eT.iLy.SUPPRESS_NOTIFICATIONS));
      let el = false,
        ec = (null == (r = n.messageReference) ? true : r.type) === eT.Uvt.FORWARD;
      if ("" === g && null == I && null == C && null == L && null == k && null == j && !ec && (null == K || 0 === K.length) && (null == t.components || 0 === t.components.length))
        if (null == $ || !($.length > 0)) return Promise.resolve();
        else el = true;
      let eu = null != D ? eT.uaV.REPLY : eT.uaV.DEFAULT,
        ed = null != (a = n.nonce) ? a : (0, Z.r)(),
        ef = ed,
        e_ = (0, B.ZP)({
          channelId: e,
          content: g,
          tts: v,
          type: eu,
          messageReference: D,
          allowedMentions: x,
          flags: 0 !== ei ? ei : true,
          nonce: ed,
          poll: (0, Y.x9)(L),
          sharedCustomTheme: k
        });
      if (false !== n.eagerDispatch && ((0, V.EL)(e, e_.id), null != C && (e_.sticker_items = C.map(e => en.Z.getStickerById(e)).filter(e => null != e)), eH.receiveMessage(e, e_, true, n)), !ek && null != E && E.length > 0) {
        ek = true;
        let t = eh.default.getCurrentUser(),
          {
            errorMessage: n,
            errorMessageName: r
          } = eH.validateMessage(E, t, e);
        eH.sendBotMessage(e, n, r)
      }
      let eE = {
        type: null != et ? u.$V.SEND_ANNOUNCEMENT : u.$V.SEND,
        message: {
          channelId: e,
          content: g,
          nonce: ed,
          tts: v,
          message_reference: D,
          allowed_mentions: x,
          flags: ei,
          analyticsLocation: S
        }
      };
      if (null != t.components && (eE.message.components = t.components), null != et && (eE.message.create_thread = et.createThread, eE.message.title = et.threadName, eE.message.publish = null != (o = et.publish) && o), null != I) {
        let e, t = null == I ? true : I.activity.session_id;
        if (null != (e = I.type === eT.mFx.JOIN_REQUEST || I.type === eT.mFx.STREAM_REQUEST || null != t ? t : es.default.getSessionId())) {
          let t = {
              type: I.type,
              session_id: e,
              target_user_id: I.targetUserId
            },
            {
              activity: n
            } = I;
          null != n.party && null != n.party.id && (t.party_id = n.party.id), eE.message.application_id = n.application_id, eE.message.activity = t
        }
      }
      if (null != L && (eE.message.poll = L), null != k && (eE.message.shared_client_theme = k), null != C && (eE.message.sticker_ids = C), H.Z.isEnabled() && (eE.message.has_poggermode_enabled = true), null != j && (eE.message.content_inventory_entry = j), null != w && (eE.message.confetti_potion = (0, q.vY)(w), w.callback()), null != K && K.length > 0 && (eE.message.attachments = K), null != $ && $.length > 0) try {
        let t = await (0, M.c)({
          channelId: e,
          nonce: ed,
          items: $,
          message: e_,
          shouldUploadFailureSendNotification: !n.doNotNotifyOnError && true
        });
        if (null == t) return;
        let r = t.attachments;
        if (h = t.uploader, el && (null == r || 0 === r.length)) return;
        if (null != r && (eE.message.attachments = r.map((e, t) => (0, ev.B)(e, t)), (0, b.NS)())) {
          for (let e of r)
            if ((null == (f = e.item) || null == (d = f.clip) || null == (c = d.decision) || null == (l = c.signal) ? true : l.type) === y.Bs.DISTRIBUTED) {
              let t = {
                  id: e.item.clip.id,
                  remoteTriggerClipId: null == (p = e.item.clip.decision) || null == (_ = p.signal) ? true : _.remoteTriggerClipId
                },
                n = "__CLIP_METADATA__",
                r = "".concat(n).concat(JSON.stringify(t));
              eE.message.content = "".concat(eE.message.content).concat(r);
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
        (0, F.x)({
          fileItems: e.items,
          failureCode: t,
          errorMessage: null == n ? true : n.msg
        }), null == ee || ee(e, t, n, r);
        return
      }
      return new Promise((t, r) => {
        let i = Date.now(),
          a = u.ZP.length,
          o = Math.floor(1e4 * Math.random());
        eM.info("Queueing message to be sent LogId:".concat(o)), u.ZP.enqueue(eE, o => {
          let l = Date.now() - i;
          if (o.ok) {
            G.Z.donateSentMessage(g, e), eH.receiveMessage(e, o.body, true, {
              sendAnalytics: {
                duration: l,
                queueSize: a
              },
              poll: L
            });
            let r = (0, q.ZC)(o.body);
            null != r && ((0, W.gA)(X.D1), (0, Q.I)({
              name: r.name,
              id: r.id
            }, true, true, z.LL.MessageSent));
            let i = eO.default.cast(e),
              c = P.Z.getRequest(i);
            if (null != c) {
              let {
                guildId: t,
                userId: n,
                applicationStatus: r
              } = c;
              (0, R.pL)({
                guildId: t,
                channelId: e,
                messageId: o.body.id,
                joinRequestStatus: r,
                joinRequestUserId: n
              })
            }
            U.Z.recordMessageSendApiResponse(ed), s.Z.dispatch({
              type: "SLOWMODE_RESET_COOLDOWN",
              slowmodeType: ep.S.SendMessage,
              channelId: e
            }), s.Z.dispatch({
              type: "EMOJI_TRACK_USAGE",
              emojiUsed: O
            }), s.Z.dispatch({
              type: "STICKER_TRACK_USAGE",
              stickerIds: C
            }), s.Z.dispatch({
              type: "LOCAL_MESSAGE_CREATE",
              message: {
                channel_id: e,
                author: eh.default.getCurrentUser()
              }
            }), eU({
              content: g,
              channelId: e,
              messageId: o.body.id,
              location: null != S ? S : "chat_input",
              inviteAnalyticsMetadata: A
            }), eB(g, e, o.body.id, null != S ? S : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), null != h && s.Z.dispatch({
              type: "UPLOAD_COMPLETE",
              channelId: e,
              file: h._file,
              aborted: false
            }), t(o)
          } else {
            var c, d;
            let t;
            eL.log("Failed to send message", {
              hasErr: o.hasErr,
              status: o.status,
              code: null == (c = o.body) ? true : c.code,
              error: o.err
            });
            let i = false;
            if (o.hasErr) "ABORTED" === o.err.code && (i = true);
            else if (o.status >= 400 && o.status < 500 && o.body)
              if (o.body.code === eT.evJ.SLOWMODE_RATE_LIMITED) {
                let t = o.body.retry_after;
                null != t && t > 0 && s.Z.dispatch({
                  type: "SLOWMODE_SET_COOLDOWN",
                  channelId: e,
                  slowmodeType: ep.S.SendMessage,
                  cooldownMs: t * em.Z.Millis.SECOND
                })
              } else N.U8.has(o.body.code) ? s.Z.dispatch({
                type: "MESSAGE_SEND_FAILED_AUTOMOD",
                messageData: eE,
                errorResponseBody: {
                  code: o.body.code,
                  message: o.body.message
                }
              }) : o.body.code === eT.evJ.POGGERMODE_TEMPORARILY_DISABLED ? s.Z.dispatch({
                type: "POGGERMODE_TEMPORARILY_DISABLED"
              }) : o.body.code === eT.evJ.EXPLICIT_CONTENT ? t = eC.xi.EXPLICIT_CONTENT : null != L || ec || null != j || eH.sendClydeError(e, o.body.code);
            i ? eH.deleteMessage(e, ef, true) : (null != h && s.Z.dispatch({
              type: "UPLOAD_FAIL",
              channelId: e,
              file: h._file,
              messageId: ef,
              reason: t,
              noSendFailed: true
            }), o.hasErr || t !== eC.xi.EXPLICIT_CONTENT || eH.sendExplicitMediaClydeError(e, null == (d = o.body) ? true : d.attachments, T.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED), s.Z.dispatch({
              type: "MESSAGE_SEND_FAILED",
              messageId: ef,
              channelId: e,
              shouldNotify: !n.doNotNotifyOnError,
              reason: t
            }), (0, F.x)({
              failureCode: o.hasErr ? true : o.status,
              errorMessage: o.hasErr ? o.err.message : true
            }), u.ZP.cancelPendingSendRequests(e).forEach(e => {
              eL.log("Cancelling pending message", e.nonce), s.Z.dispatch({
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
      if ((0, eg.yE)(t.flags, eT.iLy.IS_COMPONENTS_V2)) {
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
      await ei.Z.unarchiveThreadIfNecessary(e);
      let a = eF(e, t),
        l = eZ(e, t),
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
        let r = !n.hasErr && N.U8.has(n.body.code);
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
        n.hasErr ? o.uv.announce(eN.intl.string(eN.t.Atp7FP)) : r ? o.uv.announce(eN.intl.string(eN.t.Hym4ix)) : o.uv.announce(eN.intl.string(eN.t["0x1HBD"])), eH.endEditMessage(e, n.hasErr ? true : n), eH.focusMessage({
          channelId: e,
          messageId: t
        })
      })
    },
    async suppressEmbeds(e, t) {
      await ei.Z.unarchiveThreadIfNecessary(e), a.tn.patch({
        url: eT.ANM.MESSAGE(e, t),
        body: {
          flags: eT.iLy.SUPPRESS_EMBEDS
        },
        oldFormErrors: true,
        rejectWithError: false
      })
    },
    async patchMessageAttachments(e, t, n) {
      await ei.Z.unarchiveThreadIfNecessary(e), a.tn.patch({
        url: eT.ANM.MESSAGE(e, t),
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
            o.uv.announce(eN.intl.string(eN.t.RYMs7s))
          })
        };
      n ? r() : (await ei.Z.unarchiveThreadIfNecessary(e), a.tn.del({
        url: eT.ANM.MESSAGE(e, t),
        oldFormErrors: true,
        rejectWithError: false
      }).then(() => {
        r()
      }))
    },
    dismissAutomatedMessage(e) {
      null != e.loggingName && d.ZP.trackWithMetadata(eT.rMx.AUTOMATED_MESSAGE_DISMISSED, {
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
      url: eT.ANM.MESSAGE_CROSSPOST(e, t),
      oldFormErrors: true,
      failImmediatelyWhenRateLimited: true,
      rejectWithError: false
    }).catch(e => {
      let t;
      t = 429 === e.status ? eN.intl.formatToPlainString(eN.t["77cuqz"], {
        retryAfter: Math.floor(e.body.retry_after / 60)
      }) : eN.intl.string(eN.t.z2gyNF), eI.Z.show({
        title: eN.intl.string(eN.t.Vd1hs6),
        body: t,
        confirmText: eN.intl.string(eN.t.BddRzS)
      })
    }),
    trackInvite: eG
  },
  eY = eH