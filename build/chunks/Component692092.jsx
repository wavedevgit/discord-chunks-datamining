/** Chunk was on web.js **/
/** chunk id: 692092, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk7584 = require("./7584.js"),
  Chunk336615 = require("./336615.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk690521 = require("./690521.js"),
  Chunk307731 = require("./307731.js"),
  Chunk803386 = require("./803386.js");
let m = l().memoize(e => "".concat(e * _.he.NonDiversityPerRow, "px ").concat(e * Math.ceil(u.Ay.numNonDiversitySprites / _.he.NonDiversityPerRow), "px")),
  g = l().memoize(e => "".concat(e * _.he.DiversityPerRow, "px ").concat(e * Math.ceil(u.Ay.numDiversitySprites / _.he.DiversityPerRow), "px")),
  E = (e, t, r) => {
    let i, a, s;
    if (!e.useSpriteSheet) return;
    let o = null != e.index ? e.index : 0;
    e.hasDiversity ? (i = n(28135)("./spritesheet-".concat(t, "-").concat(r, ".png")), a = g(r), s = _.he.DiversityPerRow) : (i = n(883740)("./spritesheet-emoji-".concat(r, ".png")), a = m(r), s = _.he.NonDiversityPerRow);
    let l = -o % s * r,
      c = -Math.floor(o / s) * r;
    return {
      backgroundImage: "url('".concat(i, "')"),
      backgroundPosition: "".concat(l, "px ").concat(c, "px"),
      backgroundSize: a,
      height: r,
      width: r
    }
  },
  y = Chunk64700.memo(function(e) {
    let {
      emoji: t,
      size: n,
      surrogateCodePoint: a,
      allowAnimatedEmoji: o,
      "aria-label": l,
      isLocked: u
    } = e, m = (() => {
      if (!t.useSpriteSheet) {
        var e;
        let i = null == t.id ? t.url : f.Ay.getEmojiURL({
          id: t.id,
          animated: o && t.animated,
          size: _.L4
        });
        return null != i ? (0, r.jsx)(d.A, {
          className: h.N1,
          "aria-label": l,
          src: i,
          size: n,
          alt: null != (e = (0, p.N)(t)) ? e : ""
        }) : null
      }
      return (0, r.jsx)("div", {
        className: s()(h.xA, {
          [h.N1]: u
        }),
        style: E(t, a, n),
        children: (0, r.jsx)(c.AC4, {
          children: l
        })
      })
    })();
    return (0, r.jsxs)(i.Fragment, {
      children: [m, u ? (0, r.jsx)("div", {
        className: h.iD,
        children: (0, r.jsx)(c.XAi, {
          size: "xs",
          color: "currentColor",
          className: h.fi
        })
      }) : null]
    })
  })