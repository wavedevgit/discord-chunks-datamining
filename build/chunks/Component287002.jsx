/** Chunk was on 92917 **/
/** chunk id: 287002, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => m
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

function m(e) {
  let {
    channelId: t,
    messageId: n,
    transitionState: m,
    onClose: f
  } = e, g = (0, i.bG)([c.A], () => c.A.getFpMessageInfo(n)), h = g.attachments.map(e => e.id), _ = g.attachments.map(e => e.filename), {
    reportFalsePositive: b,
    isReportFalsePositiveLoading: A
  } = (0, u.d)({
    onSuccess: () => {
      (0, d.o)(f), a.A.disableFalsePositiveButton(t, n)
    },
    onError: () => {
      (0, l.showToast)((0, l.createToast)(p.intl.string(p.t.R0RpRX), l.ToastType.FAILURE))
    },
    report: () => {
      (0, s.wV)(t, n, h, _)
    }
  });
  return g.attachments.length > 0 || f(), (0, r.jsx)(d.k, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: A,
    analyticsContext: o.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: b,
    transitionState: m,
    onClose: f
  })
}