/** Chunk was on web.js **/
"use strict";
n.d(t, {
  $R: () => u,
  $V: () => X,
  $w: () => es,
  Ai: () => b,
  Al: () => r.A,
  B1: () => $,
  BR: () => r.Z,
  BZ: () => K,
  Cw: () => P,
  Cy: () => Z,
  EK: () => e_,
  ET: () => em,
  Et: () => z,
  GZ: () => M,
  H0: () => T,
  He: () => O,
  Il: () => a.I,
  Jj: () => x,
  MA: () => eg,
  NY: () => D,
  OL: () => g,
  OM: () => ef,
  Pl: () => U,
  Py: () => w,
  Q: () => ep,
  QL: () => S,
  RG: () => eh,
  RK: () => ei,
  S7: () => j,
  Sk: () => h,
  TC: () => V,
  U6: () => L,
  U9: () => p,
  Uk: () => N,
  V6: () => W,
  Vq: () => B,
  Vz: () => v,
  X5: () => m,
  X6: () => H,
  X7: () => R,
  XM: () => ee,
  Zu: () => k,
  aO: () => eE,
  aV: () => I,
  am: () => el,
  dG: () => G,
  fK: () => ec,
  fr: () => Y,
  gg: () => E,
  i$: () => y,
  j8: () => C,
  j_: () => eu,
  lT: () => Q,
  ld: () => A,
  pK: () => ed,
  rx: () => f,
  tP: () => s.t,
  vS: () => J,
  xr: () => d,
  yA: () => en,
  yX: () => er,
  yY: () => F,
  zM: () => q
}), n(47120);
var r = n(290926),
  i = n(149765),
  o = n(860911);
n(674746);
var a = n(691324),
  s = n(481677);
n(722770);
let l = location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT,
  c = location.protocol + "//discord.gg",
  u = "discord.com",
  d = "support.discord.com",
  f = "support-dev.discord.com",
  p = "discord.com",
  _ = "feedback.discord.com";
Object.freeze({
  HINT_PURPLE: "#c9d2f0",
  DARK_PURPLE: "#697ec4",
  MODAL_GREY: "#EFEFF4",
  ORANGE: "#f57731",
  GUILDS_GREY: "#1e2124",
  ACCOUNT_GREY: "#282b30",
  CHAT_GREY: "#36393e",
  UNREAD_GREY: "#8a8e94",
  HIGHLIGHT_GREY: "#25282c",
  AVATAR_GREY: "#747F8C",
  WHITE2: "#f3f3f3",
  WHITE3: "#f0f0f0",
  WHITE7: "#dbdde1",
  WHITE8: "#cdcdcd",
  GREY1: "#99aab5",
  GREY2: "#87909c",
  GREY3: "#737f8d",
  GREY4: "#949494",
  GREY5: "#535559",
  GREY6: "#4f545c",
  GREY7: "#1c242b",
  GREY9: "#202226"
});
var h = function(e) {
    return e.ONLINE = "online", e.OFFLINE = "offline", e.IDLE = "idle", e.DND = "dnd", e.INVISIBLE = "invisible", e.STREAMING = "streaming", e.UNKNOWN = "unknown", e
  }({}),
  m = function(e) {
    return e.DESKTOP = "desktop", e.WEB = "web", e.MOBILE = "mobile", e.UNKNOWN = "unknown", e
  }({});
let g = "6Lef5iQTAAAAAKeIvIY-DeexoO3gj7ryl9rLMEnn";
var E = function(e) {
  return e[e.STRIPE = 1] = "STRIPE", e[e.BRAINTREE = 2] = "BRAINTREE", e[e.APPLE = 3] = "APPLE", e[e.GOOGLE = 4] = "GOOGLE", e[e.ADYEN = 5] = "ADYEN", e[e.APPLE_PARTNER = 6] = "APPLE_PARTNER", e
}({});
let v = Object.freeze({
    1: "Stripe",
    2: "Braintree",
    3: "Apple",
    4: "Google",
    5: "Adyen",
    6: "Apple Partner"
  }),
  b = Object.freeze({
    BRAINTREE: {
      KEY: window.GLOBAL_ENV.BRAINTREE_KEY,
      PAYMENT_GATEWAY: "braintree"
    },
    STRIPE: {
      KEY: window.GLOBAL_ENV.STRIPE_KEY,
      PAYMENT_GATEWAY: "stripe"
    },
    ADYEN: {
      KEY: window.GLOBAL_ENV.ADYEN_KEY,
      PAYMENT_GATEWAY: "adyen"
    }
  });
var y = function(e) {
    return e.GOOGLE_PAY = "google_pay", e.APPLE_PAY = "apple_pay", e
  }({}),
  O = function(e) {
    return e[e.UNKNOWN = 0] = "UNKNOWN", e[e.CARD = 1] = "CARD", e[e.PAYPAL = 2] = "PAYPAL", e[e.GIROPAY = 3] = "GIROPAY", e[e.SOFORT = 4] = "SOFORT", e[e.PRZELEWY24 = 5] = "PRZELEWY24", e[e.SEPA_DEBIT = 6] = "SEPA_DEBIT", e[e.PAYSAFE_CARD = 7] = "PAYSAFE_CARD", e[e.GCASH = 8] = "GCASH", e[e.GRABPAY_MY = 9] = "GRABPAY_MY", e[e.MOMO_WALLET = 10] = "MOMO_WALLET", e[e.VENMO = 11] = "VENMO", e[e.GOPAY_WALLET = 12] = "GOPAY_WALLET", e[e.KAKAOPAY = 13] = "KAKAOPAY", e[e.BANCONTACT = 14] = "BANCONTACT", e[e.EPS = 15] = "EPS", e[e.IDEAL = 16] = "IDEAL", e[e.CASH_APP = 17] = "CASH_APP", e[e.APPLE = 18] = "APPLE", e[e.PAYMENT_REQUEST = 99] = "PAYMENT_REQUEST", e
  }({});
let S = new Map([
    [7, "paysafecard"],
    [8, "gcash"],
    [9, "grabpay_MY"],
    [10, "momo_wallet"],
    [13, "kakaopay"],
    [12, "gopay_wallet"],
    [17, "cashapp"]
  ]),
  I = new Map([
    [14, "bancontact"],
    [3, "giropay"],
    [16, "ideal"]
  ]),
  T = new Set([7, 8, 9, 12, 10, 13, 14, 15, 16, 4, 3, 5, 17]),
  N = new Set([7, 9, 3, 5, 4, 14, 15, 16]),
  A = new Set([1, 2, 6, 8, 10, 11, 13, 12, 17]),
  C = new Set([3, 4, 5, 14, 15, 16, 7, 9, 12]),
  R = new Set([6]);
var P = function(e) {
    return e[e.NEW = 1] = "NEW", e
  }({}),
  w = function(e) {
    return e[e.PENDING = 0] = "PENDING", e[e.COMPLETED = 1] = "COMPLETED", e[e.FAILED = 2] = "FAILED", e[e.REVERSED = 3] = "REVERSED", e[e.REFUNDED = 4] = "REFUNDED", e[e.CANCELED = 5] = "CANCELED", e
  }({}),
  D = function(e) {
    return e[e.PREMIUM = 1] = "PREMIUM", e[e.GUILD = 2] = "GUILD", e[e.APPLICATION = 3] = "APPLICATION", e
  }({}),
  L = function(e) {
    return e.PAYPAL_POPUP_CLOSED = "PAYPAL_POPUP_CLOSED", e.VENMO_APP_CANCELED = "VENMO_APP_CANCELED", e.VENMO_CANCELED = "VENMO_CANCELED", e
  }({});
Object.freeze({
  CONSTANT: 1,
  APPLE_STICKER: 2
});
var x = function(e) {
    return e[e.DISCOVERY = 0] = "DISCOVERY", e[e.CHECKOUT = 1] = "CHECKOUT", e
  }({}),
  M = function(e) {
    return e[e.SUBSCRIPTION = 0] = "SUBSCRIPTION", e[e.ONE_TIME = 1] = "ONE_TIME", e
  }({});
let k = Object.freeze({
  0: "subscription",
  1: "sku"
});
var j = function(e) {
  return e[e.VIEW_CHANNEL = 1024] = "VIEW_CHANNEL", e[e.READ_MESSAGE_HISTORY = 65536] = "READ_MESSAGE_HISTORY", e[e.CONNECT = 1048576] = "CONNECT", e
}({});
let U = Object.freeze({
    CREATE_INSTANT_INVITE: i.r0(0),
    KICK_MEMBERS: i.r0(1),
    BAN_MEMBERS: i.r0(2),
    ADMINISTRATOR: i.r0(3),
    MANAGE_CHANNELS: i.r0(4),
    MANAGE_GUILD: i.r0(5),
    CHANGE_NICKNAME: i.r0(26),
    MANAGE_NICKNAMES: i.r0(27),
    MANAGE_ROLES: i.r0(28),
    MANAGE_WEBHOOKS: i.r0(29),
    MANAGE_GUILD_EXPRESSIONS: i.r0(30),
    CREATE_GUILD_EXPRESSIONS: i.r0(43),
    VIEW_AUDIT_LOG: i.r0(7),
    VIEW_CHANNEL: i.r0(10),
    VIEW_GUILD_ANALYTICS: i.r0(19),
    VIEW_CREATOR_MONETIZATION_ANALYTICS: i.r0(41),
    MODERATE_MEMBERS: i.r0(40),
    USE_EMBEDDED_ACTIVITIES: i.r0(39),
    USE_EXTERNAL_APPS: i.r0(50),
    SEND_MESSAGES: i.r0(11),
    SEND_TTS_MESSAGES: i.r0(12),
    MANAGE_MESSAGES: i.r0(13),
    EMBED_LINKS: i.r0(14),
    ATTACH_FILES: i.r0(15),
    READ_MESSAGE_HISTORY: i.r0(16),
    MENTION_EVERYONE: i.r0(17),
    USE_EXTERNAL_EMOJIS: i.r0(18),
    ADD_REACTIONS: i.r0(6),
    USE_APPLICATION_COMMANDS: i.r0(31),
    MANAGE_THREADS: i.r0(34),
    CREATE_PUBLIC_THREADS: i.r0(35),
    CREATE_PRIVATE_THREADS: i.r0(36),
    USE_EXTERNAL_STICKERS: i.r0(37),
    SEND_MESSAGES_IN_THREADS: i.r0(38),
    SEND_VOICE_MESSAGES: i.r0(46),
    USE_CLYDE_AI: i.r0(47),
    SEND_POLLS: i.r0(49),
    CONNECT: i.r0(20),
    SPEAK: i.r0(21),
    MUTE_MEMBERS: i.r0(22),
    DEAFEN_MEMBERS: i.r0(23),
    MOVE_MEMBERS: i.r0(24),
    USE_VAD: i.r0(25),
    PRIORITY_SPEAKER: i.r0(8),
    STREAM: i.r0(9),
    USE_SOUNDBOARD: i.r0(42),
    USE_EXTERNAL_SOUNDS: i.r0(45),
    SET_VOICE_CHANNEL_STATUS: i.r0(48),
    REQUEST_TO_SPEAK: i.r0(32),
    MANAGE_EVENTS: i.r0(33),
    CREATE_EVENTS: i.r0(44)
  }),
  G = function() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  },
  B = () => null,
  Z = () => Promise.resolve(),
  F = [U.KICK_MEMBERS, U.BAN_MEMBERS, U.ADMINISTRATOR, U.MANAGE_CHANNELS, U.MANAGE_GUILD, U.MANAGE_ROLES, U.MANAGE_MESSAGES, U.MANAGE_THREADS, U.MODERATE_MEMBERS],
  V = i.$e(...F),
  H = 1,
  W = 6463,
  Y = 10,
  K = "RpcApplicationLogger";
var z = function(e) {
    return e.DISPATCH = "DISPATCH", e.SET_CONFIG = "SET_CONFIG", e.AUTHORIZE = "AUTHORIZE", e.AUTHENTICATE = "AUTHENTICATE", e.GET_GUILD = "GET_GUILD", e.GET_GUILDS = "GET_GUILDS", e.GET_CHANNEL = "GET_CHANNEL", e.GET_CHANNELS = "GET_CHANNELS", e.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", e.CREATE_CHANNEL_INVITE = "CREATE_CHANNEL_INVITE", e.GET_RELATIONSHIPS = "GET_RELATIONSHIPS", e.GET_USER = "GET_USER", e.SUBSCRIBE = "SUBSCRIBE", e.UNSUBSCRIBE = "UNSUBSCRIBE", e.SET_USER_VOICE_SETTINGS = "SET_USER_VOICE_SETTINGS", e.SET_USER_VOICE_SETTINGS_2 = "SET_USER_VOICE_SETTINGS_2", e.PUSH_TO_TALK = "PUSH_TO_TALK", e.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", e.GET_SELECTED_VOICE_CHANNEL = "GET_SELECTED_VOICE_CHANNEL", e.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", e.GET_VOICE_SETTINGS = "GET_VOICE_SETTINGS", e.SET_VOICE_SETTINGS_2 = "SET_VOICE_SETTINGS_2", e.SET_VOICE_SETTINGS = "SET_VOICE_SETTINGS", e.SET_ACTIVITY = "SET_ACTIVITY", e.SEND_ACTIVITY_JOIN_INVITE = "SEND_ACTIVITY_JOIN_INVITE", e.CLOSE_ACTIVITY_JOIN_REQUEST = "CLOSE_ACTIVITY_JOIN_REQUEST", e.ACTIVITY_INVITE_USER = "ACTIVITY_INVITE_USER", e.ACCEPT_ACTIVITY_INVITE = "ACCEPT_ACTIVITY_INVITE", e.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", e.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", e.SHARE_INTERACTION = "SHARE_INTERACTION", e.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", e.SHARE_LINK = "SHARE_LINK", e.INVITE_BROWSER = "INVITE_BROWSER", e.DEEP_LINK = "DEEP_LINK", e.CONNECTIONS_CALLBACK = "CONNECTIONS_CALLBACK", e.BILLING_POPUP_BRIDGE_CALLBACK = "BILLING_POPUP_BRIDGE_CALLBACK", e.BRAINTREE_POPUP_BRIDGE_CALLBACK = "BRAINTREE_POPUP_BRIDGE_CALLBACK", e.GIFT_CODE_BROWSER = "GIFT_CODE_BROWSER", e.GUILD_TEMPLATE_BROWSER = "GUILD_TEMPLATE_BROWSER", e.OPEN_MESSAGE = "OPEN_MESSAGE", e.OVERLAY = "OVERLAY", e.BROWSER_HANDOFF = "BROWSER_HANDOFF", e.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", e.GET_IMAGE = "GET_IMAGE", e.SET_OVERLAY_LOCKED = "SET_OVERLAY_LOCKED", e.OPEN_OVERLAY_ACTIVITY_INVITE = "OPEN_OVERLAY_ACTIVITY_INVITE", e.OPEN_OVERLAY_GUILD_INVITE = "OPEN_OVERLAY_GUILD_INVITE", e.OPEN_OVERLAY_VOICE_SETTINGS = "OPEN_OVERLAY_VOICE_SETTINGS", e.VALIDATE_APPLICATION = "VALIDATE_APPLICATION", e.GET_ENTITLEMENT_TICKET = "GET_ENTITLEMENT_TICKET", e.GET_APPLICATION_TICKET = "GET_APPLICATION_TICKET", e.START_PURCHASE = "START_PURCHASE", e.START_PREMIUM_PURCHASE = "START_PREMIUM_PURCHASE", e.GET_SKUS = "GET_SKUS", e.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", e.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", e.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", e.GET_NETWORKING_CONFIG = "GET_NETWORKING_CONFIG", e.NETWORKING_SYSTEM_METRICS = "NETWORKING_SYSTEM_METRICS", e.NETWORKING_PEER_METRICS = "NETWORKING_PEER_METRICS", e.NETWORKING_CREATE_TOKEN = "NETWORKING_CREATE_TOKEN", e.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", e.SEND_GENERIC_EVENT = "SEND_GENERIC_EVENT", e.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", e.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", e.CAPTURE_LOG = "CAPTURE_LOG", e.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", e.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", e.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", e.GET_SOUNDBOARD_SOUNDS = "GET_SOUNDBOARD_SOUNDS", e.PLAY_SOUNDBOARD_SOUND = "PLAY_SOUNDBOARD_SOUND", e.TOGGLE_VIDEO = "TOGGLE_VIDEO", e.TOGGLE_SCREENSHARE = "TOGGLE_SCREENSHARE", e.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS", e.GET_PROVIDER_ACCESS_TOKEN = "GET_PROVIDER_ACCESS_TOKEN", e.MAYBE_GET_PROVIDER_ACCESS_TOKEN = "MAYBE_GET_PROVIDER_ACCESS_TOKEN", e.NAVIGATE_TO_CONNECTIONS = "NAVIGATE_TO_CONNECTIONS", e.INVITE_USER_EMBEDDED = "INVITE_USER_EMBEDDED", e
  }({}),
  q = function(e) {
    return e.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", e.CURRENT_GUILD_MEMBER_UPDATE = "CURRENT_GUILD_MEMBER_UPDATE", e.GUILD_STATUS = "GUILD_STATUS", e.GUILD_CREATE = "GUILD_CREATE", e.CHANNEL_CREATE = "CHANNEL_CREATE", e.RELATIONSHIP_UPDATE = "RELATIONSHIP_UPDATE", e.VOICE_CHANNEL_SELECT = "VOICE_CHANNEL_SELECT", e.VOICE_STATE_CREATE = "VOICE_STATE_CREATE", e.VOICE_STATE_DELETE = "VOICE_STATE_DELETE", e.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", e.VOICE_SETTINGS_UPDATE = "VOICE_SETTINGS_UPDATE", e.VOICE_SETTINGS_UPDATE_2 = "VOICE_SETTINGS_UPDATE_2", e.VOICE_CONNECTION_STATUS = "VOICE_CONNECTION_STATUS", e.SPEAKING_START = "SPEAKING_START", e.SPEAKING_STOP = "SPEAKING_STOP", e.GAME_JOIN = "GAME_JOIN", e.GAME_SPECTATE = "GAME_SPECTATE", e.ACTIVITY_JOIN = "ACTIVITY_JOIN", e.ACTIVITY_JOIN_REQUEST = "ACTIVITY_JOIN_REQUEST", e.ACTIVITY_SPECTATE = "ACTIVITY_SPECTATE", e.ACTIVITY_INVITE = "ACTIVITY_INVITE", e.ACTIVITY_PIP_MODE_UPDATE = "ACTIVITY_PIP_MODE_UPDATE", e.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", e.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", e.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", e.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE", e.NOTIFICATION_CREATE = "NOTIFICATION_CREATE", e.MESSAGE_CREATE = "MESSAGE_CREATE", e.MESSAGE_UPDATE = "MESSAGE_UPDATE", e.MESSAGE_DELETE = "MESSAGE_DELETE", e.OVERLAY = "OVERLAY", e.OVERLAY_UPDATE = "OVERLAY_UPDATE", e.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", e.ENTITLEMENT_DELETE = "ENTITLEMENT_DELETE", e.VOICE_CHANNEL_EFFECT_SEND = "VOICE_CHANNEL_EFFECT_SEND", e.VOICE_CHANNEL_EFFECT_RECENT_EMOJI = "VOICE_CHANNEL_EFFECT_RECENT_EMOJI", e.VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE = "VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE", e.SCREENSHARE_STATE_UPDATE = "SCREENSHARE_STATE_UPDATE", e.VIDEO_STATE_UPDATE = "VIDEO_STATE_UPDATE", e.READY = "READY", e.ERROR = "ERROR", e
  }({}),
  Q = function(e) {
    return e[e.UNKNOWN_ERROR = 1e3] = "UNKNOWN_ERROR", e[e.SERVICE_UNAVAILABLE = 1001] = "SERVICE_UNAVAILABLE", e[e.TRANSACTION_ABORTED = 1002] = "TRANSACTION_ABORTED", e[e.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", e[e.INVALID_COMMAND = 4002] = "INVALID_COMMAND", e[e.INVALID_GUILD = 4003] = "INVALID_GUILD", e[e.INVALID_EVENT = 4004] = "INVALID_EVENT", e[e.INVALID_CHANNEL = 4005] = "INVALID_CHANNEL", e[e.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS", e[e.INVALID_CLIENTID = 4007] = "INVALID_CLIENTID", e[e.INVALID_ORIGIN = 4008] = "INVALID_ORIGIN", e[e.INVALID_TOKEN = 4009] = "INVALID_TOKEN", e[e.INVALID_USER = 4010] = "INVALID_USER", e[e.INVALID_INVITE = 4011] = "INVALID_INVITE", e[e.INVALID_ACTIVITY_JOIN_REQUEST = 4012] = "INVALID_ACTIVITY_JOIN_REQUEST", e[e.INVALID_ENTITLEMENT = 4015] = "INVALID_ENTITLEMENT", e[e.INVALID_GIFT_CODE = 4016] = "INVALID_GIFT_CODE", e[e.INVALID_GUILD_TEMPLATE = 4017] = "INVALID_GUILD_TEMPLATE", e[e.INVALID_SOUND = 4018] = "INVALID_SOUND", e[e.INVALID_PROVIDER = 4019] = "INVALID_PROVIDER", e[e.INVALID_CONNECTION_CALLBACK_STATE = 4020] = "INVALID_CONNECTION_CALLBACK_STATE", e[e.BAD_REQUEST_FOR_PROVIDER = 4021] = "BAD_REQUEST_FOR_PROVIDER", e[e.OAUTH2_ERROR = 5e3] = "OAUTH2_ERROR", e[e.SELECT_CHANNEL_TIMED_OUT = 5001] = "SELECT_CHANNEL_TIMED_OUT", e[e.GET_GUILD_TIMED_OUT = 5002] = "GET_GUILD_TIMED_OUT", e[e.SELECT_VOICE_FORCE_REQUIRED = 5003] = "SELECT_VOICE_FORCE_REQUIRED", e[e.INVALID_ACTIVITY_SECRET = 5005] = "INVALID_ACTIVITY_SECRET", e[e.NO_ELIGIBLE_ACTIVITY = 5006] = "NO_ELIGIBLE_ACTIVITY", e[e.PURCHASE_CANCELED = 5008] = "PURCHASE_CANCELED", e[e.PURCHASE_ERROR = 5009] = "PURCHASE_ERROR", e[e.UNAUTHORIZED_FOR_ACHIEVEMENT = 5010] = "UNAUTHORIZED_FOR_ACHIEVEMENT", e[e.RATE_LIMITED = 5011] = "RATE_LIMITED", e[e.UNAUTHORIZED_FOR_APPLICATION = 5012] = "UNAUTHORIZED_FOR_APPLICATION", e[e.NO_CONNECTION_FOUND = 5013] = "NO_CONNECTION_FOUND", e
  }({}),
  X = function(e) {
    return e[e.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", e[e.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", e[e.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", e[e.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", e[e.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", e[e.RATELIMITED = 4002] = "RATELIMITED", e[e.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", e[e.INVALID_VERSION = 4004] = "INVALID_VERSION", e[e.INVALID_ENCODING = 4005] = "INVALID_ENCODING", e
  }({});
let J = 250,
  $ = "token",
  ee = "tokens",
  et = "status.discord.com",
  en = "https://".concat(et),
  er = {
    PRESSKIT: "https://app.box.com/s/5puqm5ijahrrdao7yldi7fr3zah5i1am",
    REBRAND_PRESSKIT: "https://www.dropbox.com/scl/fo/2vittfakjukwa3zl4gnxh/AOS0AZlx-zA4TjDyv-M-dgk?rlkey=kn0v1lcqfq1lurj3lk3x1ujhf&dl=0",
    STATUS: "https://discordstatus.com",
    HELP_AND_SUPPORT: "//".concat(d, "/hc/en-us"),
    FEEDBACK: "//".concat(_),
    EMAIL_SUPPORT: "mailto:support@".concat(p),
    EMAIL_LAW_ENFORCEMENT: "mailto:lawenforcement@".concat(p),
    EMAIL_HYPESQUAD: "mailto:hypesquad@".concat(p),
    EMAIL_JOBS: "mailto:jobs@".concat(p),
    DEV_PERKS_FORM: "https://goo.gl/forms/oZfKBStV3sR8GHdU2",
    VERIFICATION_REQUIREMENTS: "https://dis.gd/vfqual",
    BASE_URL: "https://".concat(u),
    PRESS_INQUIRIES: "mailto:press@".concat(p),
    CONTACT_US: "https://dis.gd/contact",
    DEV_LANDING: "/build",
    DEV_PORTAL: "/developers",
    DEV_PORTAL_APPLICATIONS: "/developers/applications",
    DEV_PORTAL_DOCUMENTATION: "/developers/docs",
    DEV_PORTAL_SELF_SERVE_MODAL: "/developers/?store_signup=true",
    PARTNER_CODE_OF_CONDUCT: "https://".concat(d, "/hc/en-us/articles/360024871991"),
    SUBMIT_TNS_REPORT: "https://dis.gd/request",
    MERCH_STORE: "https://discordmerch.com",
    MOD_ACADEMY_EXAM: "https://dis.gd/exam",
    OFFICIAL_3RD_PARTY_MERCH: "https://discordmerch.com/evergreenfooter",
    COMMUNITY: "/community",
    TWITTER_SUPPORT: "https://twitter.com/discord_support",
    QUESTS: "/quests"
  },
  ei = Object.freeze({
    TWITTER: Object.freeze({
      default: "https://twitter.com/discord",
      ja: "https://twitter.com/discord_jp"
    })
  }),
  eo = Object.freeze({
    WELCOME: "".concat(l, "/welcome/"),
    ME: "".concat(l, "/channels/@me"),
    SETTINGS: (e, t) => "".concat(l, "/settings/").concat(e).concat(t ? "/".concat(t) : ""),
    CONNECTION: e => "".concat(l, "/connections/").concat(e),
    CHANGELOGS: "".concat(l, "/settings/changelogs"),
    LOGIN: "".concat(l, "/login"),
    LOGIN_WITH_REDIRECT: e => "".concat(l, "/login?redirect_to=").concat(e),
    REGISTER: "".concat(l, "/register"),
    REGISTER_WITH_REDIRECT: e => "".concat(l, "/register?redirect_to=").concat(e),
    CREATE_GUILD: "".concat(l, "/guilds/create"),
    VANITY_INVITE: e => "".concat(c, "/").concat(e),
    HYPESQUAD_ONLINE: "".concat(l, "/settings/hypesquad-online"),
    BROWSE_NITRO_TITLES: "".concat(l, "/store/browse?type=nitro"),
    SKU_DETAILS: (e, t) => "".concat(l, "/store/skus/").concat(e).concat(null != t ? "?store_listing_id=".concat(t) : ""),
    MESSAGE: (e, t, n) => "/channels/".concat(e, "/").concat(t, "/").concat(n),
    CHANNEL: (e, t) => "/channels/".concat(e, "/").concat(t),
    REPORT: "".concat(l, "/report")
  });
var ea = function(e) {
  return e.INDEX = "/", e.INDEX_WORD = "/index", e.INDEX_BUCKET = "/index/:bucketId", e.CHANGELOGS = "/changelogs/:date", e.COMMUNITY = "/community", e.COMPANY = "/company", e.COMPANY_INFORMATION = "/company-information", e.CREATORS = "/creators", e.DOWNLOADS = "/downloads", e.DOWNLOAD = "/download", e.GAMING = "/gaming", e.PRIVACY = "/privacy", e.TOS = "/tos", e.TERMS = "/terms", e.STORE_TERMS = "/store-terms", e.ACKNOWLEDGEMENTS = "/acknowledgements", e.LICENSES = "/licenses", e.PARTNERS = "/partners", e.HYPESQUAD = "/hypesquad", e.HYPESQUAD_RIOT = "/hypesquad-riot", e.BRANDING = "/branding", e.ERROR_404 = "/404", e.JOBS = "/jobs", e.JOB = "/jobs/:jobId", e.STREAMKIT = "/streamkit", e.SECURITY = "/security", e.NITRO = "/nitro", e.DISCOVER = "/servers", e.QUESTS = "/ads/quests", e.GUIDELINES = "/guidelines", e.RICH_PRESENCE = "/rich-presence", e.VERIFICATION = "/verification", e.OPEN_SOURCE = "/open-source", e.WARFRAME = "/warframe", e.REMOTE_AUTH = "/ra/:remoteAuthFingerprint", e.SAFETY_LANDING = "/safetycenter", e.SAFETY_ARTICLE_ROOT = "/safety", e.SAFETY_ARTICLE = "/safety/:article", e.NEWSROOM = "/newsroom", e.INSPIRATION = "/inspiration", e.MOD_ACADEMY_LANDING = "/moderation", e.MOD_ACADEMY_EXAM = "/moderation/exam", e.MOD_ACADEMY_ARTICLE = "/moderation/:article", e.BLOG = "/blog", e.APP_DIRECTORY = "/application-directory", e.REFRESH_INDEX = "/new", e.REFRESH_INDEX_WORD = "/new/index", e.REFRESH_COMPANY = "/new/company", e.REFRESH_DOWNLOAD = "/new/download", e.REFRESH_PRIVACY = "/new/privacy", e.REFRESH_TERMS = "/new/terms", e.REFRESH_ACKNOWLEDGEMENTS = "/new/acknowledgements", e.REFRESH_LICENSES = "/new/licenses", e.REFRESH_BRANDING = "/new/branding", e.REFRESH_JOBS = "/new/jobs", e.REFRESH_JOB = "/new/jobs/:jobId", e.REFRESH_STREAMKIT = "/new/streamkit", e.REFRESH_NITRO = "/new/nitro", e.REFRESH_GUIDELINES = "/new/guidelines", e.REFRESH_SAFETY_LANDING = "/new/safety", e.REFRESH_SAFETY_ARTICLE = "/new/safety/:article", e.COLLEGE = "/college", e.LEAGUE_CLUBS = "/league-communities", e.DISCORD_RECRUITING_SCAMS = "/discord-recruitment-scams", e.DEV_NEWSLETTER_SIGNUP = "/dev-newsletter", e.LEGACY_DEV_NEWSLETTER = "/newsletter", e.LEGAL_ARCHIVE = "/archive/", e.TERMS_MAY_2020 = "/archive/terms/may-2020", e.PRIVACY_JUNE_2020 = "/archive/privacy/june-2020", e.GUIDELINES_MAY_2020 = "/archive/guidelines/may-2020", e.FALL_RELEASE_2023 = "/fallrelease", e.MOBILE_REDESIGN_2023 = "/mobile", e.REFRESH_XBOX_OFFER = "/new/discord-xbox-offer-2019", e.REFRESH_WHY_DISCORD = "/why-discord-is-different", e.WHY_DISCORD = "/why-discord", e.XBOX_OFFER = "/discord-xbox-offer-2020", e.COLLEGE_BRUINS = "/bruins", e.COLLEGE_ANTEATERS = "/anteaters", e.COLLEGE_GAUCHOS = "/gauchos", e.COLLEGE_BEARS = "/bears", e.COLLEGE_SLUGS = "/slugs", e.BACK_TO_SCHOOL_GIVEAWAY_INSTAGRAM = "/terms/back-to-school-2020/instagram", e.BACK_TO_SCHOOL_GIVEAWAY_TWITTER = "/terms/back-to-school-2020/twitter", e.SNOWSGIVING_GIVEAWAY_INSTAGRAM = "/terms/snowsgiving-2020/instagram", e.SNOWSGIVING_GIVEAWAY_TWITTER = "/terms/snowsgiving-2020/twitter", e
}(ea || {});
let es = (0, o.Ft)(eo),
  el = (0, o.Ft)(ea),
  ec = Object.freeze({
    FACEBOOK_URL: "https://www.facebook.com/discord/",
    INSTAGRAM_URL: "https://www.instagram.com/discord/",
    YOUTUBE_URL: "https://www.youtube.com/discord/",
    TIKTOK_URL: "https://www.tiktok.com/@discord"
  });
var eu = function(e) {
    return e.EXPERIMENT_USER_TRIGGERED = "experiment_user_triggered", e.EXPERIMENT_GUILD_TRIGGERED = "experiment_guild_triggered", e.EXPERIMENT_SAVE_EXPOSURE_FAILED = "experiment_save_exposure_failed", e.MKTG_PAGE_VIEWED = "mktg_page_viewed", e.CLICK_LANDING_CTA = "click_landing_cta", e.DOWNLOAD_APP = "download_app", e.MKTG_HYPESQUAD_FORM_SUBMITTED = "mktg_hypesquad_form_submitted", e.MKTG_HYPESQUAD_FORM_OPENED = "mktg_hypesquad_form_opened", e.CHANGE_MARKETING_LOCALE = "change_marketing_locale", e.GAME_CLICKED_LANDING = "game_clicked_landing", e.MAIN_NAVIGATION_MENU = "main_navigation_menu", e.MKTG_APPLICATION_STEP = "mktg_application_step", e.MKTG_WARFRAME_CTA_CLICKED = "mktg_warframe_cta_clicked", e.MKTG_PAGE_CTA_CLICKED = "mktg_page_cta_clicked", e.MKTG_VIDEO_PLAYED = "mktg_video_played", e.DEEP_LINK_CLICKED = "deep_link_clicked", e.SEO_PAGE_VIEWED = "seo_server_landing_page_viewed", e.SEO_PAGE_CTA_CLICKED = "seo_server_landing_page_cta_clicked", e.SEO_AGGREGATOR_PAGE_VIEWED = "seo_aggregator_page_viewed", e.SEO_AGGREGATOR_CTA_CLICKED = "seo_aggregator_page_cta_clicked", e.LOCATION_STACK_METADATA = "location_stack_metadata", e.CREATOR_STORE_PAGE_VIEWED = "creator_store_page_viewed", e.CREATOR_STORE_PAGE_CTA_CLICKED = "creator_store_page_cta_clicked", e
  }({}),
  ed = function(e) {
    return e.AED = "aed", e.AFN = "afn", e.ALL = "all", e.AMD = "amd", e.ANG = "ang", e.AOA = "aoa", e.ARS = "ars", e.AUD = "aud", e.AWG = "awg", e.AZN = "azn", e.BAM = "bam", e.BBD = "bbd", e.BDT = "bdt", e.BGN = "bgn", e.BHD = "bhd", e.BIF = "bif", e.BMD = "bmd", e.BND = "bnd", e.BOB = "bob", e.BOV = "bov", e.BRL = "brl", e.BSD = "bsd", e.BTN = "btn", e.BWP = "bwp", e.BYN = "byn", e.BYR = "byr", e.BZD = "bzd", e.CAD = "cad", e.CDF = "cdf", e.CHE = "che", e.CHF = "chf", e.CHW = "chw", e.CLF = "clf", e.CLP = "clp", e.CNY = "cny", e.COP = "cop", e.COU = "cou", e.CRC = "crc", e.CUC = "cuc", e.CUP = "cup", e.CVE = "cve", e.CZK = "czk", e.DJF = "djf", e.DKK = "dkk", e.DOP = "dop", e.DZD = "dzd", e.EGP = "egp", e.ERN = "ern", e.ETB = "etb", e.EUR = "eur", e.FJD = "fjd", e.FKP = "fkp", e.GBP = "gbp", e.GEL = "gel", e.GHS = "ghs", e.GIP = "gip", e.GMD = "gmd", e.GNF = "gnf", e.GTQ = "gtq", e.GYD = "gyd", e.HKD = "hkd", e.HNL = "hnl", e.HRK = "hrk", e.HTG = "htg", e.HUF = "huf", e.IDR = "idr", e.ILS = "ils", e.INR = "inr", e.IQD = "iqd", e.IRR = "irr", e.ISK = "isk", e.JMD = "jmd", e.JOD = "jod", e.JPY = "jpy", e.KES = "kes", e.KGS = "kgs", e.KHR = "khr", e.KMF = "kmf", e.KPW = "kpw", e.KRW = "krw", e.KWD = "kwd", e.KYD = "kyd", e.KZT = "kzt", e.LAK = "lak", e.LBP = "lbp", e.LKR = "lkr", e.LRD = "lrd", e.LSL = "lsl", e.LTL = "ltl", e.LVL = "lvl", e.LYD = "lyd", e.MAD = "mad", e.MDL = "mdl", e.MGA = "mga", e.MKD = "mkd", e.MMK = "mmk", e.MNT = "mnt", e.MOP = "mop", e.MRO = "mro", e.MUR = "mur", e.MVR = "mvr", e.MWK = "mwk", e.MXN = "mxn", e.MXV = "mxv", e.MYR = "myr", e.MZN = "mzn", e.NAD = "nad", e.NGN = "ngn", e.NIO = "nio", e.NOK = "nok", e.NPR = "npr", e.NZD = "nzd", e.OMR = "omr", e.PAB = "pab", e.PEN = "pen", e.PGK = "pgk", e.PHP = "php", e.PKR = "pkr", e.PLN = "pln", e.PYG = "pyg", e.QAR = "qar", e.RON = "ron", e.RSD = "rsd", e.RUB = "rub", e.RWF = "rwf", e.SAR = "sar", e.SBD = "sbd", e.SCR = "scr", e.SDG = "sdg", e.SEK = "sek", e.SGD = "sgd", e.SHP = "shp", e.SLL = "sll", e.SOS = "sos", e.SRD = "srd", e.SSP = "ssp", e.STD = "std", e.SVC = "svc", e.SYP = "syp", e.SZL = "szl", e.THB = "thb", e.TJS = "tjs", e.TMT = "tmt", e.TND = "tnd", e.TOP = "top", e.TRY = "try", e.TTD = "ttd", e.TWD = "twd", e.TZS = "tzs", e.UAH = "uah", e.UGX = "ugx", e.USD = "usd", e.USN = "usn", e.USS = "uss", e.UYI = "uyi", e.UYU = "uyu", e.UZS = "uzs", e.VEF = "vef", e.VND = "vnd", e.VUV = "vuv", e.WST = "wst", e.XAF = "xaf", e.XAG = "xag", e.XAU = "xau", e.XBA = "xba", e.XBB = "xbb", e.XBC = "xbc", e.XBD = "xbd", e.XCD = "xcd", e.XDR = "xdr", e.XFU = "xfu", e.XOF = "xof", e.XPD = "xpd", e.XPF = "xpf", e.XPT = "xpt", e.XSU = "xsu", e.XTS = "xts", e.XUA = "xua", e.YER = "yer", e.ZAR = "zar", e.ZMW = "zmw", e.ZWL = "zwl", e.DISCORD_ORB = "discord_orb", e
  }({});
let ef = "US";
var ep = function(e) {
    return e[e.SINGLE_PLAYER = 1] = "SINGLE_PLAYER", e[e.ONLINE_MULTIPLAYER = 2] = "ONLINE_MULTIPLAYER", e[e.LOCAL_MULTIPLAYER = 3] = "LOCAL_MULTIPLAYER", e[e.PVP = 4] = "PVP", e[e.LOCAL_COOP = 5] = "LOCAL_COOP", e[e.CROSS_PLATFORM = 6] = "CROSS_PLATFORM", e[e.RICH_PRESENCE = 7] = "RICH_PRESENCE", e[e.DISCORD_GAME_INVITES = 8] = "DISCORD_GAME_INVITES", e[e.SPECTATOR_MODE = 9] = "SPECTATOR_MODE", e[e.CONTROLLER_SUPPORT = 10] = "CONTROLLER_SUPPORT", e[e.CLOUD_SAVES = 11] = "CLOUD_SAVES", e[e.ONLINE_COOP = 12] = "ONLINE_COOP", e[e.SECURE_NETWORKING = 13] = "SECURE_NETWORKING", e
  }({}),
  e_ = function(e) {
    return e[e.ACTION = 1] = "ACTION", e[e.ACTION_RPG = 2] = "ACTION_RPG", e[e.BRAWLER = 3] = "BRAWLER", e[e.HACK_AND_SLASH = 4] = "HACK_AND_SLASH", e[e.PLATFORMER = 5] = "PLATFORMER", e[e.STEALTH = 6] = "STEALTH", e[e.SURVIVAL = 7] = "SURVIVAL", e[e.ADVENTURE = 8] = "ADVENTURE", e[e.ACTION_ADVENTURE = 9] = "ACTION_ADVENTURE", e[e.METROIDVANIA = 10] = "METROIDVANIA", e[e.OPEN_WORLD = 11] = "OPEN_WORLD", e[e.PSYCHOLOGICAL_HORROR = 12] = "PSYCHOLOGICAL_HORROR", e[e.SANDBOX = 13] = "SANDBOX", e[e.SURVIVAL_HORROR = 14] = "SURVIVAL_HORROR", e[e.VISUAL_NOVEL = 15] = "VISUAL_NOVEL", e[e.DRIVING_RACING = 16] = "DRIVING_RACING", e[e.VEHICULAR_COMBAT = 17] = "VEHICULAR_COMBAT", e[e.MASSIVELY_MULTIPLAYER = 18] = "MASSIVELY_MULTIPLAYER", e[e.MMORPG = 19] = "MMORPG", e[e.ROLE_PLAYING = 20] = "ROLE_PLAYING", e[e.DUNGEON_CRAWLER = 21] = "DUNGEON_CRAWLER", e[e.ROGUELIKE = 22] = "ROGUELIKE", e[e.SHOOTER = 23] = "SHOOTER", e[e.LIGHT_GUN = 24] = "LIGHT_GUN", e[e.SHOOT_EM_UP = 25] = "SHOOT_EM_UP", e[e.FPS = 26] = "FPS", e[e.DUAL_JOYSTICK_SHOOTER = 27] = "DUAL_JOYSTICK_SHOOTER", e[e.SIMULATION = 28] = "SIMULATION", e[e.FLIGHT_SIMULATOR = 29] = "FLIGHT_SIMULATOR", e[e.TRAIN_SIMULATOR = 30] = "TRAIN_SIMULATOR", e[e.LIFE_SIMULATOR = 31] = "LIFE_SIMULATOR", e[e.FISHING = 32] = "FISHING", e[e.SPORTS = 33] = "SPORTS", e[e.BASEBALL = 34] = "BASEBALL", e[e.BASKETBALL = 35] = "BASKETBALL", e[e.BILLIARDS = 36] = "BILLIARDS", e[e.BOWLING = 37] = "BOWLING", e[e.BOXING = 38] = "BOXING", e[e.FOOTBALL = 39] = "FOOTBALL", e[e.GOLF = 40] = "GOLF", e[e.HOCKEY = 41] = "HOCKEY", e[e.SKATEBOARDING_SKATING = 42] = "SKATEBOARDING_SKATING", e[e.SNOWBOARDING_SKIING = 43] = "SNOWBOARDING_SKIING", e[e.SOCCER = 44] = "SOCCER", e[e.TRACK_FIELD = 45] = "TRACK_FIELD", e[e.SURFING_WAKEBOARDING = 46] = "SURFING_WAKEBOARDING", e[e.WRESTLING = 47] = "WRESTLING", e[e.STRATEGY = 48] = "STRATEGY", e[e.FOUR_X = 49] = "FOUR_X", e[e.ARTILLERY = 50] = "ARTILLERY", e[e.RTS = 51] = "RTS", e[e.TOWER_DEFENSE = 52] = "TOWER_DEFENSE", e[e.TURN_BASED_STRATEGY = 53] = "TURN_BASED_STRATEGY", e[e.WARGAME = 54] = "WARGAME", e[e.MOBA = 55] = "MOBA", e[e.FIGHTING = 56] = "FIGHTING", e[e.PUZZLE = 57] = "PUZZLE", e[e.CARD_GAME = 58] = "CARD_GAME", e[e.EDUCATION = 59] = "EDUCATION", e[e.FITNESS = 60] = "FITNESS", e[e.GAMBLING = 61] = "GAMBLING", e[e.MUSIC_RHYTHM = 62] = "MUSIC_RHYTHM", e[e.PARTY_MINI_GAME = 63] = "PARTY_MINI_GAME", e[e.PINBALL = 64] = "PINBALL", e[e.TRIVIA_BOARD_GAME = 65] = "TRIVIA_BOARD_GAME", e[e.TACTICAL = 66] = "TACTICAL", e[e.INDIE = 67] = "INDIE", e[e.ARCADE = 68] = "ARCADE", e[e.POINT_AND_CLICK = 69] = "POINT_AND_CLICK", e
  }({}),
  eh = function(e) {
    return e[e.GUILD_ROLE_SUBSCRIPTIONS = 1] = "GUILD_ROLE_SUBSCRIPTIONS", e[e.GUILD_PRODUCTS = 2] = "GUILD_PRODUCTS", e
  }({}),
  em = function(e) {
    return e.PERMISSION_DENIED = "PERMISSION_DENIED", e.PERMISSION_DISMISSED = "PERMISSION_DISMISSED", e.NO_DEVICES_FOUND = "NO_DEVICES_FOUND", e
  }({}),
  eg = function(e) {
    return e.SWIPE = "SWIPE", e.BROWSER = "BROWSER", e.KEYBIND = "KEYBIND", e
  }({}),
  eE = function(e) {
    return e[e.IN_PROMPT = 1] = "IN_PROMPT", e
  }({})