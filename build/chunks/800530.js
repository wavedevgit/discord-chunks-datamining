/** Chunk was on 80144 **/
/** chunk id: 800530, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cg: () => p,
  Cp: () => h,
  Cs: () => b,
  EY: () => L,
  I5: () => O,
  JQ: () => C,
  RY: () => N,
  Sv: () => A,
  TX: () => x,
  ZW: () => T,
  bK: () => m,
  n0: () => S,
  o6: () => M,
  oE: () => R,
  qS: () => P,
  s: () => f,
  sQ: () => d,
  wo: () => I
});
var r, i, o, s, l, c, a, Chunk990547 = require("./990547.js"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d {}
E(d, "TOS_LINK", "https://discord.com/terms"), E(d, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"), E(d, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), E(d, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"), E(d, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), E(d, "SPAM_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__"), E(d, "LEARN_MORE_UU_APPEAL_LINK", "https://support.discord.com/hc/articles/360041820932");
class p {}
E(p, "CLASSIFICATION_ID", "classification_id"), E(p, "INCIDENT_TIMESTAMP", "incident_time");
var I = ((r = {}).POLICY_VIOLATION_DETAIL = "policy_violation_detail", r.LEARN_MORE_LINK = "learn_more_link", r);
class O {}
E(O, "ICON_TYPE", "icon_type"), E(O, "HEADER", "header"), E(O, "BODY", "body"), E(O, "CTAS", "ctas"), E(O, "TIMESTAMP", "timestamp"), E(O, "THEME", "theme"), E(O, "CLIENT_VERSION_MESSAGE", "client_version_message"), E(O, "LEARN_MORE_LINK", "learn_more_link"), E(O, "CLASSIFICATION_ID", "classification_id");
var S = ((i = {})[i.ViewViolationDetail = 0] = "ViewViolationDetail", i[i.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", i[i.ClickLetUsKnow = 2] = "ClickLetUsKnow", i[i.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", i[i.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", i[i.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", i[i.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", i[i.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", i),
  f = ((o = {})[o.SystemDM = 0] = "SystemDM", o[o.StandingTab = 1] = "StandingTab", o[o.AppealIngestion = 2] = "AppealIngestion", o);
Object.freeze({
  SPEED_BUMP: Chunk981631.jXE.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: Chunk981631.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: Chunk981631.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: Chunk981631.jXE.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: Chunk981631.jXE.APPEAL_INGESTION_THANKS,
  SPAM: Chunk981631.jXE.APPEAL_INGESTION_SPAM
});
var m = ((s = {})[s.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", s[s.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", s[s.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", s[s.SOMETHING_ELSE = 3] = "SOMETHING_ELSE", s);
let N = [0, 1, 2, 3],
  A = 372,
  L = 279,
  T = {
    impression_group: Chunk990547.ImpressionGroups.APPEAL_INGESTION
  };
var b = ((l = {}).SPEED_BUMP = "speed-bump", l.COLLECT_SIGNAL = "collect-signal", l.CONFIRM_SUBMISSION = "confirm-submission", l.REQUEST_SENT = "request-sent", l.THANKS = "thanks", l);
let C = {
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
var P = ((c = {})[c.USER = 1] = "USER", c[c.GUILD_OWNER = 2] = "GUILD_OWNER", c[c.GUILD_MEMBER = 3] = "GUILD_MEMBER", c),
  R = ((a = {}).LOADING = "loading", a.ERROR = "error", a.SUCCESS = "success", a.FAILURE = "failure", a.NONE = "none", a);
let x = 2e3,
  h = 15e3,
  M = 5