/** Chunk was on 37220 **/
/** chunk id: 788679, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk522664 = require("./522664.js"),
  Chunk247206 = require("./247206.js"),
  Chunk668058 = require("./668058.js"),
  Chunk112554 = require("./112554.js"),
  Chunk160877 = require("./160877.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    channelId: t,
    messageId: n,
    mediaItemUrl: d,
    embedId: f,
    transitionState: g,
    onClose: b
  } = e, p = (0, c.v)(t, n, d), O = (0, c.Z)(t, n, f), {
    reportFalsePositive: y,
    isReportFalsePositiveLoading: m
  } = (0, a.$)({
    onSuccess: () => (0, s.s)(b),
    onError: () => {
      (0, i.showToast)((0, i.createToast)(u.intl.string(u.t.R0RpRX), i.ToastType.FAILURE))
    },
    report: () => {
      (0, l.Uj)(t, n, p.map(e => e.id), O.map(e => e.id))
    }
  });
  return p.length > 0 || O.length > 0 || b(), (0, r.jsx)(s.$, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: m,
    analyticsContext: o.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
    onConfirmPress: y,
    attachmentPreview: 1 === p.length && 0 === O.length ? p[0] : true,
    embedPreview: 1 === O.length && 0 === p.length ? O[0] : true,
    transitionState: g,
    onClose: b
  })
}