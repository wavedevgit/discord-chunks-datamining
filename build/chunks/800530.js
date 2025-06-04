/** Chunk was on 80144 **/
t.d(n, {
  Cg: () => m,
  Cp: () => M,
  Cs: () => b,
  EY: () => T,
  I5: () => N,
  JQ: () => R,
  RY: () => x,
  Sv: () => S,
  TX: () => k,
  ZW: () => p,
  bK: () => A,
  n0: () => L,
  o6: () => P,
  oE: () => O,
  qS: () => h,
  s: () => C,
  sQ: () => u,
  wo: () => I
});
var o, i, s, r, l, a, c, _ = t(990547),
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
class m {}
E(m, "CLASSIFICATION_ID", "classification_id"), E(m, "INCIDENT_TIMESTAMP", "incident_time");
var I = ((o = {}).POLICY_VIOLATION_DETAIL = "policy_violation_detail", o.LEARN_MORE_LINK = "learn_more_link", o);
class N {}
E(N, "ICON_TYPE", "icon_type"), E(N, "HEADER", "header"), E(N, "BODY", "body"), E(N, "CTAS", "ctas"), E(N, "TIMESTAMP", "timestamp"), E(N, "THEME", "theme"), E(N, "CLIENT_VERSION_MESSAGE", "client_version_message"), E(N, "LEARN_MORE_LINK", "learn_more_link"), E(N, "CLASSIFICATION_ID", "classification_id");
var L = ((i = {})[i.ViewViolationDetail = 0] = "ViewViolationDetail", i[i.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", i[i.ClickLetUsKnow = 2] = "ClickLetUsKnow", i[i.ClickAgeVerificationLink = 3] = "ClickAgeVerificationLink", i[i.ClickSpamWebformLink = 4] = "ClickSpamWebformLink", i[i.ClickLearnMoreLink = 5] = "ClickLearnMoreLink", i[i.ClickCommunityGuidelinesLink = 6] = "ClickCommunityGuidelinesLink", i[i.ClickWarningSystemHelpcenterLink = 7] = "ClickWarningSystemHelpcenterLink", i),
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
let x = [0, 1, 2, 3],
  S = 372,
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
let k = 2e3,
  M = 15e3,
  P = 5