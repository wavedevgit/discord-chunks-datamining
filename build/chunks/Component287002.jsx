/** Chunk was on web.js **/
/** chunk id: 287002, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk104217 = require("./104217.js"),
  Chunk135598 = require("./135598.js"),
  Chunk390248 = require("./390248.js"),
  Chunk900819 = require("./900819.js"),
  Chunk279547 = require("./279547.js"),
  Chunk961997 = require("./961997.jsx"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    channelId: t,
    messageId: n,
    transitionState: p,
    onClose: _
  } = e, h = (0, i.bG)([c.A], () => c.A.getFpMessageInfo(n)), m = h.attachments.map(e => e.id), g = h.attachments.map(e => e.filename), {
    reportFalsePositive: E,
    isReportFalsePositiveLoading: b
  } = (0, u.d)({
    onSuccess: () => {
      (0, d.o)(_), s.A.disableFalsePositiveButton(t, n)
    },
    onError: () => {
      (0, a.showToast)((0, a.createToast)(f.intl.string(f.t.R0RpRX), a.ToastType.FAILURE))
    },
    report: () => {
      (0, o.wV)(t, n, m, g)
    }
  });
  return h.attachments.length > 0 || _(), (0, r.jsx)(d.k, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: b,
    analyticsContext: l.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: E,
    transitionState: p,
    onClose: _
  })
}