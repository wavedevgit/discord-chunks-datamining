/** Chunk was on 66009 **/
/** chunk id: 287002, original params: t,e,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => I
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

function I(t) {
  let {
    channelId: e,
    messageId: n,
    transitionState: I,
    onClose: v
  } = t, E = (0, l.bG)([c.A], () => c.A.getFpMessageInfo(n)), m = E.attachments.map(t => t.id), p = E.attachments.map(t => t.filename), {
    reportFalsePositive: f,
    isReportFalsePositiveLoading: x
  } = (0, u.d)({
    onSuccess: () => {
      (0, d.o)(v), r.A.disableFalsePositiveButton(e, n)
    },
    onError: () => {
      (0, a.showToast)((0, a.createToast)(_.intl.string(_.t.R0RpRX), a.ToastType.FAILURE))
    },
    report: () => {
      (0, o.wV)(e, n, m, p)
    }
  });
  return E.attachments.length > 0 || v(), (0, i.jsx)(d.k, {
    messageId: n,
    channelId: e,
    isReportFalsePositiveLoading: x,
    analyticsContext: s.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: f,
    transitionState: I,
    onClose: v
  })
}