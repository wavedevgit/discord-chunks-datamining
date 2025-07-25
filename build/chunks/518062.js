/** Chunk was on 46062 **/
t.d(n, {
  Z: () => _
}), t(388685);
var r = t(255367);
t(73800);
var o = t(442837),
  i = t(481060),
  l = t(607070),
  a = t(600164),
  c = t(122890),
  s = t(110818),
  p = t(523726);

function _(e) {
  let {
    purchaseState: n,
    currentStep: t,
    onClose: _
  } = e, [u, d] = (0, c.z)({
    purchaseState: n,
    currentStep: t,
    initialScene: s.fe.Scenes.ENTRY,
    purchaseScene: s.fe.Scenes.STARS,
    errorScene: s.fe.Scenes.ERROR,
    successScene: s.fe.Scenes.SUCCESS
  }), f = (0, o.e7)([l.Z], () => l.Z.useReducedMotion);
  return (0, r.jsxs)(i.xBx, {
    align: a.Z.Align.START,
    className: p.header,
    separator: !1,
    children: [(0, r.jsx)(s.fe, {
      className: p.animation,
      nextScene: u,
      onScenePlay: e => d(s.fe.getNextScene(e)),
      pauseWhileUnfocused: !1,
      pause: f
    }), (0, r.jsx)("div", {
      className: p.headerTitle
    }), (0, r.jsx)(i.olH, {
      onClick: _,
      className: p.closeButton
    })]
  })
}