/** Chunk was on web.js **/
/** chunk id: 288406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk633302 = require("./633302.js"),
  Chunk334920 = require("./334920.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk185923 = require("./185923.js"),
  Chunk211581 = require("./211581.js");
let h = l().memoize(e => "".concat(e * _.DC.NonDiversityPerRow, "px ").concat(e * Math.ceil(u.ZP.numNonDiversitySprites / _.DC.NonDiversityPerRow), "px")),
  g = l().memoize(e => "".concat(e * _.DC.DiversityPerRow, "px ").concat(e * Math.ceil(u.ZP.numDiversitySprites / _.DC.DiversityPerRow), "px")),
  E = (e, t, r) => {
    let i, a, o;
    if (!e.useSpriteSheet) return;
    let s = null != e.index ? e.index : 0;
    e.hasDiversity ? (i = n(735800)("./spritesheet-".concat(t, "-").concat(r, ".png")), a = g(r), o = _.DC.DiversityPerRow) : (i = n(604901)("./spritesheet-emoji-".concat(r, ".png")), a = h(r), o = _.DC.NonDiversityPerRow);
    let l = -s % o * r,
      c = -Math.floor(s / o) * r;
    return {
      backgroundImage: "url('".concat(i, "')"),
      backgroundPosition: "".concat(l, "px ").concat(c, "px"),
      backgroundSize: a,
      height: r,
      width: r
    }
  },
  b = Chunk473749.memo(function(e) {
    let {
      emoji: t,
      size: n,
      surrogateCodePoint: a,
      allowAnimatedEmoji: s,
      "aria-label": l,
      isLocked: u
    } = e, h = (() => {
      if (!t.useSpriteSheet) {
        var e;
        let i = null == t.id ? t.url : f.ZP.getEmojiURL({
          id: t.id,
          animated: s && t.animated,
          size: _.$U
        });
        return null != i ? (0, r.jsx)(d.Z, {
          className: m.lockedEmoji,
          "aria-label": l,
          src: i,
          size: n,
          alt: null != (e = (0, p.nY)(t)) ? e : ""
        }) : null
      }
      return (0, r.jsx)("div", {
        className: o()(m.emojiSpriteImage, {
          [m.lockedEmoji]: u
        }),
        style: E(t, a, n),
        children: (0, r.jsx)(c.nn4, {
          children: l
        })
      })
    })();
    return (0, r.jsxs)(i.Fragment, {
      children: [h, u ? (0, r.jsx)("div", {
        className: m.emojiLockIconContainer,
        children: (0, r.jsx)(c.mBM, {
          size: "xs",
          color: "currentColor",
          className: m.emojiLockIcon
        })
      }) : null]
    })
  })