/** Chunk was on web.js **/
/** chunk id: 81643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AY: () => L,
  F5: () => D,
  Jm: () => T,
  L0: () => C,
  L5: () => v,
  M$: () => S,
  WD: () => w,
  bj: () => y,
  g0: () => A,
  kJ: () => R,
  l6: () => P,
  pY: () => N,
  sf: () => O,
  yo: () => I
}), require("./388685.js"), require("./35282.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk110924 = require("./110924.js"),
  Chunk681678 = require("./681678.js"),
  Chunk420846 = require("./420846.js"),
  Chunk314897 = require("./314897.js"),
  Chunk375954 = require("./375954.js"),
  Chunk594174 = require("./594174.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk352138 = require("./352138.js"),
  Chunk469775 = require("./469775.js"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js"),
  Chunk484710 = require("./484710.js");
let b = new Set([Chunk723359.L0.NSFW_SERVER, Chunk723359.L0.NSFW_SERVER_INVITE, Chunk723359.L0.NSFW_SERVER_INVITE_EMBED, Chunk723359.L0.LARGE_GUILD, Chunk723359.L0.JOIN_LARGE_GUILD_UNDERAGE, Chunk723359.L0.ACCESS_LARGE_GUILD_UNDERAGE]),
  y = e => b.has(e);

function O() {
  let e = Chunk594174.default.getCurrentUser();
  return (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.VERIFIED_ADULT
}

function v() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.VERIFIED_ADULT
}

function I() {
  let e = Chunk594174.default.getCurrentUser();
  return (null == module ? true : module.ageVerificationStatus) === Chunk911969.F$.VERIFIED_TEEN
}

function T() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return (null == module ? true : module.ageVerificationStatus) === Chunk911969.F$.VERIFIED_TEEN
}

function S() {
  let e = Chunk594174.default.getCurrentUser();
  return (null == module ? true : module.ageVerificationStatus) === Chunk911969.F$.VERIFIED_ADULT
}
var A = function(e) {
    return e.CTAS = "ctas", e.CONTENT_TYPE = "content_type", e
  }({}),
  C = function(e) {
    return e.VERIFIED_ADULT = "verified_adult", e.VERIFIED_TEEN = "verified_teen", e.ERROR = "error", e
  }({});

function N(e, t) {
  let n = d.Z.getMessage(e, t);
  if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== m.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION) returnfalse;
  let r = n.embeds[0].fields.find(e => "ctas" === e.rawName);
  return null == r ? true : r.rawValue.split(",").includes("retry")
}

function R() {
  let e = Chunk594174.default.getCurrentUser();
  return (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.UNVERIFIED && (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.CLIENT_ONLY_PENDING
}

function P() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.UNVERIFIED && (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.CLIENT_ONLY_PENDING
}

function w(e) {
  let {
    onComplete: t,
    isRetry: n = false,
    visibleContent: o = null,
    shouldShowExpressiveModal: s = false
  } = e, [u, d] = r.useState(false), h = (0, i.e7)([f.default], () => f.default.getCurrentUser()), {
    current: m
  } = r.useRef(null == h ? true : h.ageVerificationStatus), g = r.useCallback(() => {
    a.Z.dispatch({
      type: "CLOSE_AGE_VERIFICATION_MODAL",
      status: m
    }), n || c.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_intro_screen",
      visibleContent: o
    })
  }, [m, n, o]);
  return {
    loading: u,
    initiateAgeVerification: r.useCallback(async (e, n) => {
      d(true);
      try {
        a.Z.dispatch({
          type: "INITIATE_AGE_VERIFICATION"
        });
        let r = await (0, p.K)(n);
        _.Z.showAgeVerification({
          webviewUrl: r.verification_webview_url,
          onComplete: t,
          onClose: g,
          onCancel: g,
          entryPoint: e,
          shouldShowExpressiveModal: s
        })
      } catch (e) {
        l.Z.showFailedToast(E.wQ.TIGGER_PAWTECT_ERROR), g()
      } finally {
        d(false)
      }
    }, [t, g, s])
  }
}

function D(e) {
  let t = (0, i.e7)([f.default], () => {
      var e;
      return null == (e = f.default.getCurrentUser()) ? true : e.ageVerificationStatus
    }),
    n = (0, s.Z)(t),
    a = (0, i.e7)([u.default], () => null != u.default.getSuspendedUserToken()),
    o = (0, i.e7)([u.default], () => u.default.isAuthenticated()),
    l = null != n && null != t && n !== t,
    c = !a && !o;
  r.useEffect(() => {
    (l || c) && e()
  }, [e, l, c])
}

function L(e) {
  return null != e && h.dx.has(e)
}