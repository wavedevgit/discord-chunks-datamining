/** Chunk was on 30243 **/
/** chunk id: 568248, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./953529.js"), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk95398 = require("./95398.jsx"),
  Chunk936141 = require("./936141.js"),
  Chunk768494 = require("./768494.js"),
  Chunk499376 = require("./499376.js"),
  Chunk128854 = require("./128854.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk630388 = require("./630388.js"),
  Chunk295435 = require("./295435.jsx"),
  Chunk217702 = require("./217702.js"),
  Chunk156259 = require("./156259.js");

function y(e) {
  let {
    media: t,
    spoiler: r,
    description: i
  } = e, y = (0, u.pU)(t), j = (0, f.yE)(t.flags, s.hR.IS_ANIMATED), {
    gifAutoPlay: g
  } = (0, d.c)(), [h, v] = l.useState(r), P = e => {
    var r, l;
    return "IMAGE" !== y ? (0, n.jsx)(b.S, {
      className: O.imgContainer,
      media: t,
      placeholderWidth: 85,
      placeholderHeight: 85,
      maxWidth: 85,
      maxHeight: 85,
      hiddenSpoilers: e
    }) : (0, n.jsx)(p.Yi, {
      containerClassName: o()(O.imgContainer, {
        [O.hiddenSpoiler]: e
      }),
      imageClassName: O.img,
      src: t.proxyUrl,
      alt: i,
      original: t.url,
      placeholder: t.placeholder,
      placeholderVersion: t.placeholderVersion,
      width: null != (r = t.width) ? r : 0,
      height: null != (l = t.height) ? l : 0,
      hiddenSpoilers: e,
      maxWidth: 170,
      maxHeight: 170,
      minWidth: 85,
      minHeight: 85,
      autoPlay: g && !e,
      mediaLayoutType: m.hV.MOSAIC,
      reducedSizeAltTextButton: true,
      srcIsAnimated: j
    })
  };
  return r ? (0, n.jsx)(a.ZP, {
    type: a.ZP.Types.ATTACHMENT,
    reason: c.wk.SPOILER,
    obscured: h,
    onToggleObscurity: () => v(e => !e),
    children: e => P(e)
  }) : P(false)
}