/** Chunk was on web.js **/
/** chunk id: 36149, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $8: () => w,
  NI: () => N,
  Q9: () => j,
  ST: () => V,
  Sr: () => G,
  Wv: () => x,
  YU: () => L,
  b8: () => M,
  dZ: () => U,
  i2: () => C,
  lU: () => I,
  mK: () => F,
  nn: () => k,
  p9: () => T,
  uE: () => P,
  uN: () => D,
  yM: () => R
}), require("./896048.js"), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk155718 = require("./155718.js"),
  Chunk475743 = require("./475743.js"),
  Chunk662502 = require("./662502.js"),
  Chunk393033 = require("./393033.js"),
  Chunk105428 = require("./105428.js"),
  Chunk961350 = require("./961350.js"),
  Chunk320501 = require("./320501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk295972 = require("./295972.js"),
  Chunk40449 = require("./40449.js"),
  Chunk652215 = require("./652215.js"),
  Chunk204925 = require("./204925.js"),
  Chunk835002 = require("./835002.js"),
  Chunk536242 = require("./536242.js"),
  Chunk985018 = require("./985018.jsx");
let v = new Set([Chunk847599.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, Chunk847599.q1.START_STAGE_PROMPT, Chunk847599.q1.STAGE_CHANNEL_RAISE_HAND]),
  S = new Set([Chunk204925.w_.NSFW_SERVER, Chunk204925.w_.NSFW_SERVER_INVITE, Chunk204925.w_.NSFW_SERVER_INVITE_EMBED, Chunk204925.w_.LARGE_GUILD, Chunk204925.w_.JOIN_LARGE_GUILD_UNDERAGE, Chunk204925.w_.ACCESS_LARGE_GUILD_UNDERAGE]),
  I = e => S.has(e);

function T() {
  let e = p.default.getCurrentUser();
  return (null == e ? true : e.ageVerificationStatus) !== s.Tk.VERIFIED_ADULT
}

function C() {
  let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
  return (null == e ? true : e.ageVerificationStatus) !== s.Tk.VERIFIED_ADULT
}

function N() {
  let e = p.default.getCurrentUser();
  return (null == e ? true : e.ageVerificationStatus) === s.Tk.VERIFIED_TEEN
}

function R() {
  let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
  return (null == e ? true : e.ageVerificationStatus) === s.Tk.VERIFIED_TEEN
}

function w() {
  let e = p.default.getCurrentUser();
  return (null == e ? true : e.ageVerificationStatus) === s.Tk.VERIFIED_ADULT
}

function P() {
  let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
  return (null == e ? true : e.ageVerificationStatus) === s.Tk.VERIFIED_ADULT
}
var D = function(e) {
    return e.CTAS = "ctas", e.CONTENT_TYPE = "content_type", e
  }({}),
  x = function(e) {
    return e.VERIFIED_ADULT = "verified_adult", e.VERIFIED_TEEN = "verified_teen", e.ERROR = "error", e
  }({});

function L(e, t) {
  let n = f.A.getMessage(e, t);
  if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== E.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION) returnfalse;
  let r = n.embeds[0].fields.find(e => "ctas" === e.rawName);
  return null == r ? true : r.rawValue.split(",").includes("retry")
}

function j() {
  let e = p.default.getCurrentUser();
  return (null == e ? true : e.ageVerificationStatus) !== s.Tk.UNVERIFIED && (null == e ? true : e.ageVerificationStatus) !== s.Tk.CLIENT_ONLY_PENDING
}

function M() {
  let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
  return (null == e ? true : e.ageVerificationStatus) !== s.Tk.UNVERIFIED && (null == e ? true : e.ageVerificationStatus) !== s.Tk.CLIENT_ONLY_PENDING
}

function k(e) {
  let {
    onComplete: t,
    entryPoint: n,
    isRetry: s = false,
    visibleContent: o = null,
    shouldShowExpressiveModal: d = false,
    classificationId: f = null
  } = e, [h, g] = r.useState(false), E = (0, i.bG)([p.default], () => p.default.getCurrentUser()), {
    current: b
  } = r.useRef(null == E ? true : E.ageVerificationStatus), O = (0, c.W$)(), A = r.useCallback(() => {
    a.h.dispatch({
      type: "CLOSE_AGE_VERIFICATION_MODAL",
      status: b
    }), s || O || u.A.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_intro_screen",
      visibleContent: o
    })
  }, [b, s, o, O]), v = r.useCallback(async e => {
    g(true);
    try {
      a.h.dispatch({
        type: "INITIATE_AGE_VERIFICATION"
      });
      let r = await (0, m.uf)({
        method: e,
        classificationId: null != f ? f : true
      });
      _.A.showAgeVerification({
        webviewUrl: r.verification_webview_url,
        verificationRequestId: r.verification_request_id,
        verificationVendorName: r.verification_vendor_name,
        onComplete: t,
        onClose: A,
        onCancel: A,
        entryPoint: n,
        shouldShowExpressiveModal: d
      })
    } catch (e) {
      l.A.showFailedToast(y.OB.TIGGER_PAWTECT_ERROR), A()
    } finally {
      g(false)
    }
  }, [t, A, d, f, n]);
  return {
    loading: h,
    initiateAgeVerification: v
  }
}

function U(e) {
  let t = (0, i.bG)([p.default], () => {
      var e;
      return null == (e = p.default.getCurrentUser()) ? true : e.ageVerificationStatus
    }),
    n = (0, o.A)(t),
    a = (0, i.bG)([d.default], () => null != d.default.getSuspendedUserToken()),
    s = (0, i.bG)([d.default], () => d.default.isAuthenticated()),
    l = null != n && null != t && n !== t,
    c = !a && !s;
  r.useEffect(() => {
    (l || c) && e()
  }, [e, l, c])
}

function G(e) {
  return null != e && g.zn.has(e)
}

function V(e) {
  return v.has(e) ? A.intl.string(A.t.lSWVTM) : A.intl.string(A.t.JHNunj)
}

function F(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return v.has(e) ? A.intl.string(A.t["S/xS/w"]) : n ? A.intl.string(O.default["1/6wta"]) : null != t ? A.intl.format(O.default.RpMIT0, {
    handleOnHelpUrlHook: t
  }) : A.intl.string(A.t["+BLIGh"])
}