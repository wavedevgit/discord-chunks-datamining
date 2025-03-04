/** Chunk was on 80144 **/
n.d(t, {
  Cg: () => u,
  Cp: () => M,
  Cs: () => C,
  EY: () => x,
  I5: () => m,
  JQ: () => h,
  RY: () => T,
  Sv: () => p,
  TX: () => b,
  ZW: () => R,
  bK: () => L,
  n0: () => A,
  o6: () => P,
  oE: () => k,
  qS: () => O,
  s: () => S,
  sQ: () => N,
  wo: () => I
});
var i, o, r, s, l, c, a, _ = n(990547),
  d = n(981631);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class N {}
E(N, "TOS_LINK", "https://discord.com/terms"), E(N, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"), E(N, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), E(N, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"), E(N, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"), E(N, "SPAM_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__"), E(N, "LEARN_MORE_UU_APPEAL_LINK", "https://support.discord.com/hc/articles/360041820932");
class u {}
E(u, "CLASSIFICATION_ID", "classification_id"), E(u, "INCIDENT_TIMESTAMP", "incident_time");
var I = ((i = {}).POLICY_VIOLATION_DETAIL = "policy_violation_detail", i.LEARN_MORE_LINK = "learn_more_link", i);
class m {}
E(m, "ICON_TYPE", "icon_type"), E(m, "HEADER", "header"), E(m, "BODY", "body"), E(m, "CTAS", "ctas"), E(m, "TIMESTAMP", "timestamp"), E(m, "THEME", "theme"), E(m, "CLIENT_VERSION_MESSAGE", "client_version_message"), E(m, "LEARN_MORE_LINK", "learn_more_link"), E(m, "CLASSIFICATION_ID", "classification_id");
var A = ((o = {})[o.ViewViolationDetail = 0] = "ViewViolationDetail", o[o.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", o[o.ClickLetUsKnow = 2] = "ClickLetUsKnow", o[o.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", o[o.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", o[o.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", o[o.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", o[o.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", o),
  S = ((r = {})[r.SystemDM = 0] = "SystemDM", r[r.StandingTab = 1] = "StandingTab", r[r.AppealIngestion = 2] = "AppealIngestion", r);
Object.freeze({
  SPEED_BUMP: d.jXE.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: d.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: d.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: d.jXE.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: d.jXE.APPEAL_INGESTION_THANKS,
  SPAM: d.jXE.APPEAL_INGESTION_SPAM
});
var L = ((s = {})[s.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", s[s.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", s[s.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", s[s.SOMETHING_ELSE = 3] = "SOMETHING_ELSE", s);
let T = [0, 1, 2, 3],
  p = 372,
  x = 279,
  R = {
    impression_group: _.ImpressionGroups.APPEAL_INGESTION
  };
var C = ((l = {}).SPEED_BUMP = "speed-bump", l.COLLECT_SIGNAL = "collect-signal", l.CONFIRM_SUBMISSION = "confirm-submission", l.REQUEST_SENT = "request-sent", l.THANKS = "thanks", l);
let h = {
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
var O = ((c = {})[c.USER = 1] = "USER", c[c.GUILD_OWNER = 2] = "GUILD_OWNER", c[c.GUILD_MEMBER = 3] = "GUILD_MEMBER", c),
  k = ((a = {}).LOADING = "loading", a.ERROR = "error", a.SUCCESS = "success", a.FAILURE = "failure", a.NONE = "none", a);
let b = 2e3,
  M = 15e3,
  P = 5