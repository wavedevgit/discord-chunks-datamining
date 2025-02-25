/** Chunk was on 12416 **/
n.d(t, {
  Z: () => d
}), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(442837),
  a = n(963838),
  s = n(37091),
  c = n(388032),
  u = n(451972);

function d(e) {
  let t, {
      channelId: n,
      userId: i
    } = e,
    [d, f] = (0, o.Wu)([s.Z], () => [s.Z.getWaitingHighFive(n, i), s.Z.getCompletedHighFive(n, i)]);
  if (null != f) t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      alt: c.NW.string(c.t.W6HwU1),
      src: (0, a._r)({
        name: f[0],
        id: null,
        animated: !1
      }),
      className: l()(u.completeLeft, u.highFive)
    }), (0, r.jsx)("img", {
      alt: c.NW.string(c.t.W6HwU1),
      src: (0, a._r)({
        name: f[1],
        id: null,
        animated: !1
      }),
      className: l()(u.completeRight, u.highFive)
    })]
  });
  else {
    if (null == d) return null;
    t = (0, r.jsx)("img", {
      alt: c.NW.string(c.t.W6HwU1),
      src: (0, a._r)({
        name: d,
        id: null,
        animated: !1
      }),
      className: l()(u.waiting, u.highFive)
    })
  }
  return (0, r.jsx)("div", {
    className: u.root,
    children: t
  })
}