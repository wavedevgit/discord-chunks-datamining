/** Chunk was on 91173 **/
/** chunk id: 773276, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk923500 = require("./923500.js"),
  Chunk522664 = require("./522664.js"),
  Chunk247206 = require("./247206.js"),
  Chunk774863 = require("./774863.js"),
  Chunk668058 = require("./668058.js"),
  Chunk160877 = require("./160877.jsx"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    channelId: t,
    messageId: n,
    transitionState: m,
    onClose: f
  } = e, _ = (0, i.e7)([c.Z], () => c.Z.getFpMessageInfo(n)), g = _.attachments.map(e => e.id), h = _.attachments.map(e => e.filename), {
    reportFalsePositive: b,
    isReportFalsePositiveLoading: E
  } = (0, u.$)({
    onSuccess: () => {
      (0, d.s)(f), a.Z.disableFalsePositiveButton(t, n)
    },
    onError: () => {
      (0, l.showToast)((0, l.createToast)(p.intl.string(p.t.R0RpRU), l.ToastType.FAILURE))
    },
    report: () => {
      (0, o.Eq)(t, n, g, h)
    }
  });
  return _.attachments.length > 0 || f(), (0, r.jsx)(d.$, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: E,
    analyticsContext: s.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: b,
    transitionState: m,
    onClose: f
  })
}