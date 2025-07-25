/** Chunk was on 57539 **/
n.r(e), n.d(e, {
  default: () => _
});
var a = n(255367);
n(73800);
var i = n(399606),
  o = n(481060),
  r = n(923500),
  l = n(522664),
  s = n(247206),
  c = n(774863),
  d = n(668058),
  u = n(160877),
  m = n(388032);

function _(t) {
  let {
    channelId: e,
    messageId: n,
    transitionState: _,
    onClose: p
  } = t, x = (0, i.e7)([c.Z], () => c.Z.getFpMessageInfo(n)), f = x.attachments.map(t => t.id), v = x.attachments.map(t => t.filename), {
    reportFalsePositive: h,
    isReportFalsePositiveLoading: E
  } = (0, d.$)({
    onSuccess: () => {
      (0, u.s)(p), r.Z.disableFalsePositiveButton(e, n)
    },
    onError: () => {
      (0, o.showToast)((0, o.createToast)(m.intl.string(m.t.R0RpRU), o.ToastType.FAILURE))
    },
    report: () => {
      (0, l.Eq)(e, n, f, v)
    }
  });
  return x.attachments.length > 0 || p(), (0, a.jsx)(u.$, {
    messageId: n,
    channelId: e,
    isReportFalsePositiveLoading: E,
    analyticsContext: s.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: h,
    transitionState: _,
    onClose: p
  })
}