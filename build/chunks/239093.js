/** Chunk was on web.js **/
/** chunk id: 239093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A8: () => E,
  AT: () => s,
  Eb: () => v,
  Iv: () => f,
  M8: () => h,
  Qv: () => p,
  V5: () => _,
  XN: () => d,
  ZU: () => u,
  d$: () => o,
  g0: () => c,
  nY: () => m,
  qN: () => b,
  ti: () => A,
  w$: () => y,
  wQ: () => O,
  xw: () => l,
  yN: () => g
});
var Chunk110259 = require("./110259.js"),
  Chunk652215 = require("./652215.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {}
a(o, "TOS_LINK", "https://discord.com/terms"), a(o, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"), a(o, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), a(o, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"), a(o, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), a(o, "SPAM_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__"), a(o, "LEARN_MORE_UU_APPEAL_LINK", "https://support.discord.com/hc/articles/360041820932");
class s {}
a(s, "CLASSIFICATION_ID", "classification_id"), a(s, "INCIDENT_TIMESTAMP", "incident_time");
var l = function(e) {
  return e.POLICY_VIOLATION_DETAIL = "policy_violation_detail", e.LEARN_MORE_LINK = "learn_more_link", e
}({});
class c {}
a(c, "ICON_TYPE", "icon_type"), a(c, "HEADER", "header"), a(c, "BODY", "body"), a(c, "CTAS", "ctas"), a(c, "TIMESTAMP", "timestamp"), a(c, "THEME", "theme"), a(c, "CLIENT_VERSION_MESSAGE", "client_version_message"), a(c, "LEARN_MORE_LINK", "learn_more_link"), a(c, "CLASSIFICATION_ID", "classification_id");
var u = function(e) {
    return e[e.ViewViolationDetail = 0] = "ViewViolationDetail", e[e.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", e[e.ClickLetUsKnow = 2] = "ClickLetUsKnow", e[e.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", e[e.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", e[e.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", e[e.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", e[e.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", e
  }({}),
  d = function(e) {
    return e[e.SystemDM = 0] = "SystemDM", e[e.StandingTab = 1] = "StandingTab", e[e.AppealIngestion = 2] = "AppealIngestion", e
  }({});
Object.freeze({
  SPEED_BUMP: Chunk652215.JJy.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: Chunk652215.JJy.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: Chunk652215.JJy.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: Chunk652215.JJy.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: Chunk652215.JJy.APPEAL_INGESTION_THANKS,
  SPAM: Chunk652215.JJy.APPEAL_INGESTION_SPAM
});
var f = function(e) {
  return e[e.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", e[e.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", e[e.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", e[e.SOMETHING_ELSE = 3] = "SOMETHING_ELSE", e
}({});
let p = [0, 1, 2, 3],
  _ = 372,
  h = 279,
  m = {
    impression_group: Chunk110259.ImpressionGroups.APPEAL_INGESTION
  };
var g = function(e) {
  return e.SPEED_BUMP = "speed-bump", e.COLLECT_SIGNAL = "collect-signal", e.CONFIRM_SUBMISSION = "confirm-submission", e.REQUEST_SENT = "request-sent", e.THANKS = "thanks", e
}({});
let E = {
  "speed-bump": {
    next: "collect-signal",
    prev: null
  },
  "collect-signal": {
    next: "confirm-submission",
    prev: "speed-bump"
  },
  "confirm-submission": {
    next: "request-sent",
    prev: "collect-signal"
  },
  "request-sent": {
    next: null,
    prev: null
  }
};
var y = function(e) {
    return e[e.USER = 1] = "USER", e[e.GUILD_OWNER = 2] = "GUILD_OWNER", e[e.GUILD_MEMBER = 3] = "GUILD_MEMBER", e
  }({}),
  b = function(e) {
    return e.LOADING = "loading", e.ERROR = "error", e.SUCCESS = "success", e.FAILURE = "failure", e.NONE = "none", e
  }({});
let O = 2e3,
  v = 15e3,
  A = 5