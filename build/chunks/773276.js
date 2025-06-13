/** Chunk was on 57539 **/
n.r(e), n.d(e, {
  default: () => x
});
var a = n(255367);
n(73800);
var i = n(399606),
  o = n(481060),
  s = n(923500),
  r = n(522664),
  l = n(247206),
  c = n(774863),
  d = n(668058),
  u = n(160877),
  m = n(388032);

function x(t) {
  let {
    channelId: e,
    messageId: n,
    transitionState: x,
    onClose: h
  } = t, _ = (0, i.e7)([c.Z], () => c.Z.getFpMessageInfo(n)), p = _.attachments.map(t => t.id), b = _.attachments.map(t => t.filename), {
    reportFalsePositive: E,
    isReportFalsePositiveLoading: f
  } = (0, d.$)({
    onSuccess: () => {
      (0, u.s)(h), s.Z.disableFalsePositiveButton(e, n)
    },
    onError: () => {
      (0, o.showToast)((0, o.createToast)(m.intl.string(m.t.R0RpRU), o.ToastType.FAILURE))
    },
    report: () => {
      (0, r.Eq)(e, n, p, b)
    }
  });
  return _.attachments.length > 0 || h(), (0, a.jsx)(u.$, {
    messageId: n,
    channelId: e,
    isReportFalsePositiveLoading: f,
    analyticsContext: l.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: E,
    transitionState: x,
    onClose: h
  })
}