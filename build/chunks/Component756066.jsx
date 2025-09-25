/** Chunk was on 64523 **/
/** chunk id: 756066, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk587431 = require("./587431.jsx"),
  Chunk539290 = require("./539290.jsx"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let t, {
    resubmittingEnableRequest: n,
    resubmissionError: a,
    createEnableRequest: o,
    requestRejectedNoticeText: c,
    reapplyNoticeText: d,
    isApplicationPending: u
  } = e;
  if (null != a) return (0, r.jsx)(i.Z, {
    children: a.getAnyErrorMessage()
  });
  let m = null;
  return u ? m = s.intl.string(s.t.OrkTBg) : null != c ? m = c : null != d && (m = d, t = s.intl.string(s.t["YKw/NT"])), null != m ? (0, r.jsx)(l.Z, {
    notice: m,
    ctaLabel: t,
    ctaLoading: n,
    onClick: o
  }) : null
}