/** Chunk was on 57539 **/
n.r(e), n.d(e, {
  default: () => h
});
var a = n(255367);
n(73800);
var i = n(399606),
  o = n(481060),
  r = n(923500),
  s = n(522664),
  l = n(247206),
  c = n(774863),
  d = n(668058),
  u = n(160877),
  m = n(388032);

function h(t) {
  let {
    channelId: e,
    messageId: n,
    transitionState: h,
    onClose: x
  } = t, _ = (0, i.e7)([c.Z], () => c.Z.getFpMessageInfo(n)), b = _.attachments.map(t => t.id), p = _.attachments.map(t => t.filename), {
    reportFalsePositive: f,
    isReportFalsePositiveLoading: v
  } = (0, d.$)({
    onSuccess: () => {
      (0, u.s)(x), r.Z.disableFalsePositiveButton(e, n)
    },
    onError: () => {
      (0, o.showToast)((0, o.createToast)(m.intl.string(m.t.R0RpRU), o.ToastType.FAILURE))
    },
    report: () => {
      (0, s.Eq)(e, n, b, p)
    }
  });
  return _.attachments.length > 0 || x(), (0, a.jsx)(u.$, {
    messageId: n,
    channelId: e,
    isReportFalsePositiveLoading: v,
    analyticsContext: l.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: f,
    transitionState: h,
    onClose: x
  })
}