/** Chunk was on web.js **/
/** chunk id: 81643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AY: () => G,
  B7: () => Z,
  F5: () => U,
  Jm: () => P,
  L0: () => x,
  L5: () => A,
  M$: () => R,
  WD: () => k,
  bj: () => T,
  g0: () => D,
  gD: () => w,
  kJ: () => j,
  l6: () => M,
  pY: () => L,
  s2: () => F,
  sf: () => C,
  yo: () => N
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
  Chunk480916 = require("./480916.js"),
  Chunk352138 = require("./352138.js"),
  Chunk469775 = require("./469775.js"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js"),
  Chunk484710 = require("./484710.js"),
  Chunk144287 = require("./144287.js"),
  Chunk388032 = require("./388032.jsx");
let S = new Set([Chunk480916.cU.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, Chunk480916.cU.START_STAGE_PROMPT, Chunk480916.cU.STAGE_CHANNEL_RAISE_HAND]),
  I = new Set([Chunk723359.L0.NSFW_SERVER, Chunk723359.L0.NSFW_SERVER_INVITE, Chunk723359.L0.NSFW_SERVER_INVITE_EMBED, Chunk723359.L0.LARGE_GUILD, Chunk723359.L0.JOIN_LARGE_GUILD_UNDERAGE, Chunk723359.L0.ACCESS_LARGE_GUILD_UNDERAGE]),
  T = e => I.has(e);

function C() {
  let e = p.default.getCurrentUser();
  return (null == e ? true : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT
}

function A() {
  let e = (0, i.e7)([p.default], () => p.default.getCurrentUser());
  return (null == e ? true : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT
}

function N() {
  let e = p.default.getCurrentUser();
  return (null == e ? true : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN
}

function P() {
  let e = (0, i.e7)([p.default], () => p.default.getCurrentUser());
  return (null == e ? true : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN
}

function R() {
  let e = p.default.getCurrentUser();
  return (null == e ? true : e.ageVerificationStatus) === o.F$.VERIFIED_ADULT
}

function w() {
  let e = (0, i.e7)([p.default], () => p.default.getCurrentUser());
  return (null == e ? true : e.ageVerificationStatus) === o.F$.VERIFIED_ADULT
}
var D = function(e) {
    return e.CTAS = "ctas", e.CONTENT_TYPE = "content_type", e
  }({}),
  x = function(e) {
    return e.VERIFIED_ADULT = "verified_adult", e.VERIFIED_TEEN = "verified_teen", e.ERROR = "error", e
  }({});

function L(e, t) {
  let n = f.Z.getMessage(e, t);
  if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== E.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION) returnfalse;
  let r = n.embeds[0].fields.find(e => "ctas" === e.rawName);
  return null == r ? true : r.rawValue.split(",").includes("retry")
}

function j() {
  let e = p.default.getCurrentUser();
  return (null == e ? true : e.ageVerificationStatus) !== o.F$.UNVERIFIED && (null == e ? true : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING
}

function M() {
  let e = (0, i.e7)([p.default], () => p.default.getCurrentUser());
  return (null == e ? true : e.ageVerificationStatus) !== o.F$.UNVERIFIED && (null == e ? true : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING
}

function k(e) {
  let {
    onComplete: t,
    entryPoint: n,
    isRetry: o = false,
    visibleContent: s = null,
    shouldShowExpressiveModal: d = false,
    classificationId: f = null
  } = e, [m, g] = r.useState(false), E = (0, i.e7)([p.default], () => p.default.getCurrentUser()), {
    current: b
  } = r.useRef(null == E ? true : E.ageVerificationStatus), O = (0, c.GE)(), v = r.useCallback(() => {
    a.Z.dispatch({
      type: "CLOSE_AGE_VERIFICATION_MODAL",
      status: b
    }), o || O || u.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_intro_screen",
      visibleContent: s
    })
  }, [b, o, s, O]), S = r.useCallback(async e => {
    g(true);
    try {
      a.Z.dispatch({
        type: "INITIATE_AGE_VERIFICATION"
      });
      let r = await (0, h.pU)({
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
      l.Z.showFailedToast(y.wQ.TIGGER_PAWTECT_ERROR), v()
    } finally {
      g(false)
    }
  }, [t, v, d, f, n]);
  return {
    loading: m,
    initiateAgeVerification: S
  }
}

function U(e) {
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

function G(e) {
  return null != e && g.dx.has(e)
}

function Z(e) {
  return S.has(e) ? v.intl.string(v.t.lSWVTM) : v.intl.string(v.t.JHNunj)
}

function F(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return S.has(e) ? v.intl.string(v.t["S/xS/w"]) : n ? v.intl.string(O.default["1/6wta"]) : null != t ? v.intl.format(O.default.RpMIT0, {
    handleOnHelpUrlHook: t
  }) : v.intl.string(v.t["+BLIGh"])
}