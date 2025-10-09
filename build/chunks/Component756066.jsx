/** Chunk was on 64982 **/
/** chunk id: 756066, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk587431 = require("./587431.jsx"),
  Chunk539290 = require("./539290.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let t, {
    resubmittingEnableRequest: n,
    resubmissionError: s,
    createEnableRequest: o,
    requestRejectedNoticeText: c,
    reapplyNoticeText: d,
    isApplicationPending: u
  } = e;
  if (null != s) return (0, r.jsx)(i.Z, {
    children: s.getAnyErrorMessage()
  });
  let g = null;
  return u ? g = a.intl.string(a.t.OrkTBg) : null != c ? g = c : null != d && (g = d, t = a.intl.string(a.t["YKw/NT"])), null != g ? (0, r.jsx)(l.Z, {
    notice: g,
    ctaLabel: t,
    ctaLoading: n,
    onClick: o
  }) : null
}