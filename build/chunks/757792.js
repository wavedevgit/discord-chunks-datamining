/** Chunk was on web.js **/
/** chunk id: 757792, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P3: () => f,
  Sg: () => d
});
var Chunk417597 = require("./417597.js"),
  Chunk554146 = require("./554146.js"),
  Chunk961350 = require("./961350.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk199773 = require("./199773.js");
let c = {
    [Chunk554146.M.MJ_NEW_USER_CHAT_BAR]: 0,
    [Chunk554146.M.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
    [Chunk554146.M.SEEN_LAUNCH_WELCOME]: 0,
    [Chunk554146.M.SEEN_OLD_DESIGN]: 0,
    [Chunk554146.M.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0,
    [Chunk554146.M.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0,
    [Chunk554146.M.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0,
    [Chunk554146.M.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0,
    [Chunk554146.M.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0,
    [Chunk554146.M.WHATS_NEW_SERVER_PROFILE_FLIP]: 0,
    [Chunk554146.M.WHATS_NEW_SERVER_PROFILE_BADGE]: 0,
    [Chunk554146.M.WHATS_NEW_TENURE_BADGE_REWARD]: 0,
    [Chunk554146.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0,
    [Chunk554146.M.TRIAL_NUX_EMOJI_BUTTON]: 0,
    [Chunk554146.M.TRIAL_NUX_EMOJI_PICKER]: 0,
    [Chunk554146.M.TRIAL_NUX_STREAM_COACH_MARK]: 0,
    [Chunk554146.M.OVERLAY_OOP_SETTINGS_NUX]: 0,
    [Chunk554146.M.OVERLAY_OOP_WELCOME_NUX]: 0,
    [Chunk554146.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0,
    [Chunk554146.M.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0,
    [Chunk554146.M.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0,
    [Chunk554146.M.Q1_2025_REVERSE_TRIAL]: 0,
    [Chunk554146.M.Q1_2025_FOLLOW_UP_REVERSE_TRIAL_OFFER]: 0,
    [Chunk554146.M.REVERSE_TRIAL_NITRO_TAB_BADGE_V2]: 0,
    [Chunk554146.M.PERMADECOS_NITRO_TAB_NEW_BADGE]: 0,
    [Chunk554146.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0,
    [Chunk554146.M.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2]: 0,
    [Chunk554146.M.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]: 0,
    [Chunk554146.M.Q2_2025_MARKETING_MOMENT_FIRST_IMPRESSION_MODAL]: 0,
    [Chunk554146.M.BOGO_2025_ANNOUNCEMENT_MODAL]: 0,
    [Chunk554146.M.NITRO_DROP_REWARD]: 0,
    [Chunk554146.M.QUEST_HOME_ENTRYPOINT_ONBOARDING]: 0
  },
  u = Chunk927813.A.Millis.DAY;

function d(e) {
  let {
    userId: t,
    newUserMinAgeRequiredOverridden: n
  } = (0, r.cf)([a.default, l.A], () => ({
    userId: a.default.getId(),
    newUserMinAgeRequiredOverridden: l.A.newUserMinAgeRequiredOverridden
  }));
  return n ? e : e.filter(e => p(t, e))
}

function f(e) {
  return !l.A.newUserMinAgeRequiredOverridden && !p(a.default.getId(), e)
}

function p(e, t) {
  var n;
  return null != e && s.default.age(e) >= (null != (n = c[t]) ? n : u)
}