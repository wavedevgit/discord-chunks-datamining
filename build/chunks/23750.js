/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Hx: () => g,
  ZP: () => v,
  pi: () => m
}), n(789020), n(653041);
var r = n(373793),
  i = n(81825),
  o = n(712057),
  a = n(978003),
  s = n(566006),
  l = n(995774),
  c = n(630388),
  u = n(358085),
  d = n(981631);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
class m extends i.Z {
  hasFlag(e) {
    return (0, c.yE)(this.flags, e)
  }
  constructor(e) {
    var t, n, r, i, o, a, s, l, c, u, _, p, h;
    super(), f(this, "type", void 0), f(this, "content", void 0), f(this, "attachments", void 0), f(this, "embeds", void 0), f(this, "timestamp", void 0), f(this, "editedTimestamp", void 0), f(this, "flags", void 0), f(this, "components", void 0), f(this, "codedLinks", void 0), f(this, "stickers", void 0), f(this, "stickerItems", void 0), f(this, "soundboardSounds", void 0), this.type = null !== (t = e.type) && void 0 !== t ? t : d.uaV.DEFAULT, this.content = null !== (n = e.content) && void 0 !== n ? n : "", this.attachments = null !== (r = e.attachments) && void 0 !== r ? r : [], this.embeds = null !== (i = e.embeds) && void 0 !== i ? i : [], this.timestamp = null !== (o = e.timestamp) && void 0 !== o ? o : new Date, this.editedTimestamp = null !== (a = e.editedTimestamp) && void 0 !== a ? a : null, this.flags = null !== (s = e.flags) && void 0 !== s ? s : 0, this.components = null !== (l = e.components) && void 0 !== l ? l : [], this.codedLinks = null !== (c = e.codedLinks) && void 0 !== c ? c : [], this.stickers = null !== (u = e.stickers) && void 0 !== u ? u : [], this.stickerItems = null !== (p = null !== (_ = e.sticker_items) && void 0 !== _ ? _ : e.stickerItems) && void 0 !== p ? p : [], this.soundboardSounds = null !== (h = e.soundboard_sounds) && void 0 !== h ? h : e.soundboardSounds
  }
}
class g extends i.Z {
  constructor(e) {
    super(), f(this, "message", void 0), this.message = new m(e.message)
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
    if ((0, a.Z)(this)) {
      var e;
      return null === (e = this.messageSnapshots[0]) || void 0 === e ? void 0 : e.message
    }
    return this
  }
  userHasReactedWithEmoji(e, t) {
    return this.reactions.some(n => {
      if ((0, l.ir)(n.emoji, e)) return t && n.me || !t && n.me_burst
    })
  }
  addReaction(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.O.NORMAL,
      i = -1,
      a = this.reactions.map((a, c) => {
        if ((0, l.ir)(a.emoji, e)) {
          if (i = c, r === s.O.BURST) {
            if (t && a.me) return a;
            let e = t && a.me_burst ? a.burst_count : a.burst_count + 1,
              r = null != a.burst_colors && a.burst_colors.length > 0 ? a.burst_colors : n;
            a = h(_({}, a), {
              me_burst: !!t || a.me_burst,
              burst_count: e,
              count_details: h(_({}, a.count_details), {
                burst: e
              }),
              burst_colors: r,
              themedBurstColors: (0, o.u)({
                colors: r,
                shouldProcessMobileColors: (0, u.isIOS)()
              })
            })
          } else if (r === s.O.VOTE) {
            var d, f;
            let e = null !== (f = null === (d = a.count_details) || void 0 === d ? void 0 : d.vote) && void 0 !== f ? f : 0,
              n = t && a.me_vote ? e : e + 1;
            a = h(_({}, a), {
              count_details: h(_({}, a.count_details), {
                vote: n
              }),
              me_vote: !!t || a.me_vote
            })
          } else {
            if (t && a.me_burst) return a;
            let e = t && a.me ? a.count : a.count + 1;
            a = h(_({}, a), {
              count: e,
              count_details: h(_({}, a.count_details), {
                normal: e
              }),
              me: !!t || a.me
            })
          }
        }
        return a
      });
    return -1 === i && (r === s.O.BURST ? a.push({
      emoji: e,
      me: !1,
      me_burst: t,
      count: 0,
      count_details: {
        burst: 1,
        normal: 0
      },
      burst_count: 1,
      burst_colors: n,
      themedBurstColors: (0, o.u)({
        colors: null != n ? n : [],
        shouldProcessMobileColors: (0, u.isIOS)()
      })
    }) : r === s.O.VOTE ? a.push({
      emoji: e,
      me: !1,
      me_burst: !1,
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
      me_burst: !1,
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
        emoji: i
      } = n;
      return r.reduce((e, n) => e.addReaction(i, n === t), e)
    }, this)
  }
  removeReaction(e) {
    var t, n, r, i;
    let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.O.NORMAL,
      c = -1,
      u = this.reactions.map((t, n) => {
        if ((0, l.ir)(t.emoji, e)) {
          if (a === s.O.BURST) {
            let e = o && !t.me_burst ? t.burst_count : t.burst_count - 1;
            t = h(_({}, t), {
              burst_count: e,
              me_burst: !o && t.me_burst,
              count_details: h(_({}, t.count_details), {
                burst: e
              })
            })
          } else if (a === s.O.VOTE) {
            var r, i;
            let e = null !== (i = null === (r = t.count_details) || void 0 === r ? void 0 : r.vote) && void 0 !== i ? i : 0,
              n = o && !t.me_vote ? e : e - 1;
            t = h(_({}, t), {
              count_details: h(_({}, t.count_details), {
                vote: n
              }),
              me_vote: !o && t.me_vote
            })
          } else {
            let e = o && !t.me ? t.count : t.count - 1;
            t = h(_({}, t), {
              count: e,
              me: !o && t.me,
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
      } = null !== (t = u[c]) && void 0 !== t ? t : {},
      m = null !== (n = null == p ? void 0 : p.normal) && void 0 !== n ? n : 0,
      g = null !== (r = null == p ? void 0 : p.burst) && void 0 !== r ? r : 0,
      E = null !== (i = null == p ? void 0 : p.vote) && void 0 !== i ? i : 0;
    return -1 !== c && d <= 0 && f <= 0 && m <= 0 && g <= 0 && E <= 0 && u.splice(c, 1), this.set("reactions", u)
  }
  removeReactionsForEmoji(e) {
    return this.set("reactions", this.reactions.filter(t => !(0, l.ir)(t.emoji, e)))
  }
  isSystemDM() {
    return this.author.isSystemUser()
  }
  isCommandType() {
    return this.type === d.uaV.CHAT_INPUT_COMMAND || this.type === d.uaV.CONTEXT_MENU_COMMAND
  }
  isPoll() {
    return null != this.poll
  }
  hasPotions() {
    var e, t;
    return (null !== (t = null === (e = this.potions) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0) > 0
  }
  isComponentsV2() {
    return (0, c.yE)(this.flags, d.iLy.IS_COMPONENTS_V2)
  }
  isInteractionPlaceholder() {
    return null != this.interaction && this.author.isNonUserBot()
  }
  canDeleteOwnMessage(e) {
    var t, n, i;
    if (this.author.id === e) return !0;
    let o = null !== (i = null === (t = this.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners) && void 0 !== i ? i : {};
    return (null === (n = this.interactionMetadata) || void 0 === n ? void 0 : n.user.id) === e && 1 === Object.keys(o).length && r.Y.USER_INSTALL in o
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
    var t, n;
    super(e), f(this, "id", void 0), f(this, "channel_id", void 0), f(this, "author", void 0), f(this, "bot", void 0), f(this, "customRenderedContent", void 0), f(this, "pinned", void 0), f(this, "mentions", void 0), f(this, "mentionRoles", void 0), f(this, "mentionChannels", void 0), f(this, "mentionEveryone", void 0), f(this, "mentioned", void 0), f(this, "tts", void 0), f(this, "giftCodes", void 0), f(this, "state", void 0), f(this, "nonce", void 0), f(this, "blocked", void 0), f(this, "ignored", void 0), f(this, "call", void 0), f(this, "webhookId", void 0), f(this, "reactions", void 0), f(this, "applicationId", void 0), f(this, "application", void 0), f(this, "activity", void 0), f(this, "activityInstance", void 0), f(this, "interaction", void 0), f(this, "interactionData", void 0), f(this, "interactionMetadata", void 0), f(this, "interactionError", void 0), f(this, "messageReference", void 0), f(this, "isSearchHit", void 0), f(this, "roleSubscriptionData", void 0), f(this, "purchaseNotification", void 0), f(this, "poll", void 0), f(this, "potions", void 0), f(this, "loggingName", void 0), f(this, "referralTrialOfferId", void 0), f(this, "giftInfo", void 0), f(this, "giftingPrompt", void 0), f(this, "messageSnapshots", void 0), f(this, "isUnsupported", void 0), f(this, "changelogId", void 0), f(this, "colorString", void 0), f(this, "nick", void 0), this.id = e.id, this.channel_id = e.channel_id, this.author = e.author, this.customRenderedContent = e.customRenderedContent, this.mentions = e.mentions || [], this.mentionRoles = e.mentionRoles || [], this.mentionChannels = e.mentionChannels || [], this.mentioned = e.mentioned || !1, this.pinned = e.pinned || !1, this.mentionEveryone = e.mentionEveryone || !1, this.tts = e.tts || !1, this.giftCodes = e.giftCodes || [], this.state = e.state || d.yb.SENT, this.nonce = e.nonce || null, this.blocked = e.blocked || !1, this.ignored = e.ignored || !1, this.call = e.call || null, this.bot = e.bot || !1, this.webhookId = e.webhookId || null, this.reactions = e.reactions || [], this.applicationId = e.application_id || e.applicationId || null, this.application = e.application || null, this.activity = e.activity || null, this.activityInstance = e.activity_instance || e.activityInstance || null, this.messageReference = e.messageReference || null, this.isSearchHit = e.hit || e.isSearchHit || !1, this.loggingName = e.loggingName || null, this.colorString = e.colorString, this.nick = e.nick, this.interaction = e.interaction || null, this.interactionData = e.interactionData || null, this.interactionMetadata = e.interactionMetadata || null, this.interactionError = e.interactionError || null, this.roleSubscriptionData = e.roleSubscriptionData, this.purchaseNotification = e.purchaseNotification, this.poll = e.poll, this.potions = e.potions, this.referralTrialOfferId = e.referralTrialOfferId || null, this.giftInfo = null !== (t = e.gift_info) && void 0 !== t ? t : e.giftInfo, this.giftingPrompt = e.giftingPrompt || null, this.messageSnapshots = e.messageSnapshots || [], this.isUnsupported = e.isUnsupported || !1, this.changelogId = null !== (n = e.changelog_id) && void 0 !== n ? n : e.changelogId || null
  }
}
let v = E