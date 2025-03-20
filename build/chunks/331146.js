/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  E: () => g
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(768581),
  o = n(723047),
  A = n(570533),
  c = n(388032),
  d = n(534139);

function u(e) {
  let {
    emoji: t,
    onRemoveEmoji: n,
    disabled: i = !1
  } = e, o = l.ZP.getEmojiURL({
    id: t.id,
    animated: t.animated,
    size: 32
  });
  return (0, r.jsxs)("div", {
    className: s()(d.emojiRow, {
      [d.disabled]: i
    }),
    children: [(0, r.jsx)("img", {
      className: d.emojiImage,
      src: o,
      alt: t.name
    }), (0, r.jsx)(a.Text, {
      color: "header-primary",
      variant: "text-md/medium",
      className: d.emojiAlias,
      children: t.name
    }), (0, r.jsx)(a.zxk, {
      look: a.zxk.Looks.BLANK,
      size: a.zxk.Sizes.ICON,
      className: d.deleteButton,
      onClick: () => n(t),
      "aria-label": c.NW.string(c.t.dVS92d),
      disabled: i,
      children: (0, r.jsx)(a.XHJ, {
        size: "md",
        color: "currentColor",
        className: d.trashIcon
      })
    })]
  })
}

function g(e) {
  let {
    tierEmojiIds: t,
    guildId: n,
    onRemoveEmoji: i
  } = e, s = (0, A.Z)(n), a = null != t ? s.filter(e => t.has(e.id)) : [], l = (0, o.mY)();
  return (0, r.jsx)("div", {
    className: d.container,
    children: a.map(e => (0, r.jsx)(u, {
      emoji: e,
      onRemoveEmoji: () => i(e),
      disabled: l
    }, e.id))
  })
}