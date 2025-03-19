/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(399606),
  l = n(481060),
  o = n(385499),
  c = n(246946),
  A = n(480276);

function d(e) {
  let {
    className: t,
    avatarURL: n,
    name: i,
    bot: d,
    verifiedBot: u,
    userTag: g
  } = e, f = (0, a.e7)([c.Z], () => c.Z.hidePersonalInformation);
  return (0, r.jsxs)("div", {
    className: s()(A.container, t),
    children: [(0, r.jsx)(l.qEK, {
      className: A.avatar,
      src: n,
      size: l.EFr.SIZE_24,
      "aria-label": i
    }), (0, r.jsxs)("div", {
      className: A.textContainer,
      children: [(0, r.jsx)(l.Text, {
        tag: "span",
        className: A.name,
        color: "header-primary",
        variant: "text-sm/semibold",
        children: i
      }), d ? (0, r.jsx)(o.Z, {
        className: A.botTag,
        verified: u
      }) : null, f ? null : (0, r.jsx)(l.Text, {
        tag: "span",
        color: "interactive-normal",
        className: A.userTag,
        variant: "text-sm/normal",
        children: g
      })]
    })]
  })
}