/** Chunk was on web.js **/
/** chunk id: 568248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./953529.js"), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk95015 = require("./95015.js"),
  Chunk936141 = require("./936141.js"),
  Chunk768494 = require("./768494.js"),
  Chunk499376 = require("./499376.js"),
  Chunk128854 = require("./128854.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk411405 = require("./411405.jsx"),
  Chunk295435 = require("./295435.jsx"),
  Chunk217702 = require("./217702.js"),
  Chunk156259 = require("./156259.js");
let g = 85;

function E(e) {
  let {
    media: t,
    spoiler: n,
    description: o
  } = e, E = (0, u.pU)(t), b = (0, s.yE)(t.flags, c.hR.IS_ANIMATED), {
    gifAutoPlay: y
  } = (0, d.c)(), [O, v] = i.useState(n), S = e => {
    var n, i;
    return "IMAGE" !== E ? (0, r.jsx)(_.S, {
      className: h.imgContainer,
      media: t,
      placeholderWidth: g,
      placeholderHeight: g,
      maxWidth: g,
      maxHeight: g,
      hiddenSpoilers: e
    }) : (0, r.jsx)(f.Yi, {
      containerClassName: a()(h.imgContainer, {
        [h.hiddenSpoiler]: e
      }),
      imageClassName: h.img,
      src: t.proxyUrl,
      alt: o,
      original: t.url,
      placeholder: t.placeholder,
      placeholderVersion: t.placeholderVersion,
      width: null != (n = t.width) ? n : 0,
      height: null != (i = t.height) ? i : 0,
      hiddenSpoilers: e,
      maxWidth: 2 * g,
      maxHeight: 2 * g,
      minWidth: g,
      minHeight: g,
      autoPlay: y && !e,
      mediaLayoutType: m.hV.MOSAIC,
      reducedSizeAltTextButton: true,
      srcIsAnimated: b
    })
  };
  return n ? (0, r.jsx)(p.ZP, {
    type: p.ZP.Types.ATTACHMENT,
    reason: l.wk.SPOILER,
    obscured: O,
    onToggleObscurity: () => v(e => !e),
    children: e => S(e)
  }) : S(false)
}