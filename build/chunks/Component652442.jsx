/** Chunk was on 35270 **/
/** chunk id: 652442, original params: t,e,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => I
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk135598 = require("./135598.js"),
  Chunk390248 = require("./390248.js"),
  Chunk279547 = require("./279547.js"),
  Chunk788322 = require("./788322.js"),
  Chunk961997 = require("./961997.jsx"),
  Chunk985018 = require("./985018.jsx");

function I(t) {
  let {
    channelId: e,
    messageId: n,
    mediaItemUrl: I,
    embedId: c,
    transitionState: u,
    onClose: A
  } = t, C = (0, E.L)(e, n, I), d = (0, E.F)(e, n, c), {
    reportFalsePositive: L,
    isReportFalsePositiveLoading: R
  } = (0, a.d)({
    onSuccess: () => (0, s.o)(A),
    onError: () => {
      (0, i.showToast)((0, i.createToast)(_.intl.string(_.t.R0RpRX), i.ToastType.FAILURE))
    },
    report: () => {
      (0, l.XR)(e, n, C.map(t => t.id), d.map(t => t.id))
    }
  });
  return C.length > 0 || d.length > 0 || A(), (0, r.jsx)(s.k, {
    messageId: n,
    channelId: e,
    isReportFalsePositiveLoading: R,
    analyticsContext: o.SW.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
    onConfirmPress: L,
    attachmentPreview: 1 === C.length && 0 === d.length ? C[0] : true,
    embedPreview: 1 === d.length && 0 === C.length ? d[0] : true,
    transitionState: u,
    onClose: A
  })
}