/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => E
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(392711),
  l = n.n(s),
  c = n(481060),
  u = n(633302),
  d = n(334920),
  f = n(768581),
  p = n(185923),
  _ = n(329779);
let h = l().memoize(e => "".concat(e * p.DC.NonDiversityPerRow, "px ").concat(e * Math.ceil(u.ZP.numNonDiversitySprites / p.DC.NonDiversityPerRow), "px")),
  m = l().memoize(e => "".concat(e * p.DC.DiversityPerRow, "px ").concat(e * Math.ceil(u.ZP.numDiversitySprites / p.DC.DiversityPerRow), "px")),
  g = (e, t, r) => {
    let i, o, a;
    if (!e.useSpriteSheet) return;
    let s = null != e.index ? e.index : 0;
    e.hasDiversity ? (i = n(735800)("./spritesheet-".concat(t, "-").concat(r, ".png")), o = m(r), a = p.DC.DiversityPerRow) : (i = n(604901)("./spritesheet-emoji-".concat(r, ".png")), o = h(r), a = p.DC.NonDiversityPerRow);
    let l = -s % a * r,
      c = -Math.floor(s / a) * r;
    return {
      backgroundImage: "url('".concat(i, "')"),
      backgroundPosition: "".concat(l, "px ").concat(c, "px"),
      backgroundSize: o,
      height: r,
      width: r
    }
  },
  E = i.memo(function(e) {
    let {
      emoji: t,
      size: n,
      surrogateCodePoint: o,
      allowAnimatedEmoji: s,
      "aria-label": l,
      isLocked: u
    } = e, h = (() => {
      if (!t.useSpriteSheet) {
        var e;
        let i = null == t.id ? t.url : f.ZP.getEmojiURL({
          id: t.id,
          animated: s && t.animated,
          size: p.$U
        });
        return null != i ? (0, r.jsx)(d.Z, {
          className: _.lockedEmoji,
          "aria-label": l,
          src: i,
          size: n,
          alt: null !== (e = t.allNamesString) && void 0 !== e ? e : ""
        }) : null
      }
      return (0, r.jsx)("div", {
        className: a()(_.emojiSpriteImage, {
          [_.lockedEmoji]: u
        }),
        style: g(t, o, n),
        children: (0, r.jsx)(c.nn4, {
          children: l
        })
      })
    })();
    return (0, r.jsxs)(i.Fragment, {
      children: [h, u ? (0, r.jsx)("div", {
        className: _.emojiLockIconContainer,
        children: (0, r.jsx)(c.mBM, {
          size: "xs",
          color: "currentColor",
          className: _.emojiLockIcon
        })
      }) : null]
    })
  })