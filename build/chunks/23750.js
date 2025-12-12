/** Chunk was on web.js **/
/** chunk id: 23750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hx: () => m,
  ZP: () => E,
  hv: () => g,
  pi: () => _
}), require("./997841.js"), require("./539854.js");
var Chunk373793 = require("./373793.js"),
  Chunk95015 = require("./95015.js"),
  Chunk81825 = require("./81825.js"),
  Chunk978003 = require("./978003.js"),
  Chunk566006 = require("./566006.js"),
  Chunk995774 = require("./995774.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class _ extends Chunk81825.Z {
  hasFlag(e) {
    return (0, i.yE)(this.flags, e)
  }
  constructor(e) {
    var t, n, r, i, a, o, s, l, d, f, p, _, m;
    super(), u(this, "type", true), u(this, "content", true), u(this, "attachments", true), u(this, "embeds", true), u(this, "timestamp", true), u(this, "editedTimestamp", true), u(this, "flags", true), u(this, "components", true), u(this, "codedLinks", true), u(this, "stickers", true), u(this, "stickerItems", true), u(this, "soundboardSounds", true), this.type = null != (t = e.type) ? t : c.uaV.DEFAULT, this.content = null != (n = e.content) ? n : "", this.attachments = null != (r = e.attachments) ? r : [], this.embeds = null != (i = e.embeds) ? i : [], this.timestamp = null != (a = e.timestamp) ? a : new Date, this.editedTimestamp = null != (o = e.editedTimestamp) ? o : null, this.flags = null != (s = e.flags) ? s : 0, this.components = null != (l = e.components) ? l : [], this.codedLinks = null != (d = e.codedLinks) ? d : [], this.stickers = null != (f = e.stickers) ? f : [], this.stickerItems = null != (_ = null != (p = e.sticker_items) ? p : e.stickerItems) ? _ : [], this.soundboardSounds = null != (m = e.soundboard_sounds) ? m : e.soundboardSounds
  }
}
class m extends Chunk81825.Z {
  constructor(e) {
    var t;
    super(), u(this, "message", true), u(this, "moderatorReport", true), this.message = new _(e.message), this.moderatorReport = null != (t = e.moderator_report) ? t : null
  }
}
class h extends _ {
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
      a = this.reactions.map((a, o) => {
        if ((0, l.ir)(a.emoji, e))
          if (i = o, r === s.O.BURST) {
            if (t && a.me) return a;
            let e = t && a.me_burst ? a.burst_count : a.burst_count + 1,
              r = null != a.burst_colors && a.burst_colors.length > 0 ? a.burst_colors : n;
            a = p(d({}, a), {
              me_burst: !!t || a.me_burst,
              burst_count: e,
              count_details: p(d({}, a.count_details), {
                burst: e
              }),
              burst_colors: r
            })
          } else if (r === s.O.VOTE) {
          var c, u;
          let e = null != (u = null == (c = a.count_details) ? true : c.vote) ? u : 0,
            n = t && a.me_vote ? e : e + 1;
          a = p(d({}, a), {
            count_details: p(d({}, a.count_details), {
              vote: n
            }),
            me_vote: !!t || a.me_vote
          })
        } else {
          if (t && a.me_burst) return a;
          let e = t && a.me ? a.count : a.count + 1;
          a = p(d({}, a), {
            count: e,
            count_details: p(d({}, a.count_details), {
              normal: e
            }),
            me: !!t || a.me
          })
        }
        return a
      });
    return false === i && (r === s.O.BURST ? a.push({
      emoji: e,
      me: false,
      me_burst: t,
      count: 0,
      count_details: {
        burst: 1,
        normal: 0
      },
      burst_count: 1,
      burst_colors: n
    }) : r === s.O.VOTE ? a.push({
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
    }) : a.push({
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
    })), this.set("reactions", a)
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
            t = p(d({}, t), {
              burst_count: e,
              me_burst: !a && t.me_burst,
              count_details: p(d({}, t.count_details), {
                burst: e
              })
            })
          } else if (o === s.O.VOTE) {
            var r, i;
            let e = null != (i = null == (r = t.count_details) ? true : r.vote) ? i : 0,
              n = a && !t.me_vote ? e : e - 1;
            t = p(d({}, t), {
              count_details: p(d({}, t.count_details), {
                vote: n
              }),
              me_vote: !a && t.me_vote
            })
          } else {
            let e = a && !t.me ? t.count : t.count - 1;
            t = p(d({}, t), {
              count: e,
              me: !a && t.me,
              count_details: p(d({}, t.count_details), {
                normal: e
              })
            })
          }
          c = n
        }
        return t
      }),
      {
        count: f,
        burst_count: _,
        count_details: m
      } = null != (t = u[c]) ? t : {},
      h = null != (n = null == m ? true : m.normal) ? n : 0,
      g = null != (r = null == m ? true : m.burst) ? r : 0,
      E = null != (i = null == m ? true : m.vote) ? i : 0;
    return false !== c && f <= 0 && _ <= 0 && h <= 0 && g <= 0 && E <= 0 && u.splice(c, 1), this.set("reactions", u)
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
    return p(d({}, this), {
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
    super(e), u(this, "id", true), u(this, "channel_id", true), u(this, "author", true), u(this, "bot", true), u(this, "customRenderedContent", true), u(this, "pinned", true), u(this, "mentions", true), u(this, "mentionRoles", true), u(this, "mentionChannels", true), u(this, "mentionGames", true), u(this, "mentionEveryone", true), u(this, "mentioned", true), u(this, "tts", true), u(this, "giftCodes", true), u(this, "state", true), u(this, "nonce", true), u(this, "blocked", true), u(this, "ignored", true), u(this, "call", true), u(this, "webhookId", true), u(this, "reactions", true), u(this, "applicationId", true), u(this, "application", true), u(this, "activity", true), u(this, "activityInstance", true), u(this, "interaction", true), u(this, "interactionData", true), u(this, "interactionMetadata", true), u(this, "interactionError", true), u(this, "messageReference", true), u(this, "isSearchHit", true), u(this, "roleSubscriptionData", true), u(this, "purchaseNotification", true), u(this, "poll", true), u(this, "sharedClientTheme", true), u(this, "potions", true), u(this, "loggingName", true), u(this, "referralTrialOfferId", true), u(this, "premiumGroupInviteId", true), u(this, "giftInfo", true), u(this, "giftingPrompt", true), u(this, "messageSnapshots", true), u(this, "isUnsupported", true), u(this, "changelogId", true), u(this, "colorString", true), u(this, "nick", true), this.id = e.id, this.channel_id = e.channel_id, this.author = e.author, this.customRenderedContent = e.customRenderedContent, this.mentions = e.mentions || [], this.mentionRoles = e.mentionRoles || [], this.mentionChannels = e.mentionChannels || [], this.mentionGames = e.mentionGames || [], this.mentioned = e.mentioned || false, this.pinned = e.pinned || false, this.mentionEveryone = e.mentionEveryone || false, this.tts = e.tts || false, this.giftCodes = e.giftCodes || [], this.state = e.state || c.yb.SENT, this.nonce = null != (t = e.nonce) ? t : true, this.blocked = e.blocked || false, this.ignored = e.ignored || false, this.call = e.call || null, this.bot = e.bot || false, this.webhookId = e.webhookId || null, this.reactions = e.reactions || [], this.applicationId = e.application_id || e.applicationId || null, this.application = e.application || null, this.activity = e.activity || null, this.activityInstance = e.activity_instance || e.activityInstance || null, this.messageReference = e.messageReference || null, this.isSearchHit = e.hit || e.isSearchHit || false, this.loggingName = e.loggingName || null, this.colorString = e.colorString, this.nick = e.nick, this.interaction = e.interaction || null, this.interactionData = e.interactionData || null, this.interactionMetadata = e.interactionMetadata || null, this.interactionError = e.interactionError || null, this.roleSubscriptionData = e.roleSubscriptionData, this.purchaseNotification = e.purchaseNotification, this.poll = e.poll, this.sharedClientTheme = e.shared_client_theme || e.sharedClientTheme, this.potions = e.potions, this.referralTrialOfferId = e.referralTrialOfferId || null, this.premiumGroupInviteId = e.premiumGroupInviteId || null, this.giftInfo = null != (n = e.gift_info) ? n : e.giftInfo, this.giftingPrompt = e.giftingPrompt || null, this.messageSnapshots = e.messageSnapshots || [], this.isUnsupported = e.isUnsupported || false, this.changelogId = null != (r = e.changelog_id) ? r : e.changelogId || null
  }
}

function g(e) {
  return (0, i.yE)(e.flags, c.iLy.IS_COMPONENTS_V2)
}
let E = h