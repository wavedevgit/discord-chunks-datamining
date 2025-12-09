/** Chunk was on web.js **/
/** chunk id: 81643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AY: () => j,
  F5: () => L,
  Jm: () => T,
  L0: () => P,
  L5: () => S,
  M$: () => A,
  WD: () => x,
  bj: () => O,
  g0: () => N,
  gD: () => C,
  kJ: () => D,
  l6: () => w,
  pY: () => R,
  sf: () => v,
  yo: () => I
}), require("./388685.js"), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk110924 = require("./110924.js"),
  Chunk681678 = require("./681678.js"),
  Chunk788080 = require("./788080.js"),
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
let y = new Set([Chunk723359.L0.NSFW_SERVER, Chunk723359.L0.NSFW_SERVER_INVITE, Chunk723359.L0.NSFW_SERVER_INVITE_EMBED, Chunk723359.L0.LARGE_GUILD, Chunk723359.L0.JOIN_LARGE_GUILD_UNDERAGE, Chunk723359.L0.ACCESS_LARGE_GUILD_UNDERAGE]),
  O = e => y.has(e);

function v() {
  let e = Chunk594174.default.getCurrentUser();
  return (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.VERIFIED_ADULT
}

function S() {
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

function A() {
  let e = Chunk594174.default.getCurrentUser();
  return (null == module ? true : module.ageVerificationStatus) === Chunk911969.F$.VERIFIED_ADULT
}

function C() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return (null == module ? true : module.ageVerificationStatus) === Chunk911969.F$.VERIFIED_ADULT
}
var N = function(e) {
    return e.CTAS = "ctas", e.CONTENT_TYPE = "content_type", e
  }({}),
  P = function(e) {
    return e.VERIFIED_ADULT = "verified_adult", e.VERIFIED_TEEN = "verified_teen", e.ERROR = "error", e
  }({});

function R(e, t) {
  let n = f.Z.getMessage(e, t);
  if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== g.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION) returnfalse;
  let r = n.embeds[0].fields.find(e => "ctas" === e.rawName);
  return null == r ? true : r.rawValue.split(",").includes("retry")
}

function D() {
  let e = Chunk594174.default.getCurrentUser();
  return (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.UNVERIFIED && (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.CLIENT_ONLY_PENDING
}

function w() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.UNVERIFIED && (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.CLIENT_ONLY_PENDING
}

function x(e) {
  let {
    onComplete: t,
    entryPoint: n,
    isRetry: o = false,
    visibleContent: s = null,
    shouldShowExpressiveModal: d = false,
    classificationId: f = null
  } = e, [h, g] = r.useState(false), E = (0, i.e7)([p.default], () => p.default.getCurrentUser()), {
    current: y
  } = r.useRef(null == E ? true : E.ageVerificationStatus), O = (0, c.GE)(), v = r.useCallback(() => {
    a.Z.dispatch({
      type: "CLOSE_AGE_VERIFICATION_MODAL",
      status: y
    }), o || O || u.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_intro_screen",
      visibleContent: s
    })
  }, [y, o, s, O]), S = r.useCallback(async e => {
    g(true);
    try {
      a.Z.dispatch({
        type: "INITIATE_AGE_VERIFICATION"
      });
      let r = await (0, m.pU)({
        method: e,
        classificationId: null != f ? f : true
      });
      _.Z.showAgeVerification({
        webviewUrl: r.verification_webview_url,
        verificationRequestId: r.verification_request_id,
        verificationVendorName: r.verification_vendor_name,
        onComplete: t,
        onClose: v,
        onCancel: v,
        entryPoint: n,
        shouldShowExpressiveModal: d
      })
    } catch (e) {
      l.Z.showFailedToast(b.wQ.TIGGER_PAWTECT_ERROR), v()
    } finally {
      g(false)
    }
  }, [t, v, d, f, n]);
  return {
    loading: h,
    initiateAgeVerification: S
  }
}

function L(e) {
  let t = (0, i.e7)([p.default], () => {
      var e;
      return null == (e = p.default.getCurrentUser()) ? true : e.ageVerificationStatus
    }),
    n = (0, s.Z)(t),
    a = (0, i.e7)([d.default], () => null != d.default.getSuspendedUserToken()),
    o = (0, i.e7)([d.default], () => d.default.isAuthenticated()),
    l = null != n && null != t && n !== t,
    c = !a && !o;
  r.useEffect(() => {
    (l || c) && e()
  }, [e, l, c])
}

function j(e) {
  return null != e && h.dx.has(e)
}