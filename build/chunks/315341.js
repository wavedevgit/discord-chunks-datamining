/** Chunk was on 1272 **/
/** chunk id: 315341, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk524437 = require("./524437.js"),
  Chunk381499 = require("./381499.js"),
  Chunk433517 = require("./433517.js"),
  Chunk581364 = require("./581364.js"),
  Chunk536442 = require("./536442.js"),
  Chunk592125 = require("./592125.js"),
  Chunk915486 = require("./915486.js"),
  Chunk48481 = require("./48481.js"),
  Chunk981631 = require("./981631.js"),
  Chunk71509 = require("./71509.js");

function h(e, t) {
  let n = false;
  return null == e.userContent && (e.userContent = {
    dismissedContents: new Uint8Array,
    lastReceivedChangelogId: "0",
    recurringDismissibleContentStates: {}
  }), null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array), (0, d.jl)(e.userContent.dismissedContents, t) || (e.userContent.dismissedContents = (0, d.GV)(e.userContent.dismissedContents, t), n = true), n
}

function m(e, t, n) {
  return !!c.qc.hasHiddenHotspot(t) && h(e, n)
}
let _ = [{
  version: 2,
  run(e) {
    var t, n;
    if (null != e.inbox) returnfalse;
    let r = false,
      i = l.f9.create();
    e.inbox = i, s.K.get("seenInboxTutorial", false) && (i.viewedTutorial = true, r = true);
    let a = s.K.get("recentsButtonTab2");
    null != a && (i.currentTab = "Recent Mentions" === a ? l.X.MENTIONS : l.X.UNREADS, r = true);
    let o = null != (t = s.K.get("unread-messages-collapsed-channels")) ? t : {};
    for (let t in o) {
      if (!o[t]) continue;
      let i = u.Z.getChannel(t);
      null != i && (r = true, (0, p.i7)(e, null != (n = i.guild_id) ? n : "0", i.id, e => {
        e.collapsedInInbox = true
      }))
    }
    return r
  },
  cleanup() {
    Chunk433517.K.remove("seenInboxTutorial"), Chunk433517.K.remove("recentsButtonTab2"), Chunk433517.K.remove("unread-messages-collapsed-channels")
  }
}, {
  version: 3,
  run(e) {
    let {
      state: t
    } = r.ZP.PersistedStore.migrateAndReadStoreState("EmojiStore", [() => ({
      diversitySurrogate: s.K.get("EmojiDiversitySurrogate") || ""
    })]);
    if (null == t) returnfalse;
    let n = false;
    return null != t.diversitySurrogate && "" !== t.diversitySurrogate && (null == e.textAndImages && (e.textAndImages = l.Me.create()), null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = a.Gm.create()), e.textAndImages.diversitySurrogate.value = t.diversitySurrogate, n = true), n
  },
  cleanup() {}
}, {
  version: 4,
  run(e) {
    let t = false;
    return (true === s.K.get("HAS_SEEN_HUB_UPSELL") || c.qc.hasHiddenHotspot(c.v6.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) && (t = h(e, i.z.HUB_WAITLIST_UPSELL)), t
  },
  cleanup() {
    Chunk433517.K.remove("HAS_SEEN_HUB_UPSELL")
  }
}, {
  version: 5,
  run(e) {
    var t, n, r, i, o, c, u;
    let d = false;
    e.textAndImages = null != (t = e.textAndImages) ? t : l.Me.create(), e.notifications = null != (n = e.notifications) ? n : l.sf.create(), e.privacy = null != (r = e.privacy) ? r : l.bE.create(), e.voiceAndVideo = null != (i = e.voiceAndVideo) ? i : l.v_.create(), e.gameLibrary = null != (o = e.gameLibrary) ? o : l.Fm.create(), e.debug = null != (c = e.debug) ? c : l.tA.create();
    let p = null != (u = s.K.get("UserSettingsStore")) ? u : {};
    return "boolean" == typeof p.useRichChatTextBox && (e.textAndImages.useRichChatInput = a.D5.create({
      value: p.useRichChatTextBox
    }), d = true), "string" == typeof p.renderSpoilers && (e.textAndImages.renderSpoilers = a.Gm.create({
      value: p.renderSpoilers
    }), d = true), "boolean" == typeof p.useThreadSidebar && (e.textAndImages.useThreadSidebar = a.D5.create({
      value: p.useThreadSidebar
    }), d = true), "boolean" == typeof p.showInAppNotifications && (e.notifications.showInAppNotifications = a.D5.create({
      value: p.showInAppNotifications
    }), d = true), p.emojiPickerCollapsedSections instanceof Array && (e.textAndImages.emojiPickerCollapsedSections = p.emojiPickerCollapsedSections, d = true), p.stickerPickerCollapsedSections instanceof Array && (e.textAndImages.stickerPickerCollapsedSections = p.stickerPickerCollapsedSections, d = true), "boolean" == typeof p.viewImageDescriptions && (e.textAndImages.viewImageDescriptions = a.D5.create({
      value: p.viewImageDescriptions
    }), d = true), "boolean" == typeof p.showCommandSuggestions && (e.textAndImages.showCommandSuggestions = a.D5.create({
      value: p.showCommandSuggestions
    }), d = true), "boolean" == typeof p.alwaysPreviewVideo && (e.voiceAndVideo.alwaysPreviewVideo = a.D5.create({
      value: p.alwaysPreviewVideo
    }), d = true), "boolean" == typeof p.notifyFriendsOnGoLive && (e.notifications.notifyFriendsOnGoLive = a.D5.create({
      value: p.notifyFriendsOnGoLive
    }), d = true), "boolean" == typeof p.installShortcutDesktop && (e.gameLibrary.installShortcutDesktop = a.D5.create({
      value: p.installShortcutDesktop
    }), d = true), "boolean" == typeof p.installShortcutStartMenu && (e.gameLibrary.installShortcutStartMenu = a.D5.create({
      value: p.installShortcutStartMenu
    }), d = true), "boolean" == typeof p.allowActivityPartyPrivacyFriends && (e.privacy.allowActivityPartyPrivacyFriends = a.D5.create({
      value: p.allowActivityPartyPrivacyFriends
    }), d = true), "boolean" == typeof p.allowActivityPartyPrivacyVoiceChannel && (e.privacy.allowActivityPartyPrivacyVoiceChannel = a.D5.create({
      value: p.allowActivityPartyPrivacyVoiceChannel
    }), d = true), "boolean" == typeof p.rtcPanelShowVoiceStates && (e.debug.rtcPanelShowVoiceStates = a.D5.create({
      value: p.rtcPanelShowVoiceStates
    }), d = true), d
  },
  cleanup() {}
}, {
  version: 7,
  run: e => m(e, c.v6.APPLICATION_COMMAND_TOOLTIP, i.z.APPLICATION_COMMAND_TOOLTIP),
  cleanup() {}
}, {
  version: 8,
  run: e => m(e, c.v6.CHANNEL_BANNER_MEMBER_LIST_NOTICE, i.z.CHANNELINFO_CHANNELBANNER_NOTICE),
  cleanup() {}
}, {
  version: 9,
  run: e => (c.qc.hasHiddenHotspot(c.v6.MULTI_ACCOUNT_TOOLTIP) && s.K.set(g.Ip, "true"), m(e, c.v6.MULTI_ACCOUNT_TOOLTIP, i.z.ACCOUNT_MULTIACCOUNT_TOOLTIP)),
  cleanup() {}
}, {
  version: 10,
  run(e) {
    var t;
    let n = m(e, c.v6.HUB_LINK_CHANNEL_NOTICE, i.z.CHANNEL_NOTICE_HUBLINK),
      r = null != (t = s.K.get("channelNotices")) ? t : {};
    returnfalse === r[f.vID.INVITE] && h(e, i.z.CHANNEL_NOTICE_INVITE) && (n = true), false === r[f.vID.QUICKSWITCHER] && h(e, i.z.CHANNEL_NOTICE_QUICKSWITCHER) && (n = true), false === r[f.vID.GUILD_BOOSTING] && h(e, i.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (n = true), n
  },
  cleanup() {
    Chunk433517.K.remove("channelNotices")
  }
}, {
  version: 11,
  run(e) {
    let t = false;
    return m(e, c.v6.GUILD_EVENT_UPSELL, i.z.GUILD_HEADER_EVENT_UPSELL) && (t = true), m(e, c.v6.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, i.z.GUILD_HEADER_ANIMATED_GUILD_BANNER) && (t = true), t
  },
  cleanup() {}
}, {
  version: 12,
  run(e) {
    let t = false;
    return s.K.get("hideNag") && h(e, i.z.NAGBAR_NOTICE_DOWNLOAD) && (t = true), s.K.get("hideConnectSpotify") && h(e, i.z.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = true), s.K.get("hideConnectPlayStation") && h(e, i.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = true), t
  },
  cleanup() {
    Chunk433517.K.remove("hideNag"), Chunk433517.K.remove("hideConnectSpotify"), Chunk433517.K.remove("hideConnectPlayStation")
  }
}, {
  version: 13,
  run(e) {
    let t = false;
    return s.K.get("hidePremiumPromo") && h(e, i.z.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = true), s.K.get("hidePremiumTier2TrialEnding") && h(e, i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (t = true), s.K.get("hidePremiumReactivateNotice") && h(e, i.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = true), t
  },
  cleanup() {
    Chunk433517.K.remove("hidePremiumPromo"), Chunk433517.K.remove("hidePremiumTier2TrialEnding"), Chunk433517.K.remove("hidePremiumReactivateNotice")
  }
}, {
  version: 14,
  run: e => m(e, c.v6.ACTIVITY_BEB_TUTORIAL, i.z.ACTIVITIES_TUTORIAL_COACH_MARK),
  cleanup() {}
}, {
  version: 15,
  run: e => m(e, c.v6.NOW_PLAYING_CONSENT_CARD, i.z.NOW_PLAYING_CONSENT_CARD),
  cleanup() {}
}, {
  version: 16,
  run(e) {
    let t = s.K.get("PromotionsPersistedStore");
    if (null == t) returnfalse;
    let n = t._state.lastDismissedOutboundPromotionStartDate;
    return null != n && (null == e.userContent && (e.userContent = l.az.create()), null == e.userContent.lastDismissedOutboundPromotionStartDate) && (e.userContent.lastDismissedOutboundPromotionStartDate = a.Gm.create({
      value: n
    }), true)
  },
  cleanup() {}
}, {
  version: 17,
  run(e) {
    let {
      state: t
    } = r.ZP.PersistedStore.migrateAndReadStoreState("ExpressionSuggestionsPersistedStore", null);
    if (null == t) returnfalse;
    let n = t.expressionSuggestionsEnabled;
    return null != n && (null == e.textAndImages && (e.textAndImages = l.Me.create()), null == e.textAndImages.expressionSuggestionsEnabled) && (e.textAndImages.expressionSuggestionsEnabled = a.D5.create({
      value: n
    }), true)
  },
  cleanup() {
    Chunk433517.K.remove("ExpressionSuggestionsPersistedStore")
  }
}, {
  version: 18,
  run(e) {
    let t = false;
    return m(e, c.v6.GUILD_DELETE_FEEDBACK, i.z.GUILD_DELETE_FEEDBACK) && (t = true), m(e, c.v6.GUILD_LEAVE_FEEDBACK, i.z.GUILD_LEAVE_FEEDBACK) && (t = true), t
  },
  cleanup() {}
}, {
  version: 19,
  run(e) {
    var t;
    let n = false;
    return null != (t = s.K.get("forumHelperCardStorageKey")) && t && (n = h(e, i.z.FORUM_CHANNEL_HELPER_CARD)), n
  },
  cleanup() {
    Chunk433517.K.remove("forumHelperCardStorageKey")
  }
}, {
  version: 20,
  run(e) {
    let t = s.K.get("lastChangeLogId");
    if (null == t) returnfalse;
    if (!(0, o.BH)(t)) return s.K.remove("lastChangeLogId"), false;
    if (null == e.userContent) e.userContent = l.az.create();
    else if (null != e.userContent && null != e.userContent.lastReceivedChangelogId && "0" !== e.userContent.lastReceivedChangelogId) return s.K.remove("lastChangeLogId"), false;
    return e.userContent.lastReceivedChangelogId = t, true
  },
  cleanup() {
    Chunk433517.K.remove("lastChangeLogId")
  }
}, {
  version: 21,
  run(e) {
    var t;
    return (null == (t = e.appearance) ? true : t.uiDensity) === l.Pi.COMPACT && (e.appearance.uiDensity = l.Pi.DEFAULT, true)
  },
  cleanup() {}
}]