/** Chunk was on web.js **/
/** chunk id: 81643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AY: () => R,
  F5: () => C,
  Jm: () => y,
  L0: () => I,
  L5: () => b,
  M$: () => O,
  WD: () => N,
  g0: () => v,
  kJ: () => S,
  l6: () => A,
  pY: () => T,
  sf: () => E
}), require("./35282.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
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
  Chunk484710 = require("./484710.js");

function E() {
  let e = Chunk594174.default.getCurrentUser();
  return (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.VERIFIED_ADULT
}

function b() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.VERIFIED_ADULT
}

function y() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return (null == module ? true : module.ageVerificationStatus) === Chunk911969.F$.VERIFIED_TEEN
}

function O() {
  let e = Chunk594174.default.getCurrentUser();
  return (null == module ? true : module.ageVerificationStatus) === Chunk911969.F$.VERIFIED_ADULT
}
var v = function(e) {
    return e.CTAS = "ctas", e.CONTENT_TYPE = "content_type", e
  }({}),
  I = function(e) {
    return e.VERIFIED_ADULT = "verified_adult", e.VERIFIED_TEEN = "verified_teen", e.ERROR = "error", e
  }({});

function T(e, t) {
  let n = d.Z.getMessage(e, t);
  if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== m.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION) returnfalse;
  let r = n.embeds[0].fields.find(e => "ctas" === e.rawName);
  return null == r ? true : r.rawValue.split(",").includes("retry")
}

function S() {
  let e = Chunk594174.default.getCurrentUser();
  return (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.UNVERIFIED && (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.CLIENT_ONLY_PENDING
}

function A() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.UNVERIFIED && (null == module ? true : module.ageVerificationStatus) !== Chunk911969.F$.CLIENT_ONLY_PENDING
}

function N(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
    [a, s] = r.useState(false),
    u = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
    {
      current: d
    } = r.useRef(null == u ? true : u.ageVerificationStatus),
    h = r.useCallback(() => {
      o.Z.dispatch({
        type: "CLOSE_AGE_VERIFICATION_MODAL",
        status: d
      }), t || c.Z.maybeOpenAgeVerificationUserFeedback({
        location: "age_verification_intro_screen",
        visibleContent: n
      })
    }, [d, t, n]);
  return {
    loading: a,
    initiateAgeVerification: r.useCallback(async t => {
      s(true);
      try {
        o.Z.dispatch({
          type: "INITIATE_AGE_VERIFICATION"
        });
        let n = await (0, p.K)();
        _.Z.showAgeVerification({
          webviewUrl: n.verification_webview_url,
          onComplete: e,
          onClose: h,
          onCancel: h,
          entryPoint: t
        })
      } catch (e) {
        l.Z.showFailedToast(g.wQ.TIGGER_PAWTECT_ERROR), h()
      } finally {
        s(false)
      }
    }, [e, h])
  }
}

function C(e) {
  let t = (0, i.e7)([f.default], () => {
      var e;
      return null == (e = f.default.getCurrentUser()) ? true : e.ageVerificationStatus
    }),
    n = (0, s.Z)(t),
    o = (0, i.e7)([u.default], () => null != u.default.getSuspendedUserToken()),
    a = (0, i.e7)([u.default], () => u.default.isAuthenticated()),
    l = null != n && null != t && n !== t,
    c = !o && !a;
  r.useEffect(() => {
    (l || c) && e()
  }, [e, l, c])
}

function R(e) {
  return null != e && h.dx.has(e)
}