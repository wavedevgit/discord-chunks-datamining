/** Chunk was on 20501 **/
/** chunk id: 931461, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk925513 = require("./925513.js"),
  Chunk880257 = require("./880257.js"),
  Chunk907995 = require("./907995.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk128064 = require("./128064.js"),
  Chunk484710 = require("./484710.js"),
  Chunk388032 = require("./388032.jsx");

function g() {
  let e = (0, Chunk925513.v6)();
  return (0, Chunk255367.jsx)(Chunk907995.f, {
    label: Chunk388032.t.EUo0ys,
    labelHook: () => {
      window.open(Chunk63063.Z.getArticleURL(module), "_blank")
    },
    noticeType: Chunk484710.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  })
}

function h() {
  return (0, Chunk255367.jsx)(Chunk907995.f, {
    label: Chunk388032.t.OX4ybm,
    labelHook: () => {
      Chunk168107.Z.showAgeVerificationGetStartedModal(Chunk480916.cU.CONTENT_AND_SOCIAL_NOTICE)
    },
    noticeType: Chunk484710.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  })
}

function f() {
  var e;
  let t = null == (e = (0, Chunk880257.Z)()) || module,
    n = (0, Chunk81643.l6)();
  return (0, Chunk128064.pY)("ContentAndSocialNotice") && !require ? (0, Chunk255367.jsx)(h, {}) : exports ? null : (0, Chunk255367.jsx)(g, {})
}