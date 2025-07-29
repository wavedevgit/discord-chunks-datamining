/** Chunk was on 80144 **/
n.d(t, {
  Cg: () => I,
  Cp: () => h,
  Cs: () => C,
  EY: () => b,
  I5: () => m,
  JQ: () => T,
  RY: () => O,
  Sv: () => A,
  TX: () => x,
  ZW: () => L,
  bK: () => f,
  n0: () => N,
  o6: () => M,
  oE: () => R,
  qS: () => P,
  s: () => S,
  sQ: () => d,
  wo: () => p
});
var r, o, i, s, l, c, a, u = n(990547),
  _ = n(981631);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class d {}
E(d, "TOS_LINK", "https://discord.com/terms"), E(d, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"), E(d, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), E(d, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"), E(d, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), E(d, "SPAM_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__"), E(d, "LEARN_MORE_UU_APPEAL_LINK", "https://support.discord.com/hc/articles/360041820932");
class I {}
E(I, "CLASSIFICATION_ID", "classification_id"), E(I, "INCIDENT_TIMESTAMP", "incident_time");
var p = ((r = {}).POLICY_VIOLATION_DETAIL = "policy_violation_detail", r.LEARN_MORE_LINK = "learn_more_link", r);
class m {}
E(m, "ICON_TYPE", "icon_type"), E(m, "HEADER", "header"), E(m, "BODY", "body"), E(m, "CTAS", "ctas"), E(m, "TIMESTAMP", "timestamp"), E(m, "THEME", "theme"), E(m, "CLIENT_VERSION_MESSAGE", "client_version_message"), E(m, "LEARN_MORE_LINK", "learn_more_link"), E(m, "CLASSIFICATION_ID", "classification_id");
var N = ((o = {})[o.ViewViolationDetail = 0] = "ViewViolationDetail", o[o.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", o[o.ClickLetUsKnow = 2] = "ClickLetUsKnow", o[o.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", o[o.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", o[o.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", o[o.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", o[o.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", o),
  S = ((i = {})[i.SystemDM = 0] = "SystemDM", i[i.StandingTab = 1] = "StandingTab", i[i.AppealIngestion = 2] = "AppealIngestion", i);
Object.freeze({
  SPEED_BUMP: _.jXE.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: _.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: _.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: _.jXE.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: _.jXE.APPEAL_INGESTION_THANKS,
  SPAM: _.jXE.APPEAL_INGESTION_SPAM
});
var f = ((s = {})[s.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", s[s.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", s[s.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", s[s.SOMETHING_ELSE = 3] = "SOMETHING_ELSE", s);
let O = [0, 1, 2, 3],
  A = 372,
  b = 279,
  L = {
    impression_group: u.ImpressionGroups.APPEAL_INGESTION
  };
var C = ((l = {}).SPEED_BUMP = "speed-bump", l.COLLECT_SIGNAL = "collect-signal", l.CONFIRM_SUBMISSION = "confirm-submission", l.REQUEST_SENT = "request-sent", l.THANKS = "thanks", l);
let T = {
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