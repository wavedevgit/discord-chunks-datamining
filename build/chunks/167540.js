/** Chunk was on 10451 **/
n.d(t, {
  Z: () => N
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  o = n(442837),
  l = n(481060),
  c = n(921801),
  d = n(131951),
  u = n(962100),
  m = n(445817),
  g = n(726985),
  p = n(65154),
  h = n(388032),
  f = n(685786);

function b() {
  return (0, r.jsx)(l.ToO, {
    type: l.sje.PRIMARY,
    title: h.NW.string(h.t.XLw6FB),
    body: h.NW.string(h.t.wVjKGh),
    button: (0, r.jsx)(l.zxk, {
      size: l.zxk.Sizes.SMALL,
      className: f.marginTop20,
      onClick: () => (0, u.y)("Video unsupported browser"),
      children: h.NW.string(h.t.BK8LKy)
    })
  })
}

function N(e) {
  let {
    refreshStyles: t = !1
  } = e, n = (0, o.e7)([d.Z], () => d.Z.supports(p.AN.VIDEO)), [s, u] = i.useState(!1), N = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.F, {
      setting: g.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
      children: (0, r.jsx)(m.Z, {
        previewEnabled: s,
        onEnablePreview: () => u(!0),
        onCancelPreview: () => u(!1)
      })
    }), !n && (0, r.jsx)(b, {})]
  });
  return t ? N : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.y5t, {
      component: (0, r.jsx)(l.vwX, {
        tag: l.RB0.H1,
        className: f.marginBottom20,
        children: h.NW.string(h.t.LKzQSE)
      }),
      children: N
    }), (0, r.jsx)(l.$i$, {
      className: a()(f.marginBottom40, f.marginTop40)
    })]
  })
}