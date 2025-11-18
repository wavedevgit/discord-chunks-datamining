/** Chunk was on 32923 **/
/** chunk id: 756066, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let t, {
    resubmittingEnableRequest: n,
    resubmissionError: a,
    createEnableRequest: s,
    requestRejectedNoticeText: o,
    reapplyNoticeText: c,
    isApplicationPending: d
  } = e;
  if (null != a) return (0, r.jsx)(i.M14, {
    type: "critical",
    children: a.getAnyErrorMessage()
  });
  let u = null;
  return d ? u = l.intl.string(l.t.OrkTBn) : null != o ? u = o : null != c && (u = c, t = l.intl.string(l.t["YKw/NQ"])), null != u ? (0, r.jsx)(i.Wn, {
    messageType: i.QYI.WARNING,
    action: (0, r.jsx)(i.zxk, {
      variant: "overlay-secondary",
      text: t,
      onClick: s,
      loading: n
    }),
    children: u
  }) : null
}