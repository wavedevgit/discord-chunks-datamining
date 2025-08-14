/** Chunk was on web.js **/
/** chunk id: 288406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk633302 = require("./633302.js"),
  Chunk334920 = require("./334920.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk185923 = require("./185923.js"),
  Chunk74066 = require("./74066.js");
let h = l().memoize(e => "".concat(e * _.DC.NonDiversityPerRow, "px ").concat(e * Math.ceil(u.ZP.numNonDiversitySprites / _.DC.NonDiversityPerRow), "px")),
  m = l().memoize(e => "".concat(e * _.DC.DiversityPerRow, "px ").concat(e * Math.ceil(u.ZP.numDiversitySprites / _.DC.DiversityPerRow), "px")),
  g = (e, t, r) => {
    let i, o, a;
    if (!e.useSpriteSheet) return;
    let s = null != e.index ? e.index : 0;
    e.hasDiversity ? (i = n(735800)("./spritesheet-".concat(t, "-").concat(r, ".png")), o = m(r), a = _.DC.DiversityPerRow) : (i = n(604901)("./spritesheet-emoji-".concat(r, ".png")), o = h(r), a = _.DC.NonDiversityPerRow);
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
  E = Chunk73800.memo(function(e) {
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
          size: _.$U
        });
        return null != i ? (0, r.jsx)(d.Z, {
          className: p.lockedEmoji,
          "aria-label": l,
          src: i,
          size: n,
          alt: null != (e = t.allNamesString) ? e : ""
        }) : null
      }
      return (0, r.jsx)("div", {
        className: a()(p.emojiSpriteImage, {
          [p.lockedEmoji]: u
        }),
        style: g(t, o, n),
        children: (0, r.jsx)(c.nn4, {
          children: l
        })
      })
    })();
    return (0, r.jsxs)(i.Fragment, {
      children: [h, u ? (0, r.jsx)("div", {
        className: p.emojiLockIconContainer,
        children: (0, r.jsx)(c.mBM, {
          size: "xs",
          color: "currentColor",
          className: p.emojiLockIcon
        })
      }) : null]
    })
  })