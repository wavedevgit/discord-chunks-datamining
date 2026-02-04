/** Chunk was on 21738 **/
/** chunk id: 35177, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk873298 = require("./873298.js"),
  Chunk406935 = require("./406935.js"),
  Chunk506774 = require("./506774.js"),
  Chunk168186 = require("./168186.js"),
  Chunk450510 = require("./450510.js"),
  Chunk734057 = require("./734057.js"),
  Chunk460288 = require("./460288.js"),
  Chunk761821 = require("./761821.js"),
  Chunk652215 = require("./652215.js"),
  Chunk573879 = require("./573879.js");

function g(e, t) {
  let n = false;
  return null == e.userContent && (e.userContent = {
    dismissedContents: new Uint8Array,
    lastReceivedChangelogId: "0",
    recurringDismissibleContentStates: {}
  }), null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array), (0, d.c0)(e.userContent.dismissedContents, t) || (e.userContent.dismissedContents = (0, d.Vf)(e.userContent.dismissedContents, t), n = true), n
}

function m(e, t, n) {
  return !!c.HP.hasHiddenHotspot(t) && g(e, n)
}
let A = [{
  version: 2,
  run(e) {
    var t, n;
    if (null != e.inbox) returnfalse;
    let r = false,
      i = l.Q0.create();
    e.inbox = i, s.w.get("seenInboxTutorial", false) && (i.viewedTutorial = true, r = true);
    let a = s.w.get("recentsButtonTab2");
    null != a && (i.currentTab = "Recent Mentions" === a ? l.Y2.MENTIONS : l.Y2.UNREADS, r = true);
    let o = null != (t = s.w.get("unread-messages-collapsed-channels")) ? t : {};
    for (let t in o) {
      if (!o[t]) continue;
      let i = u.A.getChannel(t);
      null != i && (r = true, (0, p.gc)(e, null != (n = i.guild_id) ? n : "0", i.id, e => {
        e.collapsedInInbox = true
      }))
    }
    return r
  },
  cleanup() {
    s.w.remove("seenInboxTutorial"), s.w.remove("recentsButtonTab2"), s.w.remove("unread-messages-collapsed-channels")
  }
}, {
  version: 3,
  run(e) {
    let {
      state: t
    } = r.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [() => ({
      diversitySurrogate: s.w.get("EmojiDiversitySurrogate") || ""
    })]);
    if (null == t) returnfalse;
    let n = false;
    return null != t.diversitySurrogate && "" !== t.diversitySurrogate && (null == e.textAndImages && (e.textAndImages = l.oJ.create()), null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = a.hU.create()), e.textAndImages.diversitySurrogate.value = t.diversitySurrogate, n = true), n
  },
  cleanup() {}
}, {
  version: 4,
  run(e) {
    let t = false;
    return (true === s.w.get("HAS_SEEN_HUB_UPSELL") || c.HP.hasHiddenHotspot(c._2.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) && (t = g(e, i.M.HUB_WAITLIST_UPSELL)), t
  },
  cleanup() {
    s.w.remove("HAS_SEEN_HUB_UPSELL")
  }
}, {
  version: 5,
  run(e) {
    var t, n, r, i, o, c, u;
    let d = false;
    e.textAndImages = null != (t = e.textAndImages) ? t : l.oJ.create(), e.notifications = null != (n = e.notifications) ? n : l.TY.create(), e.privacy = null != (r = e.privacy) ? r : l.E.create(), e.voiceAndVideo = null != (i = e.voiceAndVideo) ? i : l.GY.create(), e.gameLibrary = null != (o = e.gameLibrary) ? o : l.F1.create(), e.debug = null != (c = e.debug) ? c : l.X9.create();
    let p = null != (u = s.w.get("UserSettingsStore")) ? u : {};
    return "boolean" == typeof p.useRichChatTextBox && (e.textAndImages.useRichChatInput = a._t.create({
      value: p.useRichChatTextBox
    }), d = true), "string" == typeof p.renderSpoilers && (e.textAndImages.renderSpoilers = a.hU.create({
      value: p.renderSpoilers
    }), d = true), "boolean" == typeof p.useThreadSidebar && (e.textAndImages.useThreadSidebar = a._t.create({
      value: p.useThreadSidebar
    }), d = true), "boolean" == typeof p.showInAppNotifications && (e.notifications.showInAppNotifications = a._t.create({
      value: p.showInAppNotifications
    }), d = true), p.emojiPickerCollapsedSections instanceof Array && (e.textAndImages.emojiPickerCollapsedSections = p.emojiPickerCollapsedSections, d = true), p.stickerPickerCollapsedSections instanceof Array && (e.textAndImages.stickerPickerCollapsedSections = p.stickerPickerCollapsedSections, d = true), "boolean" == typeof p.viewImageDescriptions && (e.textAndImages.viewImageDescriptions = a._t.create({
      value: p.viewImageDescriptions
    }), d = true), "boolean" == typeof p.showCommandSuggestions && (e.textAndImages.showCommandSuggestions = a._t.create({
      value: p.showCommandSuggestions
    }), d = true), "boolean" == typeof p.alwaysPreviewVideo && (e.voiceAndVideo.alwaysPreviewVideo = a._t.create({
      value: p.alwaysPreviewVideo
    }), d = true), "boolean" == typeof p.notifyFriendsOnGoLive && (e.notifications.notifyFriendsOnGoLive = a._t.create({
      value: p.notifyFriendsOnGoLive
    }), d = true), "boolean" == typeof p.installShortcutDesktop && (e.gameLibrary.installShortcutDesktop = a._t.create({
      value: p.installShortcutDesktop
    }), d = true), "boolean" == typeof p.installShortcutStartMenu && (e.gameLibrary.installShortcutStartMenu = a._t.create({
      value: p.installShortcutStartMenu
    }), d = true), "boolean" == typeof p.allowActivityPartyPrivacyFriends && (e.privacy.allowActivityPartyPrivacyFriends = a._t.create({
      value: p.allowActivityPartyPrivacyFriends
    }), d = true), "boolean" == typeof p.allowActivityPartyPrivacyVoiceChannel && (e.privacy.allowActivityPartyPrivacyVoiceChannel = a._t.create({
      value: p.allowActivityPartyPrivacyVoiceChannel
    }), d = true), "boolean" == typeof p.rtcPanelShowVoiceStates && (e.debug.rtcPanelShowVoiceStates = a._t.create({
      value: p.rtcPanelShowVoiceStates
    }), d = true), d
  },
  cleanup() {}
}, {
  version: 7,
  run: e => m(e, c._2.APPLICATION_COMMAND_TOOLTIP, i.M.APPLICATION_COMMAND_TOOLTIP),
  cleanup() {}
}, {
  version: 8,
  run: e => m(e, c._2.CHANNEL_BANNER_MEMBER_LIST_NOTICE, i.M.CHANNELINFO_CHANNELBANNER_NOTICE),
  cleanup() {}
}, {
  version: 9,
  run: e => (c.HP.hasHiddenHotspot(c._2.MULTI_ACCOUNT_TOOLTIP) && s.w.set(f.JE, "true"), m(e, c._2.MULTI_ACCOUNT_TOOLTIP, i.M.ACCOUNT_MULTIACCOUNT_TOOLTIP)),
  cleanup() {}
}, {
  version: 10,
  run(e) {
    var t;
    let n = m(e, c._2.HUB_LINK_CHANNEL_NOTICE, i.M.CHANNEL_NOTICE_HUBLINK),
      r = null != (t = s.w.get("channelNotices")) ? t : {};
    returnfalse === r[h.n5X.INVITE] && g(e, i.M.CHANNEL_NOTICE_INVITE) && (n = true), false === r[h.n5X.QUICKSWITCHER] && g(e, i.M.CHANNEL_NOTICE_QUICKSWITCHER) && (n = true), false === r[h.n5X.GUILD_BOOSTING] && g(e, i.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (n = true), n
  },
  cleanup() {
    s.w.remove("channelNotices")
  }
}, {
  version: 11,
  run(e) {
    let t = false;
    return m(e, c._2.GUILD_EVENT_UPSELL, i.M.GUILD_HEADER_EVENT_UPSELL) && (t = true), m(e, c._2.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, i.M.GUILD_HEADER_ANIMATED_GUILD_BANNER) && (t = true), t
  },
  cleanup() {}
}, {
  version: 12,
  run(e) {
    let t = false;
    return s.w.get("hideNag") && g(e, i.M.NAGBAR_NOTICE_DOWNLOAD) && (t = true), s.w.get("hideConnectSpotify") && g(e, i.M.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = true), s.w.get("hideConnectPlayStation") && g(e, i.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = true), t
  },
  cleanup() {
    s.w.remove("hideNag"), s.w.remove("hideConnectSpotify"), s.w.remove("hideConnectPlayStation")
  }
}, {
  version: 13,
  run(e) {
    let t = false;
    return s.w.get("hidePremiumPromo") && g(e, i.M.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = true), s.w.get("hidePremiumTier2TrialEnding") && g(e, i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (t = true), s.w.get("hidePremiumReactivateNotice") && g(e, i.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = true), t
  },
  cleanup() {
    s.w.remove("hidePremiumPromo"), s.w.remove("hidePremiumTier2TrialEnding"), s.w.remove("hidePremiumReactivateNotice")
  }
}, {
  version: 14,
  run: e => m(e, c._2.ACTIVITY_BEB_TUTORIAL, i.M.ACTIVITIES_TUTORIAL_COACH_MARK),
  cleanup() {}
}, {
  version: 15,
  run: e => m(e, c._2.NOW_PLAYING_CONSENT_CARD, i.M.NOW_PLAYING_CONSENT_CARD),
  cleanup() {}
}, {
  version: 16,
  run(e) {
    let t = s.w.get("PromotionsPersistedStore");
    if (null == t) returnfalse;
    let n = t._state.lastDismissedOutboundPromotionStartDate;
    return null != n && (null == e.userContent && (e.userContent = l.YW.create()), null == e.userContent.lastDismissedOutboundPromotionStartDate) && (e.userContent.lastDismissedOutboundPromotionStartDate = a.hU.create({
      value: n
    }), true)
  },
  cleanup() {}
}, {
  version: 17,
  run(e) {
    let {
      state: t
    } = r.Ay.PersistedStore.migrateAndReadStoreState("ExpressionSuggestionsPersistedStore", null);
    if (null == t) returnfalse;
    let n = t.expressionSuggestionsEnabled;
    return null != n && (null == e.textAndImages && (e.textAndImages = l.oJ.create()), null == e.textAndImages.expressionSuggestionsEnabled) && (e.textAndImages.expressionSuggestionsEnabled = a._t.create({
      value: n
    }), true)
  },
  cleanup() {
    s.w.remove("ExpressionSuggestionsPersistedStore")
  }
}, {
  version: 18,
  run(e) {
    let t = false;
    return m(e, c._2.GUILD_DELETE_FEEDBACK, i.M.GUILD_DELETE_FEEDBACK) && (t = true), m(e, c._2.GUILD_LEAVE_FEEDBACK, i.M.GUILD_LEAVE_FEEDBACK) && (t = true), t
  },
  cleanup() {}
}, {
  version: 19,
  run(e) {
    var t;
    let n = false;
    return null != (t = s.w.get("forumHelperCardStorageKey")) && t && (n = g(e, i.M.FORUM_CHANNEL_HELPER_CARD)), n
  },
  cleanup() {
    s.w.remove("forumHelperCardStorageKey")
  }
}, {
  version: 20,
  run(e) {
    let t = s.w.get("lastChangeLogId");
    if (null == t) returnfalse;
    if (!(0, o.hT)(t)) return s.w.remove("lastChangeLogId"), false;
    if (null == e.userContent) e.userContent = l.YW.create();
    else if (null != e.userContent && null != e.userContent.lastReceivedChangelogId && "0" !== e.userContent.lastReceivedChangelogId) return s.w.remove("lastChangeLogId"), false;
    return e.userContent.lastReceivedChangelogId = t, true
  },
  cleanup() {
    s.w.remove("lastChangeLogId")
  }
}, {
  version: 21,
  run(e) {
    var t;
    return (null == (t = e.appearance) ? true : t.uiDensity) === l.NS.COMPACT && (e.appearance.uiDensity = l.NS.DEFAULT, true)
  },
  cleanup() {}
}]