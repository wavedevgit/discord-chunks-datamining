/** Chunk was on 48799 **/
n.d(t, {
  Z: () => f
});
var i = n(200651),
  r = n(192379),
  o = n(512722),
  s = n.n(o),
  l = n(399606),
  a = n(822183),
  c = n(673125),
  d = n(90753),
  u = n(594174),
  h = n(18892);

function p(e) {
  let {
    streamerId: t,
    channelId: n
  } = e, o = r.useRef(null), a = (0, l.e7)([u.default], () => u.default.getCurrentUser());
  return s()(null != a, "user cannot be null"), (0, d.Z)(o, a, t, n), (0, i.jsx)("canvas", {
    className: h.canvas,
    ref: o
  })
}

function f(e) {
  let {
    guildId: t,
    channelId: n,
    streamerId: r
  } = e, {
    isSharedCanvasEnabled: o
  } = a.Z.useExperiment({
    guildId: t,
    location: "f0d1b1_1"
  }, {
    autoTrackExposure: !0
  }), s = (0, l.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
  return o && s ? (0, i.jsx)(p, {
    guildId: t,
    channelId: n,
    streamerId: r
  }) : null
}