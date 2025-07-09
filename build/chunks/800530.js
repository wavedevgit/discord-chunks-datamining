/** Chunk was on 80144 **/
t.d(n, {
  Cg: () => I,
  Cp: () => P,
  Cs: () => b,
  EY: () => T,
  I5: () => m,
  JQ: () => R,
  RY: () => S,
  Sv: () => x,
  TX: () => M,
  ZW: () => p,
  bK: () => A,
  n0: () => L,
  o6: () => f,
  oE: () => O,
  qS: () => h,
  s: () => C,
  sQ: () => u,
  wo: () => N
});
var i, o, s, r, l, a, c, _ = t(990547),
  d = t(981631);

function E(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e
}
class u {}
E(u, "TOS_LINK", "https://discord.com/terms"), E(u, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"), E(u, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), E(u, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"), E(u, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), E(u, "SPAM_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__"), E(u, "LEARN_MORE_UU_APPEAL_LINK", "https://support.discord.com/hc/articles/360041820932");
class I {}
E(I, "CLASSIFICATION_ID", "classification_id"), E(I, "INCIDENT_TIMESTAMP", "incident_time");
var N = ((i = {}).POLICY_VIOLATION_DETAIL = "policy_violation_detail", i.LEARN_MORE_LINK = "learn_more_link", i);
class m {}
E(m, "ICON_TYPE", "icon_type"), E(m, "HEADER", "header"), E(m, "BODY", "body"), E(m, "CTAS", "ctas"), E(m, "TIMESTAMP", "timestamp"), E(m, "THEME", "theme"), E(m, "CLIENT_VERSION_MESSAGE", "client_version_message"), E(m, "LEARN_MORE_LINK", "learn_more_link"), E(m, "CLASSIFICATION_ID", "classification_id");
var L = ((o = {})[o.ViewViolationDetail = 0] = "ViewViolationDetail", o[o.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", o[o.ClickLetUsKnow = 2] = "ClickLetUsKnow", o[o.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", o[o.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", o[o.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", o[o.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", o[o.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", o),
  C = ((s = {})[s.SystemDM = 0] = "SystemDM", s[s.StandingTab = 1] = "StandingTab", s[s.AppealIngestion = 2] = "AppealIngestion", s);
Object.freeze({
  SPEED_BUMP: d.jXE.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: d.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: d.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: d.jXE.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: d.jXE.APPEAL_INGESTION_THANKS,
  SPAM: d.jXE.APPEAL_INGESTION_SPAM
});
var A = ((r = {})[r.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", r[r.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", r[r.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", r[r.SOMETHING_ELSE = 3] = "SOMETHING_ELSE", r);
let S = [0, 1, 2, 3],
  x = 372,
  T = 279,
  p = {
    impression_group: _.ImpressionGroups.APPEAL_INGESTION
  };
var b = ((l = {}).SPEED_BUMP = "speed-bump", l.COLLECT_SIGNAL = "collect-signal", l.CONFIRM_SUBMISSION = "confirm-submission", l.REQUEST_SENT = "request-sent", l.THANKS = "thanks", l);
let R = {
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
var h = ((a = {})[a.USER = 1] = "USER", a[a.GUILD_OWNER = 2] = "GUILD_OWNER", a[a.GUILD_MEMBER = 3] = "GUILD_MEMBER", a),
  O = ((c = {}).LOADING = "loading", c.ERROR = "error", c.SUCCESS = "success", c.FAILURE = "failure", c.NONE = "none", c);
let M = 2e3,
  P = 15e3,
  f = 5