/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  a = n(607070),
  s = n(821982),
  l = n(594174),
  c = n(643617),
  u = n(328756),
  d = n(131812);
let f = 1.2,
  _ = .321;

function p(e) {
  let {
    maxRewardImageSrc: t,
    claimableRewards: n,
    size: p
  } = e, h = (0, i.e7)([l.default], () => l.default.getCurrentUser()), g = (0, i.e7)([a.Z], () => a.Z.useReducedMotion), m = (0, o.pxk)(p), E = {
    height: m * f
  };
  return n.length > 2 ? (0, r.jsx)("img", {
    alt: "",
    src: t,
    style: E
  }) : (0, r.jsxs)("div", {
    className: c.container,
    children: [(1 === n.length || 2 === n.length) && (0, r.jsx)(o.Xo$, {
      "aria-label": null == h ? void 0 : h.username,
      size: p,
      className: c.firstPromotionalAvatar,
      src: 1 === n.length ? null == h ? void 0 : h.getAvatarURL(void 0, (0, o.pxk)(p), !g) : d,
      avatarDecoration: (0, s.Z)(n[0].assetId, p, !g)
    }), 2 === n.length && (0, r.jsx)("div", {
      style: {
        marginRight: -Math.round(m * _)
      },
      children: (0, r.jsx)(o.Xo$, {
        "aria-label": null == h ? void 0 : h.username,
        size: p,
        src: u,
        avatarDecoration: (0, s.Z)(n[1].assetId, p, !g)
      })
    })]
  })
}