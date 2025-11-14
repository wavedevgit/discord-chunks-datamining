/** Chunk was on web.js **/
/** chunk id: 959517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D4: () => u,
  Eo: () => d,
  R4: () => f,
  Y1: () => m,
  _j: () => p,
  c8: () => s,
  d$: () => l,
  dy: () => E,
  fP: () => a,
  hs: () => g,
  j1: () => _,
  kQ: () => c,
  pq: () => o,
  xi: () => h
});
var Chunk261470 = require("./261470.js"),
  Chunk70956 = require("./70956.js");
require("./981631.js");
let a = [0, 4, 8, 16, 24],
  o = 16,
  s = 0,
  l = Object.freeze({
    referencedAvatarProfile: false,
    referencedUsernameProfile: false,
    interactionAvatarProfile: false,
    interactionUsernameProfile: false,
    interactionData: false,
    avatarProfile: false,
    usernameProfile: false,
    emojiPicker: false,
    emojiBurstPicker: false,
    moreUtilities: false,
    contextMenu: false
  }),
  c = 16,
  u = 16,
  d = 32,
  f = 64,
  _ = "---new-messages-bar",
  p = "SPOILER_";
var h = function(e) {
  return e.ERROR_SOURCE_UNKNOWN = "ERROR_SOURCE_UNKNOWN", e.PRECOMPRESSION_SUM_TOO_LARGE = "PRECOMPRESSION_SUM_TOO_LARGE", e.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", e.POSTCOMPRESSION_SUM_TOO_LARGE = "POSTCOMPRESSION_SUM_TOO_LARGE", e.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE = "POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE", e.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR = "UPLOAD_MESSAGE_ATTACHMENT_MAX_SIZE_ERROR", e.EXPLICIT_CONTENT = "EXPLICIT_CONTENT", e
}({});
let m = 0xc800000,
  g = {
    timeout: 60 * Chunk70956.Z.Millis.SECOND,
    retries: 3,
    backoff: new Chunk261470.Z
  };
var E = function(e) {
  return e.PUSH_NOTIFICATION = "push_notification", e.CHAT_INPUT = "chat_input", e.SHARE_MODAL = "share_modal", e.VOICE_MESSAGE = "voice_message", e.THREAD_CREATION = "thread_creation", e.FORWARDING = "forwarding", e.USER_PROFILE = "user_profile", e.RETRY = "explicit_retry", e.OVERLAY = "overlay", e.ACTIVITY_SHARE = "activity_share", e.ICYMI = "icymi", e.INSTANT_UPLOAD = "instant_upload", e.APP_COMMAND = "app_command", e.PRIVATE_MESSAGE_COMMAND = "private_message_command", e.POLL_CREATION = "poll_creation", e.SHARE_CUSTOM_THEME = "share_custom_theme", e.CHANNEL_PROMPT = "channel_prompt", e.GIF_REPLY = "gif_reply", e.STICKER_REPLY = "sticker_reply", e.SEND_WAVE = "send_wave", e.GIFTING = "gifting", e.CONTENT_INVENTORY_MEMBERLIST = "content_inventory_memberlist", e.GREET = "greet", e.OTHER = "other", e
}({})