/** Chunk was on 384 **/
/** chunk id: 756066, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let t, {
    resubmittingEnableRequest: n,
    resubmissionError: s,
    createEnableRequest: a,
    requestRejectedNoticeText: o,
    reapplyNoticeText: c,
    isApplicationPending: u
  } = e;
  if (null != s) return (0, r.jsx)(i.M14, {
    type: "critical",
    children: s.getAnyErrorMessage()
  });
  let d = null;
  return u ? d = l.intl.string(l.t.OrkTBn) : null != o ? d = o : null != c && (d = c, t = l.intl.string(l.t["YKw/NQ"])), null != d ? (0, r.jsx)(i.Wn, {
    messageType: i.QYI.WARNING,
    action: (0, r.jsx)(i.zxk, {
      variant: "overlay-secondary",
      text: t,
      onClick: a,
      loading: n
    }),
    children: d
  }) : null
}