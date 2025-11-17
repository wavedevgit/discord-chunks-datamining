/** Chunk was on web.js **/
/** chunk id: 773276, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk923500 = require("./923500.js"),
  Chunk522664 = require("./522664.js"),
  Chunk247206 = require("./247206.js"),
  Chunk774863 = require("./774863.js"),
  Chunk668058 = require("./668058.js"),
  Chunk160877 = require("./160877.jsx"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  let {
    channelId: t,
    messageId: n,
    transitionState: _,
    onClose: p
  } = e, h = (0, i.e7)([c.Z], () => c.Z.getFpMessageInfo(n)), m = h.attachments.map(e => e.id), g = h.attachments.map(e => e.filename), {
    reportFalsePositive: E,
    isReportFalsePositiveLoading: b
  } = (0, u.$)({
    onSuccess: () => {
      (0, d.s)(p), o.Z.disableFalsePositiveButton(t, n)
    },
    onError: () => {
      (0, a.showToast)((0, a.createToast)(f.intl.string(f.t.R0RpRX), a.ToastType.FAILURE))
    },
    report: () => {
      (0, s.Eq)(t, n, m, g)
    }
  });
  return h.attachments.length > 0 || p(), (0, r.jsx)(d.$, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: b,
    analyticsContext: l.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: E,
    transitionState: _,
    onClose: p
  })
}