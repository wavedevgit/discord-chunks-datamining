/** Chunk was on 74329 **/
n.d(t, {
  h: () => s
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(671533),
  l = n(981631),
  a = n(951058);

function s(e) {
  let {
    buttonText: t,
    onGoBack: n,
    onDismiss: s,
    showCloseButton: c
  } = e;
  return (0, r.jsxs)(i.qXd, {
    className: a.backNotice,
    children: [c && (0, r.jsx)(i.RyX, {
      onClick: s,
      noticeType: l.kVF.BACK_TO_PREVIOUS_SCREEN
    }), (0, r.jsxs)(i.zxk, {
      className: a.backButton,
      innerClassName: a.backButtonInner,
      look: i.zxk.Looks.OUTLINED,
      color: i.zxk.Colors.WHITE,
      size: i.zxk.Sizes.NONE,
      onClick: n,
      children: [(0, r.jsx)(o.Z, {
        width: 16,
        height: 16,
        direction: o.Z.Directions.LEFT,
        className: a.__invalid_backArrow
      }), t]
    })]
  })
}