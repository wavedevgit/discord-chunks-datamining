/** Chunk was on web.js **/
/** chunk id: 23750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hx: () => g,
  ZP: () => y,
  hv: () => b,
  pi: () => m
}), require("./997841.js"), require("./539854.js");
var Chunk373793 = require("./373793.js"),
  Chunk81825 = require("./81825.js"),
  Chunk712057 = require("./712057.js"),
  Chunk978003 = require("./978003.js"),
  Chunk566006 = require("./566006.js"),
  Chunk995774 = require("./995774.js"),
  Chunk630388 = require("./630388.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class m extends Chunk81825.Z {
  hasFlag(e) {
    return (0, c.yE)(this.flags, e)
  }
  constructor(e) {
    var t, n, r, i, a, o, s, l, c, u, _, p, h;
    super(), f(this, "type", true), f(this, "content", true), f(this, "attachments", true), f(this, "embeds", true), f(this, "timestamp", true), f(this, "editedTimestamp", true), f(this, "flags", true), f(this, "components", true), f(this, "codedLinks", true), f(this, "stickers", true), f(this, "stickerItems", true), f(this, "soundboardSounds", true), this.type = null != (t = e.type) ? t : d.uaV.DEFAULT, this.content = null != (n = e.content) ? n : "", this.attachments = null != (r = e.attachments) ? r : [], this.embeds = null != (i = e.embeds) ? i : [], this.timestamp = null != (a = e.timestamp) ? a : new Date, this.editedTimestamp = null != (o = e.editedTimestamp) ? o : null, this.flags = null != (s = e.flags) ? s : 0, this.components = null != (l = e.components) ? l : [], this.codedLinks = null != (c = e.codedLinks) ? c : [], this.stickers = null != (u = e.stickers) ? u : [], this.stickerItems = null != (p = null != (_ = e.sticker_items) ? _ : e.stickerItems) ? p : [], this.soundboardSounds = null != (h = e.soundboard_sounds) ? h : e.soundboardSounds
  }
}
class g extends Chunk81825.Z {
  constructor(e) {
    var t;
    super(), f(this, "message", true), f(this, "moderatorReport", true), this.message = new m(e.message), this.moderatorReport = null != (t = e.moderator_report) ? t : null
  }
}
class E extends m {
  isEdited() {
    return null != this.editedTimestamp
  }
  getChannelId() {
    return this.channel_id
  }
  getReaction(e) {
    return this.reactions.find(t => (0, l.ir)(t.emoji, e))
  }
  getContentMessage() {
    return (0, Chunk978003.Z)(this) ? this.messageSnapshots[0].message : this
  }
  userHasReactedWithEmoji(e, t) {
    return this.reactions.some(n => {
      if ((0, l.ir)(n.emoji, e)) return t && n.me || !t && n.me_burst
    })
  }
  addReaction(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : s.O.NORMAL,
      i = false,
      o = this.reactions.map((o, c) => {
        if ((0, l.ir)(o.emoji, e))
          if (i = c, r === s.O.BURST) {
            if (t && o.me) return o;
            let e = t && o.me_burst ? o.burst_count : o.burst_count + 1,
              r = null != o.burst_colors && o.burst_colors.length > 0 ? o.burst_colors : n;
            o = h(_({}, o), {
              me_burst: !!t || o.me_burst,
              burst_count: e,
              count_details: h(_({}, o.count_details), {
                burst: e
              }),
              burst_colors: r,
              themedBurstColors: (0, a.u)({
                colors: r,
                shouldProcessMobileColors: (0, u.isIOS)()
              })
            })
          } else if (r === s.O.VOTE) {
          var d, f;
          let e = null != (f = null == (d = o.count_details) ? true : d.vote) ? f : 0,
            n = t && o.me_vote ? e : e + 1;
          o = h(_({}, o), {
            count_details: h(_({}, o.count_details), {
              vote: n
            }),
            me_vote: !!t || o.me_vote
          })
        } else {
          if (t && o.me_burst) return o;
          let e = t && o.me ? o.count : o.count + 1;
          o = h(_({}, o), {
            count: e,
            count_details: h(_({}, o.count_details), {
              normal: e
            }),
            me: !!t || o.me
          })
        }
        return o
      });
    return false === i && (r === s.O.BURST ? o.push({
      emoji: e,
      me: false,
      me_burst: t,
      count: 0,
      count_details: {
        burst: 1,
        normal: 0
      },
      burst_count: 1,
      burst_colors: n,
      themedBurstColors: (0, a.u)({
        colors: null != n ? n : [],
        shouldProcessMobileColors: (0, u.isIOS)()
      })
    }) : r === s.O.VOTE ? o.push({
      emoji: e,
      me: false,
      me_burst: false,
      me_vote: t,
      count: 0,
      count_details: {
        burst: 0,
        normal: 0,
        vote: 1
      },
      burst_count: 0,
      burst_colors: []
    }) : o.push({
      emoji: e,
      me: t,
      me_burst: false,
      count: 1,
      count_details: {
        burst: 0,
        normal: 1
      },
      burst_count: 0,
      burst_colors: []
    })), this.set("reactions", o)
  }
  addReactionBatch(e, t) {
    return e.reduce((e, n) => {
      let {
        users: r,
        emoji: i,
        reactionType: a
      } = n;
      return r.reduce((e, n) => e.addReaction(i, n === t, [], a), e)
    }, this)
  }
  removeReaction(e) {
    var t, n, r, i;
    let a = arguments.length > 1 && true !== arguments[1] && arguments[1],
      o = arguments.length > 2 && true !== arguments[2] ? arguments[2] : s.O.NORMAL,
      c = false,
      u = this.reactions.map((t, n) => {
        if ((0, l.ir)(t.emoji, e)) {
          if (o === s.O.BURST) {
            let e = a && !t.me_burst ? t.burst_count : t.burst_count - 1;
            t = h(_({}, t), {
              burst_count: e,
              me_burst: !a && t.me_burst,
              count_details: h(_({}, t.count_details), {
                burst: e
              })
            })
          } else if (o === s.O.VOTE) {
            var r, i;
            let e = null != (i = null == (r = t.count_details) ? true : r.vote) ? i : 0,
              n = a && !t.me_vote ? e : e - 1;
            t = h(_({}, t), {
              count_details: h(_({}, t.count_details), {
                vote: n
              }),
              me_vote: !a && t.me_vote
            })
          } else {
            let e = a && !t.me ? t.count : t.count - 1;
            t = h(_({}, t), {
              count: e,
              me: !a && t.me,
              count_details: h(_({}, t.count_details), {
                normal: e
              })
            })
          }
          c = n
        }
        return t
      }),
      {
        count: d,
        burst_count: f,
        count_details: p
      } = null != (t = u[c]) ? t : {},
      m = null != (n = null == p ? true : p.normal) ? n : 0,
      g = null != (r = null == p ? true : p.burst) ? r : 0,
      E = null != (i = null == p ? true : p.vote) ? i : 0;
    return false !== c && d <= 0 && f <= 0 && m <= 0 && g <= 0 && E <= 0 && u.splice(c, 1), this.set("reactions", u)
  }
  removeReactionsForEmoji(e) {
    return this.set("reactions", this.reactions.filter(t => !(0, l.ir)(t.emoji, e)))
  }
  isSystemDM() {
    return this.author.isSystemUser()
  }
  isCommandType() {
    return this.type === Chunk981631.uaV.CHAT_INPUT_COMMAND || this.type === Chunk981631.uaV.CONTEXT_MENU_COMMAND
  }
  isPoll() {
    return null != this.poll
  }
  hasPotions() {
    var e, t;
    return (null != (t = null == (e = this.potions) ? true : module.length) ? exports : 0) > 0
  }
  isInteractionPlaceholder() {
    return null != this.interaction && this.author.isNonUserBot()
  }
  canDeleteOwnMessage(e) {
    var t, n, i;
    if (this.author.id === e) returntrue;
    let a = null != (i = null == (t = this.interactionMetadata) ? true : t.authorizing_integration_owners) ? i : {};
    return (null == (n = this.interactionMetadata) ? true : n.user.id) === e && 1 === Object.keys(a).length && r.Y.USER_INSTALL in a
  }
  toJS() {
    return h(_({}, this), {
      webkhook_id: this.webhookId,
      edited_timestamp: this.editedTimestamp,
      mention_everyone: this.mentionEveryone
    })
  }
  isFirstMessageInForumPost(e) {
    return this.id === this.channel_id && e.isForumPost()
  }
  constructor(e) {
    var t, n, r;
    super(e), f(this, "id", true), f(this, "channel_id", true), f(this, "author", true), f(this, "bot", true), f(this, "customRenderedContent", true), f(this, "pinned", true), f(this, "mentions", true), f(this, "mentionRoles", true), f(this, "mentionChannels", true), f(this, "mentionGames", true), f(this, "mentionEveryone", true), f(this, "mentioned", true), f(this, "tts", true), f(this, "giftCodes", true), f(this, "state", true), f(this, "nonce", true), f(this, "blocked", true), f(this, "ignored", true), f(this, "call", true), f(this, "webhookId", true), f(this, "reactions", true), f(this, "applicationId", true), f(this, "application", true), f(this, "activity", true), f(this, "activityInstance", true), f(this, "interaction", true), f(this, "interactionData", true), f(this, "interactionMetadata", true), f(this, "interactionError", true), f(this, "messageReference", true), f(this, "isSearchHit", true), f(this, "roleSubscriptionData", true), f(this, "purchaseNotification", true), f(this, "poll", true), f(this, "potions", true), f(this, "loggingName", true), f(this, "referralTrialOfferId", true), f(this, "giftInfo", true), f(this, "giftingPrompt", true), f(this, "messageSnapshots", true), f(this, "isUnsupported", true), f(this, "changelogId", true), f(this, "chatWallpaperInfo", true), f(this, "colorString", true), f(this, "nick", true), this.id = e.id, this.channel_id = e.channel_id, this.author = e.author, this.customRenderedContent = e.customRenderedContent, this.mentions = e.mentions || [], this.mentionRoles = e.mentionRoles || [], this.mentionChannels = e.mentionChannels || [], this.mentionGames = e.mentionGames || [], this.mentioned = e.mentioned || false, this.pinned = e.pinned || false, this.mentionEveryone = e.mentionEveryone || false, this.tts = e.tts || false, this.giftCodes = e.giftCodes || [], this.state = e.state || d.yb.SENT, this.nonce = null != (t = e.nonce) ? t : true, this.blocked = e.blocked || false, this.ignored = e.ignored || false, this.call = e.call || null, this.bot = e.bot || false, this.webhookId = e.webhookId || null, this.reactions = e.reactions || [], this.applicationId = e.application_id || e.applicationId || null, this.application = e.application || null, this.activity = e.activity || null, this.activityInstance = e.activity_instance || e.activityInstance || null, this.messageReference = e.messageReference || null, this.isSearchHit = e.hit || e.isSearchHit || false, this.loggingName = e.loggingName || null, this.colorString = e.colorString, this.nick = e.nick, this.interaction = e.interaction || null, this.interactionData = e.interactionData || null, this.interactionMetadata = e.interactionMetadata || null, this.interactionError = e.interactionError || null, this.roleSubscriptionData = e.roleSubscriptionData, this.purchaseNotification = e.purchaseNotification, this.poll = e.poll, this.potions = e.potions, this.referralTrialOfferId = e.referralTrialOfferId || null, this.giftInfo = null != (n = e.gift_info) ? n : e.giftInfo, this.giftingPrompt = e.giftingPrompt || null, this.messageSnapshots = e.messageSnapshots || [], this.isUnsupported = e.isUnsupported || false, this.changelogId = null != (r = e.changelog_id) ? r : e.changelogId || null, this.chatWallpaperInfo = e.chatWallpaperInfo || null
  }
}

function b(e) {
  return (0, c.yE)(e.flags, d.iLy.IS_COMPONENTS_V2)
}
let y = E