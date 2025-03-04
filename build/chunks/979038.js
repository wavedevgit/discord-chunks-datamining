/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => m
});
var r = n(200651);
n(192379);
var i = n(620662),
  o = n(841784),
  a = n(834353),
  s = n(802856),
  l = n(420660),
  c = n(374129),
  u = n(639351),
  d = n(103479),
  f = n(238607),
  _ = n(414402),
  p = n(934393),
  h = n(715547),
  g = n(981631);

function m(e) {
  let {
    user: t,
    activity: n,
    onAction: m,
    onClose: E
  } = e;
  return (0, s.Z)(n) ? (0, r.jsx)(p.Z, {
    platformType: g.ABu.XBOX,
    icon: () => (0, r.jsx)(u.Z, {}),
    onAction: m
  }) : (0, a.Z)(n) ? (0, r.jsx)(p.Z, {
    platformType: g.ABu.PLAYSTATION,
    icon: () => (0, r.jsx)(c.Z, {}),
    onAction: m
  }) : (0, l.Z)(n) ? (0, r.jsx)(h.Z, {
    activity: n,
    onAction: m
  }) : (0, i.Z)(n, g.xjy.JOIN) || (0, o.Z)(n) ? (0, r.jsx)(f.Z, {
    user: t,
    activity: n,
    onAction: m,
    onClose: E
  }) : (null == n ? void 0 : n.buttons) != null && (null == n ? void 0 : n.buttons.length) >= 1 ? (0, r.jsx)(d.Z, {
    user: t,
    activity: n,
    onAction: m
  }) : (0, i.Z)(n, g.xjy.INSTANCE) ? (0, r.jsx)(_.Z, {
    user: t,
    activity: n,
    onAction: m
  }) : null
}