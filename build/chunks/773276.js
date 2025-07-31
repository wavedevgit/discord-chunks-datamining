/** Chunk was on 57539 **/
n.r(e), n.d(e, {
  default: () => f
});
var i = n(255367);
n(73800);
var a = n(399606),
  l = n(481060),
  o = n(923500),
  s = n(522664),
  r = n(247206),
  c = n(774863),
  u = n(668058),
  d = n(160877),
  m = n(388032);

function f(t) {
  let {
    channelId: e,
    messageId: n,
    transitionState: f,
    onClose: p
  } = t, E = (0, a.e7)([c.Z], () => c.Z.getFpMessageInfo(n)), I = E.attachments.map(t => t.id), _ = E.attachments.map(t => t.filename), {
    reportFalsePositive: v,
    isReportFalsePositiveLoading: x
  } = (0, u.$)({
    onSuccess: () => {
      (0, d.s)(p), o.Z.disableFalsePositiveButton(e, n)
    },
    onError: () => {
      (0, l.showToast)((0, l.createToast)(m.intl.string(m.t.R0RpRU), l.ToastType.FAILURE))
    },
    report: () => {
      (0, s.Eq)(e, n, I, _)
    }
  });
  return E.attachments.length > 0 || p(), (0, i.jsx)(d.$, {
    messageId: n,
    channelId: e,
    isReportFalsePositiveLoading: x,
    analyticsContext: r.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: v,
    transitionState: f,
    onClose: p
  })
}