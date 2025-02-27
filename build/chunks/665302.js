/** Chunk was on 49750 **/
n.d(t, {
  h: () => a
});
var r = n(200651);
n(192379);
var i = n(481060),
  l = n(671533),
  o = n(981631),
  s = n(951058);

function a(e) {
  let {
    buttonText: t,
    onGoBack: n,
    onDismiss: a,
    showCloseButton: c
  } = e;
  return (0, r.jsxs)(i.qXd, {
    className: s.backNotice,
    children: [c && (0, r.jsx)(i.RyX, {
      onClick: a,
      noticeType: o.kVF.BACK_TO_PREVIOUS_SCREEN
    }), (0, r.jsxs)(i.zxk, {
      className: s.backButton,
      innerClassName: s.backButtonInner,
      look: i.zxk.Looks.OUTLINED,
      color: i.zxk.Colors.WHITE,
      size: i.zxk.Sizes.NONE,
      onClick: n,
      children: [(0, r.jsx)(l.Z, {
        width: 16,
        height: 16,
        direction: l.Z.Directions.LEFT,
        className: s.__invalid_backArrow
      }), t]
    })]
  })
}