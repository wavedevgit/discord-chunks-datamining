/** Chunk was on web.js **/
/** chunk id: 788679, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
    transitionState: _,
    onClose: p
  } = e, h = (0, l.v)(t, n, d), m = (0, l.Z)(t, n, f), {
    reportFalsePositive: g,
    isReportFalsePositiveLoading: E
  } = (0, s.$)({
    onSuccess: () => (0, c.s)(p),
    onError: () => {
      (0, i.showToast)((0, i.createToast)(u.intl.string(u.t.R0RpRU), i.ToastType.FAILURE))
    },
    report: () => {
      (0, o.Uj)(t, n, h.map(e => e.id), m.map(e => e.id))
    }
  });
  return h.length > 0 || m.length > 0 || p(), (0, r.jsx)(c.$, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: E,
    analyticsContext: a.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
    onConfirmPress: g,
    attachmentPreview: 1 === h.length && 0 === m.length ? h[0] : true,
    embedPreview: 1 === m.length && 0 === h.length ? m[0] : true,
    transitionState: _,
    onClose: p
  })
}