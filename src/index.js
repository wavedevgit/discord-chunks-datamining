import fs from 'fs/promises';
import jsBeautify from 'js-beautify';
import cssbueatify from 'cssbeautify';
import getModules from './utils/getModules.js';
import { getChunks, formatCode } from './utils/getChunks.js';
import determineType from './utils/getChunkType.js';
import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import { readAbleCode } from './utils/toreadAbleCode.js';
import { reverseJsxFromString } from './utils/reverseJsx.js';
import { generators } from './utils/makeChunkName.js';

const { js: beautify } = jsBeautify;

const base = 'https://canary.discord.com';
async function getText(url, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
            return await res.text();
        } catch (err) {
            if (i === retries - 1) throw err; // no more retries
            await new Promise((r) => setTimeout(r, delay)); // wait before retry
        }
    }
}

async function save(name, content) {
    await fs.writeFile(name, content, 'utf-8');
}
function asset(path) {
    return path.startsWith('assets')
        ? base + '/' + path
        : base + '/assets/' + path;
}
async function perf(func, name) {
    const start = Date.now();
    console.log('! ' + name);
    await func();
    const end = Date.now();
    console.log(
        '* Done, ' + name,
        'Time Taken ' + Math.abs(start - end) / 1000 + 's',
    );
    return Math.abs(start - end) / 1000;
}

const discordPaths = [
    '../discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx',
    '../discord_common/js/packages/flux/PersistedStore.tsx',
    '../discord_common/js/packages/flux/Store.tsx',
    '../discord_common/js/packages/flux/createFetchStore.tsx',
    '../discord_common/js/packages/flux/useStateFromStores.tsx',
    '../discord_common/js/packages/flux/BatchedStoreListener.tsx',
    '../discord_common/js/packages/flux/connectStores.tsx',
    'modules/app_analytics/ImpressionStore.tsx',
    'stores/DeveloperOptionsStore.tsx',
    'modules/a11y/AccessibilityStore.tsx',
    'modules/low_performance_mode/LowPerformanceModeStore.tsx',
    'modules/user_settings/UserSettingsProtoStore.tsx',
    'modules/user_settings/UserSettingsOverridesStore.tsx',
    'modules/user_settings/SelectivelySyncedUserSettingsStore.tsx',
    'modules/dismissible_content/DCFEventStore.tsx',
    'modules/dismissible_content/DismissibleContentFrameworkStore.tsx',
    'modules/dismissible_content/DismissibleContentShownStateStore.tsx',
    'modules/auth/LoginRequiredActionStore.tsx',
    'stores/UserRequiredActionStore.tsx',
    'modules/activities/EmbeddedActivitiesStore.tsx',
    'stores/AuthenticationStore.tsx',
    'stores/BrowserHandoffStore.native.tsx',
    'stores/MobileCacheSnapshotStore.tsx',
    'modules/cache/ClientStateStoreStorage.native.tsx',
    'stores/ChannelStore.tsx',
    'modules/app_database/stores/BasicChannelCacheStore.tsx',
    'stores/GuildMembershipStore.tsx',
    'modules/favorites/FavoriteStore.tsx',
    'modules/stage_channels/StageInstanceStore.tsx',
    'stores/GuildStore.tsx',
    'modules/libdiscore/stores/kv/KvStore.tsx',
    'modules/screen/native/DimensionsStore.android.tsx',
    'modules/keyboard/native/subscribeToKeyboardUIStore.tsx',
    'modules/keyboard/native/KeyboardUIStore.native.tsx',
    'modules/safe_area/SafeAreaStore.native.tsx',
    'modules/experiments/apex/ApexExperimentStore.tsx',
    '../discord_common/js/packages/apex/BaseApexExperimentStore.tsx',
    'modules/libdiscore/stores/BridgedStore.tsx',
    'stores/UserStore.tsx',
    'modules/premium/OverridePremiumTypeStore.tsx',
    'modules/user/UserStoreUtils.tsx',
    'modules/user/UserStoreConstants.tsx',
    'stores/SelectedChannelStore.tsx',
    'stores/GuildChannelStore.tsx',
    'modules/channel/GatedChannelStore.tsx',
    'modules/impersonate/ImpersonateStore.tsx',
    'stores/GuildRoleStore.tsx',
    'modules/libdiscore/stores/kkv/KkvStore.tsx',
    'stores/GuildMemberStore.tsx',
    'modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx',
    'modules/user_settings/LocaleStore.tsx',
    'intl/IntlLoaderStore.tsx',
    'modules/experiments/ExperimentStore.tsx',
    'modules/auth/AuthInviteStore.tsx',
    'stores/GuildMemberCountStore.tsx',
    'modules/guild_role_subscriptions/GuildRoleSubscriptionsStore.tsx',
    'stores/PermissionStore.tsx',
    'modules/lurker_mode/LurkingStore.tsx',
    'modules/threads/JoinedThreadsStore.tsx',
    'stores/RelationshipStore.tsx',
    'stores/billing/BillingInfoStore.tsx',
    'stores/billing/PaymentSourceStore.tsx',
    'stores/billing/SubscriptionPlanStore.tsx',
    'stores/billing/SubscriptionStore.tsx',
    'stores/billing/BraintreeStore.tsx',
    'modules/action_sheet/native/ActionSheetStore.tsx',
    'modules/user_settings/ThemeStore.tsx',
    'modules/user_settings/UnsyncedUserSettingsStore.tsx',
    'modules/client_themes/native/CustomThemeMobileStore.tsx',
    'modules/client_themes/ClientThemeColorPickerStore.tsx',
    'modules/client_themes/SavedCustomThemeStore.tsx',
    'modules/client_themes/ClientThemesBackgroundStore.tsx',
    'stores/SelectedGuildStore.tsx',
    'modules/guild_member_verification/UserGuildJoinRequestStore.tsx',
    'stores/DefaultRouteStore.tsx',
    'stores/StreamerModeStore.tsx',
    'stores/InviteStore.tsx',
    'modules/guild_scheduled_events/GuildScheduledEventStore.tsx',
    'stores/PremiumPaymentModalStore.tsx',
    'modules/applications/ApplicationStore.tsx',
    'modules/gateway/PostConnectionCallbackStore.tsx',
    'modules/nuf/NewUserStore.tsx',
    'modules/gateway/GatewayConnectionStore.tsx',
    'stores/CallStore.tsx',
    'stores/MediaEngineStore.tsx',
    'modules/clips/ClipsStore.tsx',
    'modules/game_detection/RunningGameStore.native.tsx',
    'stores/GameStore.tsx',
    'stores/LibraryApplicationStore.tsx',
    'modules/slayer_storefront/SlayerStorefrontUtils.tsx',
    'stores/game_store/SKUStore.tsx',
    'modules/rtc/SecureFramesPersistedStore.tsx',
    'modules/voice_filters/VoiceFilterPersistedStore.tsx',
    'stores/BitRateStore.tsx',
    'stores/CertifiedDeviceStore.tsx',
    'stores/RTCConnectionStore.tsx',
    'modules/game_console/GameConsoleStore.tsx',
    'stores/SessionsStore.tsx',
    'stores/VoiceStateStore.tsx',
    'stores/views/SortedVoiceStateStore.tsx',
    'modules/media_engine/DeviceFrecencyStore.tsx',
    'modules/media_engine/MediaEngineStatsStore.tsx',
    'stores/StreamRTCConnectionStore.tsx',
    'stores/PresenceStore.tsx',
    'modules/hang_status/HangStatusStore.tsx',
    'stores/ApplicationStreamingSettingsStore.tsx',
    'stores/HookErrorStore.tsx',
    'stores/NetworkStore.tsx',
    'stores/RTCRegionStore.tsx',
    'stores/SystemAnalyticsStore.native.tsx',
    'stores/ApplicationStreamingStore.tsx',
    'modules/keyboard/native/PortalKeyboardUIStore.native.tsx',
    'lib/ZustandStore.tsx',
    'modules/changelog/ChangelogStore.tsx',
    'stores/ReadStateStore.tsx',
    'modules/calls/ChannelRTCStore.tsx',
    'stores/SpeakingStore.tsx',
    'stores/VideoStreamStore.tsx',
    'modules/soundboard/SoundboardStore.tsx',
    'modules/message_request/MessageRequestStore.tsx',
    'modules/message_request/SpamMessageRequestStore.tsx',
    'modules/notification_center/NotificationCenterItemsStore.tsx',
    'modules/game_mentions/stores/GameMentionSettingsStore.tsx',
    'stores/game_library/LibraryApplicationStatisticsStore.tsx',
    'stores/UploadAttachmentStore.tsx',
    'stores/DraftStore.tsx',
    'stores/GuildAvailabilityStore.tsx',
    'modules/devtools/dev_settings/DevSettingsStore.tsx',
    'modules/native_permissions/NativePermissionStore.tsx',
    'design/components/AlertModal/native/useAlertStore.native.tsx',
    'modules/visual_effect_view/native/overrides/VEVOOStore.tsx',
    'modules/user_settings/native/appearance/FontScaleStore.tsx',
    'modules/stickers/StickerMessagePreviewStore.tsx',
    'modules/threads/ActiveThreadsStore.tsx',
    'stores/ChannelSectionStore.tsx',
    'modules/search/SearchMessageStore.tsx',
    'stores/DimensionStore.tsx',
    'stores/IdleStore.tsx',
    'stores/GuildVerificationStore.tsx',
    'modules/stage_channels/StageChannelParticipantStore.tsx',
    'modules/stage_channels/StageChannelRoleStore.tsx',
    'stores/MessageStore.tsx',
    'experiments/StoreLatestMessageDataExperiment.tsx',
    'modules/explicit_media_redaction/ExplicitMediaStore.tsx',
    'modules/replies/ReferencedMessageStore.tsx',
    'modules/explicit_media_redaction/ExplicitMediaSearchStore.tsx',
    'stores/UserGuildSettingsStore.tsx',
    'modules/guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx',
    'modules/guild_onboarding_home/GuildOnboardingMemberActionStore.tsx',
    'stores/AnalyticsTrackingStore.tsx',
    'modules/voice_filters/VoiceFilterStore.tsx',
    'modules/cache/CacheStore.tsx',
    'modules/app_database/modules/messages/SaveableChannelsStore.tsx',
    'modules/app_database/stores/FileSystemStore.tsx',
    'stores/SortedGuildStore.tsx',
    'stores/ExpandedGuildFolderStore.tsx',
    'modules/app_startup/AllCacheStores.native.tsx',
    'modules/guild_mod_dash_member_safety/MemberSafetyStore.tsx',
    'modules/guild_mod_dash_member_safety/GuildMemberSafetyPageStore.tsx',
    'modules/guild_mod_dash_member_safety/MemberSafetyStoreSupplemental.tsx',
    'stores/ConnectedAccountsStore.tsx',
    'modules/guild_sidebar/ChannelListStore.tsx',
    'modules/threads/ActiveJoinedThreadsStore.tsx',
    'stores/GuildNSFWAgreeStore.tsx',
    'modules/auth/PromoEmailConsentStore.tsx',
    'stores/ConsentStore.tsx',
    'stores/CategoryCollapseStore.tsx',
    'stores/CollapsedVoiceChannelStore.tsx',
    'modules/channel/ChannelStatusStore.tsx',
    'modules/opt_in_channels/FavoritesSuggestionStore.tsx',
    'modules/opt_in_channels/RecentlyActiveCollapseStore.tsx',
    'modules/recent_channels/NewChannelsStore.tsx',
    'stores/GuildCategoryStore.tsx',
    'modules/guild_sidebar/ChannelListVoiceCategoryStore.tsx',
    'stores/AuthorizedAppsStore.tsx',
    'stores/ConnectedAppsStore.tsx',
    'modules/devtools/design_toggles/DesignTogglesStore.tsx',
    'modules/keyword_filter/KeywordFilterStore.tsx',
    'modules/parent_tools/FamilyCenterStore.tsx',
    'modules/parent_tools/FamilyCenterControlledSettingsStore.tsx',
    'modules/collectibles/CollectiblesCategoryStore.tsx',
    'stores/game_store/SKUPaymentModalStore.tsx',
    'modules/collectibles/CollectiblesDebugStore.tsx',
    'modules/collectibles/CollectiblesPurchaseStore.tsx',
    'modules/collectibles/records/CollectiblesStoreListingRecord.tsx',
    'modules/collectibles/CollectiblesShopStore.tsx',
    'modules/collectibles/CollectiblesMarketingsStore.tsx',
    'modules/collectibles/CollectiblesShopHomeStore.tsx',
    'stores/game_store/EntitlementStore.tsx',
    'modules/user_profile/UserProfileStore.tsx',
    'modules/user_profile/WidgetStore.tsx',
    'stores/GuildReadStateStore.tsx',
    'modules/recents/RecentMentionsStore.tsx',
    'stores/native/NUFStore.tsx',
    'stores/views/PrivateChannelSortStore.tsx',
    'modules/game_relationships/GameRelationshipStore.tsx',
    'modules/user_affinities/UserAffinitiesV2Store.tsx',
    'modules/friend_suggestions/FriendSuggestionStore.tsx',
    'modules/guild_automod/GuildAutomodMessageStoreUtils.tsx',
    'modules/age_assurance/AgeVerificationStore.tsx',
    'stores/GuildMemberRequesterStore.tsx',
    'modules/stage_channels/StageChannelParticipantStoreHooks.tsx',
    'modules/toast/native/ToastStore.tsx',
    'modules/quests/QuestsStore.tsx',
    'modules/quests/VideoQuestUIStore.tsx',
    'stores/LayerStore.tsx',
    'modules/ads/native/AdUserStore.tsx',
    'modules/guild_sidebar/SidebarVisibilityMethodStore.tsx',
    'stores/UserSettingsModalStore.tsx',
    'modules/global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx',
    'modules/application_commands/ApplicationCommandIndexStore.tsx',
    'modules/applications/ApplicationFrecencyStore.tsx',
    'modules/application_commands/ApplicationCommandFrecencyStore.tsx',
    'modules/guild_onboarding/GuildOnboardingStore.tsx',
    'modules/guild_onboarding/GuildOnboardingPromptsStore.tsx',
    'modules/notifications/LastMentionTimestampStore.tsx',
    'modules/guild_member_verification/MemberVerificationFormStore.tsx',
    'modules/emojis/EmojiStore.tsx',
    'modules/guild_role_subscriptions/SubscriptionRoleStore.tsx',
    'modules/emojis/RawGuildEmojiStore.tsx',
    'modules/emojis/top_emojis/TopEmojiStore.tsx',
    'modules/guild_settings/GuildRoleMemberCountStore.tsx',
    'modules/guild_identity/GuildIdentitySettingsStore.tsx',
    'stores/UserSettingsAccountStore.tsx',
    'modules/stickers/StickersPersistedStore.tsx',
    'modules/stickers/StickersStore.tsx',
    'modules/stickers/GuildStickersStore.tsx',
    'modules/stickers/StickersPackStore.tsx',
    'stores/FrecencyStore.tsx',
    'modules/forums/ForumPostMessagesStore.tsx',
    'stores/GuildSubscriptionsStore.tsx',
    'modules/spotify/SpotifyStore.tsx',
    'modules/spotify/SpotifyProtocolStore.tsx',
    'modules/applications/ApplicationAssetsStore.tsx',
    'stores/ChannelMemberStore.tsx',
    'stores/SelfPresenceStore.tsx',
    'stores/LocalActivityStore.tsx',
    'modules/rich_presence/FirstPartyRichPresenceStore.tsx',
    'modules/stage_channels/StageChannelSelfRichPresenceStore.tsx',
    'stores/ExternalStreamingStore.tsx',
    'modules/voice_channel_effects/VoiceChannelEffectsPersistedStore.tsx',
    'modules/guild_member_verification/GuildJoinRequestStore.tsx',
    'modules/guild_templates/GuildTemplateStore.tsx',
    'modules/messages/MessageRoundtripTrackerStore.tsx',
    'modules/poggermode/PoggermodeSettingsStore.tsx',
    'modules/potions/MessageConfettiStore.tsx',
    'modules/replies/PendingReplyStore.tsx',
    'stores/EditMessageStore.tsx',
    'stores/SlowmodeStore.tsx',
    'stores/web/WindowStore.tsx',
    'modules/potions/ConsumablesStore.tsx',
    'stores/native/AppStateStore.tsx',
    'stores/MessageReactionsStore.tsx',
    'modules/threads/ArchivedThreadsStore.tsx',
    'modules/forums/ForumSearchStore.tsx',
    'modules/threads/ThreadMembersStore.tsx',
    'modules/threads/ThreadMessageStore.tsx',
    'modules/threads/ThreadSummaryStore.tsx',
    'modules/application_commands/ApplicationCommandAutocompleteStore.tsx',
    'modules/application_commands/ApplicationCommandStore.tsx',
    'modules/poggermode/PoggermodeStore.tsx',
    'stores/UploadStore.tsx',
    'modules/forums/ForumActivePostStore.tsx',
    'stores/billing/UserOfferStore.tsx',
    'modules/premium/ReferralTrialStore.tsx',
    'stores/native/IAPStore.android.tsx',
    'modules/premium/native/PremiumPlanPurchasedStore.tsx',
    'modules/gplay/native/GPlayAnalyticsStore.tsx',
    'modules/premium/promotions/PromotionsStore.tsx',
    'modules/premium/gifting/GiftPromotionStore.tsx',
    'modules/premium/native/OrderStore.tsx',
    'modules/premium/native/useStoreConnectionErrorAlert.tsx',
    'modules/billing/native/GenericIAPStore.tsx',
    'modules/billing/native/StoreKitV2Experiment.tsx',
    'modules/billing/native/StorekitIAPQueue.tsx',
    'modules/activities/DeveloperActivityShelfStore.tsx',
    'stores/game_store/TestModeStore.tsx',
    'modules/premium/native/PremiumPlanSelectStore.tsx',
    'modules/profile_effects/ProfileEffectStore.tsx',
    'modules/guild_profile/GuildProfileStore.tsx',
    'stores/InstantInviteStore.tsx',
    'modules/stage_channels/useIsOnStartStageScreenStore.tsx',
    'stores/ChannelSettingsStore.tsx',
    'modules/guild_automod/GuildAutomodMessageStore.tsx',
    'modules/interactions/InteractionStore.tsx',
    'modules/media_channel/MediaPostSharePromptStore.tsx',
    'modules/guild/BasicGuildStore.tsx',
    'stores/billing/GuildBoostSlotStore.tsx',
    'modules/premium/game_server/GameServerStore.tsx',
    'modules/premium/powerups/GuildPowerupsStore.tsx',
    'modules/polls/PollsInteractionStore.tsx',
    'modules/interaction_components/LocalInteractionComponentStateStore.tsx',
    'stores/GiftCodeStore.tsx',
    'modules/build_overrides/BuildOverrideStore.tsx',
    'modules/video_calls/native/ChannelCallStore.tsx',
    'modules/chat_input/native/useChatBottomManagerUIStore.tsx',
    'modules/video_calls/native/ChannelCallLifecycleStore.tsx',
    'stores/VideoSpeakerStore.tsx',
    'modules/frames/FramesStore.tsx',
    'modules/popout-window/PopoutWindowStore.native.tsx',
    'modules/activities/ActivityShelfStore.tsx',
    'modules/blocked_domains/BlockedDomainStore.tsx',
    'stores/MaskedLinkStore.tsx',
    'stores/MaskedLinkStoreMethodsAdditional.native.tsx',
    'modules/activities/stores/CustomActivityLinksStore.tsx',
    'modules/virtual_currency/stores/VirtualCurrencyStore.tsx',
    'modules/captcha/CaptchaStore.tsx',
    'modules/remixing/RemixingStore.tsx',
    'modules/icymi/ICYMIStore.tsx',
    'modules/content_inventory/ContentInventoryStore.tsx',
    'stores/GuildAffinitiesStore.tsx',
    'modules/icymi/ICYMIFiltersStore.tsx',
    'modules/labs/LabFeatureStore.tsx',
    'modules/icymi/ICYMIUnreadStateStore.tsx',
    'stores/native/MessagePreviewStore.tsx',
    'modules/quickswitcher/QuickSwitcherStore.tsx',
    'modules/threads/ThreadMemberListStore.tsx',
    'modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx',
    'modules/forums/ForumPostUnreadCountStore.tsx',
    'modules/guild_member_verification/native/InitialMemberVerificationStore.tsx',
    'modules/verification/ChangeEmailStore.tsx',
    'modules/phone/PhoneStore.tsx',
    'modules/voice_panel/VoicePanelStore.tsx',
    'modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx',
    'modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx',
    'modules/guild_settings/GuildSettingsStore.tsx',
    'modules/voice_calls/native/AudioManagerStore.android.tsx',
    'modules/voice_calls/native/AudioRouteStore.tsx',
    'modules/video_backgrounds/VideoBackgroundStore.tsx',
    'modules/rtc/SecureFramesVerifiedStore.tsx',
    'modules/rtc/TransientKeyStore.tsx',
    'modules/rtc/VerifiedKeyStore.tsx',
    'stores/ApplicationStreamPreviewStore.tsx',
    'modules/hotspot/HotspotStore.tsx',
    'stores/CreateInviteModalStore.tsx',
    'stores/native/DisplayedInviteStore.tsx',
    'stores/InviteSuggestionsStore.tsx',
    'modules/instant_invite/InstantInviteSendStateStore.tsx',
    'modules/directory_channels/GuildDirectorySearchStore.tsx',
    'modules/directory_channels/GuildDirectoryStore.tsx',
    'modules/search/native/stores/SearchQueryStore.tsx',
    'modules/search/SearchAutocompleteStore.tsx',
    'modules/search/SearchRecentMessageStore.tsx',
    'modules/self_mod/ChannelSafetyWarningsStore.tsx',
    'modules/channel/ChannelMemberCountStore.tsx',
    'stores/native/InAppNotificationStore.tsx',
    'modules/guild_antiraid/GuildIncidentsStore.tsx',
    'stores/NotificationSettingsStore.tsx',
    'modules/notifications/RpcNotificationSettingsStore.tsx',
    'modules/bug_reporter/BugReportStore.tsx',
    'modules/native_menu/native/NativeMenuStore.tsx',
    'modules/forums/ForumPostRecentMessageStore.tsx',
    'stores/views/GIFPickerViewStore.tsx',
    'modules/stickers/native/StickerPickerStore.tsx',
    'modules/remixing/RemixingEditorStore.tsx',
    'modules/remixing/RemixingTextStore.tsx',
    'modules/remixing/native/RemixingCanvasStore.tsx',
    'modules/remixing/RemixingPersistedStore.tsx',
    'modules/remixing/RemixingMentionsStore.tsx',
    'modules/virtual_currency/stores/native/VirtualCurrencyOnboardingStore.tsx',
    'modules/saved_messages/SavedMessagesStore.tsx',
    'modules/guild_onboarding_home/GuildOnboardingHomeNavigationStore.tsx',
    'modules/summaries/SummaryStore.tsx',
    'modules/media_channel/MediaPostEmbedStore.tsx',
    'modules/push_feedback/PushFeedbackStore.tsx',
    'modules/presence_subscriptions/PresenceSubscriptionsStore.tsx',
    'stores/native/AlertStore.tsx',
    'modules/report_to_mod/ReportToModStore.tsx',
    'modules/messages/SendMessageOptionsStore.tsx',
    'stores/ChannelFollowerStatsStore.tsx',
    'stores/ChannelPinsStore.tsx',
    'stores/AppliedGuildBoostStore.tsx',
    'modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx',
    'modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx',
    'modules/connections/GuildRoleConnectionEligibilityStore.tsx',
    'modules/guild_antiraid/native/GuildIncidentsActionSheetStore.tsx',
    'modules/guild_settings/GuildSettingsModalMembersStore.tsx',
    'modules/safety_hub/SafetyHubStore.tsx',
    'modules/webauthn/WebAuthnStore.tsx',
    'modules/auth_sessions/AuthSessionsStore.tsx',
    'stores/MFAStore.tsx',
    'modules/user_settings/UserSettingSearchStore.tsx',
    'modules/settings/native/renderer/stores/SettingBlocklistStore.tsx',
    'modules/guild_progress/GuildProgressStore.tsx',
    'modules/multi_account/MultiAccountStore.tsx',
    'modules/contact_sync/native/ContactSyncModalStore.tsx',
    'modules/contact_sync/native/ContactSyncPersistedStore.tsx',
    'modules/pomelo/PomeloStore.tsx',
    'stores/DeveloperExperimentStore.tsx',
    'modules/quests/native/QuestDock/QuestDockStore.tsx',
    'modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionEditStore.tsx',
    'modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesStore.tsx',
    'stores/native/MobileVoiceOverlayStore.tsx',
    'modules/message_previews/MessagePreviewStore.tsx',
    'modules/user_settings/native/notifications/stores/AndroidNotificationSettingsStore.tsx',
    'stores/native/PushNotificationPermissionStore.tsx',
    'modules/soundpacks/SoundpackStore.tsx',
    'modules/devtools/DevToolsSettingsStore.tsx',
    'modules/devtools/AnalyticsLogStore.tsx',
    'modules/generated_test_users/GeneratedTestUsersStore.tsx',
    'modules/devtools/native/components/screens/DevToolsProfilingUseStateFromStores.tsx',
    '../discord_common/js/packages/flux/useStateFromStoresPerformanceDebugging.tsx',
    'stores/SurveyStore.tsx',
    'modules/mobile_native_updater/MobileNativeUpdateStore.tsx',
    'modules/user_settings/UserSettingsSafetySelectedGuildStore.tsx',
    'modules/app_launcher/AppLauncherLastUsedCommandStore.tsx',
    'modules/content_inventory/ContentInventoryPersistedStore.tsx',
    'stores/views/ActivityLauncherStore.tsx',
    'modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx',
    'modules/double_tap_to_react/native/DoubleTapChatInputBannerStore.tsx',
    'modules/voice_messages/native/VoiceMessagesUIStore.tsx',
    'modules/forums/ForumChannelStore.tsx',
    'stores/TypingStore.tsx',
    'modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx',
    'modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx',
    'modules/guild/GuildPromptsStore.tsx',
    'modules/welcome_screen/WelcomeScreenStore.tsx',
    'modules/report_to_mod/ReportToModChannelStore.tsx',
    'modules/remixing/RemixingNonNitroUpsellStore.tsx',
    'modules/errors/av_errors/AVErrorStore.tsx',
    'modules/voice_channel_effects/VoiceChannelEffectsStore.tsx',
    'modules/activities/native/ActivityShelfActionSheetStore.tsx',
    'modules/panels/morphable/native/SafeAreaDisabledStore.tsx',
    'modules/stage_channels/StageMusicStore.tsx',
    'modules/expression_picker/ExpressionPickerStore.tsx',
    'modules/soundboard/SoundboardEventStore.tsx',
    'modules/tooltip/TooltipStore.tsx',
    'stores/RTCDebugStore.tsx',
    'modules/stage_channels/native/StageChannelListStore.tsx',
    'modules/game_console/ConsoleVoiceUpsellStore.tsx',
    'stores/GamePartyStore.tsx',
    'modules/activities/MessageActivityInviteCoverImageStore.tsx',
    'modules/content_inventory/ContentInventoryActivityStore.tsx',
    'modules/game_detection/DetectableGameSupplementalStore.tsx',
    'modules/content_inventory/ContentInventoryOutboxStore.tsx',
    'modules/user_profile/notes/NoteStore.tsx',
    'modules/game_relationships/GameRelationshipStoreHooks.tsx',
    'modules/instant_invite/GuildInviteSendStateStore.tsx',
    'modules/app_launcher/AppLauncherStore.tsx',
    'stores/VideoQualityModeStore.tsx',
    'modules/app_startup/AllGatewayConnectionStores.native.tsx',
    'modules/activities/stores/RecentUserActivityStore.tsx',
    'modules/channel/VoiceChannelStartTimeStore.tsx',
    'modules/checkpoint/CheckpointStore.tsx',
    'modules/connectivity/native/ConnectivityStatusStore.tsx',
    'modules/creator_monetization/CreatorMonetizationStore.tsx',
    'modules/experiments/ExperimentTriggerPointStore.tsx',
    'modules/experiments/native/MobileExperimentTriggerPointStore.tsx',
    'modules/feedback/native/RequestReviewStore.tsx',
    'modules/game_invites/GameInviteStore.tsx',
    'modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx',
    'modules/global_discovery_servers/GlobalDiscoveryServersSearchLayoutStore.tsx',
    'modules/global_discovery_servers/GlobalDiscoveryServersSearchResultsStore.tsx',
    'modules/guild_home/ActiveChannelsStore.tsx',
    'modules/guild_products/GuildProductsStore.tsx',
    'modules/local_app_detection/native/LocalAppDetectionStore.tsx',
    'modules/local_push_notification/native/LocalPushNotificationStore.tsx',
    'modules/location_metadata/stores/LocationMetadataStore.tsx',
    'modules/message_request/MessageRequestPreviewStore.tsx',
    'modules/notifications/HabitualDNDStore.tsx',
    'modules/premium/gifting/PremiumGiftingIntentStore.tsx',
    'modules/premium/native/NoticeStore.tsx',
    'modules/relationships/GuildFriendshipStore.tsx',
    'modules/scheduled_messages/ScheduledMessageStore.tsx',
    'modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx',
    'modules/shared_space_warnings/SharedSpacesWarningStore.tsx',
    'modules/user_settings/DataHarvestStore.tsx',
    'modules/user_settings/EmailSettingsStore.tsx',
    'stores/ActivityTrackingStore.tsx',
    'stores/ChannelSKUStore.tsx',
    'stores/GeoRestrictedGuildStore.tsx',
    'stores/NowPlayingStore.tsx',
    'stores/PermissionSpeakStore.tsx',
    'stores/PremiumPromoStore.tsx',
    'stores/PrivateChannelReadStateStore.tsx',
    'stores/PrivateChannelRecipientsInviteStore.tsx',
    'stores/RTCConnectionDesyncStore.tsx',
    'stores/StatusPageStore.tsx',
    'stores/channel_notices/GuildMFAWarningStore.tsx',
    'stores/channel_notices/HubLinkNoticeStore.tsx',
    'modules/creator_monetization_eligibility/CreatorMonetizationMarketingStore.tsx',
    'modules/guild_profile/GuildPopoutStore.tsx',
    'modules/guild_action_sheet/native/GuildHeaderCountsStore.tsx',
    'stores/native/ShareStore.tsx',
    'stores/PermissionVADStore.tsx',
    'modules/interaction_components/InteractionModalStore.tsx',
    'modules/icymi/ICYMISessionStore.tsx',
    'actions/StoreListingActionCreators.tsx',
    'stores/game_store/StoreListingStore.tsx',
    'records/StoreListingRecord.tsx',
    'modules/game_store/GameStoreAsset.tsx',
    'modules/routing/KeybindRouterStore.tsx',
    'modules/main_tabs_v2/native/NavigationHistoryStore.tsx',
    'modules/screen_recording/native/ScreenRecordingStore.tsx',
    'modules/auth/native/RegistrationUIStore.tsx',
    'modules/age_gate/AgeGateStore.tsx',
    'modules/home_drawer/native/HomeDrawerStore.tsx',
    'modules/home_drawer/native/HomeDrawerSubtitleStore.tsx',
    'modules/guilds_bar/native/GuildsBarDnDStore.tsx',
    'modules/notification_center/NotificationCenterStore.tsx',
    'modules/guild_scheduled_events/LiveChannelNoticesStore.tsx',
    'modules/notification_center/NotificationCenterStoreActions.tsx',
    'modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx',
    'modules/icymi/ICYMIPopularGuildsStore.tsx',
    'modules/panels/morphable/AppFreezeStore.tsx',
    'modules/guild_tag/stores/GuildTagChangedCoachmarkStore.tsx',
    'modules/billing/native/subscription/useStoreFrontPrice.tsx',
    'modules/search/native/stores/SearchGuildChannelTabStore.tsx',
    'modules/search/native/stores/SearchHistoryStore.tsx',
    'modules/search/native/stores/SearchPeopleTabStore.tsx',
    'modules/search/native/stores/SearchMemberTabStore.tsx',
    'modules/app_launcher/native/screens/home/FrecencySectionStore.tsx',
    'modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx',
    'modules/global_discovery_apps/stores/ApplicationDirectorySearchStore.tsx',
    'modules/global_discovery_apps/stores/ApplicationDirectoryCategoriesStore.tsx',
    'modules/global_discovery_apps/stores/ApplicationDirectoryCollectionsStore.tsx',
    'modules/global_discovery_apps/stores/ApplicationDirectorySimilarApplicationsStore.tsx',
    'modules/global_discovery_apps/stores/MyGuildApplicationsStore.tsx',
    'stores/RegionStore.tsx',
    'stores/ChannelSettingsPermissionsStore.tsx',
    'stores/WebhooksStore.tsx',
    'modules/message_request/MessageRequestStoreUtils.tsx',
    'modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx',
    'modules/self_remediation_feedback/IgnoreNoticeStore.tsx',
    'modules/feedback/FeedbackOverrideStore.tsx',
    'stores/SelfPresenceStoreManager.tsx',
    'stores/NotificationSettingsModalStore.tsx',
    'stores/PhoneVerificationStore.tsx',
    'modules/guild_settings/GuildSettingsModalChannelsStore.tsx',
    'modules/guild_settings/audit_log/GuildSettingsAuditLogStore.tsx',
    'modules/guild_automod/AutomodStore.tsx',
    'modules/guild_settings/GuildSettingsEmojiStore.tsx',
    'modules/guild_settings/roles/GuildSettingsModalRolesStore.tsx',
    'modules/guild_settings/roles/GuildSettingsRolesStore.tsx',
    'modules/connections/GuildRoleConnectionsConfigurationStore.tsx',
    'stores/ChangeVanityURLModalStore.tsx',
    'modules/guild_role_subscriptions/native/RoleTierEditStore.tsx',
    'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx',
    'modules/notifications/friend_online/FriendOnlineTimerStore.tsx',
    'modules/user_application_identity/UserApplicationIdentityStore.tsx',
];

async function main() {
    console.log('WaveDev Discord Client Dataminer - V1.0.0');
    console.log('Downloading latest canary client web.js file');
    const html = await getText(base + '/app');
    const webjs = asset(html.match(/assets\/web\.[\d\w_]+\.js/)?.[0]);
    if (!webjs) {
        console.log('Error - No webjs file, discord fucked up something....');
        process.exit(1);
    }
    console.log('Web.js - Got url - ' + webjs);
    console.log('Scraping list of modules');
    const web = await getText(webjs);
    const modules = getModules(web);

    await save('modules.json', JSON.stringify(modules, null, 4));
    console.log('! Done scraping list of modules');
    const everyChunks = {};
    const timeTaken1 = await perf(async () => {
        return;
        for (let cssFile in modules.css) {
            const stylesheet = await getText(
                asset(modules.css[cssFile] + '.css'),
            );
            await fs.writeFile(
                './build/css/' + cssFile + '.css',
                cssbueatify(
                    `/**\n  Module ID: ${cssFile}\n  Original File Name: ${modules.css[cssFile]}\n**/\n` +
                        stylesheet,
                ),
            );
        }
    }, 'Saving every css file');
    const jsxChunks = [];
    let reactExportsChunk;
    let reactChunk;
    let name = '';
    const timeTaken2 = await perf(async () => {
        async function processInBatches(items, batchSize) {
            let results = [];
            for (let i = 0; i < items.length; i += batchSize) {
                const batch = items.slice(i, i + batchSize);
                const chunkResults = await Promise.all(
                    batch.map(async ([jsFile, path]) => {
                        const js = await getText(asset(path + '.js'));
                        return getChunks(js, jsFile, path);
                    }),
                );
                results.push(...chunkResults);
            }
            return results;
        }
        const chunkArray = await processInBatches(
            Object.entries(modules.js),
            5,
        ); // 5 at a time

        let chunks = Object.assign({}, ...chunkArray);

        console.log('done chunks from other modules, at web.js now');
        // handle web.js differently as it does not with acorn
        const chunkStart = web.indexOf('var __webpack_modules__=');
        const chunkEnd = web.indexOf(',__webpack_module_cache__={};');
        const chunk = web.slice(chunkStart, chunkEnd);
        const ast = acorn.parse(chunk, {
            ecmaVersion: 'latest',
            locations: true,
        });
        walk.simple(ast, {
            VariableDeclaration(node) {
                if (node.declarations[0].id.name !== '__webpack_modules__')
                    return;
                for (let prop of node.declarations[0].init.properties) {
                    const key = prop.key?.value;
                    const chunkNode = prop.value.body;
                    const chunkCode = chunk.slice(
                        chunkNode.start,
                        chunkNode.end,
                    );
                    const codeFormatted = formatCode(chunkCode);
                    chunks[key] =
                        `/** Chunk was on web.js **/\n` +
                        `/** chunk id: ${key}, original params: ${prop.value.params
                            .map((p) => p.name || p.value)
                            .join(',')} (module,exports,re quire) **/\n` +
                        readAbleCode(
                            prop.value.params.map((p) => p.name || p.value),
                            codeFormatted,
                            key,
                        );
                }
            },
        });
        console.log('web.js done', Object.keys(chunks).length);
        for (let chunk in chunks) {
            everyChunks[chunk] = chunks[chunk];
        }
    }, 'Scraping chunks from every module');
    const names = {};
    const paths = {};
    const timeTaken3 = await perf(async () => {
        console.log('Chunks amount', everyChunks.length);
        const languagesChunks = {};
        const all = {};
        const lottieChunks = [];
        let remaining = everyChunks.length;

        for (let chunk in everyChunks) {
            // check if chunk is component
            if (
                everyChunks[chunk].includes('.jsx)(') ||
                everyChunks[chunk].includes('.jsxs)(')
            ) {
                jsxChunks.push(chunk);
            }
            remaining -= 1;
            const [type, chunkData] = determineType(
                everyChunks[chunk],
                chunk,
                languagesChunks,
                jsxChunks,
                lottieChunks,
            );
            const data = {
                id: chunk,
                type,
                data: chunkData,
                fromModule: {
                    id: everyChunks[chunk]
                        .split('/** Chunk was on')[1]
                        .split(' **/')[0]
                        .split(' ')[1],
                },
            };
            if (data.type === 'intl-loader') {
                for (let language in data.data.languages) {
                    languagesChunks[data.data.languages[language].chunkId] =
                        language;
                }
            }

            if (!all[data.type]) all[data.type] = [];
            all[data.type].push({ id: data.id, data: data.data });
            await fs.writeFile(
                './build/chunks_api/' + data.id + '.json',
                JSON.stringify(data),
                'utf-8',
            );
            if (data.type === 'experiment') {
                names[chunk] =
                    generators.experiment(
                        data.data.id || data.data.name,
                        data.data.kind,
                        !!data.data.variations ? 'apex' : 'normal',
                    ) || chunk;
            }

            if (data.type === 'buildInfo') {
                console.log(data);
                names[chunk] = 'buildInfo';
            }
            if (data.type === 'component') {
                names[chunk] = `Component${chunk}`;
            }
            if (data.type === 'constants') {
                names[chunk] = `Constants`;
                paths[chunk] = `../discord_common/js/shared/Constants.tsx`;
            }
            if (data.type === 'rest-api') {
                names[chunk] = `HTTPUtils`;
                paths[chunk] =
                    `../discord_common/js/packages/http-utils/HTTPUtils.tsx`;
            }
            if (data.type === 'store') {
                names[chunk] = data.data.name.replaceAll(' ', '');
                paths[chunk] =
                    discordPaths.find((path) =>
                        path.includes(data.data.name),
                    ) || null;
            }
            if (data.type === 'intl-messages-definitions') {
                names[chunk] =
                    `IntlMessagesDefinitions${data.data.language}_${chunk}`;
            }
        }
        // overwrite ones that were detected as json but they are intl messages definer + json
        for (let i = 0; i < all['json'].length; i++) {
            const jsonChunk = all['json'][i];
            if (languagesChunks[jsonChunk.id]) {
                const data = jsonChunk;
                data.data.messages = jsonChunk.data.content;
                delete data.data.content;
                data.data.language = languagesChunks[data.id];
                await fs.writeFile(
                    './build/chunks_api/' + data.id + '.json',
                    JSON.stringify(data),
                    'utf-8',
                );
                delete all['json'][i];
                all['intl-messages-definitions'].push(data);
                names[data.id] =
                    `IntlMessagesDefinitions${data.data.language}_${data.id}`;
            }
        }
        const stats = {};
        const ids = {};
        all['json'] = all['json'].filter((e) => e);
        for (let [type, chunks] of Object.entries(all)) {
            if (!stats[type]) stats[type] = 0;
            if (!ids[type]) ids[type] = [];
            for (let i = 0; i < chunks.length; i++) {
                stats[type] += 1;
                if (!chunks[i]?.id) continue;

                ids[type].push(chunks[i].id);
            }
        }

        delete all['unknown'];
        await fs.writeFile(
            './build/chunks_api/all.json',
            JSON.stringify(all),
            'utf-8',
        );

        await fs.writeFile(
            './build/stats.json',
            JSON.stringify(stats),
            'utf-8',
        );
        await fs.writeFile(
            './build/names.json',
            JSON.stringify(names),
            'utf-8',
        );
        await fs.writeFile('./build/ids.json', JSON.stringify(ids), 'utf-8');
    }, 'Generating json list of chunks');
    const timeTaken4 = await perf(async () => {
        for (let [chunk, name] of Object.entries(names)) {
            if (everyChunks[chunk].includes(`require("./${chunk}.js")`)) {
                if (name === 'react_exports') {
                    names[chunk] = 'react';
                }
                console.log(chunk, name);
                everyChunks[chunk] = everyChunks[chunk]
                    .replaceAll(`${chunk}.js`, `${name}.js`)
                    .replaceAll(`Chunk${chunk}`, name);
            }
        }
        for (let chunk in everyChunks) {
            let code = beautify(everyChunks[chunk], {
                indent_size: 2,
                space_in_empty_paren: true,
            });

            for (let chunk of jsxChunks) {
                if (code.includes(`"./${chunk}.js"`)) {
                    code = code.replaceAll(
                        `"./${chunk}.js"`,
                        `"./${chunk}.jsx"`,
                    );
                }
            }
            await fs.writeFile(
                './build/chunks/' +
                    (names[chunk] || chunk) +
                    '.' +
                    (jsxChunks.includes(chunk) ? 'jsx' : 'js'),
                code,
            );
        }
    }, 'Saving chunks and renaming with readable names');
    await fs.writeFile(
        './build/modules.json',
        JSON.stringify(modules),
        'utf-8',
    );
    console.log(
        '* Done, scraping build!, Estimated Time taken ' +
            (timeTaken1 + timeTaken2 + timeTaken3 + timeTaken4) +
            's',
    );
}
main();
