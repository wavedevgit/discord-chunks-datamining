/** Chunk was on 72453 **/
n.r(t), n.d(t, {
  default: () => m
});
var r = n(200651);
n(192379);
var i = n(399606),
  a = n(481060),
  o = n(923500),
  l = n(522664),
  s = n(247206),
  c = n(774863),
  d = n(668058),
  u = n(160877),
  p = n(388032);

function m(e) {
  let {
    channelId: t,
    messageId: n,
    transitionState: m,
    onClose: f
  } = e, h = (0, i.e7)([c.Z], () => c.Z.getFpMessageInfo(n)), g = h.attachments.map(e => e.id), _ = h.attachments.map(e => e.filename), {
    reportFalsePositive: b,
    isReportFalsePositiveLoading: v
  } = (0, d.$)({
    onSuccess: () => {
      (0, u.s)(f), o.Z.disableFalsePositiveButton(t, n)
    },
    onError: () => {
      (0, a.showToast)((0, a.createToast)(p.NW.string(p.t.R0RpRU), a.ToastType.FAILURE))
    },
    report: () => {
      (0, l.Eq)(t, n, g, _)
    }
  });
  return h.attachments.length > 0 || f(), (0, r.jsx)(u.$, {
    messageId: n,
    channelId: t,
    isReportFalsePositiveLoading: v,
    analyticsContext: s.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
    onConfirmPress: b,
    transitionState: m,
    onClose: f
  })
}