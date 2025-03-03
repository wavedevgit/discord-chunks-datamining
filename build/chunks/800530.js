/** Chunk was on 80144 **/
n.d(t, {
  Cg: () => m,
  Cp: () => P,
  Cs: () => h,
  EY: () => x,
  I5: () => I,
  JQ: () => O,
  RY: () => L,
  Sv: () => p,
  TX: () => k,
  ZW: () => C,
  bK: () => T,
  n0: () => A,
  o6: () => f,
  oE: () => b,
  qS: () => R,
  s: () => S,
  sQ: () => N,
  wo: () => u
});
var i, r, o, s, l, a, c, _ = n(990547),
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
class m {}
E(m, "CLASSIFICATION_ID", "classification_id"), E(m, "INCIDENT_TIMESTAMP", "incident_time");
var u = ((i = {}).POLICY_VIOLATION_DETAIL = "policy_violation_detail", i.LEARN_MORE_LINK = "learn_more_link", i);
class I {}
E(I, "ICON_TYPE", "icon_type"), E(I, "HEADER", "header"), E(I, "BODY", "body"), E(I, "CTAS", "ctas"), E(I, "TIMESTAMP", "timestamp"), E(I, "THEME", "theme"), E(I, "CLIENT_VERSION_MESSAGE", "client_version_message"), E(I, "LEARN_MORE_LINK", "learn_more_link"), E(I, "CLASSIFICATION_ID", "classification_id");
var A = ((r = {})[r.ViewViolationDetail = 0] = "ViewViolationDetail", r[r.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", r[r.ClickLetUsKnow = 2] = "ClickLetUsKnow", r[r.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", r[r.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", r[r.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", r[r.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", r[r.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", r),
  S = ((o = {})[o.SystemDM = 0] = "SystemDM", o[o.StandingTab = 1] = "StandingTab", o[o.AppealIngestion = 2] = "AppealIngestion", o);
Object.freeze({
  SPEED_BUMP: d.jXE.APPEAL_INGESTION_SPEED_BUMP,
  COLLECT_SIGNAL: d.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
  CONFIRM_SUBMISSION: d.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
  REQUEST_SENT: d.jXE.APPEAL_INGESTION_REQUEST_SENT,
  THANKS: d.jXE.APPEAL_INGESTION_THANKS,
  SPAM: d.jXE.APPEAL_INGESTION_SPAM
});
var T = ((s = {})[s.DIDNT_VIOLATE_POLICY = 0] = "DIDNT_VIOLATE_POLICY", s[s.TOO_STRICT_UNFAIR = 1] = "TOO_STRICT_UNFAIR", s[s.DONT_AGREE_PENALTY = 2] = "DONT_AGREE_PENALTY", s[s.SOMETHING_ELSE = 3] = "SOMETHING_ELSE", s);
let L = [0, 1, 2, 3],
  p = 372,
  x = 279,
  C = {
    impression_group: _.ImpressionGroups.APPEAL_INGESTION
  };
var h = ((l = {}).SPEED_BUMP = "speed-bump", l.COLLECT_SIGNAL = "collect-signal", l.CONFIRM_SUBMISSION = "confirm-submission", l.REQUEST_SENT = "request-sent", l.THANKS = "thanks", l);
let O = {
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
var R = ((a = {})[a.USER = 1] = "USER", a[a.GUILD_OWNER = 2] = "GUILD_OWNER", a[a.GUILD_MEMBER = 3] = "GUILD_MEMBER", a),
  b = ((c = {}).LOADING = "loading", c.ERROR = "error", c.SUCCESS = "success", c.FAILURE = "failure", c.NONE = "none", c);
let k = 2e3,
  P = 15e3,
  f = 5