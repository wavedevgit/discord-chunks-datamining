/** Chunk was on web.js **/
/** chunk id: 57207, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bh: () => f,
  G5: () => p,
  ig: () => d
});
var Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk314897 = require("./314897.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk68985 = require("./68985.js");
let c = {
    [Chunk704215.z.MJ_NEW_USER_CHAT_BAR]: 0,
    [Chunk704215.z.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
    [Chunk704215.z.SEEN_LAUNCH_WELCOME]: 0,
    [Chunk704215.z.SEEN_OLD_DESIGN]: 0,
    [Chunk704215.z.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0,
    [Chunk704215.z.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0,
    [Chunk704215.z.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0,
    [Chunk704215.z.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0,
    [Chunk704215.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0,
    [Chunk704215.z.WHATS_NEW_SERVER_PROFILE_FLIP]: 0,
    [Chunk704215.z.WHATS_NEW_SERVER_PROFILE_BADGE]: 0,
    [Chunk704215.z.WHATS_NEW_TENURE_BADGE_REWARD]: 0,
    [Chunk704215.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0,
    [Chunk704215.z.TRIAL_NUX_EMOJI_BUTTON]: 0,
    [Chunk704215.z.TRIAL_NUX_EMOJI_PICKER]: 0,
    [Chunk704215.z.TRIAL_NUX_STREAM_COACH_MARK]: 0,
    [Chunk704215.z.OVERLAY_OOP_SETTINGS_NUX]: 0,
    [Chunk704215.z.OVERLAY_OOP_WELCOME_NUX]: 0,
    [Chunk704215.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0,
    [Chunk704215.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0,
    [Chunk704215.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0,
    [Chunk704215.z.Q1_2025_REVERSE_TRIAL]: 0,
    [Chunk704215.z.Q1_2025_FOLLOW_UP_REVERSE_TRIAL_OFFER]: 0,
    [Chunk704215.z.REVERSE_TRIAL_NITRO_TAB_BADGE_V2]: 0,
    [Chunk704215.z.PERMADECOS_NITRO_TAB_NEW_BADGE]: 0,
    [Chunk704215.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0,
    [Chunk704215.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2]: 0,
    [Chunk704215.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]: 0,
    [Chunk704215.z.Q2_2025_MARKETING_MOMENT_FIRST_IMPRESSION_MODAL]: 0,
    [Chunk704215.z.BOGO_2025_ANNOUNCEMENT_MODAL]: 0,
    [Chunk704215.z.NITRO_DROP_REWARD]: 0,
    [Chunk704215.z.QUEST_HOME_ENTRYPOINT_ONBOARDING]: 0
  },
  u = Chunk70956.Z.Millis.DAY;

function d(e) {
  let {
    userId: t,
    newUserMinAgeRequiredOverridden: n
  } = (0, r.cj)([a.default, l.Z], () => ({
    userId: a.default.getId(),
    newUserMinAgeRequiredOverridden: l.Z.newUserMinAgeRequiredOverridden
  }));
  return n ? e : e.filter(e => p(t, e))
}

function f(e) {
  return !l.Z.newUserMinAgeRequiredOverridden && !p(a.default.getId(), e)
}

function p(e, t) {
  var n;
  return null != e && s.default.age(e) >= (null != (n = c[t]) ? n : u)
}