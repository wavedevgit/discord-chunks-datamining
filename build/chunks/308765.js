/** Chunk was on web.js **/
/** chunk id: 308765, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk132454 = require("./132454.js");
let i = {
  AppAnalyticsManager: {
    inlineRequire: () => require("./98302.js").Z,
    hasStoreChangeListeners: true
  },
  AudioSettingsManager: {
    actions: ["POST_CONNECTION_OPEN", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE", "MEDIA_ENGINE_RESET_SETTINGS"],
    inlineRequire: () => require("./345953.js").Z
  },
  AutoUpdateManager: {
    actions: ["POST_CONNECTION_OPEN", "AUTO_UPDATER_QUIT_AND_INSTALL"],
    inlineRequire: () => require("./802104.js").Z
  },
  AgeVerificationManager: {
    actions: ["POST_CONNECTION_OPEN", "CURRENT_USER_UPDATE", "MESSAGE_CREATE"],
    inlineRequire: () => require("./225415.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  BlockedDomainManager: {
    inlineRequire: () => require("./399907.js").Z,
    loadAfterConnectionOpen: true
  },
  CallIdleManager: {
    actions: ["VOICE_STATE_UPDATES", "EMBEDDED_ACTIVITY_CLOSE", "CONNECTION_CLOSED"],
    inlineRequire: () => require("./288444.js").Z
  },
  ChangelogManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./688798.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  ChannelCallManager: {
    actions: ["GUILD_LOCAL_RING_START", "GUILD_RING_STOP"],
    inlineRequire: () => require("./258833.js").Z,
    hasStoreChangeListeners: true
  },
  ChannelSafetyWarningsManager: {
    actions: ["CHANNEL_SELECT", "CHANNEL_UPDATES"],
    inlineRequire: () => require("./397776.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  CommonTriggerPointManager: {
    actions: ["VOICE_CHANNEL_SELECT", "CALL_CREATE", "USER_SETTINGS_MODAL_OPEN"],
    inlineRequire: () => require("./957899.js").Z
  },
  CommunicationDisabledManager: {
    inlineRequire: () => require("./202107.js").Z,
    loadAfterConnectionOpen: true
  },
  ConferenceModeManager: {
    actions: ["VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATES"],
    inlineRequire: () => require("./571984.js").Z
  },
  ContentProtectionManager: {
    inlineRequire: () => require("./725140.js").Z,
    loadRightBeforeConnectionOpen: true,
    hasStoreChangeListeners: true
  },
  CustomStatusManager: {
    actions: ["USER_SETTINGS_PROTO_UPDATE", "POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./215739.js").Z,
    loadAfterConnectionOpen: true
  },
  DesktopNotificationsManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./863065.js").Z
  },
  DesktopPerfAnalyticsManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./905870.js").Z
  },
  DesktopPerfHeartbeatManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./277229.js").Z
  },
  FriendOnlineTimerManager: {
    actions: ["POST_CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "CONNECTION_INTERRUPTED", "SELF_PRESENCE_STORE_UPDATE"],
    inlineRequire: () => require("./265008.js").Z,
    loadRightBeforeConnectionOpen: true
  },
  HangStatusManager: {
    actions: ["POST_CONNECTION_OPEN", "VOICE_CHANNEL_SELECT", "LOGOUT", "GUILD_MEMBER_UPDATE"],
    inlineRequire: () => require("./669750.js").Z,
    hasStoreChangeListeners: true
  },
  TopEmojisDataManager: {
    actions: ["EMOJI_INTERACTION_INITIATED"],
    inlineRequire: () => require("./496207.js").Z
  },
  EntityVersionsManager: {
    actions: ["GUILD_CREATE", "DELETED_ENTITY_IDS"],
    inlineRequire: () => require("./992713.js").Z,
    loadRightBeforeConnectionOpen: true
  },
  ExplicitMediaManager: {
    actions: ["CHANNEL_SELECT", "LOAD_MESSAGES_SUCCESS", "MESSAGE_CREATE", "MESSAGE_UPDATE", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS", "LOAD_FORUM_POSTS", "LOAD_ARCHIVED_THREADS_SUCCESS", "LOAD_THREADS_SUCCESS", "LOGOUT", "LOAD_PINNED_MESSAGES_SUCCESS", "USER_SETTINGS_PROTO_UPDATE", "CHANNEL_RTC_UPDATE_CHAT_OPEN", "SIDEBAR_VIEW_CHANNEL"],
    inlineRequire: () => require("./948561.js").ZP,
    neverLoadBeforeConnectionOpen: true
  },
  FeedbackManager: {
    actions: ["VOICE_CHANNEL_SHOW_FEEDBACK", "STREAM_CLOSE", "EMBEDDED_ACTIVITY_CLOSE", "VIDEO_BACKGROUND_SHOW_FEEDBACK", "IN_APP_REPORTS_SHOW_FEEDBACK", "USER_DM_MUTE_SHOW_FEEDBACK", "BLOCK_USER_SHOW_FEEDBACK", "AGE_VERIFICATION_SHOW_FEEDBACK"],
    inlineRequire: () => require("./169223.jsx").Z
  },
  ForumGuidelinesManager: {
    inlineRequire: () => require("./945141.js").Z,
    loadAfterConnectionOpen: true
  },
  ForumManager: {
    actions: ["CHANNEL_PRELOAD"],
    inlineRequire: () => require("./716896.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  ForumImagePreloadManager: {
    actions: ["CHANNEL_PRELOAD"],
    inlineRequire: () => require("./222044.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  ForumPostAnalyticsManager: {
    actions: ["CHANNEL_SELECT", "THREAD_CREATE"],
    inlineRequire: () => require("./474387.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  FrecencyUserSettingsManager: {
    actions: ["POST_CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "APP_STATE_UPDATE"],
    inlineRequire: () => require("./888875.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  GuildOnboardingHomeManager: {
    actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "MESSAGE_CREATE", "THREAD_CREATE", "GUILD_MEMBER_UPDATE", "GUILD_DELETE"],
    inlineRequire: () => require("./218315.jsx").Z,
    neverLoadBeforeConnectionOpen: true
  },
  HolidayEventsManager: {
    actions: ["NOTIFICATIONS_SET_DISABLED_SOUNDS"],
    inlineRequire: () => require("./951755.js").Z,
    hasStoreChangeListeners: true
  },
  GuildOnboardingManager: {
    actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "GUILD_DELETE"],
    inlineRequire: () => require("./495649.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  GameConsoleManager: {
    actions: ["WAIT_FOR_REMOTE_SESSION", "POST_CONNECTION_OPEN", "SESSIONS_REPLACE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "VOICE_STATE_UPDATES", "CONSOLE_COMMAND_UPDATE", "PASSIVE_UPDATE_V2", "REMOTE_SESSION_DISCONNECT"],
    inlineRequire: () => require("./902304.js").Z
  },
  GuildScheduledEventManager: {
    actions: ["POST_CONNECTION_OPEN", "GUILD_DELETE", "GUILD_UNAVAILABLE", "INVITE_RESOLVE_SUCCESS", "CHANNEL_SELECT"],
    inlineRequire: () => require("./897285.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  GuildVerificationManager: {
    actions: ["INVITE_ACCEPT_SUCCESS"],
    inlineRequire: () => require("./950143.js").Z
  },
  InteractionModalManager: {
    actions: ["INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CLOSE", "RPC_APP_DISCONNECTED"],
    inlineRequire: () => require("./189334.js").Z
  },
  LoginRequiredActionManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./858386.jsx").Z
  },
  MemberSafetySearchManager: {
    actions: ["INITIALIZE_MEMBER_SAFETY_STORE", "GUILD_DELETE", "MEMBER_SAFETY_SEARCH_STATE_UPDATE", "MEMBER_SAFETY_PAGINATION_UPDATE", "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS", "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING", "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH"],
    inlineRequire: () => require("./201070.js").ZP
  },
  MemberSafetyStoreBatchUpdateManager: {
    actions: ["INITIALIZE_MEMBER_SAFETY_STORE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE", "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS"],
    inlineRequire: () => require("./313298.js").Z
  },
  MessageCodedLinkManager: {
    actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS"],
    inlineRequire: () => require("./891274.js").Z
  },
  MessageManager: {
    actions: ["APP_STATE_UPDATE", "OVERLAY_INITIALIZE", "CHANNEL_SELECT", "VOICE_CHANNEL_SELECT", "THREAD_CREATE", "THREAD_LIST_SYNC", "CHANNEL_CREATE", "CHANNEL_PRELOAD", "GUILD_CREATE", "MESSAGE_END_EDIT", "LOAD_MESSAGES_SUCCESS", "UPLOAD_FAIL", "CHANNEL_DELETE", "THREAD_DELETE", "CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE"],
    inlineRequire: () => require("./348245.js").Z,
    neverLoadBeforeConnectionOpen: true,
    hasStoreChangeListeners: true,
    loadRightBeforeConnectionOpen: true
  },
  MessageSessionMetadataManager: {
    actions: ["MESSAGE_UPDATE", "MESSAGE_CREATE"],
    inlineRequire: () => require("./789110.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  MultiAccountManager: {
    actions: ["LOGOUT"],
    inlineRequire: () => require("./1627.js").Z,
    loadAfterConnectionOpen: true
  },
  OverlayContentProtectionManager: {
    actions: ["STREAM_START", "STREAM_STOP"],
    inlineRequire: () => require("./503522.js").Z
  },
  OverlayLockSideEffectManager: {
    actions: ["OVERLAY_SET_INPUT_LOCKED"],
    inlineRequire: () => require("./967031.js").Z
  },
  OverlayNotificationAnalyticsManager: {
    actions: ["OVERLAY_SET_NOTIFICATION_DISABLED_SETTING", "OVERLAY_MOUNTED", "OVERLAY_NOTIFICATION_EVENT"],
    inlineRequire: () => require("./270538.js").Z
  },
  OverlayStateTrackingManager: {
    actions: ["OVERLAY_TRACK_STATE_CHANGED", "RUNNING_GAMES_CHANGE"],
    inlineRequire: () => require("./700775.js").Z
  },
  OverlayUsageStatsManager: {
    actions: __OVERLAY__ ? ["MESSAGE_ACKED", "MESSAGE_CREATE"] : ["OVERLAY_FOCUSED", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_WIDGET_CHANGED", "OVERLAY_MESSAGE_EVENT_ACTION", "RUNNING_GAMES_CHANGE", "SOUNDBOARD_SET_OVERLAY_ENABLED", "MESSAGE_ACKED", "MESSAGE_CREATE", "WINDOW_FOCUS", "RTC_CONNECTION_STATE", "AUDIO_TOGGLE_SELF_MUTE", "OVERLAY_SUCCESSFULLY_SHOWN", "OVERLAY_UPDATE_OVERLAY_METHOD", "OVERLAY_TRACK_STATE_CHANGED"],
    inlineRequire: () => require("./645644.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  OverlayWidgetPinManager: {
    actions: ["OVERLAY_UPDATE_OVERLAY_STATE", "LAYOUT_SET_PINNED"],
    inlineRequire: () => require("./264770.js").Z
  },
  OverlayWindowRAFManager: {
    actions: ["OVERLAY_UPDATE_OVERLAY_METHOD", "WINDOW_FOCUS", "WINDOW_VISIBILITY_CHANGE", "OVERLAY_RENDER_DEBUG_MODE"],
    inlineRequire: () => require("./556809.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  OverlayKeybindExperimentManager: {
    actions: ["POST_CONNECTION_OPEN", "EXPERIMENTS_FETCH_SUCCESS", "EXPERIMENT_OVERRIDE_BUCKET", "KEYBINDS_SET_KEYBIND", "OVERLAY_READY"],
    inlineRequire: () => require("./991186.js").ZP,
    neverLoadBeforeConnectionOpen: true
  },
  OverlayNegativeWidgetExperimentManager: {
    actions: ["POST_CONNECTION_OPEN", "OVERLAY_SET_NOTIFICATION_DISABLED_SETTING", "EXPERIMENT_OVERRIDE_BUCKET", "LAYOUT_SET_PINNED"],
    inlineRequire: () => require("./266173.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  BugReporterManager: {
    actions: ["POST_CONNECTION_OPEN", "OVERLAY_SET_NOTIFICATION_DISABLED_SETTING", "LAYOUT_SET_PINNED", "OVERLAY_UPDATE_OVERLAY_STATE", "OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE", "OVERLAY_CRASHED", "OVERLAY_RELOAD", "OVERLAY_FOCUSED", "OVERLAY_SUCCESSFULLY_SHOWN", "OVERLAY_SET_ENABLED", "OVERLAY_RENDER_DEBUG_MODE", "OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS", "OVERLAY_UPDATE_OVERLAY_METHOD", "OVERLAY_OOP_UI_INITIALIZED", "OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS", "OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED", "OVERLAY_UI_FOCUSED_PID", "OVERLAY_V3_PRE_CREATE_POPOUT", "OVERLAY_V3_POST_CREATE_POPOUT", "OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS", "OVERLAY_V3_WINDOW_CREATION_FAILURE", "OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", "OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", "OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW", "OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW", "OVERLAY_SET_CLICK_ZONES", "OVERLAY_SET_INPUT_LOCKED"],
    inlineRequire: () => require("./475866.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  ParticipantFocusManager: {
    inlineRequire: () => require("./14516.js").Z,
    hasStoreChangeListeners: true
  },
  PomeloManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./736401.js").Z
  },
  PremiumGiftingIntentManager: {
    actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT"],
    inlineRequire: () => require("./666086.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  PromotionsManager: {
    actions: ["POST_CONNECTION_OPEN", "EXPERIMENTS_FETCH_SUCCESS", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS", "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS", "VIRTUAL_CURRENCY_REDEEM_SUCCESS"],
    inlineRequire: () => require("./349540.js").Z
  },
  RelationshipManager: {
    actions: ["RELATIONSHIP_ADD", "FRIEND_REQUEST_ACCEPTED"],
    inlineRequire: () => require("./859099.js").Z
  },
  RTCLatencyTestManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./70655.js").Z
  },
  SavedMessagesManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./580506.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  MessageRemindersNotificationManager: {
    actions: ["SAVED_MESSAGES_UPDATE", "SAVED_MESSAGE_CREATE", "SAVED_MESSAGE_DELETE"],
    inlineRequire: () => require("./457572.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  SearchTokensManager: {
    actions: ["USER_SETTINGS_PROTO_UPDATE", "POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./538874.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  SelectedChannelManager: {
    actions: ["GUILD_CREATE", "CHANNEL_CREATE", "LOGOUT"],
    inlineRequire: () => require("./149770.js").Z
  },
  SelfPresenceStoreManager: {
    inlineRequire: () => require("./613402.js").Z,
    hasStoreChangeListeners: true
  },
  StageChannelRequestToSpeakMessageManager: {
    actions: ["VOICE_STATE_UPDATES"],
    inlineRequire: () => require("./834332.js").Z
  },
  StageMusicManager: {
    actions: ["VOICE_CHANNEL_SELECT", "LOGOUT", "STAGE_MUSIC_MUTE", "STAGE_MUSIC_PLAY", "VOICE_STATE_UPDATES", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_SELF_DEAF"],
    inlineRequire: () => require("./485287.js").ZP
  },
  SprigEventManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./402804.js").Z,
    hasStoreChangeListeners: true
  },
  StaffMemberPreloaderManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./239088.js").Z
  },
  SubscriptionManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./892264.js").Z
  },
  SystemServiceManager: {
    actions: ["POST_CONNECTION_OPEN", "LOGOUT"],
    inlineRequire: () => require("./711926.js").Z
  },
  VoiceFiltersCatalogManager: {
    actions: ["POST_CONNECTION_OPEN", "VOICE_FILTER_CATALOG_FETCH_SUCCESS", "VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME"],
    inlineRequire: () => require("./886196.js").Z
  },
  ThreadManager: {
    actions: ["CHANNEL_DELETE", "MESSAGE_CREATE", "GUILD_DELETE"],
    inlineRequire: () => require("./359915.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  UrgentSystemDMManagerBase: {
    actions: ["POST_CONNECTION_OPEN", "MESSAGE_CREATE", "CHANNEL_SELECT"],
    inlineRequire: () => require("./808325.jsx").Z,
    neverLoadBeforeConnectionOpen: true
  },
  UserGuildSettingsManager: {
    actions: ["CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CATEGORY_COLLAPSE_ALL", "CATEGORY_EXPAND_ALL", "POST_CONNECTION_OPEN", "USER_GUILD_SETTINGS_FULL_UPDATE"],
    inlineRequire: () => require("./149071.js").Z
  },
  UserSearchManager: {
    actions: ["LOGOUT", "POST_CONNECTION_OPEN", "CONNECTION_OPEN_SUPPLEMENTAL", "OVERLAY_INITIALIZE", "CURRENT_USER_UPDATE", "GUILD_CREATE", "GUILD_MEMBERS_CHUNK_BATCH", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "RELATIONSHIP_ADD", "RELATIONSHIP_UPDATE", "RELATIONSHIP_REMOVE", "CHANNEL_CREATE", "CHANNEL_UPDATES", "CHANNEL_RECIPIENT_ADD", "PASSIVE_UPDATE_V2", "THREAD_LIST_SYNC", "LOAD_FORUM_POSTS", "LOAD_MESSAGES_SUCCESS", "SEARCH_MESSAGES_SUCCESS", "LOAD_THREADS_SUCCESS", "LOAD_ARCHIVED_THREADS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS", "MESSAGE_CREATE", "MESSAGE_UPDATE"],
    inlineRequire: () => require("./279779.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  UserSettingsManager: {
    actions: ["POST_CONNECTION_OPEN", "OVERLAY_INITIALIZE", "USER_SETTINGS_PROTO_UPDATE"],
    inlineRequire: () => require("./894247.js").Z
  },
  VoiceChannelSettingsManager: {
    actions: ["CHANNEL_UPDATES", "VOICE_STATE_UPDATES"],
    inlineRequire: () => require("./583523.js").Z
  },
  VoiceFilterLoopbackManager: {
    actions: ["RTC_CONNECTION_STATE", "VOICE_FILTER_LOOPBACK_TOGGLE", "VOICE_FILTER_APPLIED", "AUDIO_TOGGLE_SELF_MUTE", "AUDIO_SET_TEMPORARY_SELF_MUTE", "AUDIO_SET_SELF_MUTE"],
    inlineRequire: () => require("./986057.js").Z,
    hasStoreChangeListeners: true
  },
  VoiceFilterManager: {
    actions: ["VOICE_FILTER_REQUEST_SWITCH", "VOICE_FILTER_PREFETCH", "VOICE_FILTER_DOWNLOAD_FAILED", "VOICE_FILTER_DOWNLOAD_CANCELED", "VOICE_FILTER_APPLIED", "VOICE_FILTER_APPLY_FAILED"],
    inlineRequire: () => require("./230385.js").Z
  },
  VoicePermissionManager: {
    actions: ["VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATES"],
    inlineRequire: () => require("./39846.js").Z
  },
  VoiceProcessingErrorManager: {
    actions: ["MEDIA_ENGINE_NOISE_CANCELLATION_ERROR"],
    inlineRequire: () => require("./681694.js").Z
  },
  GPUWorkaroundManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./703767.js").Z
  },
  NativeCrashManager: {
    actions: ["RTC_CONNECTION_STATE", "RTC_CONNECTION_VIDEO", "MEDIA_SESSION_JOINED"],
    inlineRequire: () => require("./902558.js").Z
  },
  GuestManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./978684.js").Z
  },
  ClipsManager: {
    actions: ["RTC_CONNECTION_FLAGS", "RTC_CONNECTION_STATE", "POST_CONNECTION_OPEN", "RTC_CONNECTION_USERS_MERGED", "CLIPS_ALLOW_VOICE_RECORDING_UPDATE", "CLIPS_SETTINGS_UPDATE", "CLIPS_INIT_FAILURE", "STREAM_START", "RUNNING_GAME_TOGGLE_DETECTION", "RUNNING_GAMES_CHANGE", "CLIPS_RESTART", "RTC_CONNECTION_VIDEO"],
    inlineRequire: () => require("./220122.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  ClipDecisionEngineManager: {
    actions: ["CLIPS_SIGNAL_CREATED", "CLIPS_SETTINGS_UPDATE", "SPEAKING", "GUILD_SOUNDBOARD_SOUND_PLAY_START", "GUILD_SOUNDBOARD_SOUND_PLAY_END", "VOICE_CHANNEL_SELECT"],
    inlineRequire: () => require("./600349.js").Z
  },
  ClipsSignalManager: {
    actions: ["RUNNING_GAMES_CHANGE", "CLIPS_SETTINGS_UPDATE", "VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATES"],
    inlineRequire: () => require("./291706.js").Z
  },
  CustomCallSoundsManager: {
    actions: ["RTC_CONNECTION_STATE", "SOUNDBOARD_MUTE_JOIN_SOUND", "VOICE_STATE_UPDATES"],
    inlineRequire: () => require("./783295.js").Z
  },
  MessageViewTrackingManager: {
    actions: ["CHANNEL_SELECT"],
    inlineRequire: () => require("./765383.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  DetectableGamesManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./114957.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  MidjourneyOnboardingManager: {
    actions: ["CHANNEL_CREATE"],
    inlineRequire: () => require("./175255.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  QuestProgressManager: {
    actions: ["QUESTS_SEND_HEARTBEAT_SUCCESS", "QUESTS_SEND_HEARTBEAT_FAILURE", "QUESTS_ENROLL_SUCCESS", "RUNNING_GAMES_CHANGE", "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS", "STREAM_START", "STREAM_CREATE", "STREAM_CLOSE", "PASSIVE_UPDATE_V2", "VOICE_STATE_UPDATES", "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", "EMBEDDED_ACTIVITY_UPDATE_V2", "QUESTS_PREVIEW_UPDATE_SUCCESS", "QUEST_APPLICATION_START_TIMER"],
    inlineRequire: () => require("./427081.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  QuestFetchManager: {
    actions: ["QUESTS_FETCH_CURRENT_QUESTS_BEGIN", "POST_CONNECTION_OPEN", "RUNNING_GAMES_CHANGE", "USER_SETTINGS_PROTO_UPDATE", "LOGOUT"],
    inlineRequire: () => require("./877519.js").Z
  },
  VoiceChannelGameActivityManager: {
    actions: ["RUNNING_GAMES_CHANGE", "VOICE_CHANNEL_SELECT"],
    inlineRequire: () => require("./981668.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  InappropriateConversationsManager: {
    actions: ["VIBING_WUMPUS_PLAY_MUSIC", "VIBING_WUMPUS_STOP_MUSIC", "VIBING_WUMPUS_PAUSE_MUSIC"],
    inlineRequire: () => require("./752290.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  ContentInventoryManager: {
    actions: ["POST_CONNECTION_OPEN", "CONNECTION_CLOSED", "IDLE", "WINDOW_FOCUS", "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN", "CONTENT_INVENTORY_MANUAL_REFRESH", "CONTENT_INVENTORY_INBOX_STALE", "SPOTIFY_NEW_TRACK", "GAME_PROFILE_OPEN"],
    inlineRequire: () => require("./345765.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  RunningGameDetectionManager: {
    actions: ["RUNNING_GAME_DELETE_ENTRY", "RUNNING_GAME_TOGGLE_DETECTION"],
    inlineRequire: () => require("./611184.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  RunningGameHeartbeatManager: {
    actions: ["RUNNING_GAMES_CHANGE", "LOGOUT", "CONNECTION_CLOSED", "POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./696287.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  DmSettingsUpsellManager: {
    actions: ["DM_SETTINGS_UPSELL_SHOW"],
    inlineRequire: () => require("./401416.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  ForwardGuildBreadcrumbManager: {
    actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS"],
    inlineRequire: () => require("./35260.js").Z
  },
  SharedSpacesWarningManager: {
    actions: ["CHANNEL_SELECT", "APP_STATE_UPDATE"],
    inlineRequire: () => require("./414509.js").ZP,
    neverLoadBeforeConnectionOpen: true
  },
  DispatcherSchedulerManager: {
    actions: ["POST_CONNECTION_OPEN", "EXPERIMENTS_FETCH_SUCCESS", "CACHE_LOADED", "LOGIN_SUCCESS", "EXPERIMENT_OVERRIDE_BUCKET"],
    inlineRequire: () => require("./902629.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  GlobalDiscoveryServersFeaturedSearchManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./275131.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  GuildPowerupsManager: {
    actions: ["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE", "GUILD_APPLIED_BOOSTS_UPDATE"],
    inlineRequire: () => require("./909123.js").Z,
    neverLoadBeforeConnectionOpen: true,
    hasStoreChangeListeners: true
  },
  AVErrorManager: {
    actions: ["MEDIA_ENGINE_SET_AUDIO_ENABLED", "AUDIO_INPUT_DETECTED", "AUDIO_SET_DISPLAY_SILENCE_WARNING", "CERTIFIED_DEVICES_SET", "AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_OUTPUT_DEVICE", "MEDIA_ENGINE_DEVICES", "RTC_CONNECTION_STATE", "VOICE_STATE_UPDATES", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "MEDIA_ENGINE_SOUNDSHARE_FAILED", "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", "MEDIA_ENGINE_VIDEO_STATE_CHANGED", "NATIVE_SCREEN_SHARE_PICKER_UPDATE", "NATIVE_SCREEN_SHARE_PICKER_ERROR", "MEDIA_SESSION_JOINED", "RTC_CONNECTION_UPDATE_ID", "RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS", "REPORT_AV_ERROR", "VIDEO_STREAM_READY_TIMEOUT", "CLEAR_VIDEO_STREAM_READY_TIMEOUT", "RTC_CONNECTION_VIDEO", "STREAM_CLOSE"],
    inlineRequire: () => require("./550643.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  ApplicationStreamingManager: {
    actions: ["STREAM_WATCH", "STREAM_START", "STREAM_CREATE", "STREAM_UPDATE", "STREAM_DELETE", "STREAM_CLOSE", "CALL_UPDATE", "CHANNEL_UPDATES", "VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATES"],
    inlineRequire: () => require("./981283.jsx").Z,
    neverLoadBeforeConnectionOpen: true
  },
  LibdiscoreExperimentManager: {
    actions: [],
    inlineRequire: () => require("./497909.js").Z,
    hasStoreChangeListeners: true
  },
  NativeIntentsManager: {
    actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_UPDATES", "GUILD_CREATE", "GUILD_UPDATE", "GUILD_DELETE", "LOGOUT", "RELATIONSHIP_ADD", "RELATIONSHIP_REMOVE", "RELATIONSHIP_UPDATE", "THREAD_CREATE", "THREAD_DELETE", "THREAD_UPDATE", "USER_UPDATE"],
    inlineRequire: () => require("./607841.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  KrispExperimentManager: {
    actions: ["POST_CONNECTION_OPEN", "RTC_CONNECTION_STATE"],
    inlineRequire: () => require("./891812.js").Z
  },
  NegativeHardwareAccelerationExperimentManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./851862.js").Z
  },
  FramesManager: {
    actions: ["RPC_APP_DISCONNECTED"],
    inlineRequire: () => require("./460093.js").Z
  },
  NotificationsInboxAutoLoadManager: {
    inlineRequire: () => require("./838611.js").Z,
    neverLoadBeforeConnectionOpen: true,
    hasStoreChangeListeners: true
  },
  KrispBVCDeviceManager: {
    actions: ["AUDIO_SET_INPUT_DEVICE", "MEDIA_ENGINE_DEVICES", "RTC_CONNECTION_STATE", "AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED"],
    inlineRequire: () => require("./550856.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  RequestToStreamManager: {
    actions: ["VOICE_STATE_UPDATES"],
    inlineRequire: () => require("./192229.js").Z,
    neverLoadBeforeConnectionOpen: true
  },
  UserApplicationIdentityManager: {
    actions: ["USER_APPLICATION_IDENTITY_UPDATE", "USER_APPLICATION_IDENTITY_REMOVE"],
    inlineRequire: () => require("./473288.js").Z
  },
  AutoQualityStreamingManager: {
    actions: ["MEDIA_ENGINE_CONNECTION_STATS", "POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./216405.js").Z
  },
  WebAuthnCredentialManager: {
    actions: ["POST_CONNECTION_OPEN", "LOGIN_RESET", "LOGOUT"],
    inlineRequire: () => require("./268194.js").Z,
    neverLoadBeforeConnectionOpen: true,
    hasStoreChangeListeners: true
  },
  SocialLayerStorefrontAnnouncementManager: {
    actions: ["POST_CONNECTION_OPEN"],
    inlineRequire: () => require("./696011.js").Z,
    neverLoadBeforeConnectionOpen: true,
    hasStoreChangeListeners: true
  }
};
(0, Chunk132454.j)(i)