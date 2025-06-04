/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => v
});
var r = n(255367),
  i = n(73800),
  a = n(120356),
  o = n.n(a),
  s = n(442837),
  l = n(780384),
  c = n(481060),
  u = n(570908),
  d = n(204418),
  f = n(359135),
  _ = n(516817),
  p = n(210887),
  h = n(158776),
  m = n(5192),
  g = n(579407),
  E = n(388032),
  b = n(538566),
  y = n(326578),
  O = n(85662);
let v = e => {
  let {
    user: t,
    nameplate: n,
    nameplateData: a,
    className: v,
    innerClassName: I,
    isHighlighted: S,
    showStatus: T,
    showPlaceholderUser: A,
    nameplatePreviewSize: N = "normal",
    isPurchased: C = !1
  } = e, P = (0, s.e7)([p.Z], () => (0, l.wj)(p.Z.theme)), R = null != n ? (0, g.EU)(n) : a, w = (0, s.e7)([h.Z], () => null != t ? h.Z.getStatus(t.id) : c.Skl.ONLINE), D = P ? "#706F74" : "#aaaab2", L = i.useRef(null), x = "large" === N, k = x ? c.EFr.SIZE_48 : c.EFr.SIZE_32;
  return (0, r.jsxs)("div", {
    className: o()(v, b.nameplatePreview, {
      [b.nameplatePurchased]: C && !S,
      [b.large]: x
    }),
    style: {
      color: P ? "white" : "black"
    },
    children: [null != R && (0, r.jsx)(_.Z, {
      nameplate: R,
      hovered: S,
      placement: f.i.PREVIEW,
      content: A ? void 0 : L
    }, null == n ? void 0 : n.id), (0, r.jsxs)("div", {
      className: b.overlayContainer,
      children: [null != t ? (0, r.jsx)("div", {
        className: o()(b.avatarContainer, !A && b.avatarVisible),
        children: (0, r.jsx)(u.Z, {
          ref: L,
          avatar: (0, r.jsx)(d.Z, {
            user: t,
            guildId: null,
            avatarSize: k,
            status: T ? w : void 0,
            "aria-hidden": !0
          }),
          name: m.ZP.getName(null, null, t),
          innerClassName: o()(I, b.avatarWithText)
        })
      }) : null, (0, r.jsx)("div", {
        className: o()(b.avatarContainer, A && b.avatarVisible),
        children: (0, r.jsx)(u.Z, {
          avatar: (0, r.jsx)(c.qEK, {
            src: P ? y : O,
            size: k,
            "aria-label": E.intl.string(E.t.cqpybG),
            status: c.Skl.ONLINE,
            statusColor: D
          }),
          innerClassName: o()(I, b.avatarWithText),
          name: (0, r.jsx)("div", {
            className: o()(b.placeholderUsername, b.placeholderUsernameColor, {
              [b.large]: x
            })
          })
        })
      })]
    })]
  })
}