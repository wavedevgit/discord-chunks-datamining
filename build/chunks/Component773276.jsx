/** Chunk was on 57539 **/
/** chunk id: 773276, original params: t,e,n (module,exports,require) **/
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

function m(t) {
  let {
    channelId: e,
    messageId: n,
    transitionState: m,
    onClose: I
  } = t, _ = (0, a.e7)([c.Z], () => c.Z.getFpMessageInfo(n)), v = _.attachments.map(t => t.id), E = _.attachments.map(t => t.filename), {
    reportFalsePositive: p,
    isReportFalsePositiveLoading: x
  } = (0, u.$)({
    onSuccess: () => {
      (0, d.s)(I), l.Z.disableFalsePositiveButton(e, n)
    },
    onError: () => {
      (0, o.showToast)((0, o.createToast)(f.intl.string(f.t.R0RpRU), o.ToastType.FAILURE))
    },
    report: () => {
      (0, r.Eq)(e, n, v, E)
    }
  });
  return _.attachments.length > 0 || I(), (0, i.jsx)(d.$, {
    messageId: n,
    channelId: e,
    isReportFalsePositiveLoading: x,
    analyticsContext: s.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: p,
    transitionState: m,
    onClose: I
  })
}