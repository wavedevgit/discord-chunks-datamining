/** Chunk was on web.js **/
/** chunk id: 931461, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk493683 = require("./493683.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk925513 = require("./925513.js"),
  Chunk915009 = require("./915009.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk907995 = require("./907995.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk128064 = require("./128064.js"),
  Chunk342386 = require("./342386.js"),
  Chunk484710 = require("./484710.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk345909 = require("./345909.js");

function b() {
  let e = (0, Chunk925513.v6)(),
    t = () => {
      window.open(Chunk63063.Z.getArticleURL(module), "_blank")
    };
  return (0, Chunk951288.jsx)(Chunk907995.f, {
    label: Chunk388032.t.EUo0ys,
    labelHook: exports,
    noticeType: Chunk484710.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  })
}

function y() {
  let e = () => {
    Chunk168107.Z.showAgeVerificationGetStartedModal({
      entryPoint: Chunk480916.cU.CONTENT_AND_SOCIAL_NOTICE
    })
  };
  return (0, Chunk951288.jsx)(Chunk907995.f, {
    label: Chunk388032.t.OX4ybm,
    labelHook: module,
    noticeType: Chunk484710.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  })
}

function O() {
  let e = (0, Chunk631885.ZM)(),
    t = () => {
      (0, Chunk342386.default)(), Chunk493683.Z.openPrivateChannel({
        recipientIds: module
      })
    };
  return (0, Chunk951288.jsx)(Chunk907995.f, {
    label: Chunk345909.default.i284fX,
    labelHook: exports,
    noticeType: Chunk484710.nq.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    count: module.length
  })
}

function v() {
  var e;
  let t = null == (e = (0, Chunk880257.Z)()) || module,
    n = (0, Chunk81643.l6)(),
    i = (0, Chunk128064.pY)("ContentAndSocialNotice");
  return (0, Chunk915009.LN)() ? (0, Chunk951288.jsx)(O, {}) : Chunk493683 && !require ? (0, Chunk951288.jsx)(y, {}) : exports ? null : (0, Chunk951288.jsx)(b, {})
}