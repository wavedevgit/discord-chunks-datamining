/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => _
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  a = n(607070),
  s = n(821982),
  l = n(594174),
  c = n(413638),
  u = n(328756),
  d = n(131812);
let f = 1.2,
  p = .321;

function _(e) {
  let {
    maxRewardImageSrc: t,
    claimableRewards: n,
    size: _
  } = e, h = (0, i.e7)([l.default], () => l.default.getCurrentUser()), m = (0, i.e7)([a.Z], () => a.Z.useReducedMotion), g = (0, o.pxk)(_), E = {
    height: g * f
  };
  return n.length > 2 ? (0, r.jsx)("img", {
    alt: "",
    src: t,
    style: E
  }) : (0, r.jsxs)("div", {
    className: c.container,
    children: [(1 === n.length || 2 === n.length) && (0, r.jsx)(o.Xo$, {
      "aria-label": null == h ? void 0 : h.username,
      size: _,
      className: c.firstPromotionalAvatar,
      src: 1 === n.length ? null == h ? void 0 : h.getAvatarURL(void 0, (0, o.pxk)(_), !m) : d,
      avatarDecoration: (0, s.Z)(n[0].assetId, _, !m)
    }), 2 === n.length && (0, r.jsx)("div", {
      style: {
        marginRight: -Math.round(g * p)
      },
      children: (0, r.jsx)(o.Xo$, {
        "aria-label": null == h ? void 0 : h.username,
        size: _,
        src: u,
        avatarDecoration: (0, s.Z)(n[1].assetId, _, !m)
      })
    })]
  })
}